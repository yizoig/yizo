let { request, crypto: { sha1, md5 } } = jike;
let serverConfig = require("../config/server.json");
let WXBizDataCrypt = require("./WXBizDataCrypt")
let fs = require('fs');
let path = require('path');
let https = require('https');
let { setAvatar } = require("../comment/avatar");
async function weixinVerifry({ code, rawData, signature, encryptedData, iv }) {
    //获取微信openid, session_key
    let resultData = await request.https({
        hostname: `api.weixin.qq.com`,
        path: '/sns/jscode2session',
        body: {
            ...serverConfig['weixin'],
            js_code: code,
            grant_type: 'authorization_code',
        }
    });
    let { session_key, expires_in, openid } = JSON.parse(resultData);
    //计算signature, 并与小程序传入的signature比较, 校验signature的合法性, 不匹配则返回signature不匹配的错误.
    let newSignature = sha1(JSON.stringify(rawData) + session_key);
    if (newSignature != signature) {
        return false;
    }
    //使用第4步返回的session_key解密encryptData, 将解得的信息与rawData中信息进行比较, 需要完全匹配, 解得的信息中也包括openid
    let pc = new WXBizDataCrypt('wx5460044ed4be3f57', session_key)
    let data = pc.decryptData(encryptedData, iv)
    if (openid != data.openId) {
        return false;
    }
    let { nickName, gender, language, city, province, country, avatarUrl } = data;
    if (JSON.stringify({ nickName, gender, language, city, province, country, avatarUrl }) != JSON.stringify(rawData)) {
        return false;
    }
    return openid;
}

async function saveWeixinAvatar(id,avatarUrl) {

    return new Promise((resolve, reject) => {
        //获取网络图片
        https.get(avatarUrl, function (res) {
            let imgData = "";
            res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
            res.on("data", function (chunk) {
                imgData += chunk;
            });
            res.on("end", function () {

                let filePath = path.join(__dirname, `../static/upload/avatars/${id}.png`)
                fs.writeFile(filePath, imgData, "binary", function (err) {
                    if (err) {
                        reject(err);
                    }
                    setAvatar({
                        avatar:filePath,
                        id
                    })
                    resolve(filePath);
                });
            });
        });
    })
}
module.exports = { weixinVerifry,saveWeixinAvatar }