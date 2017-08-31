let RunOrderModel = require("../model/runOrder");
let { BaseError, Status } = jike;

module.exports = class RunOrderController extends jike.Controller {



    async list({ current, pageSize, where, order }) {

        let model = new RunOrderModel();
        let {orders,count} = await model.list({ current, pageSize, where, order });
        return this.json({data:orders,count})
    }
    //创建找跑跑的订单
    async findRun({ content, title, college, address, gd_constraint, demands, contact, number, money }) {

        let model = new RunOrderModel();
        //生成id 
        let id = "F" + this.makeId();
        let result = await model.add({ id, content, title, college, address,gd_constraint, demands, contact, number, money, type: "F" });
        //创建找跑跑的订单
        return this.json({
            data:result
        })
    }
    /**
     * 生成id
     */
    makeId() {
        let date = new Date();
        let time = date.getTime() + "";
        return date.format("yyyyMMddhhmmss") + time.substr(time.length - 3);
    }

    async giveRun({ content, title, college, address, gd_constraint, contact, number }) {

        let model = new RunOrderModel();
        //生成id 
        let id = "G" + this.makeId();
        let result = await model.add({ id, content, title, college, address, gd_constraint, contact, number, type: "G" });
        //创建找跑跑的订单
        return this.json({
            data:result
        })
    }
}