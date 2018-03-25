let UserModel = require("../model/user");
let SmsModel = require("../model/sms");
let {BaseError,Code} =jike;
let {setAvatar} = require("../comment/avatar");
let fs = require('fs');
module.exports = class UserController extends jike.Controller {

    /**
     * 获取所有的用户
     */
    async list({ current = 1, pageSize = 10,where={live:0}, order }) {

        let users = await new UserModel().list({ current, pageSize, where,order });
        this.json({
            data:users
        })
    }
    /**
     * 添加用户
     */
    async add({ account, password }) {

        let result = await new UserModel().add({ account, password });

        this.json({
            data:result
        })
    }
    /**
     * 删除用户
     * mode=-1表示强制删除用户
     * mode=0解除禁用
     * mode=1禁用用户   默认
     */
    async  delete({ ids, mode = 1 }) {
        let result = await new UserModel().delete(ids, mode)
        this.json({
            data:result
        })
    }
    /**
     * 用户注册
     * 
     */
    async signUp({ account, password, code,nickname,gender,avatar }) {

        //首先验证验证码是否正确
        if(!(await new SmsModel().verifyCode(account,'signUp',code))){
            throw new BaseError(Code.TEL_CODE_ERR);
        }
        let insertId = await new UserModel().add({ account, password,nickname:nickname?nickname:'用户'+account,gender});
        //如果注册时提交了用户的头像  就设置自定义头像  否则使用默认头像
        try{
            setAvatar({
                avatar,
                id:insertId
            })
        }catch(e){}finally{
            this.json({
                data:insertId
            })
        }
        
    }

    /**
     * 获取用户基本信息
     */
    async getUserInfo({id}){

        let user = await new UserModel().getUserInfo(id);

        this.json({
            data:user
        })
    }
    /**
     * 修改学校
     */
    async changeCollege({id,college}){

        let result = await new UserModel().changeCollege(id,college);
        this.json({
            data:result
        })
    }
}