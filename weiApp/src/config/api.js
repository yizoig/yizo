
//环境
const env = 'development';//'development' or 'production'
const version = 2.0

const hosts = {
  development: 'http://192.168.43.170:3001/api',
  production: 'https://api.yizo.exvu.vip'
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
