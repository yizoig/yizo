let { DataBaseError, Status, crypto: { md5 } } = jike;
let { sms } = require('../config/server');
sms = Object.assign(sms || {}, {
  "nextReq": 60,
  "exp": 300
})
let codes = {};
module.exports = class SmsModel extends jike.Model {
  /**
   * 生成验证码
   * @param {*} tel 
   * @param {*} type 
   */
  async makeCode(tel, type) {

    //获取当前时间
    let date = new Date();
    date.setSeconds(date.getSeconds() + sms.nextReq);
    //生成验证码
    codes[`code_${tel}_${type}`] = (Math.random() + '').substr(2, 6);
    return {
      nextReq:date.getTime(),
      code1: codes[`code_${tel}_${type}`],
      code: md5(codes[`code_${tel}_${type}`]).toString(),
      tel
    };
  }
  /**
   * 验证验证码
   * @param {*} tel 
   * @param {*} type 
   */
  async verifyCode(tel, type, code) {
    console.log(codes)
    let newCode = codes[`code_${tel}_${type}`];
    if (!newCode || newCode != code) {
      return false;
    }
    return true;
  }

}
