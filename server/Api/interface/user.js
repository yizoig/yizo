let UserController = require("../controller/user");
let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/users', UserController, [
    //获取用户列表
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
    //添加用户
    Route('/', 'post', 'add', {
        validate: {
            account: [
                Validate.MUST_VALIDATE,
                ['number', 'telErr']
            ],
            password: [
                Validate.MUST_VALIDATE,
                ['number', 'passwordNullErr']
            ]
        },
        needToken: false
    }),
    //删除用户
    Route('/', 'delete', 'delete', {
        validate: {
            ids: [
                Validate.MUST_VALIDATE,
                ['Array', 'idsFormatErr', 'varType']
            ],
            mode: [
                Validate.EXISTS_VALIDATE,
                [[-1, 0, 1], 'modeOutRangeErr', 'in']
            ]
        },
        needToken: false
    }),
    //用户注册
    Route('/signUp', 'post', 'signUp', {
        validate: {
            account: [
                Validate.MUST_VALIDATE,
                ['tel', 'telErr']
            ],
            password: [
                Validate.MUST_VALIDATE,
                ['require', 'passwordNullErr'],
                [[6,18], 'passwordLengthErr', 'length']
            ],
            nickname: [
                Validate.EXISTS_VALIDATE
                ['require', 'nicknameNotNullErr']
            ],
            gender: [
                Validate.EXISTS_VALIDATE,
                [[0,1], 'genderErr','in']
            ],
            code: [
                Validate.MUST_VALIDATE,
                [6, 'codeLengthErr', 'length']
            ]
        },
        needToken: false
    }),
    //获取用户基本信息
    Route('/:id(\\d+)','get','getUserInfo',{
        needToken: false
    }),
    /**
     * 修改学校 用户
     */
    Route('/college/:id', 'put', 'changeCollege', {
        validate: {
            college: [
                Validate.MUST_VALIDATE,
                ['require', 'collegeIDNotNullErr']
            ]
        },
        needToken: false
    }),
])