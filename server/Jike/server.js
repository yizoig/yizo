'use strict';
//加载jike库
require('./Library/index');
require('colors');
let express = require('express');
let http = require('http');
let serverConfig = require(APP_PATH + '/config/server');
let multer = require('multer')

let { Interface } = require('./Library/interface');
let upload = require( "./Library/upload.js");
let loadDBsql = require( "./Db/sql_loader");

//配置服务器参数
serverConfig = Object.assign({
    "port": 3000,
    "protocol": "http"
}, serverConfig['server'] || {});

module.exports = class Server {
    
    constructor() {
        //创建express
        this.app = express();
    }
    /**
     * 设置中间件
     */
    set middleware(_middleware) {
        this._middleware = _middleware;
    }
    /**
     * 初始化
     */
    async init() {

        //加载中间件
        await this.middleConfig();
    }
    /**
     * 配置中间件
     */
    async middleConfig() {

        await Log("加载解析参数中间件中...".yellow);
        this.app.use(multer({ dest: APP_PATH + '/runtime/cache' }).any());

        await Log("加载上传文件的中间件中...".yellow);
        this.app.use(upload);

        await Log("加载sql语句...".yellow);
        await loadDBsql();

        await Log("加载路由中...".yellow);
        Interface.init(this.app);


        this.app.use((req, res, next) => {
            console.log(req.method.yellow, req.url.green, new Date().toLocaleString());
            next();
        })
        await Log("加载用户自定义中间件...".yellow);
        await this._middleware(this.app);
        //配置用户
        await Log("加载404及500...".yellow);
        this.app.use(function (req, res, next) {
            var err = new jike.BaseError(jike.Code.API_NOTFOUND);
            err.detail = "请正确调用接口";
            err.status= '404';
            next(err);
        });
        //异常捕获
        this.app.use(function (err, req, res, next) {
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            console.error(err);
            res.status(err.status ||500)
            if ("code" in err && err.code) {
                res.json({
                    code: err.code,
                    err_mes: err.message,
                    detail: err.detail
                })
            } else {
                res.json({
                    code: 500,
                    err_mes: "服务器异常",
                    detail: "服务器异常，请稍后再试"
                })
            }
            console.log(`${req.method}`.green, `${req.url}`.yellow, `${err.code || 500}`.red);
        });
    }
    /**
     * 运行服务器
     */
    async run() {
        await this.init();
        //监听端口
        http.createServer(this.app).listen(serverConfig.port, () => {
            console.log(`服务器正在监听${serverConfig.port}端口...`.green)
        })
    }
}
function Log(message, ms = 500) {
    // return new Promise(resolve => setTimeout(() => {
        console.log(message);
        // resolve();
    // }, ms))
}
//专门捕获promise异常
process.on('unhandledRejection', (reason, p) => {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});