let SmsController = require("../controller/sms");
let smstype = require('../comment/smstype');

let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/', SmsController, [
    //发送验证码
    Route('/smsCode/:tel/:type', 'get', 'sendCode', {
        validate: {
            tel: [
                Validate.MUST_VALIDATE,
                ['tel', 'telErr']
            ],
            type:[
                Validate.MUST_VALIDATE,
                [smstype,'smsCodeTypeError','in']
            ]
        },
        needToken:false
    }),
    //验证验证码
    Route('/smsCode/:tel/:type/:code', 'post', 'verifyCode', {
        validate: {
            tel: [
                Validate.MUST_VALIDATE,
                ['tel', 'telErr']
            ],
            type:[
                Validate.MUST_VALIDATE,
                [smstype,'smsCodeTypeError','in']
            ],
            code: [
                Validate.MUST_VALIDATE,
                [6, 'codeLengthErr', 'length']
            ]
        },
        needToken:false
    })
])