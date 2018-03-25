let AdminGroupModel = require("../model/adminGroup")
//控制器
module.exports = class Admin extends JikeJs.Controller {

    /**
     * 获取管理员组
     * @param {} param0 
     */
    async groupList({ search, pageable, page, pageSize, _d }) {
        let model = new AdminModel();
        return await model.groupList({ search, pageable, page, pageSize, _d });
    }
    /**
     * 添加管理员组
     */
    async groupAdd({ name }) {
        let model = new AdminModel();
        return await model.groupAdd({ name });
    }
    /**
     * 修改管理员组
     */
    async groupUpdate({ id, name }) {
        return await model.groupUpdate(id, { group_name: name });
    }
}