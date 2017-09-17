import { isUserInfoFull, getUserInfo } from "../../../../lib/user";
import { request, getDateDiff, Validate } from "../../../../lib/tools"

var P = require('../../../../lib/wxpage');

P('run_order/detail/find/index', {
    comps: [],
    data: {
        comment: [],
        page: {
            current: 1,
            pageSize: 5
        },
        commentText: '',
        expandShow: false,
        loading: false
    },
    onShow: function () {
        let that = this;
        //请求加载数据
        let userInfo = getUserInfo();
        if (userInfo) {
            switch (userInfo['sex']) {
                case 'female': {
                    userInfo['sex'] = 2;
                    break;
                }
                case 'male': {
                    userInfo['sex'] = 1;
                    break;
                }
            }

        }
        this.setData({
            userInfo
        });
        
    },
    onLoad: function (opt) {

        let { id } = opt;
       this.loadData(id);
    },
    orderTask: function () {

        let { userInfo, detail } = this.data;
        if (!userInfo) {
            this.$showToast({
                title: '请先登录',
                icon: 'warn'
            });
            return;
        }
        if (!isUserInfoFull()) {
            this.$showToast({
                title: "请先完善信息后操作",
                mask: true
            })
            setTimeout(() => {
                this.$route('/pages/mine/setting/index')
            }, 1000)
            return;
        }
        this.$showToast({
            title: '抢单中...',
            icon: 'loading'
        });
        request('grabFindOrder', { id: detail['order_id'], runner: userInfo['id'] }).then(data => {
            if (!data) {
                this.$showToast({
                    title: "抢单失败",
                    icon: 'error'
                })
                return;
            }
            this.$showToast({
                title: '抢单成功',
                icon: 'success'
            });
            detail['status'] = 1;
            detail['college_id'] = userInfo['college_id'];
            detail['college_name'] = userInfo['college_name'];
            detail['runner'] = userInfo['id'];
            detail['runner_name'] = userInfo['nickname'];
            detail['runner_gender'] = userInfo['gender'];
            detail['runner_tel'] = userInfo['account'];
            this.setData({
                detail
            })
            this.$emit('orderTask', detail);
        }, reson => {
            this.$showToast({
                title: reson,
                icon: 'error'
            });
        })
    },
    comment: function (e) {
        //编辑评论
        this.setData({
            commentText: e.detail.value
        })
    },
    addComment: function () {

        try {

            let { commentText } = this.data;

            let { id } = this.data.userInfo;
            let { order_id } = this.data.detail;
            let params = Validate.check({ user_id: id, r_order_id: order_id, content: commentText }, [
                ['user_id', "number", '不能为空', Validate.MUST_VALIDATE],
                ['content', "require", '内容不能为空', Validate.MUST_VALIDATE],
                ['r_order_id', 'require', '订单id不能为空', Validate.MUST_VALIDATE]
            ]);
            this.$showToast({
                title: '评论中...',
                icon: 'loading'
            });
            request('addComment', params).then(data => {

                this.$showToast({
                    title: '评论成功',
                    icon: 'success'
                });
                this.setData({
                    expandShow: false
                })
                this.loadData(true)
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
    cancelOrder: function () {


        let { id } = this.data.userInfo;
        let { detail } = this.data;
        let api = '';
        if (id == detail['creater']) {
            api = 'cancelOrders';
        } else if (id == detail['runner']) {
            api = 'quitFindOrder';
        }
        this.$showToast({
            title: '正在取消,请稍后',
            icon: 'loading'
        });
        request(api, { id: detail['order_id'] }).then(({ data }) => {

            if (!data) {
                this.$showToast({
                    title: "操作失败",
                    icon: 'error'
                });
            }
            let  title = '';
            if (id == detail['creater']) {
                title = '取消订单成功';
            } else if (id == detail['runner']) {
                title = '放弃跑腿成功';
            }
            detail['runner'] = null;
            this.$showToast({
                title,
                icon: 'success'
            });
            this.setData({
                expandShow: false,
                detail
            })
        }, reson => {
            this.$showToast({
                title: reson,
                icon: 'error'
            });
        });
    },
    loadData: function (id) {

        try {
            request('runOrderInfo', {id}).then(({data}) => {

                this.setData({
                    detail: data.info,
                });
            }, reson => {
                this.$showToast({
                    title: reson,
                    icon: 'error'
                });
                this.setData({
                    loading: false
                });
            })
        } catch (e) {
            this.$showToast({
                title: e.message,
                icon: 'error'
            });
        }
    },
    onExpand: function () {

        this.setData({
            expandShow: !this.data.expandShow
        })

    }
})
