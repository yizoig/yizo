let md5File = require('md5-file'); 
module.exports = function (req, res, next) {
    console.log("进入文件上传中间件"); 
    let files =  {}; 

    if (req.files) {
        for (let fileIndex = 0; fileIndex < req.files.length; fileIndex++) {
            
            
                    console.log(fileIndex)
                    let file = req.files[fileIndex]; 
                    //获取文件
                    let md5 = md5File.sync(file.path)
                    file['md5'] = md5; 
                    let fieldname = file.fieldname; 
                    //删除field字段
                    delete file.fieldname; 
                    if ( ! files.hasOwnProperty(fieldname)) {
            
                        //存入文件对象
                        files[fieldname] = file; 
            
                    }else {
                        if (Object.prototype.toString.call(files[fieldname]) !== '[object Array]') {
                            files[fieldname] = [files[fieldname]]; 
                        }
                        files[fieldname].push(file); 
                    }
                }
                req.files = files; 
    }
    next(); 
}