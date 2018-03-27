let GoodTypeModel = require("../model/goodType")
let GoodModel = require("../model/good")
//控制器
module.exports = class Good extends JikeJs.Controller {


    /**
     * 获取商品类型列表 
     */
    async typeList({ search, pageable, page, pageSize, _d }) {

        let model = new GoodTypeModel();
        return await model.list({ search, pageable, page, pageSize, _d });
    }
    /**
     * 添加商品类型
     */
    async typeAdd({ name, parent }) {
        let model = new GoodTypeModel();
        return await model.add({ name, parent })
    }
    /**
     * 添加商品类型
     */
    async typeUpdate({ id, name, parent }) {
        let model = new GoodTypeModel();
        return await model.updateInfo(id, { name, parent })
    }
    /**
     * 删除商品类型
     */
    async typeUpdate({ id, real }) {
        let model = new GoodTypeModel();
        if (real == 0) {
            return await model.del(id)
        }
        return await model.disabled(id)

    }
}