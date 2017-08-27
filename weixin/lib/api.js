import {host,apis} from "../config/api.js";
import {signOut} from "./user";
/**
 *
 * @param api 请求的api
 * @param data 参数
 * @param valid 参数验证
 * @returns {Promise}
 */
export function request(api, data) {
    return new Promise((resolve, reject) => {

        let token = wx.getStorageSync("access-token");
        let header = {
            'content-type': 'application/json'
        }
        if (token) {
            header['access-token'] = token;
        }
        if (!(api in apis)) {
            reject(api + "：不存在此api");
        }
        let url = host + apis[api][1];
        let arr = url.match(/\/:[a-zA-Z][0-9a-zA-Z]+/g);
        if (data && arr != null) {
            for (let value of arr) {
                if (value.substring(2) in data) {
                    url = url.replace(value, '/' + data[value.substring(2)]);
                    delete data[value.substring(2)];
                }
            }
        }
        //请求数据
        wx.request({
            url,
            method: apis[api][0],
            data: data,
            header,
            success: function (res) {


                //不在登录界面
                if (res.data.status == 401 && api != 'signIn') {
                    setTimeout(function () {
                        signOut();
                        wx.navigateTo({
                            url: '../../logins/login/login'
                        })
                    }, 2000);
                    reject("用户登录失效,2秒后自动跳转登录界面!");
                }
                //服务器异常
                if (res.statusCode == 502 || res.statusCode == 500) {
                    reject("服务器异常");
                }
                //2开头的请求是对的
                if (Math.floor(res.data.status / 100) !== 2) {
                    reject(res.data.detail)
                }

                let keys = Object.keys(res.header);
                if (keys.indexOf("access-token") !== -1) {
                    // wx.showToast({
                    //     title: '保存token',
                    // })
                    let newtoken = res.header['access-token'];
                    wx.setStorage({
                        key: "access-token",
                        data: newtoken
                    })
                }
                if (keys.indexOf("uinfo") !== -1) {
                    wx.setStorage({
                        key: "userinfo",
                        data: res.data.data.info
                    })
                }
                console.log(res.data);
                resolve(res.data);
            },
            fail: function (err) {
                conso.log(err);
                reject("网络不可达");
            }
        })
    })
}

