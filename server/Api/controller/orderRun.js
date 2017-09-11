let { BaseError, Code } = jike;
let OrderRunModel = require("../model/orderRun");
let OrderController = require("./order");
module.exports = class OrderRunController extends jike.Controller{
    /**
     * 创建订单
     */
    async add({content, college, address, gender_constraint, demands, contact, number, money,deadline}){

        let model = new OrderRunModel();
        
        let insertId = await model.add({id:OrderController.makeId("F"),content, college, address, gender_constraint, demands, contact, number, money,deadline},this.reqUser);

        return this.json({
            data:insertId
        })
    }
    /**
     * 取消订单
     */
    async cancel({id}){
        let model = new OrderRunModel();
        
        let result = await model.cancel(id,this.reqUser);

        return this.json({
            data:result
        })
    }
    /**
     * 抢单
     */
    async grab({id}){


        let model = new OrderRunModel();
        let result = await model.grab(id,this.reqUser);


        return this.json({
            data:result
        })
    }
    /**
     * 放弃跑跑
     */
    async quit({id}){

        let model = new OrderRunModel();
        let result = await model.quit(id,this.reqUser);
        return this.json({
            data:result
        })
    }
    /**
     * deliver 配送中
     */
    async deliver({id}){
        let model = new OrderRunModel();
        let result = await model.deliver(id,this.reqUser);
        return this.json({
            data:result
        })
    }
    /**
     * 配送验证  等待确认
     * @param {*} param0 
     */
    async finally({id}){
        let model = new OrderRunModel();
        let result = await model.finally(id,this.reqUser);
        return this.json({
            data:result
        })
    }
    /**
     * 订单结束
     * @param {*} param0 
     */
    async end({id}){
        let model = new OrderRunModel();
        let result = await model.end(id,this.reqUser);
        return this.json({
            data:result
        })
    }
}