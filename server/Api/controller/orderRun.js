let { BaseError, Code } = jike;
let OrderRunModel = require("../model/orderRun");
let Order = require("./order");
module.exports = class OrderRunController extends jike.Controller{
    /**
     * 创建订单
     */
    async add({content, college, address, gender_constraint, demands, contact, number, money}){

        let model = new OrderRunModel();
        
        let insertId = model.add({id:Order.makeId("F"),content, college, address, gender_constraint, demands, contact, number, money},this.reqUser);

        return this.json({
            data:insertId
        })
    }
}