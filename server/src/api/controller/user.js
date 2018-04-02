let UserModel = require("../model/user")
//控制器
module.exports = class User extends JikeJs.Controller {
    /**
     * 获取用户列表
     */
    async list({ search, college, gender, page, pageSize, del, use }) {

        let model = new UserModel();
        return await model.list({ search, college, gender, page, pageSize, del, use });
    }
    /**
     * 修改用户基本信息
     */
    async updateInfo({ id, gender, nickname }) {
        let model = new UserModel();
        return await model.updateInfo(id, { user_gender: gender, nick_name: nickname });
    }
    /**
     * 获取用户基本信息
     */
    async getInfo({ id }) {
        let model = new UserModel();
        return await model.info(id);
    }
    /**
     * 删除用户
     */
    async del({ ids, del }) {
        let model = new UserModel();
        return await model.del(ids, del);
    }
    /**
     * 禁用用户
     */
    async use({ ids, use }) {
        let model = new UserModel();
        return await model.use(ids, use);

    }
    /**
     * 微信登录
     */
    async wxSignIn({ code, rawData, signature, encryptedData, iv }) {

    }
}