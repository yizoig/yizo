let UserModel = require("../model/user");
let SmsModel = require("../model/sms");
let {BaseError,Status} =jike;
let fs = require('fs');
module.exports = class UserController extends jike.Controller {

    /**
     * 获取所有的用户
     */
    async list({ current = 1, pageSize = 10, search, order = {} }) {

        let users = await new UserModel().list({ current, pageSize, search });
        return this.success(users);
    }
    /**
     * 添加用户
     */
    async add({ account, password }) {

        let result = await new UserModel().add({ account, password });

        return this.success(result)
    }
    /**
     * 删除用户
     * mode=-1表示强制删除用户
     * mode=0解除禁用
     * mode=1禁用用户   默认
     */
    async  delete({ ids, mode = 1 }) {
        let result = await new UserModel().delete(ids, mode)
        return this.success(result);
    }
    /**
     * 用户注册
     * 
     */
    async signUp({ account, password, code }) {

        //首先验证验证码是否正确
        if(!(await new SmsModel().verifyCode(account,'signUp',code))){
            throw new BaseError(Status.INVALID_REQUEST,"","验证码错误");
        }
        let insertId = await new UserModel().add({ account, password});
        this.success(insertId);
    }

    /**
     * 获取用户基本信息
     */
    async getUserInfo({id}){

        let user = await new UserModel().getUserInfo(id);

        this.success(user);
    }
    /**
     * 修改学校
     */
    async changeCollege({id,college}){

        let result = await new UserModel().changeCollege(id,college);
        this.success(result);
    }
}