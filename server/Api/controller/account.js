let AccountModel = require("../model/account");
let fs = require('fs');
let { getAvatar, setAvatar } = require("../comment/avatar");
let SmsModel = require("../model/sms");
let jwt = require("../comment/jwt");
let { BaseError, Code, request, crypto: { sha1 } } = jike;
let WXBizDataCrypt = require("../comment/WXBizDataCrypt")
module.exports = class AccountController extends jike.Controller {
  /**
   * 微信登录
   */
  async weixinSignin({ code, rawData, signature, encryptedData,iv }) {

    try {
      //获取微信openid, session_key
      let resultData = await request.https({
        hostname: `api.weixin.qq.com`,
        path: '/sns/jscode2session',
        body: {
          appid: 'wx5460044ed4be3f57',
          secret: 'a1c0ad02b8d77887d56177a2fc71318a',
          js_code: code,
          grant_type: 'authorization_code',
        }
      });
      let { session_key, expires_in, openid } = JSON.parse(resultData);
      //计算signature, 并与小程序传入的signature比较, 校验signature的合法性, 不匹配则返回signature不匹配的错误.
      let newSignature = sha1(JSON.stringify(rawData) + session_key);
      if(newSignature!=signature){
        throw new BaseError(Code.SIGNIN_ERR);
      }
      //使用第4步返回的session_key解密encryptData, 将解得的信息与rawData中信息进行比较, 需要完全匹配, 解得的信息中也包括openid
      let pc = new WXBizDataCrypt('wx5460044ed4be3f57', session_key)
      let data = pc.decryptData(encryptedData , iv)
      if(openid!=data.openId){
        throw new BaseError(Code.SIGNIN_ERR);
      }
      let {nickName,gender,language,city,province,country,avatarUrl} = data;
      if(JSON.stringify({nickName,gender,language,city,province,country,avatarUrl})!=JSON.stringify(rawData)){
        throw new BaseError(Code.SIGNIN_ERR);
      }
      let user = await new AccountModel().weixinSignIn(openid,rawData);
      this.header('access-token', jwt.makeToken({
        sub: user['id'],
        type:'user',
        id: user['user_id']
      }));
      this.header('user-info',true);
      return this.json({
        info:user
      });

    } catch (e) {
      console.log(e)
    }
  }
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
  async avatar({ id }) {
    //读取头像
    let file = getAvatar(id);
    //返回二进制流
    this.res.write(file, "binary");
    this.res.end();

  }
  /**
   * 修改头像
   */
  async changeAvatar({ id, avatar }) {

    let result = setAvatar({
      avatar: avatar['path'],
      id
    })
    return this.json(result)
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
    return this.json(result)
  }
  /**
   * 修改密码  旧换新
   */
  async changePwd({ id, password, newPassword }) {

    let result = await new AccountModel().changePwd(id, password, newPassword);
    return this.json(result)
  }
  /**
   * 手机号修改密码
   */
  async changePwdByTel({ tel, password, code }) {
    //首先验证验证码是否正确
    let model = new SmsModel();
    if (!(await model.verifyCode(tel, 'resetPwd', code))) {
      throw new BaseError(Code.TEL_CODE_ERR);
    }
    let result = await new AccountModel().changePwdByTel(tel, password);

    return this.json(result)
  }
  /**
   * 修改信息 
   */
  async changeInfo(params) {
    //获取信息
    let { id, ...data } = params;
    if (Object.getOwnPropertyNames(data).length == 0) {
      throw new BaseError(Code.NOT_CHANGE);
    }
    let result = await new AccountModel().changeInfo(id, data);

    return this.json(result)
  }
}