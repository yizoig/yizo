let TaskModel = require("../model/task")
//控制器
module.exports = class Task extends JikeJs.Controller {
    async list({ search, page, pageSize, creater, partner, state, college, type }) {

        let model = new TaskModel();
        return await model.list(({ search, page, pageSize, creater, partner, state, college, type }));
    }
    async add({ title, content, contact, tel, college, type,dueDate, rewardType, reward, number, gender }) {

        let model = new TaskModel();
        return await model.add({ title, content, contact, tel, college, type,dueDate, rewardType, reward, number, gender });
    }
    async del({ ids }) {

        let model = new TaskModel();
        return await model.del(ids);
    }
    async updateInfo({ id, ...data }) {
        let model = new TaskModel();
        return await model.updateInfo(id,data)
    }
    async info({id}){
        let model = new TaskModel();
        return await model.info(id)
    }
    async joinTask({id,type}){
        let model = new TaskModel();
        return await model.join(id,type)
    }
    async recordList({id}){
        let model = new TaskModel();
        return await model.recordList(id)
    }
    async putState({id,type}){
        let model = new TaskModel();
        return await model.putState(id,type)
    }
}