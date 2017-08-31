
//判断变量类型
function getType(data){

    return  Object.prototype.toString.call(data).match(/\[object (.*?)\]/)[1];
}

/**
 * 
 * @param {*} data 
 * 只判断数组与对象
 */
function empty(data){
    switch(getType(data)){
        case "Array":{
            return data.length==0;
        }
        case "Object":{
            return Object.getOwnPropertyNames(data).length==0;
        }
        case "String":{
            return data=="";
        }
        default:{
            return false;
        }
    }
}
// module.exports = {getType,empty}

global.Util = {getType,empty};