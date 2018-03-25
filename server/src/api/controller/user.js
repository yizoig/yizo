let UserModel = require("../model/user")
//控制器
module.exports = class User extends JikeJs.Controller {
    /**
     * 获取用户列表
     */
    async list({ search, college, sex, pageable, page, pageSize, _d }) {

        let model = new UserModel();
        return await model.list({ search, college, sex, pageable, page, pageSize, _d });
    }
    /**
     * 修改用户基本信息
     */
    async updateInfo({ id, sex, nickname }) {
        let model = new UserModel();
        return await model.updateInfo(id, { user_sex: sex, nick_name: nickname });
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
    async del({ ids, real = 0 }) {
        let model = new UserModel();
        if (real == 0) {
            return await model.del(ids);
        } else {
            return await model.disable(ids);
        }
    }
    /**
     * 微信登录
     */
    async weixinSignIn({ code, rawData, signature, encryptedData, iv }) {

    }
}