import {isUserInfoFull,getUserInfo} from "../../lib/user";
import {request, getDateDiff} from "../../lib/tools";

var P = require('../../lib/wxpage')

P('home', {
    comps: [
        require('../../comps/home/swiper'),
    ],
    data: {
        // 页面数据
        currentTab: 'all',
        userInfo: null,
        pageSize: 10,
        list: {
            all: {
                current: 1, items: [],count:0
            },
            creater: {
                current: 1, items: [],count:0
            },
            runner: {
                current: 1, items: [],count:0
            }
        },
        loading:false
    },
    onPullDownRefresh: function () {

        this.loadMore(true);
    },
    onView: function (e) {
        let {list, currentTab} = this.data;

        this.$route('/pages/run_order/detail/index?data=' + JSON.stringify(list[currentTab]['items'][e.currentTarget.dataset.index]))

    },
    onLoad:function () {

        this.$on('orderTask',(data)=>{
            let {list, currentTab} = this.data;

            for(let item in list[currentTab]['items']){
                if(list[currentTab]['items'][item]['order_id']==data['order_id']){
                    list[currentTab]['items'][item] = data;
                }
            }
        })
    },
    onShow: function () {

        let userInfo = getUserInfo();
        let {currentTab, list} = this.data;
        if (!userInfo) {
            currentTab = 'all';
        }
        this.setData({
            userInfo, currentTab
        });

        if (list[currentTab]['items'].length == 0) {
            this.loadMore();
        }
    },
    onCreateBefore: function (e) {

        let {userInfo} = this.data;
        if (!userInfo) {
            this.$showToast({
                title:"请先登录",
                mask:true
            })
            return;
        }
        if(!isUserInfoFull()){
            this.$showToast({
                title:"请先完善信息后操作",
                mask:true
            })
            setTimeout(()=>{
                this.$route('/pages/mine/setting/index')
            },1000);
            return;
        }
        this.$route(`/pages/run_order/create/${e.target.dataset.type}/index`)
    },
    switab: function (e) {
        let {list, userInfo} = this.data;
        if (!userInfo) {
            this.$showToast({
                title:"请先登录",
                mask:true
            })
            return;
        }
        let {type} = e.target.dataset;
        this.setData({
            currentTab: type,
        })
        if (list[type]['items'].length == 0) {

            this.loadMore();
        }

    },
    loadMore: function (refresh = false) {
        this.setData({
            loading:true
        })
        let {pageSize, currentTab, userInfo, list} = this.data;
        let params = {};
        params['current'] = list[currentTab]['current'] || 1;
        params['pageSize'] = pageSize;

        if (currentTab !== 'all') {
            params['where'] = {};
            params['where'][currentTab] = userInfo['id'];
        }
        if (refresh === true) {
            params['current'] = 1;
        }
        request("runOrderlist", params).then((result) => {

            //先进行数据处理
            for (let item of result.data) {

                item['type'] = item['order_id'].charAt(0);
                
                item['money']&&( item['money'] = JSON.parse(item['money']));
                
                item['_c'] = getDateDiff(new Date(item['_c']).getTime());
            }
            if (refresh === true) {
                list[currentTab]['items'] = result.data;
                wx.stopPullDownRefresh();
            } else {
                list[currentTab]['items'].push.apply(list[currentTab]['items'], result.data);
            }
            if(result.data.length!=0){
                list[currentTab]['current']++;
            }
            list[currentTab]['count'] = result.count;
            
            this.setData({
                list,
                loading:false
            });
        });
    },
    orderTask: function (e) {

        let {userInfo, list, currentTab} = this.data;
        let {index} = e.currentTarget.dataset;
        if (!userInfo) {
            this.$showToast({
                title:"请先登录",
                mask:true
            })
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
        let detail = list[currentTab]['items'][index];
        this.$showToast({
            title:"抢单中...",
            icon:'loading'
        })
        request('updateOrder', {type: 'taskOrder', id: detail['order_id']}).then(data => {
            this.$showToast({
                title:"抢单成功",
                icon:'success'
            })
            list[currentTab]['items'][index]['status'] = 1;
            list[currentTab]['items'][index]['college_id'] = userInfo['college_id'];
            list[currentTab]['items'][index]['college_name'] = userInfo['college_name'];
            list[currentTab]['items'][index]['runner_id'] = userInfo['id'];
            list[currentTab]['items'][index]['runner_name'] = userInfo['truename'];
            list[currentTab]['items'][index]['runner_sex'] = userInfo['sex'];
            list[currentTab]['items'][index]['runner_tel'] = userInfo['tel'];

            this.setData({
                list,
                loading:false
            })
        }, reson => {
            this.$showToast({
                title:"抢单成功",
                icon:'error'
            })
            this.setData({
                loading:false
            })
        })
    },
    onReachBottom:function () {
        let {userInfo, list, currentTab} = this.data;
        if(list[currentTab]['items'].length<list[currentTab]['total']){
            this.loadMore();
        }
    },
    goTop:function () {

        wx.pageScrollTo({
            scrollTop: 0
        });
    }
})
