let GoodTypeModel = require("../model/goodType")
let GoodModel = require("../model/good")
//控制器
module.exports = class Good extends JikeJs.Controller {


    /**
     * 获取商品类型列表 
     */
    async typeList({ search, page, pageSize, _d }) {

        let model = new GoodTypeModel();
        return await model.list({ search, page, pageSize, _d });
    }
    /**
     * 添加商品类型
     */
    async typeAdd({ name }) {
        let model = new GoodTypeModel();
        return await model.add({ name })
    }
    /**
     * 添加商品类型
     */
    async typeUpdate({ id, name }) {
        let model = new GoodTypeModel();
        return await model.updateInfo(id, { type_name: name })
    }
    /**
     * 删除商品类型
     */
    async typeDel({ id, real }) {
        let model = new GoodTypeModel();
        if (real == 0) {
            return await model.del(id)
        }
        return await model.disabled(id)
    }
    /**
     * 获取商品列表
     */
    async list({ search, creater, partner, college, type, state, page, pageSize, _d }) {
        let model = new GoodModel();
        return await model.list({ search, creater, partner, college, type, state, page, pageSize, _d })
    }
    async add() {
        let model = new GoodModel();
        return await model.add({ title, content, concat, concat_tel, images, type, price, oprice, number });
    }
    /**
     * 添加
     */
    async update({ id, title, content, concat, concat_tel, images, type, price, oprice, number }) {
        let model = new GoodModel();
        return await model.updateInfo(id, { title, content, concat, concat_tel, images, type, price, oprice, number })
    }
    /**
     * 删除
     */
    async del({ id, real }) {
        let model = new GoodModel();
        if (real == 0) {
            return await model.del(id)
        }
        return await model.disabled(id)
    }
    /**
     * 购买
     */
    async buy({ id, number }) {
        let model = new GoodModel();
        return await model.buy(id, { number });
    }
    /**
     * 获取基本信息
     */
    async info({ id }) {
        let model = new GoodModel();
        return await model.info(id);
    }
}