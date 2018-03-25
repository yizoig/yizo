let TestController = require("../controller/test");

let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/test', TestController, [
    //发送验证码
    Route('/', 'all', 'test', {
        needToken:false
    })
])