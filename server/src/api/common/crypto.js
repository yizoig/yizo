let crypto = require("crypto");
let base64url = require("base64url");

let md5 = (value) => {

  let hash = crypto.createHash('md5');
  // 可任意多次调用update():
  hash.update(value + '');
  return hash.digest('hex');
}

let sha256 = (value, key) => {
  let hmac = crypto.createHmac('sha256', key);

  hmac.update(value);

  return hmac.digest();
}
let sha1 = (value) => {
  let sha1Crypto = crypto.createHash('sha1');
  sha1Crypto.update(value);
  return sha1Crypto.digest('hex');
}
module.exports = { md5, sha256, base64url, sha1 }