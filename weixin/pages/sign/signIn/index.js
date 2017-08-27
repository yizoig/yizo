import {request, Validate, md5} from '../../../lib/tools';

var P = require('../../../lib/wxpage');
P('signIn/index', {
    comps: [],
    data: {
        tel: '',
        password: ''
    },
    ontextChange: function (e) {
        let data = this.data;
        data[e.target.dataset.name] = e.detail.value;
        this.setData(data);
    },
    onSignIn: function () {
        let {tel, password} = this.data;

        try {

            let params = Validate.check({tel, password}, [
                ['tel', 'tel', '手机号格式错误', Validate.MUST_VALIDATE],
                ['password', 'require', '密码不能为空', Validate.MUST_VALIDATE]
            ]);
            params['password'] = md5(params['password']);
            this.$showToast({
                title: "登录中...",
                icon: 'loading'
            });
            request("signIn", params).then(
                data => {

                    wx.setStorage({
                        key: "remember",
                        data: {
                            tel,pwd:params['password']
                        }
                    });
                    //保存数据
                    this.$showToast({
                        title: "登录成功",
                        icon: 'success'
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
