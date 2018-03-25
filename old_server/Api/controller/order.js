let { BaseError, Code } = jike;
let OrderModel = require("../model/order");
module.exports = class OrderController extends jike.Controller{


     /**
     * 生成id
     */
    static makeId(type) {
        let date = new Date();
        let time = date.getTime() + "";
        return type+date.format("yyyyMMddhhmmss") + time.substr(time.length - 3);
    }
    /**
     * 获取跑跑订单数据
     * @param {*} param0 
     */
    async list({current=1,pageSize=10}){

        let orders = await new OrderModel().list(current-1,pageSize);

        return this.json({
            data:orders
        })
    }
}