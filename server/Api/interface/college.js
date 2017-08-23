let CollegeController = require("../controller/college");

let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/colleges', CollegeController, [
    //获取学校列表
    Route('/', 'get', 'list', {
        validate: {
            current: [
                Validate.EXISTS_VALIDATE,
                ['number', 'currentNumberErr']
            ],
            pageSize: [
                Validate.EXISTS_VALIDATE,
                ['number', 'pageSizeNumberErr']
            ]
        },
        needToken: false
    }),
    //添加学校
     Route('/', 'post', 'add', {
        validate: {
            name: [
                Validate.MUST_VALIDATE,
                ['require', 'collegeNameNotNullErr']
            ]
        },
        needToken: false
    }),
     //删除学校
     Route('/', 'delete', 'delete', {
        validate: {
            ids: [
                Validate.MUST_VALIDATE,
                ['Array', 'idsFormatErr', 'varType']
            ]
        },
        needToken: false
    }),
    //修改学校信息
    Route('/:id', 'put', 'update', {
        validate: {
            name: [
                Validate.MUST_VALIDATE,
                ['require', 'collegeNameNotNullErr']
            ]
        },
        needToken: false
    }),
])