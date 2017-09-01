let OrderRunController = require("../controller/orderRun");

let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/order', OrderRunController, [

    //创建聘跑跑的订单
    Route('/recruit/', 'post', 'add', {
        validate: {
            content:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            college:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            gender_constraint:[
                Validate.MUST_VALIDATE,
                [[-1,0,1], 'genderConstraintTypeErr','in']
            ],
            address:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            money:[
                Validate.MUST_VALIDATE,
                ['require', 'runOrderMoneyTypeErr']
            ],
            demands:[
                Validate.MUST_VALIDATE,
                ['require', 'demandTypeErr']
            ],
            contact:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            number:[
                Validate.MUST_VALIDATE,
                ['tel', 'telErr']
            ],
        },
        needToken:false
    }),
])