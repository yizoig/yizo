import {request, Validate} from "../../../lib/tools";
import {setUserInfo} from "../../../lib/user";

var P = require('../../../lib/wxpage')

P('rename/index', {
    comps: [],
    data: {},
    onLoad: function (opts) {

        this.setData({
            id: opts.id,
            cacheName: opts.truename
        });
    },
    ontextChange: function (e) {
        this.setData({
            nickname: e.detail.value
        })
    },
    onRename: function () {

        let {nickname, id} = this.data;
        try {

            let params = Validate.check({nickname, id}, [
                ['nickname', 'require', '姓名不能为空', Validate.MUST_VALIDATE]
            ]);
            this.$showToast({
                title:  '修改中...',
                icon:'loading'

            })
            request('updateUserInfo', params).then(data => {

                setUserInfo({nickname});
                this.$showToast({
                    title:  '修改成功',
                    icon:'success'

                })
                setTimeout(function () {
                    this.$back();
                }.bind(this), 1000)
            }, reason => {

                this.$showToast({
                    title:  reason,
                    icon:'error'
                })
            })
        } catch (e) {

            this.$showToast({
                title:  e.message,
                icon:'error'

            })
        }

    }
})
