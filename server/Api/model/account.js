
let { BaseError, Code, crypto: { md5 } } = jike;
module.exports = class AccountModel extends jike.Model {

    constructor() {
        super();
    }
    /**
     * 登录接口
     */
    async signIn({ account, password, type }) {

        let sql = type == 'user' ? sqls['userSignIn'] : sqls['adminSignIn'];
        let [user = null] = await this.query(sql, account);
        if (!user) {
            throw new BaseError(Code.ACCOUNT_NOTEXISTS);
        }
        if (user['password'] !== md5(password)) {
            throw new BaseError(Code.SIGNIN_ERR);
        }
        if (user['@live'] == 1) {
            throw new BaseError(Code.ACCOUNT_DISABLE);
        }
        return user;
    }
    /**
     * 判断手机号是否存在
     */
    async exists(account) {

        let [user = null] = await this.query(sqls.existsAccount, account);

        return !!user;
    }
    /**
     * 修改手机号
     */
    async changeTel(tel, newTel) {

        //判断旧手机是否存在  新手机是否被占用
        if (!(await this.exists(tel))) {
            throw new BaseError(Code.OLD_TEL_NOTEXISTS);
        }
        if (await this.exists(newTel)) {
            throw new BaseError(Code.NEW_TEL_EXISTS);
        }
        //获取用户类型
        let { affectedRows } = await this.query(sqls.changeTel, newTel, tel);
        return affectedRows > 0;
    }
    /**
     * 修改密码  旧换新
     */
    async changePwd(id, password, newPassword) {

        password = md5(password);
        newPassword = md5(newPassword);
        //首先判断旧密码是否正确
        let [user = null] = await this.query(sqls.accountInfoById, id);
        //账户不存在
        if (!user) {
            throw new BaseError(Code.ACCOUNT_NOTEXISTS);
        }
        //密码不正确
        if (user['password'] != password) {
            throw new BaseError(Code.PASSWORD_ERR);
        }
        //再修改密码
        let { affectedRows } = await this.query(sqls.changePwd, newPassword, password, id);
        return affectedRows > 0;
    }
    /**
     * 通过手机号 修改密码 
     */
    async changePwdByTel(tel, password) {
        let { affectedRows } = await this.query(sqls.changePwdByTel, md5(password), tel);
        return affectedRows > 0;
    }
}