import { signOut } from "./user";
import Code from '../config/code.js';
import Detail from '../config/detail.js';


let code = {};
for (let key in Code) {
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
function request(api, data, type = 'normal', file = {}) {
  return new Promise((resolve, reject) => {

    let token = wx.getStorageSync("access-token");
    let header = {
      'content-type': 'application/json'
    }
    if (token) {
      header['access-token'] = token;
    }
    console.log(api)
    let { url, method='GET' } = api;
    if (!url) {
      reject('不存在此url');
    }
    let arr = url.match(/\/:[a-zA-Z][0-9a-zA-Z]+/g);
    if (data && arr != null) {
      for (let value of arr) {
        if (value.substring(2) in data) {
          url = url.replace(value, '/' + data[value.substring(2)]);
          delete data[value.substring(2)];
        }
      }
    }
    switch (type) {

      case "upload": {

        let { filePath = '', name = '' } = file;
        console.log(filePath, name)
        wx.uploadFile({
          url,
          filePath,
          name,
          formData: data,
          rejectUnauthorized: false,
          success: (res) => {
            try {
              resolve(success(res))
            } catch (e) {
              reject(e);
            }
          },
          fail: (err) => {
            reject(fail(err));
          }
        })
        break;
      }
      case "normal":
      default: {
        //请求数据
        wx.request({
          url,
          method,
          data: data,
          header,
          success: (res) => {
            try {

              resolve(success(res))
            } catch (e) {
              reject(e.message);
            }
          },
          fail: (err) => {
            reject(fail(err));
          }
        })
      }
    }

  })
}
function success(res) {

  //不在登录界面
  if ([1001, 1001, 1002, 1003].includes(parseInt(res.data.code)) && api != 'signIn') {
    setTimeout(function () {
      signOut();
      wx.navigateTo({
        url: '../../logins/login/login'
      })
    }, 2000);
    throw new Error("用户登录失效,2秒后自动跳转登录界面!");
  }

  if (res.data.code != 0) {
    throw new Error(code[res.data.code])
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
  return res.data;
}

function fail(err) {
  console.log(err);
  if (err && err['errMsg'] == "request:fail request:fail") {
    return "连接服务器失败";
  }
  return "网络不可达";
}

export default request;