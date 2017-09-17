import { request, Validate } from "../../lib/tools";
import { host } from '../../config/api';
var P = require('../../lib/wxpage');
P('home', {
    data: {
        collegelogo: host + '/college/logo/',
        colleges: []
    },
    getCollege: function (id) {

        let { colleges } = this.data;
        for (let i = 0; i < colleges.length; i++) {
            if (colleges[i]['college_id'] == (id + '')) {
                return colleges[i];
            }
        }
        return null;
    },
    onLoad: function () {
        this.loadData();
    },
    loadData: function () {

        request('collegelist', {}).then(({ data }) => {

            let { list:colleges = [] } = data;
            for (let i = 0; i < colleges.length; i++) {
                colleges[i]['logo'] = this.data.collegelogo + colleges[i]['college_id'] + '.png';
            }
            this.$setData({
                colleges: colleges || []
            })
        }, reason => {
            this.$showToast({
                title: reason,
                icon: 'error'
            });

        })
    },
    onSelect: function (e) {

        let { id = null } = e.currentTarget.dataset;
        let college = this.getCollege(id);
        wx.setStorageSync('college', college);
        this.$switch(`/pages/home/index`)
    }
});