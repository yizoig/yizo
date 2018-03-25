
let { BaseError, Code, crypto: { md5 } } = jike;
module.exports = class AccountModel extends jike.Model {

  constructor() {
    super();
  }
  async getWeixin(openid, { nickName, gender }) {
     //判断时候存在用户
     let [user = null] = await this.query(sqls.user.wxSignIn, openid);
     return user;
    //不存在就注册
    //开启事务
    await this.startTrans();
    //在用户表中添加用户基本信息
    let { insertId = null } = await this.query(sqls.user.add, { balance: 0, wxOpenId: openid });
    if (!insertId) {
      throw new BaseError(Code.UN_KNOWN_ERROR);
    }
    let { insertId: insertAccountId } = await this.query(sqls.account.addAccount, { user_id: insertId, nickname: nickName, gender });
    if (insertAccountId) {
      this.commit();
    } else {
      this.rollback();
      throw new BaseError(Code.SIGNIN_ERR);
    }
    [user = null] = await this.query(sqls.user.wxSignIn, openid);
    return user
  }
  /**
   * 登录接口
   */
  async signIn({ account, password, type }) {

    let sql = type == 'user' ? sqls.user['userSignIn'] : sqls.admin['adminSignIn'];

    console.log(type, sql)
    let [user = null] = await this.query(sql, account);
    console.log(user)
    if (!user) {
      throw new BaseError(Code.ACCOUNT_NOTEXISTS);
    }
    if (user['password'] !== md5(password)) {
      throw new BaseError(Code.SIGNIN_ERR);
    }
    if (user['_d'] == 1) {
      throw new BaseError(Code.ACCOUNT_DISABLE);
    }
    //刪除password字段和live字段
    delete user['password'];
    delete user['_d'];
    return user;
  }
  /**
   * 判断手机号是否存在
   */
  async exists(account) {

    let [user = null] = await this.query(sqls.account.existsAccount, account);

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
    let { affectedRows } = await this.query(sqls.account.changeTel, newTel, tel);
    return affectedRows > 0;
  }
  /**
   * 修改密码  旧换新
   */
  async changePwd(id, password, newPassword) {

    password = md5(password);
    newPassword = md5(newPassword);
    //首先判断旧密码是否正确
    let [user = null] = await this.query(sqls.account.accountInfoById, id);
    //账户不存在
    if (!user) {
      throw new BaseError(Code.ACCOUNT_NOTEXISTS);
    }
    //密码不正确
    if (user['password'] != password) {
      throw new BaseError(Code.PASSWORD_ERR);
    }
    //再修改密码
    let { affectedRows } = await this.query(sqls.account.changePwd, newPassword, password, id);
    return affectedRows > 0;
  }
  /**
   * 通过手机号 修改密码 
   */
  async changePwdByTel(tel, password) {
    let { affectedRows } = await this.query(sqls.account.changePwdByTel, md5(password), tel);
    return affectedRows > 0;
  }
  /**
   * 修改用户信息
   */
  async changeInfo(id, data) {

    let { affectedRows } = await this.query(sqls.account.changeInfo, data, id);
    return affectedRows > 0;
  }
}