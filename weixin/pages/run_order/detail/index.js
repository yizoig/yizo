import {isUserInfoFull,getUserInfo} from "../../../lib/user";
import {request, getDateDiff, Validate} from "../../../lib/tools"

var P = require('../../../lib/wxpage');

P('run_order/detail/index', {
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
        this.loadComment();
    },
    onLoad: function (opt) {

        let {data} = opt;
        data = JSON.parse(data);
        this.setData({
            detail: data
        });

    },
    orderTask: function () {

        let {userInfo, detail} = this.data;
        if (!userInfo) {
            this.$showToast({
                title: '请先登录',
                icon: 'warn'
            });
            return;
        }
        if(!isUserInfoFull()){
            this.$showToast({
                title:"请先完善信息后操作",
                mask:true
            })
            setTimeout(()=>{
                this.$route('/pages/mine/setting/index')
            },1000)
            return;
        }
        this.$showToast({
            title: '抢单中...',
            icon: 'loading'
        });
        request('updateOrder', {type: 'taskOrder', id: detail['order_id'], runner: userInfo['id']}).then(data => {

            this.$showToast({
                title: '抢单成功',
                icon: 'success'
            });
            detail['status'] = 1;
            detail['college_id'] = userInfo['college_id'];
            detail['college_name'] = userInfo['college_name'];
            detail['runner_id'] = userInfo['id'];
            detail['runner_name'] = userInfo['truename'];
            detail['runner_sex'] = userInfo['sex'];
            detail['runner_tel'] = userInfo['tel'];
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

            let {commentText} = this.data;

            let {id} = this.data.userInfo;
            let {order_id} = this.data.detail;
            let params = Validate.check({user_id: id, r_order_id: order_id, content: commentText}, [
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
                this.loadComment(true)
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


        let {id} = this.data.userInfo;
        let {detail} = this.data;
        let type = '';
        if (id == detail['creater_id']) {
            type = 'cancelOrders';
        } else if (id == detail['runner_id']) {
            type = 'cancelRun';
        }
        this.$showToast({
            title: '正在取消,请稍后',
            icon: 'loading'
        });
        request('updateOrder', {type, id: detail['order_id']}).then(data => {

            let title = '';
            if (id == detail['creater_id']) {
                title = '取消订单成功';
            } else if (id == detail['runner_id']) {
                title = '放弃跑腿成功';
            }
            detail['runner_id']=null;
            this.$showToast({
                detail,
                title,
                icon: 'success'
            });
            this.setData({
                expandShow: false
            })
        }, reson => {
            this.$showToast({
                title: reson,
                icon: 'error'
            });
        });
    },
    loadComment: function (refresh = false) {

        try {
            this.setData({
                loading: true
            });
            let {order_id} = this.data.detail;
            let {page: params} = this.data;
            params['order_id'] = order_id;
            if (refresh) {
                params['current'] = 1;
            }
            request('commentList', params).then(data => {


                for (let item of data['data']) {
                    item['_c'] = getDateDiff(new Date(item['_c']));
                }
                data.page['current']++;
                this.setData({
                    comment: data.data,
                    page: data.page,
                    loading: false
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
