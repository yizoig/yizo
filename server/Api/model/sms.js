let {DataBaseError,Status,crypto:{md5}} = jike;
let codes = {};
module.exports = class SmsModel extends jike.Model {

    /**
     * 生成验证码
     * @param {*} tel 
     * @param {*} type 
     */
    async makeCode(tel, type) {
        //生成验证码

        codes[`code_${tel}_${type}`] = (Math.random() + '').substr(2, 6);

        return {
            code1:codes[`code_${tel}_${type}`],
            code:md5(codes[`code_${tel}_${type}`]).toString(),
            tel
        };
    }
    /**
     * 验证验证码
     * @param {*} tel 
     * @param {*} type 
     */
    async verifyCode(tel, type, code) {

        let newCode = codes[`code_${tel}_${type}`];
        if (!newCode || newCode != code) {
            return false;
        }
        return true;
    }

}
