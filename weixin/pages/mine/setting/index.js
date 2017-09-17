import { request } from "../../../lib/tools"
import { getUserInfo, setUserInfo } from "../../../lib/user";

var P = require('../../../lib/wxpage')

P('setting/index', {
    comps: [],
    data: {
        userinfo: null,
        editor:{
            nickname:false
        }
    },
    onShow: function () {
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
    },

    changeAvatar: function () {

        this.$showToast({
            title: '小程序不支持修改头像哟',
            icon: 'warn'

        })
    },
    edit:function(e){

        let {editor} = this.data;
        editor[e.currentTarget.dataset.type] = true;
        this.setData({
            editor
        })
    },
    
})
