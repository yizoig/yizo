let fs = require("fs");
let path = require("path");
let sqldir = APP_PATH+'/config/sql/';

module.exports  = function loadDBsql(){

    //获取config/sql下的所有db文件

    let files = fs.readdirSync(sqldir);
    // console.log(files);
    //加载每一个文件的sql语句

    let sqls = {};
    files.forEach((file)=>{


        let fileName = file.substring(0,file.indexOf('.'));
        //获取文件的内容   匹配所有sql及sql变量名称
        let values = fs.readFileSync(sqldir+file).toString().match(/[^#]#[^#]+/gi) ||[];
        // console.log(values);
        //拆分所有sql及sql变量名称
        let sql_arr = values.map(str=>str.match(/#\w+/));

        sql_arr.forEach((item)=>{

            //获取sql和名称
            let sql = item['input'];
            sql = sql.replace(item[0],'').replace(/\s+/ig,' ').trim();
            let name = item[0];
            name = name.replace(/#/ig,'');

            sqls[name] = sql;
        })
    });
   global.sqls = sqls;
}