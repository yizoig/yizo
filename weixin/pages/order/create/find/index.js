import {getUserInfo} from "../../../../lib/user";
import {request, Validate} from "../../../../lib/tools"

var P = require('../../../../lib/wxpage');

P('run_order/create/find/index', {
    comps: [],
    data: {
        capital:0,
        commission: 2,
        demands:[]
    },
    onLoad: function (opt) {
        let data = this.data;
        let userinfo = getUserInfo();
        if (userinfo) {
            data['contact'] = userinfo['nickname'];
            data['number'] = userinfo['account'];
            data['college'] = userinfo['college'];
        }
        this.setData(data)
    },
    changeValue: function (e) {
        let data = this.data;
        data[e.target.dataset.name] = e.detail.value;
        this.setData(data);
    },
    onCreate: function () {

        let params = this.data;

        try {

            params = Validate.check(params, [
                ['title', 'require', '请填写标题', Validate.MUST_VALIDATE],
                ['content', 'require', '请填写描述', Validate.MUST_VALIDATE],
                ['address', 'require', '请填写地址', Validate.MUST_VALIDATE],
                ['capital', 'number', '本金必须是数字', Validate.MUST_VALIDATE],
                ['commission', 'number', '佣金必须是数字', Validate.MUST_VALIDATE],
                ['gender_constraint', ["-1","0","1"], '请勾选性别限制', Validate.MUST_VALIDATE,'in'],
                ['contact', 'require', '请填写联系人', Validate.MUST_VALIDATE],
                ['number', 'tel', '联系电话格式不正确', Validate.MUST_VALIDATE],
            ]);
            params['money'] = parseInt(params['capital']) +','+parseInt(params['commission']);
            params['demands'] = params['demands'].join();
            this.$showToast({
                title: "创建中",
                icon: 'loading'
            });
            request('createFindOrder', params).then(data => {

                this.$showToast({
                    title: "创建成功",
                    icon: 'success'
                });
                this.$back();
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
            return;
        }
    }
})
