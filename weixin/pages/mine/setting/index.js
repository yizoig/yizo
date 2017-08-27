import {request} from "../../../lib/tools"
import {getUserInfo,setUserInfo} from "../../../lib/user";

var P = require('../../../lib/wxpage')

P('setting/index', {
    comps: [],
    data: {
        userinfo: null
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

    changeAvatar:function () {
        
        this.$showToast({
          title: '小程序不支持修改头像哟',
            icon:'warn'
        
        })
    },
    changeSex: function (e) {
        let that = this;
        wx.showActionSheet({
            itemList: ['男', '女'],
            success: function (res) {
                if ("cancel" in res && res['cancel']) {
                    return;
                }
                let sex = '';
                if (res.tapIndex == 0) {
                    sex = 'male';
                } else if (res.tapIndex == 1) {
                    sex = 'female';
                }
                let userinfo = that.data.userinfo;
                if (userinfo && userinfo['sex'] == sex) {
                    return;
                }
                that.$showToast({
                    title: '正在修改中...',
                    icon:'loading'

                })
                let params = {};
                params['sex'] = sex;
                params['id'] = userinfo['id'];
                request('updateUserInfo', params).then((data) => {

                    setUserInfo({
                        sex
                    });
                    let userinfo = getUserInfo();
                    that.setData({
                        userinfo
                    })
                    that.$showToast({
                        title: '修改成功',
                        icon:'success'

                    })
                }, (reson) => {
                    that.$showToast({
                        title: reson,
                        icon:'error'

                    })
                })

            }
        })
    }
})
