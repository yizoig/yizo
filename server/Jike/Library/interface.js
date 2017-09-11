let fs = require("fs");
let path = require("path")
let { Router } = require('express');

//接口文件目录
let interfacePath = APP_PATH + '/interface/';
//参数验证工具
let Validate = require('./validate');
//命令行颜色插件
require('colors');

//express app对象  用于设置路由
let _app = null;
class Interface {
    /**
     * 加载interface目录所有的文件
     */

    static init(app) {
        _app = app;
        //获取interface目录下的所有文件名
        let files = fs.readdirSync(interfacePath);
        //加载接口文件
        for (let filename of files) {
            require(interfacePath + filename);
        }

    }
    /**
     * 創建接口
     * @param {*} path 父路由
     * @param {*} controllerClass 路由控制器 
     * @param {*} routers 子路由
     */
    static create(path, controllerClass, routers) {
        let expressRouter = Router();

        //遍历interface的所有路由
        routers.forEach(router => {
            //设置路由
            /**
             * method 請求方式
             * childrenPath 子路由地址
             * args 驗證參數等等
             */

            let { method, name: childrenPath, args = {}, action } = router;
            expressRouter[method](childrenPath, async (req, res, next) => {
                try {
                    //输出用户请求api 创建controller
                    let controller = new controllerClass(req, res, next);
                    console.log("控制器:", `${controller}`.green, "方法:", `${action}`.green);
                    controller.reqUser = {};
                    //needtoken默认为true
                    if (!("needToken" in args) || args.needToken) {
                        console.log("需要token");
                        let { verifyToken = () => { } } = require(APP_PATH + "/comment/jwt");
                        let user = await verifyToken(req.header('access-token'));
                        controller.reqUser = user;
                    }
                    //参数格式化
                    let params = Object.assign(
                        req.params || {},
                        req.query || {},
                        req.body || {},
                        req.files || {},
                    );
                    for (let key in params) {

                        try {
                            params[key] = JSON.parse(params[key])
                        } catch (e) { }
                    }

                    //當存在參數驗證條件時 对参数进行验证
                    if ("validate" in args) {

                        let { type = null } = controller.reqUser;
                        //将公用的参数验证和不同身份的参数验证合并
                        let validate = Object.assign(args.validate['base'] || {}, args.validate[type || 'user'] || {});
                        for (let key in args.validate) {

                            if (Object.prototype.toString.call(args.validate[key]) === '[object Array]') {
                                validate[key] = args.validate[key];
                            }
                        }
                        console.log(params)
                        params = Validate.autoCheck(params, validate);
                    }
                    //执行action方法 將請求參數傳遞給指定的控制器方法
                    await controller[router.action](params);
                } catch (err) {
                    console.log(err);
                    //如果是自定義的異常錯誤  就返回錯誤信息 否則返回通用異常
                    res.status(err.code / 1000 == 5 ? 500 : 200);
                    let returnMessage = {
                        code: err.code || jike.Code.SERVER_ERR
                    };
                    //存在错误或描述才显示
                    err.message && (returnMessage['err_mes'] = err.message)
                    err.detail && (returnMessage['detail'] = err.detail)

                    res.json(returnMessage)
                    return console.log(`${req.method}`.green, `${req.url}`.yellow, `${err.code || 500}`.red);
                }
            })
        });

        //添加路由到express app
        _app.use(path, expressRouter);
    }
}


exports.Route = (name, method, action, args = {}) => ({ name, method, action, args })
exports.Interface = Interface;