import {getUserInfo, signOut} from "../../lib/user";

var P = require('../../lib/wxpage')

P('mine/index', {
    comps: [],
    data: {
        userinfo: null
    },
    onSignOut: function () {
        signOut();
        this.setData({
            userinfo: null
        })
        this.$showToast({
            title:'注销成功',
            icon:'success',
            mask:false
        })

    },
    onShow: function () {

        //获取wx用户头像
        let wxUserInfo = wx.getStorageSync('wxUserInfo');
        if (wxUserInfo) {
            this.setData({
                avatarUrl: wxUserInfo['avatarUrl']
            })
        }
        let userinfo = getUserInfo();
        this.setData({
            userinfo
        })
    }
})
