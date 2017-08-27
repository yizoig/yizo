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
        if(remember){
            remember['password'] =remember['pwd'];
            request("signIn", remember).then(
                data => {
                    console.log('自动登录成功');
                },
                reason => {
                    wx.removeStorage({key: 'remember'});
                }
            );
        }
    }
})
