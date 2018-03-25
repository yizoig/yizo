const fs = require('fs');
const path = require('path');
module.exports = {
    "port": 3001,//端口
    "protocol": "http",//协议
    "cert": {
        key: fs.readFileSync(path.join(__dirname,'/cert/test.key')),
        cert: fs.readFileSync(path.join(__dirname,'./cert/test.crt'))
    },
    "watch": false
}