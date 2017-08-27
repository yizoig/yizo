import {request, Validate, md5} from "../../../lib/tools";

var P = require('../../../lib/wxpage');
P('forgotPwd/index', {
    comps: [],
    data: {
        step: 1,
        tel: '',
        code: '',
        password: '',
        repeatPassword: '',
        resetPwd: null
    },
    count_down: function (seconds,type) {

        let data = this.data;
        data[type]['nextReq']= seconds;
        this.setData(data);
        if (seconds <= 0) {
            return;
        }
        setTimeout(() => {
            this.count_down(seconds - 1,type);
        }, 1000)

    },
    sendCode: function (e) {

        let {tel} = this.data;
        try {

            let params = Validate.check({tel, type: 'resetPwd'}, [
                ['type', 'require', '短信类型错误', Validate.MUST_VALIDATE],
                ['tel', 'tel', '手机号格式错误', Validate.MUST_VALIDATE]
            ]);
            request('sendCode', params).then(data => {

                this.setData({
                    resetPwd
                });
                let resetPwd = data.data;

                let nextReq = resetPwd['nextReq'];
                let currentDate = new Date();
                let seconds = parseInt((nextReq - currentDate.getTime()) / 1000);
                //保存验证码
                this.setData({
                    resetPwd
                });
                setTimeout(()=>{
                    this.count_down(seconds,'resetPwd');
                },500);

                this.$showToast({
                    title: '发送成功',
                    icon: 'success'
                });
            }, reson => {
                this.$showToast({
                    title: reson,
                    icon: 'error'
                });
            })
        } catch (e) {
            this.$showToast({
                title: e.message,
                icon: 'error'
            });
        }

    },
    ontextChange: function (e) {
        let data = this.data;
        data[e.target.dataset.name] = e.detail.value;
        this.setData(data);
    },
    // onBack: function () {
    //     this.setData({
    //         step: this.data.step - 1
    //     })
    // },
    onNext: function () {

        let {step} = this.data;
        if (step == 1) {
            try {
                let {tel, code, password, resetPwd} = this.data;
                let params = Validate.check({tel, code}, [
                    ['tel', 'tel', '手机号格式错误', Validate.MUST_VALIDATE],
                    ['code', 'require', '短信验证码错误', Validate.MUST_VALIDATE]
                ]);
                if (!resetPwd || (md5(params['code']) != resetPwd['code'])) {
                    this.$showToast({
                        title: '短信验证码错误',
                        icon: 'error'
                    });
                    return;
                }
                this.setData({
                    step: 2
                })
            } catch (e) {
                wx.showToast({
                    title: e.message
                });
                return;
            }
        } else if (step == 2) {
            try {
                let {tel, code, repeatPassword, password} = this.data;
                if (repeatPassword != password) {
                    this.$showToast({
                        title: '两次密码不一致',
                        icon: 'error'
                    });
                    return;
                }
                let params = Validate.check({tel, code, password}, [
                    ['tel', 'tel', '手机号格式错误', Validate.MUST_VALIDATE],
                    ['code', 'require', '短信验证码错误', Validate.MUST_VALIDATE],
                    ['password', 'require', '短信验证码错误', Validate.MUST_VALIDATE]
                ]);
                params['password'] = md5(params['password']);
                this.$showToast({
                    title: '重置密码中...',
                    icon: 'loading'
                });
                request('resetPwd', params).then(data => {

                    this.$showToast({
                        title: '重置密码成功',
                        icon: 'success'
                    });
                    setTimeout(() => {
                        wx.switchTab({
                            url: '/pages/mine/index'
                        })
                    }, 1000)
                }, reson => {
                    this.$showToast({
                        title: reson,
                        icon: 'error'
                    });
                });
            } catch (e) {
                this.$showToast({
                    title: e.message,
                    icon: 'error'
                });
            }
        }
    }
});
