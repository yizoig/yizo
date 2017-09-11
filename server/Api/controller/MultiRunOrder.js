let { Controller, Code, BaseError } = jike;
let MultiRunOrderModel = require("../model/MultiRunOrder")
let OrderController = require("./order");
module.exports = class MultiRunOrderController extends Controller {

    /**
     * 添加多用户跑单
     */
    async add({ content, gender_constraint, college, maxNum }) {

        let model = new MultiRunOrderModel();
        let order_id = OrderController.makeId("M");


        console.log(order_id)
        let result = await model.add({ order_id, content, gender_constraint, college, max_number: maxNum }, this.reqUser);
        return this.json({
            data: result
        })
    }
    /**
     * 取消订单
     */
    async cancel({ id }) {

        let model = new MultiRunOrderModel();
        let result = await model.cancel(id, this.reqUser);
        return this.json({
            data: result
        })
    }
    /**
     * 抢单
     */
    async grab({ id, content, contact, number, money, demands }) {

        let model = new MultiRunOrderModel();
        let result = await model.grab({ id, content, contact, number, money, demands }, this.reqUser);
        return this.json({
            data: result
        })
    }
    /**
    * 放弃订单  用户
    */
    async quit({ id }) {

        let model = new MultiRunOrderModel();
        let result = await model.quit(id, this.reqUser);
        return this.json({
            data: result
        })
    }
      /**
     * deliver 配送中
     */
    async deliver({id}){
        let model = new MultiRunOrderModel();
        let result = await model.deliver(id,this.reqUser);
        return this.json({
            data:result
        })
    }
    /**
     * 配送验证  等待确认
     * @param {*} param0 
     */
    async finally({id,user}){
        let model = new MultiRunOrderModel();
        let result = await model.finally({id,user},this.reqUser);
        return this.json({
            data:result
        })
    }
    /**
     * 订单结束
     * @param {*} param0 
     */
    async end({id,user}){
        let model = new MultiRunOrderModel();
        let result = await model.end(id,this.reqUser);
        return this.json({
            data:result
        })
    }
}