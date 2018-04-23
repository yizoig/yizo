let { weixinVerifry, saveWeixinAvatar } = require("../common/weixin")
let UserModel = require("../model/user");
const { makeToken } = require('../common/jwt')
const fs = require('fs')
const path = require('path')

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

        rawData = JSON.parse(rawData);
        try {
            let openid = await weixinVerifry({ code, rawData, signature, encryptedData, iv });
            if (!openid) {
                throw new JikeJs.BaseError(this.codes.SIGNIN_ERR);
            }
            let info = await new UserModel().wxSignIn(openid, rawData);
            if (!fs.existsSync(path.join(__dirname, `../static/user/avatar/${info['uid']}.png`))) {
                saveWeixinAvatar(info['uid'], rawData['avatarUrl']);
            }
            //判断头像是否存在
            this.response.set('access-token', makeToken({
                sub: info['uid'],
                type: 'user'
            }));
            return info;
        } catch (e) {
            console.log(e)
        }
    }
    async avatar({ id }) {
        id = parseInt(id);
        let pathname = path.join(__dirname, `../static/user/avatar/`);
        if (fs.existsSync(pathname + `${id}.png`)) {
            pathname += `${id}.png`;
        } else {
            pathname += `_0.png`
        }
        this.ctx.type = "image/png"
        this.ctx.status = 200;
        this.ctx.body = fs.readFileSync(pathname);
    }
}