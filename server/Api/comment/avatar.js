let imagesUtils = require("images");
let headdir = APP_PATH + '/static/upload/avatars/';
let imageinfo = require('imageinfo');
let fs = require('fs');
let { BaseError, Code } = jike;
//头像支持类型
let supperType = ['JPG','PNG'];

 // //不存在目录就创建目录
 if(!fs.existsSync(headdir)){
    fs.mkdirSync(headdir);
}
//头像路径
function setAvatar({avatar,id}){
   
    checkImage(avatar)
    try{
        //移动文件到头像目录
        if(fs.existsSync(avatar) ){
            let imagesUtils = require("images");
            imagesUtils(avatar).size(200).save(headdir+id+'.png',{quality : 100})
            return true;
        }
        return false;
    }catch(e){
        //失败就返回false
        console.log(e)
        return false;
    }
    return false;
}

//图片检测

function checkImage(sourcePath){

    let data =fs.readFileSync(sourcePath);

    let info = imageinfo(data);
    console.log(info)
    if(info && supperType.includes(info['format'])){
        return;
    }
    throw new BaseError(Code.AVATAR_TYPE_ERR);
}
module.exports = {setAvatar};