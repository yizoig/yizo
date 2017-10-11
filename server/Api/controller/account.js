let AccountModel = require("../model/account");
let fs = require('fs');
let path = require('path');
let { getAvatar, setAvatar } = require("../comment/avatar");
let SmsModel = require("../model/sms");
let jwt = require("../comment/jwt");
let { weixinVerifry, saveWeixinAvatar } = require("../comment/weixin")
let { BaseError, Code, request, crypto: { sha1 } } = jike;

module.exports = class AccountController extends jike.Controller {
  /**
   * 微信登录
   */
  async weixinSignin({ code, rawData, signature, encryptedData, iv }) {
    try {
      let openid = await weixinVerifry({ code, rawData, signature, encryptedData, iv });
      if (!openid) {
        throw new BaseError(Code.SIGNIN_ERR);
      }
      let user = await new AccountModel().getWeixin(openid, rawData);
      if (!fs.existsSync(path.join(__dirname, `../static/uploda/avatars/${user['id']}.png`))) {
        saveWeixinAvatar(user['id'], rawData['avatarUrl']);
      }
      //判断头像是否存在
      this.header('access-token', jwt.makeToken({
        sub: user['id'],
        type: 'user',
        id: user['user_id']
      }));
      this.header('user-info', true);
      return this.json({
        info: user
      });

    } catch (e) {
      console.log(e)
    }
  }
  /**
   * 微信信息同步
   */
  async weixinSync({ rawData }) {
    try {
      let { nickName:nickname, gender, avatarUrl } = rawData;
      let result = await new AccountModel().changeInfo(this.reqUser['id'], { nickname, gender });
      saveWeixinAvatar(this.reqUser['id'], rawData['avatarUrl']);
      return this.json(result);
    } catch (e) {
      return this.json(false);
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