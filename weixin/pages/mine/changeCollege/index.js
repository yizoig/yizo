import {request, Validate} from "../../../lib/tools"
import {getUserInfo, setUserInfo} from "../../../lib/user";

var P = require('../../../lib/wxpage')

P('changeCollege/index', {
    comps: [],
    data: {
        colleges: [],
        page: {
            current: 1,
            pageSize:10
        },
        userinfo: null,
        loading: false
    },
    search: function (e) {
        if (e.detail.value) {
            this.setData({
                search: e.detail.value
            });
            this.loadMore({refresh: true});
        }
    },
    onShow: function () {

        let {search} = this.data;

        this.loadMore();
    },
    onReachBottom: function () {
        let {search} = this.data;

        this.loadMore();
    },
    loadMore: function (obj = {}) {

        try {

            let that = this;
            let {search = '', page} = this.data;
            search = search.trim();
            if (search !== '') {
                page['search'] = search;
            }
            if ('refresh' in obj) {
                page['current'] = 1;
                if(!('search' in page)){
                    return;
                }
            }
            this.setData({
                loading: true
            })
            request('collegelist', page).then((data) => {

                let {colleges} = this.data;
                if ('refresh' in obj) {
                    colleges = [];
                    page['current'] = 2;
                }
                colleges.push.apply(colleges, data.data);
                page['current']++;
                that.setData({
                    colleges,
                    page: page,
                    loading: false
                })
            }, reason => {
                this.$showToast({
                    title: reason,
                    icon: 'error'
                });
                this.setData({
                    loading: false
                })
            })
        } catch (e) {
            this.$showToast({
                title: e.message,
                icon: 'error'
            });
        }
    },
    onLoad: function () {
        let that = this;
        let userinfo = getUserInfo();
        that.setData({
            userinfo
        })
    },
    changCollege: function (e) {

        let {id: college_id, name: college_name} = e.target.dataset;
        try {

            let params = Validate.check({college: college_id, id: this.data.userinfo['id']}, [
                ['college', 'number', '请选择学校', Validate.MUST_VALIDATE],
                ['id', 'number', 'id不能为空', Validate.MUST_VALIDATE]
            ]);
            this.$showToast({
                title: '修改中...',
                icon: 'loading'
            });
            request('changeCollege', params).then(data => {

                setUserInfo({
                    college_id,
                    college_name
                })
                this.$showToast({
                    title: '修改成功',
                    icon: 'success'
                })
                setTimeout(()=> {
                    this.$back();
                }, 1000);
            }, reason => {
                this.$showToast({
                    title: reason,
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
    goTop: function () {

        wx.pageScrollTo({
            scrollTop: 0
        });
    }
})
