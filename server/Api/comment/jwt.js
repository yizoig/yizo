let {BaseError,crypto:{ sha256, md5 ,base64url},Code,Model} = jike;
let header = { typ: 'JWT', alg: 'HS256' };
let {secret} = require('../config/server.json');
//token过期在此时间内可以重新授权token
let updateTime = 10;
//token过期超过此时间必须重新登录
let expTime = 30;
/**
 * 生成token
 */
function makeToken(payload) {

    let before = base64url.encode(JSON.stringify(header)) + '.' + base64url.encode(JSON.stringify({iat: new Date().getTime() , ...payload}));
    let token = before + '.' + sha256(before, secret).toString('base64')
    return token;
}


async function  verifyToken(token = '') {
    /**
     * 解析token
     */
    let arr = token.split('.');
    //判断token长度是否一致 或则头部是否相同
    if (arr.length != 3 || base64url.encode(JSON.stringify(header)) != arr[0]) {
        throw new BaseError(Code.TOKEN_ERR);
    }
    let payload = JSON.parse(base64url.decode(arr[1]));

    /**
     * 比对token
     */
    let newToken = makeToken(payload, secret);
    if (token != newToken) {
        throw new BaseError(Code.TOKEN_ERR);
    }
    /**
     * 判断token是否过期
     */
    // //获取当前时间戳
    // let currentStamp = new Date().getTime();
    // //判断token是否过期
    // console.log("过期倒计时", (payload.iat + expTime * 60 * 1000 - currentStamp) / 1000);
    // if (payload.iat + expTime * 60 * 1000 < currentStamp) {

    //     //如果token过期并且在更新时间范围内就更新  否则就必须重新登录
    //     if (payload.iat + (expTime + updateTime) * 60 * 1000 > currentStamp) {
    //         //更新token
    //         token = makeToken(payload, secret);

    //     } else {
    //         throw new jike.BaseError(Code.TOKEN_INVALID);
    //     }
    // }

    console.log(payload)
    let model = new Model();
    let [user=null] = await model.query(sqls.account[`is_${payload.type}`], payload['sub']);
    if(!user){
        throw new jike.BaseError(Code.UNAUTH);
    }
    return {...user,type:payload.type};
}


module.exports = {
    makeToken,
    verifyToken
}