let AdminGroupModel = require("../model/adminGroup")
let AdminModel = require("../model/admin")
const { makeToken } = require('../common/jwt')
//控制器
module.exports = class Admin extends JikeJs.Controller {
    /**
     * 管理员登录
     */
    async signIn({ account, password }) {
        let model = new AdminModel();
        let info = await model.signIn({ account, password });
        //设置请求头
        this.response.set('access-token', makeToken({
            sub: info['aid'],
            type: 'admin'
        }));
        return info;
    }
    /**
     * 获取管理员组
     * @param {} param0 
     */
    async groupList({ search, page, pageSize, _d }) {
        let model = new AdminGroupModel();
        return await model.groupList({ search, page, pageSize, _d });
    }
    /**
     * 添加管理员组
     */
    async groupAdd({ name }) {
        let model = new AdminGroupModel();
        return await model.groupAdd({ name });
    }
    /**
     * 修改管理员组
     */
    async groupUpdate({ id, name }) {
        let model = new AdminGroupModel();
        return await model.groupUpdate(id, { group_name: name });
    }
    /**
     * 删除管理员
     */
    async groupDel({ ids, real = 0 }) {

        let model = new AdminGroupModel();
        if (real == 0) {
            return await model.groupDisable(ids);
        } else {
            return await model.groupDel(ids);
        }
    }
    /**
     * 获取管理员列表
     * @param {} param0 
     */
    async list({ search, group, page, pageSize, _d, sort }) {
        let model = new AdminModel();
        return await model.list({ search, group, sort, page, pageSize, _d });
    }
    /**
     * 添加管理员
     */
    async add({ name, group, account, password }) {
        let model = new AdminModel();
        return await model.add({ name, group, account, password });
    }
    /**
     * 修改管理员
     */
    async update({ id, name, group }) {
        let model = new AdminModel();
        return await model.updateInfo(id, { admin_name: name, group });
    }
    /**
     * 删除管理员
     */
    async del({ ids, real = 0 }) {

        let model = new AdminModel();
        if (real == 0) {
            return await model.disabled(ids);
        } else {
            return await model.del(ids);
        }
    }
}