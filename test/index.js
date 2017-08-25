let Model = require("./model");


let model = new Model();

//查询数据
(async () => {

    try {
        // testWhere()
        // testLimit();
        // testPage();
        // testOrder();
        testField()
    } catch (e) {
        console.log(e)
    }
})()
//定义错误


function testField(){


    model.field("id,adf,adf");
    console.log(model._data)
    model.field({id:"id",name:"name"});
    console.log(model._data)
    model.field("id desc,name");
    console.log(model._data)
    model.field("id1 desc,name");
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

    model.page("0,8");
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
}