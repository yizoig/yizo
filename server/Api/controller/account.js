let AccountModel = require("../model/account");
let fs = require('fs');
let SmsModel = require("../model/sms");
let jwt = require("../comment/jwt");
let { BaseError, Code } = jike;

module.exports = class AccountController extends jike.Controller {

    /**
     * 登录接口
     *  
     */
    async signin({ account, password, type = 'user' }) {

        let user = await new AccountModel().signIn({ account, password, type });
        //设置请求头
        this.header('access-token', jwt.makeToken({
            sub: user['id'],
            type,
            id: type == 'user' ? user['user_id'] : user['admin_id']
        }));
        return this.json(user);
    }
    /**
     * 获取用户头像
     */
    async head({ id }) {
        //读取头像
        let headdir = APP_PATH + '/static/upload/head/';
        let headPath = headdir + id + '.png';
        fs.exists(headPath, async (exists) => {

            if (!exists) {
                headPath = headdir + `_0.png`;
            }
            this.header("Content-Type", "image/png");
            //异步读取图片
            let file = fs.readFileSync(headPath, "binary");
            //返回二进制流
            this.res.write(file, "binary");
            this.res.end();
        });
    }
    /**
     * 修改手机号
     */
    async changeTel({ tel, newTel, code, newCode }) {

        //首先验证验证码是否正确
        let model = new SmsModel();
        if (!(await model.verifyCode(tel, 'unbindTel', code))) {
            throw new BaseError(Code.OLD_TEL_CODE_ERR);
        }
        if (!(await model.verifyCode(newTel, 'bindTel', newCode))) {
            throw new BaseError(Code.NEW_TEL_CODE_ERR);
        }
        let result = await new AccountModel().changeTel(tel, newTel);
        this.json(result)
    }
    /**
     * 修改密码  旧换新
     */
    async changePwd({ id, password, newPassword }) {

        let result = await new AccountModel().changePwd(id, password, newPassword);
        this.json(result);
    }
    /**
     * 手机号修改密码
     */
    async changePwdByTel({ tel, password, code }) {
        //首先验证验证码是否正确
        let model = new SmsModel();
        if (!(await model.verifyCode(tel, 'changePwd', code))) {
            throw new BaseError(Code.TEL_CODE_ERR);
        }
        let result = await new AccountModel().changePwdByTel(tel, password);

        this.json(result);
    }
}