let OrderController = require("../controller/order");

let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/order', OrderController, [

    //创建聘跑跑的订单
    Route('/run', 'get', 'list', {

        needToken:false
    })
]);