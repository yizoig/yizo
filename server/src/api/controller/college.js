let CollegeModel = require("../model/college")
//控制器
module.exports = class College extends JikeJs.Controller {
    /**
     * 获取学校列表
     */
    async list({ search, page, pageSize, del, use }) {

        let model = new CollegeModel();
        return await model.list({ search, page, pageSize, del, use });
    }
    /**
     * 修改学校基本信息
     */
    async updateInfo({ id, name }) {
        let model = new CollegeModel();
        return await model.updateInfo(id, { college_name: name });
    }
    /**
     * 添加学校
     */
    async add({ name }) {
        let model = new CollegeModel();
        return await model.add({ name });
    }
    /**
     * 删除学校
     */
    async del({ ids, del }) {
        let model = new CollegeModel();

        return await model.del(ids, del);
    }
    /**
     * 删除学校
     */
    async use({ ids, use }) {
        let model = new CollegeModel();
        return await model.use(ids, use);
    }
}