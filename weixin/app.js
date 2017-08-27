import {request} from "./lib/tools"

require('./lib/wxpage').A({
    config: {
        route: '/pages/$page'
    },
    onLaunch: function () {

        //获取微信用户信息
        wx.getUserInfo({
            success: function (res) {
                wx.setStorage({
                    key: "wxUserInfo",
                    data: res.userInfo
                });
            }
        })
        //自动登录
        let remember = wx.getStorageSync('remember');
        console.log(remember);
        if(remember){
            request("signIn", remember).then(
                result => {
                    console.log('自动登录成功');
                    //保存用戶信息
                    wx.setStorage({
                        key: "userinfo",
                        data:result.data
                    });
                },
                reason => {
                    wx.removeStorage({key: 'remember'});
                }
            );
        }
    }
})
