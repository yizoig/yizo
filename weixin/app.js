import {request} from "./lib/tools"
import {signOut,saveUserInfo} from './lib/user'
require('./lib/wxpage').A({
    config: {
        route: '/pages/$page'
    },
    onLaunch: function () {

        //获取微信用户信息
        wx.getUserInfo({
            success: function (result) {
                
                let {userInfo} = result;
                //保存头像
                wx.downloadFile({
                    url: userInfo.avatarUrl, //仅为示例，并非真实的资源
                    success: function(res) {
                        //保存头像缓存
                        userInfo.avatar = res.tempFilePath;
                        wx.setStorage({
                            key: "wxUserInfo",
                            data: userInfo
                        });
                    }
                })
               
                
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
                    saveUserInfo(result.data)
                },
                reason => {
                    signOut();
                }
            );
        }else{
            signOut();
        }
    }
})
