
'use strict';
let path = require('path');
global['APP_PATH'] = path.join(__dirname, 'Api');
global['JIKE_PATH'] = path.join(__dirname, 'Jike');
let Server = require("./Jike/server");
let server = new Server();
/**
 * 设置中间件
 */
server.middleware = (app)=>{

}

/**
 * 启动服务器
 */
server.run();