let Mysql = require("../Db/mysql");
let {BaseError} = require("./error")
let {Code} = require("../Code/code")
module.exports = class Model extends Mysql{
    /**
     * 覆盖msyql方法
     * @param {*} sql 
     * @param {*} options 
     */
    async query(sql,...options){

        try{
            //进行字段映射
            for(let key in this._map){
                if(options.hasOwnProperty(key)){
                    options[this._map[key]] = options[key];
                    delete options[key];
                }
            }
            let result =  await super.query({
                sql,
                // nestTables:'_',
                values:options
            });
            return result;
        }catch(e){
            console.log(e);
            throw new BaseError(Code.SQL_ERR,"sql查询错误");
        }
       
    }
}