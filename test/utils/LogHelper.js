let log4js = require('log4js');
let fs = require("fs");
let path = require("path");

let Log = {};
exports.Log = Log;

//加载配置文件

let logConfig = JSON.parse(fs.readFileSync(__dirname+"/log.json", "utf-8"));
//检查配置文件是否存在 不存在就创建
if (logConfig.appenders) {

  //目录
  let baseDir = logConfig['customBaseDir'];
  let defaultAtt = logConfig["customDefaultAtt"];

  for (let i in logConfig.appenders) {

    let item = logConfig.appenders[i];
    //将默认的配置属性 添加到每一项中
    if (defaultAtt != null) {
      for (let att in defaultAtt) {

        if (item[att] == null) {
          item[att] = defaultAtt[att]; 
        }
      }
    }
    //设置每一项的路径
    if (baseDir != null) {
      if (item["filename"] == null)
        item["filename"] = baseDir;
      else
        item["filename"] = baseDir + item["filename"];
    }

    //获取文件名
    let fileName = item['filename'];
    if (fileName == null) {
      continue;
    }
    //获取占位符
    let pattern = item['pattern'];
    if (pattern != null) {
      fileName += pattern;
    }
    //获取类型
    let category = item['category'];


    if (!path.isAbsolute(fileName)) {
      throw new Error("配置" + category + "的路径不是绝对路径:" + fileName);
    }
    let dir = path.dirname(fileName);
    let date = new Date();

    //获取日期
    checkAndCreateDir(path.join(__dirname+dir));
    item["filename"] = fileName
  }
}
function checkAndCreateDir(dir) {

  if (!fs.existsSync(dir)) {
    checkAndCreateDir(path.dirname(dir))
    fs.mkdirSync(dir);
  }
}


console.log(logConfig);
// return;
//开始配置
log4js.configure(logConfig);
let logDebug = log4js.getLogger('logDebug');
let logInfo = log4js.getLogger('logInfo');
let logWarn = log4js.getLogger('logWarn');
let logErr = log4js.getLogger('logErr');


Log.debug = (mes = "") => {
  logDebug.debug(mes);
}
Log.info = (mes = "") => {

  console.log(mes)
  logInfo.info(mes);
}
Log.warn = (mes = "") => {
  logWarn.warn(mes);
}
Log.error = (mes = "") => {
  logErr.error(mes);
}
