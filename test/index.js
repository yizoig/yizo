let Model = require("./model");
require("./utils/Array");

let model = new Model();
model.table("user");
//查询数据
(async () => {

    try {
        // testField();
        // testData()
        // testWhere()
        // testLimit()
        // testPage()
        test();
    } catch (e) {
        console.log(e)
    }
})()
//定义错误

function test(){

    model.data("id      =     1&   adf = 2   ").where([
        [
            { id: 1 }, "or", { name: 2 }
        ], "and", [
            { age: "sadfasd" }, "or", { sex: "sadfasd", id: 1 }
        ]
    ]).insert();
    console.log(model._data.sql)
    model.data("id      =     1&   adf = 2   ").where([
        [
            { id: 1 }, "or", { name: 2 }
        ], "and", [
            { age: "sadfasd" }, "or", { sex: "sadfasd", id: 1 }
        ]
    ]).update();
    console.log(model._data.sql)
    model.field("id as ids,df").where([
        [
            { id: 1 }, "or", { name: 2 }
        ], "and", [
            { age: "sadfasd" }, "or", { sex: "#sadfasd", id: 1 }
        ]
    ]).select();
    console.log(model._data.sql)
}
function testData(){

    model.data("id      =     1&   adf = 2   ");
    console.log(model._data)
    model.data({
        id:1,
        add:2,
        bbb:3
    });
    console.log(model._data)
}
function testField(){


    model.field("id,adf,adf");
    console.log(model._data)
    model.field("id AS college_id1,adf,adf as id");
    console.log(model._data)
    model.field(`
        count(id)             as college_id2,
        name as college_name
    `);
    console.log(model._data)
}

function testOrder(){

    model.order("      id      desc    ");
    console.log(model._data)
    model.order("id   desc   , name asc");
    console.log(model._data)
    model.order("id desc,name");
    console.log(model._data)
    model.order({id:"asc",name:"desc"});
    console.log(model._data)
}

function testPage() {

    model.page("1,8");
    console.log(model._data)
    model.page(5, 4);
    console.log(model._data)
}


function testLimit() {

    model.limit("1,99");
    console.log(model._data)
    model.limit(0, 13);
    console.log(model._data)
}
function testWhere() {
    // id =1 and name =2
    model.where({ id: 1, name: '121', _logic: "OR" });
    console.log(model._data)

    //id =1 or name=2

    model.where([
        { id: "1" }, "or", { name: 2 }, "and", { sex: 1 }
    ])
    console.log(model._data)
    //id=1 or name=2 and age=3 ==> (id=1 or name=2) and age=3

    model.where([
        { id: 1, name: 2, _logic: "or" },
        "and",
        { id: 3 }
    ])
    console.log(model._data)

    //id=1 or name=2 and (age=3 or sex=4) ==>（id=1 or name=2） and (age=3 or sex=4)
    model.where([
        [
            { id: 1 }, "or", { name: 2 }
        ], "and", [
            { age: "sadfasd" }, "or", { sex: "sadfasd", id: 1 }
        ]
    ])
    console.log(model._data)



    model.where([
        [
            { id:['not in',[1,2,34,5]] }, "or", { name: ["is not null"] }
        ], "and", [
            { age: ["<>",1] }, "or", { sex: "sadfasd", id: ["BETWEEN",1,3] }
        ]
    ])
    console.log(model._data)
}