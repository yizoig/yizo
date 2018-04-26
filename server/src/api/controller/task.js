let TaskModel = require("../model/task")
//控制器
module.exports = class Task extends JikeJs.Controller {
    async list({ search, page, pageSize, creater, partner, state, college, type }) {

        let model = new TaskModel();
        return await model.list(({ search, page, pageSize, creater, partner, state, college, type }));
    }
    async add({ title, content, contact, tel, college, type, dueDate, rewardType, reward, number, gender }) {

        let model = new TaskModel();
        return await model.add(this.user.id, { title, content, contact, tel, college, type, dueDate, rewardType, reward, number, gender });
    }
    async del({ ids, del }) {

        let model = new TaskModel();
        return await model.del(ids, del);
    }
    async updateInfo({ id, ...data }) {
        let model = new TaskModel();
        return await model.updateInfo(id, data)
    }
    async info({ id }) {
        let model = new TaskModel();
        return await model.info(id)
    }
    //报名
    async joinTask({ id, contact, tel }) {
        let model = new TaskModel();
        return await model.joinTask(id, { user: this.user.id, contact, tel })
    }
    async quitTask({ id }) {
        let model = new TaskModel();
        return await model.quitTask(id, this.user.id)
    }
    //报名
    async finallyTask({ id, user }) {
        let model = new TaskModel();
        return await model.finallyTask(id, user)
    }
    //完成  或结束
    async putState({ id, type }) {
        let model = new TaskModel();
        return await model.putState(id, type)
    }
}