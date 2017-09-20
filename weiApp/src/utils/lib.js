// Object.defineProperty(Object.prototype,'join',{
//   writable:false,
//   enumerable:false,
//   configurable:true,
//   value:function(separator='='){

//     let data = [];
//     for(let item in this){
//       data.push(item+separator+this[item])
//     }
//     return data;
//   }
// });