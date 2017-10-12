
//环境
const env = 'production';//'development' or 'production'
const version = 2.0

const hosts = {
  development: 'https://192.168.1.128:3000',
  production: 'https://api.yizo.zhiyuan95.cn'
}

const weixin = {
  appid:'wx5460044ed4be3f57',
  secret:'a1c0ad02b8d77887d56177a2fc71318a'
}
module.exports = {
  env,
  version,
  weixin,
  host: hosts[env]
}