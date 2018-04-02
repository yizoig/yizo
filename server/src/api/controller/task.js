let TaskTypeModel = require("../model/taskType")
let TaksModel = require("../model/task")
//控制器
module.exports = class Good extends JikeJs.Controller {
    /**
     * 获取商品类型列表 
     */
    async typeList({ search, page, pageSize, use,del }) {

        let model = new TaskTypeModel();
        return await model.list({ search, page, pageSize, use,del });
    }
    /**
     * 添加商品类型
     */
    async typeAdd({ name }) {
        let model = new TaskTypeModel();
        return await model.add({ name })
    }
    /**
     * 添加商品类型
     */
    async typeUpdate({ id, name }) {
        let model = new TaskTypeModel();
        return await model.updateInfo(id, { type_name: name })
    }
    /**
   * 删除商品类型
   */
    async typeDel({ ids, del }) {
        let model = new TaskTypeModel();
        return await model.del(ids, del)
    }
    /**
     * 删除商品类型
     */
    async typeUse({ ids, use }) {
        let model = new TaskTypeModel();
        return await model.use(ids, use)
    }
}