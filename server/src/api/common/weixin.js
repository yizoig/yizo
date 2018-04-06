let { sha1, md5 } = require("./crypto");
let configs = require("../config/config");
let WXBizDataCrypt = require("./WXBizDataCrypt")
let fs = require('fs');
let path = require('path');
let request = require('request-promise');
// let https = require('https');
// let { setAvatar } = require("../comment/avatar");
async function weixinVerifry({ code, rawData, signature, encryptedData, iv }) {
    //获取微信openid, session_key
    let resultData = await request({
        uri: 'https://api.weixin.qq.com/sns/jscode2session',
        qs: {
            ...configs['weixin'],
            js_code: code,
            grant_type: 'authorization_code',
        }
    });
    let { session_key, expires_in, openid } = JSON.parse(resultData);
    //计算signature, 并与小程序传入的signature比较, 校验signature的合法性, 不匹配则返回signature不匹配的错误.
    let newSignature = sha1(JSON.stringify(rawData) + session_key);
    if (newSignature != signature) {
        console.log("签名不一致")
        console.log(newSignature)
        console.log(signature)
        return false;
    }
    //使用第4步返回的session_key解密encryptData, 将解得的信息与rawData中信息进行比较, 需要完全匹配, 解得的信息中也包括openid
    let pc = new WXBizDataCrypt('wx5460044ed4be3f57', session_key)
    let data = pc.decryptData(encryptedData, iv)
    if (openid != data.openId) {
        console.log("不一致", data)
        return false;
    }
    let { nickName, gender, language, city, province, country, avatarUrl } = data;
    if (JSON.stringify({ nickName, gender, language, city, province, country, avatarUrl }) != JSON.stringify(rawData)) {
        return false;
    }
    return openid;
}

async function saveWeixinAvatar(id, avatarUrl) {
    //获取网络图片
    return request({ uri: avatarUrl,encoding: null }).then((res) => {
        const buffer = Buffer.from(res, 'utf8');
        fs.writeFileSync(path.join(__dirname, `../static/user/avatar/${id}.png`), buffer);
    });
}
module.exports = { weixinVerifry, saveWeixinAvatar }