import {request, Validate} from '../../../lib/tools';

var P = require('../../../lib/wxpage');
P('signIn/index', {
    comps: [],
    data: {
        account: '',
        password: ''
    },
    ontextChange: function (e) {
        let data = this.data;
        data[e.target.dataset.name] = e.detail.value;
        this.setData(data);
    },
    onSignIn: function () {
        let {account, password} = this.data;

        try {

            console.log({account, password})
            let params = Validate.check({account, password}, [
                ['account', 'tel', '手机号格式错误', Validate.MUST_VALIDATE],
                ['password', 'require', '密码不能为空', Validate.MUST_VALIDATE]
            ]);
            this.$showToast({
                title: "登录中...",
                icon: 'loading'
            });
            request("signIn", params).then(
                result => {
                    wx.setStorage({
                        key: "remember",
                        data: {
                            account,
                            password
                        }
                    });
                    //保存数据
                    this.$showToast({
                        title: "登录成功",
                        icon: 'success'
                    });
                    wx.setStorage({
                        key: "userinfo",
                        data:result.data
                    });
                    setTimeout(() => {
                        wx.switchTab({
                            url: '/pages/mine/index'
                        })
                    }, 1000)
                },
                reason => {
                    this.$showToast({
                        title: reason,
                        icon: 'error',
                        mask: true
                    });
                }
            );
        } catch (e) {
            this.$showToast({
                title: e.message,
                icon: 'error'
            });
        }

    }
});
