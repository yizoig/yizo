let AccountController = require("../controller/account");
let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/account', AccountController, [
    //user和管理员登录接口
    Route('/signIn', 'post', 'signin', {
        validate: {
            account: [
                Validate.MUST_VALIDATE,
                ['tel', 'telErr']
            ],
            password: [
                Validate.MUST_VALIDATE,
                ['require', 'passwordNullErr']
            ],
            type: [
                Validate.EXISTS_VALIDATE,
                [['user', 'admin'], 'signInTypeError', 'in']
            ]
        },
        needToken: false
    }),
    //修改信息
    Route("/:id(\\d+)",'put','changeInfo',{
        validate: {
            nicename: [
                Validate.EXISTS_VALIDATE,
                ['require', 'niceNameNotNullErr']
            ],
            gender: [
                Validate.EXISTS_VALIDATE,
                [[0,1], 'genderErr','in']
            ]
        },
        needToken: false
    }),
    //账户头像   user  admin头像一致
    Route("/head/:id(\\d+).png", 'get', 'head', {
        needToken: false
    }),
    /**
     * 修改手机号
     */
    Route("/tel", 'put', 'changeTel', {
        validate: {
            base:{
                tel: [
                    Validate.MUST_VALIDATE,
                    ['tel', 'telErr']
                ],
                newTel: [
                    Validate.MUST_VALIDATE,
                    ['tel', 'newTelErr']
                ],
            },
            user:{
                code: [
                    Validate.MUST_VALIDATE,
                    [6, 'codeLengthErr', 'length']
                ],
                newCode: [
                    Validate.MUST_VALIDATE,
                    [6, 'codeLengthErr', 'length']
                ]
            }
        },
        needToken: true
    }),
    //手机验证码改密码
    Route('/pwd/tel/:tel', 'put', 'changePwdByTel', {
        validate: {
            base:{
                tel: [
                    Validate.MUST_VALIDATE,
                    ['tel', 'telErr']
                ],
                password: [
                    Validate.MUST_VALIDATE,
                    ['require', 'passwordNullErr'],
                    [[6, 12], 'passwordLengthErr', 'length']
                ],
            },
            user:{
                code: [
                    Validate.MUST_VALIDATE,
                    [6, 'codeLengthErr', 'length']
                ]
            }
        },
        needToken: false
    }),
    //旧密码换新密码
    Route('/pwd/:id(\\d+)', 'put', 'changePwd', {
        validate: {
            password: [
                Validate.MUST_VALIDATE,
                ['require', 'passwordNullErr']
            ],
            newPassword: [
                Validate.MUST_VALIDATE,
                ['require', 'newPasswordNullErr'],
                [[6, 12], 'newPasswordLengthErr', 'length']
            ]
        },
        needToken: false
    }),
    
])