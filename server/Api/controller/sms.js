let AccountModel = require("../model/account");
let SmsModel = require("../model/sms");
let { BaseError, Code } = jike;

module.exports = class SmsController extends jike.Controller {


    /**
     * 发送验证码
     * @param {*} param0 
     */
    async sendCode({ tel, type }) {

        //先判断 发送的验证码类型需不需要手机号存在
        let exists = await new AccountModel().exists(tel);
        if (["signUp", "bindTel"].indexOf(type) != -1 ) {
            if(exists){
                throw new BaseError(Code.TEL_EXISTS);
            }
        }else{
            if(!exists){
                throw new BaseError(Code.TEL_NOTEXISTS);
            }
        }
        //发送验证码
        let result = await new SmsModel().makeCode(tel, type);
        this.json(result)
    }

    /**
     * 验证验证码
     */
    async verifyCode({ tel, type, code }) {

        let result = await new SmsModel().verifyCode(tel, type, code);
        this.success(result);
    }
}