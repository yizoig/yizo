let RunOrderController = require("../controller/runOrder");
let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/runOrder', RunOrderController, [

    /**
     * 创建订单
     */
    Route('/find', 'post', 'findRun', {
        validate: {
            content:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            title:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            college:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            gender:[
                Validate.MUST_VALIDATE,
                [['-1','0','1'], 'genderConstraintTypeErr','in']
            ],
            address:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            money:[
                Validate.MUST_VALIDATE,
                ['NumberArray', 'runOrderMoneyTypeErr','varType']
            ],
            demand:[
                Validate.MUST_VALIDATE,
                ['StringArray', 'demandTypeErr','varType']
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
    Route('/give', 'post', 'giveRun', {
        validate:{
            content:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            title:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            college:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ],
            gender:[
                Validate.MUST_VALIDATE,
                [['-1','0','1'], 'genderConstraintTypeErr','in']
            ]
        }
    })
]);