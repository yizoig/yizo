let { Code } = require("../Code/code");
//获取错误信息和具体描述
let Mes={},Detail={};
try{
    newCode = require(APP_PATH+"/comment/code");

    Code = Object.assign(Code,newCode);
    Mes = require(APP_PATH+"/config/language/zh-cn/code/mes");
    Detail = require(APP_PATH+"/config/language/zh-cn/code/detail");
}catch(e){
}
//合并返回码，错误信息和具体描述
let codeArr ={};
for(let key in Code){
    codeArr[Code[key]] = [Mes[key],Detail[key]]
}
console.log(codeArr)
class BaseError extends Error {
    constructor(code, detail = "") {
        super(code); // (1)
        let [mes=null,det=null] = codeArr[code] || [];
        //获取返回码类型
        this.message = mes;
        this.detail = detail || det;
        this.name = "BaseError"; // (2)
        this.code = code;
    }
}
/**
 * 参数错误  不需要制定返回码   因为返回码是一致的
 */
class ValidationError extends BaseError {
    constructor(detail) {
        super(Code.PARAMS_ERR, detail); // (1)
        this.name = "ValidationError"; // (2)
    }
}
module.exports = { ValidationError, BaseError };