import {Validate, request, md5} from "../../../lib/tools"
import {setUserInfo} from "../../../lib/user"

var P = require('../../../lib/wxpage');
P('signUp/index', {
    comps: [],
    data: {
        step: 1,
        account: '',
        code: '',
        password: '',
        repeatPassword: '',
        signUp: null
    },
    count_down: function (seconds, type) {

        let data = this.data;
        data[type]['nextReq'] = seconds;
        this.setData(data);
        if (seconds <= 0) {
            return;
        }
        setTimeout(() => {
            this.count_down(seconds - 1, type);
        }, 1000)

    },
    sendCode: function (e) {

        //获取验证码
        let {account:tel} = this.data;
        try {
            let params = Validate.check({tel, type: 'signUp'}, [
                ['type', 'require', '短信类型错误', Validate.MUST_VALIDATE],
                ['tel', 'tel', '手机号格式错误', Validate.MUST_VALIDATE]
            ]);
            this.$showToast({
                title: '发送中...',
                icon: 'loading'
            });
            request('sendCode', params).then(data => {


                this.$showToast({
                    title: '发送成功',
                    icon: 'success'
                });

                let signUp = data.data;

                let nextReq = signUp['nextReq'];
                let currentDate = new Date();
                let seconds = parseInt((nextReq - currentDate.getTime()) / 1000);
                //保存验证码
                this.setData({
                    signUp
                });
                setTimeout(() => {

                    this.count_down(seconds, 'signUp');
                }, 500);
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
                let {account, code, signUp} = this.data
                let params = Validate.check({account, code}, [
                    ['code', 'require', '短信验证码错误', Validate.MUST_VALIDATE],
                    ['account', 'tel', '手机号格式错误', Validate.MUST_VALIDATE]
                ]);
                if (!signUp || (md5(params['code']) != signUp['code'])) {
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
                this.$showToast({
                    title: e.message,
                    icon: 'error'
                });
            }
        } else if (step == 2) {


            try {
                let {account, code, password, repeatPassword} = this.data;
                if (password != repeatPassword) {
                    this.$showToast({
                        title: '两次密码不一致',
                        icon: 'error'
                    });
                    return;
                }
                //获取微信用户信息
                let {nickName: truename = '用户' + account, gender: sex = 0, avatarUrl = null} = wx.getStorageSync('wxUserInfo');

                sex = sex == 0 ? null : (sex == 1 ? 'male' : 'female');

                let params = Validate.check({account, code, password, truename, sex, avatarUrl}, [
                    ['sex', 'require', '性别输入错误', Validate.EXISTS_VALIDATE],
                    ['truename', 'require', '姓名输入错误', Validate.EXISTS_VALIDATE],
                    ['password', 'require', '密码不能为空', Validate.MUST_VALIDATE],
                    ['code', 'require', '短信验证码错误', Validate.MUST_VALIDATE],
                    ['account', 'tel', '手机号格式错误', Validate.MUST_VALIDATE]
                ]);
                this.$showToast({
                    title: '注册中...',
                    icon: 'loading'
                });
                request('signUp', params).then(data => {

                    this.$showToast({
                        title: '注册成功',
                        icon: 'success'
                    });
                    setTimeout(() => {
                        wx.switchTab({
                            url: '/pages/mine/index'
                        })
                    }, 1000);
                    //保存登录账号密码
                    wx.setStorage({
                        key: "remember",
                        data: {
                            account,password
                        }
                    });

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
