let {Controller,Code,BaseError} = jike;
let MultiRunOrderModel = require("../model/MultiRunOrder")
let OrderController = require("./order");
module.exports = class MultiRunOrderController extends Controller{

    /**
     * 添加多用户跑单
     */
    async add({content,gender_constraint,college}){

        let model = new MultiRunOrderModel();
        let order_id = OrderController.makeId("M");
        let result = await model.add({order_id,content,gender_constraint,college},this.reqUser);
        return this.json({
            data:result
        })
    }
    /**
     * 取消订单
     */
    async cancel({id}){

    }
}