var C = require('../../lib/wxpage').C;
module.exports = C('swiper', function (vm) {
    return {
        data: {
            name: '12121',
            headImage: [
                {url: '../../image/lunbo1.jpg'},
                {url: '../../image/lunbo2.jpg'},
                {url: '../../image/lunbo3.jpg'},
            ]
        },
        onLoad: function () {
            // do something

            vm.$set({
                name: 'swiper'
            })
        }
    }
})