var C = require('../../lib/wxpage.js').C;
import { request, getDateDiff } from "../../lib/tools";
module.exports = C('menu', function (vm) {
    return {
        data: {
            current: 0,
            menus: [
                {
                    key: 'help',
                    name: '帮帮忙',
                    subMenus: [
                        { key: 'help', name: '求助' },
                        { key: 'supper', name: '帮忙' }
                    ],
                    current: 0
                },
                {
                    key: 'inactivity',
                    name: '闲置',
                    subMenus: [
                        { key: 'male', name: '男装' },
                        { key: 'female', name: '女装' }
                    ],
                    current: 0
                }
            ]
        },
        onLoad: function () {

        },
        onSwitch: function (e) {

            let { navs, current } = this.data;

            let { index, type } = e.currentTarget.dataset;

            console.log(index, type)
            switch (type) {
                case "nav": {
                    navs['current'] = index;
                    break;
                }
                case "sub": {
                    navs.nav[navs.current]['current'] = index;
                    break;
                }
                default: {
                    return;
                }
            }
            current = this.getActiveSubNavKey(navs);
            this.setData({
                navs,
                current
            })
        },
    }
})