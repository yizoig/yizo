let CollegeModel = require("../model/college");
let { BaseError, Status } = jike;

module.exports = class CollegeController extends jike.Controller {

    /**
    * 获取所有的学校
    */
    async list({ current = 1, pageSize = 10, search, order = {} }) {

        let colleges = await new CollegeModel().list({ current, pageSize, search });
        return this.json(colleges);
    }
    /**
     * 添加学校 
     */
    async add({ name }) {
        let result = await new CollegeModel().add(name);
        return this.json(result);
    }
    /**
     * 删除学校
     */
    async delete({ids}) {
        let result = await new CollegeModel().delete(ids);
        return this.json(result);
    }
    /**
     * 修改学校
     */
    async update({id,name}){
        let result = await new CollegeModel().update({id,name});
        return this.json(result);
    }
}