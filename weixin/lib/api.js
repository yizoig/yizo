import {host,apis} from "../config/api.js";
import {signOut} from "./user";
import Code from '../config/code.js';
import Detail from '../config/detail.js';




let code ={};
for(let key in Code){
    code[Code[key]] = Detail[key];
}


// console.log(code)
/**
 *
 * @param api 请求的api
 * @param data 参数
 * @param valid 参数验证
 * @returns {Promise}
 */
export function request(api, data,type='normal') {
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
        switch(type){
            case "normal":{
                 //请求数据
                wx.request({
                    url,
                    method: apis[api][0],
                    data: data,
                    header,
                    success,
                    fail
                })
            }
            case "upload":{

                let {filePath,name} = data;
                wx.uploadFile({
                    url,
                    filePath,
                    name,
                    formData,
                    success,
                    fail
                  })
            }
        }
       
    })
}

function success(res) {

    //不在登录界面
    if ([1001,1001,1002,1003].includes(parseInt(res.data.code)) && api != 'signIn') {
        setTimeout(function () {
            signOut();
            wx.navigateTo({
                url: '../../logins/login/login'
            })
        }, 2000);
        reject("用户登录失效,2秒后自动跳转登录界面!");
    }

    if(res.data.code!=0){
        reject(code[res.data.code])
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
}

function fail(err) {
    console.log(err);
    reject("网络不可达");
}