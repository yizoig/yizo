let CollegeModel = require("../model/college")
//控制器
module.exports = class College extends JikeJs.Controller {
    /**
     * 获取学校列表
     */
    async list({ search, pageable, page, pageSize, _d }) {

        let model = new CollegeModel();
        return await model.list({ search, pageable, page, pageSize, _d });
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
    async add({name}) {
        let model = new CollegeModel();
        return await model.add({name});
    }
    /**
     * 删除学校
     */
    async del({ ids, real = 0 }) {
        let model = new CollegeModel();
        if (real == 0) {
            return await model.del(ids);
        } else {
            return await model.disable(ids);
        }
    }
}