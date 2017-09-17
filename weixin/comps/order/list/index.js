var C = require('../../../lib/wxpage.js').C;
import { request, getDateDiff } from "../../../lib/tools";
module.exports = C('orderlist', function (vm) {
    return {
        data: {
            list: []
        },
        onLoad: function () {

            this.loadMore();
            console.log(1111)
        },
        onView:function(e){
            wx.navigateTo({
                url: '/pages/order/detail/find/index?id='+e.currentTarget.dataset.id
              })
        },
        loadMore: function (e) {
            let {list} = vm.$data();
            request("runOrderlist", {}).then(({data}) => {

                let {orders=[]} = data;
                //先进行数据处理
                for (let i=0;i<orders.length;i++) {
                    orders[i]['type'] = orders[i]['order_id'].charAt(0);

                    orders[i]['money'] && (
                        orders[i]['money'] = orders[i]['money'].split(",")
                    );
                    orders[i]['_c'] = getDateDiff(new Date(orders[i]['_c']).getTime());
                }
                list.push.apply(list, orders);
                vm.$set({
                    list
                })
                console.log(orders)
            });
        }
    }
})