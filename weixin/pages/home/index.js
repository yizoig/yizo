
var P = require('../../lib/wxpage');
P('home', {
    comps: [
        require('../../comps/order/list/index'),
        require('../../comps/menuNavs/index')
    ],
    data: {
     
    },
    onLoad: function (opt) {

        let college = wx.getStorageSync('college');
        this.setData({
            college: college
        });

    }
});