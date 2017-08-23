let Model = require("./model");


let model = new Model();

//查询数据
(async ()=>{
    //事务测试
    await model.startTrans();
    let {insertId=null} = await model.query("insert into admin set name='ce是'");

    if(!insertId){
        await model.rollback();
    }
    await model.query(`insert into user set admin=${insertId}`,);
    await model.commit();
    console.log(model.sqls)
})()
//定义错误