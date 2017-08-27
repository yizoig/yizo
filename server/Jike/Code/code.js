let Code = {
    //请求成功
    SUCCESS: 0,
    NOT_CHANGE:1,
    //参数错误
    PARAMS_ERR:3000,
    //API不存在
    API_NOTFOUND:4000,
    //服务器错误
    SERVER_ERR:5000,
    //连接数据库超时
    CON_DB_TIMEOUT:5001,
    SQL_ERR:5002,
    UN_KNOWN_ERROR:5003

}
module.exports = { Code }