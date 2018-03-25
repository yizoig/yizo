const Application = require("jikejs");
const serverConfig = require('./config/server');
const path = require('path');
//生产模式
const instance = new Application({
    APP_PATH: path.join(__dirname, '/src'),
    env: 'production',
    server: serverConfig
})
instance.run();