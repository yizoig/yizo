let TaskTypeModel = require("../model/taskType")
let TaksModel = require("../model/task")
//控制器
module.exports = class Good extends JikeJs.Controller {
    /**
     * 获取商品类型列表 
     */
    async typeList({ search, page, pageSize, _d }) {

        let model = new TaskTypeModel();
        return await model.list({ search, page, pageSize, _d });
    }
    /**
     * 添加商品类型
     */
    async typeAdd({ name, parent }) {
        let model = new TaskTypeModel();
        return await model.add({ name })
    }
    /**
     * 添加商品类型
     */
    async typeUpdate({ id, name, parent }) {
        let model = new TaskTypeModel();
        return await model.updateInfo(id, { name })
    }
    /**
     * 删除商品类型
     */
    async typeUpdate({ id, real }) {
        let model = new TaskTypeModel();
        if (real == 0) {
            return await model.del(id)
        }
        return await model.disabled(id)

    }
}