let MultiRunOrderController = require("../controller/MultiRunOrder")
let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
/**
 * 跑跑多单
 */
Interface.create('/order/multi', MultiRunOrderController, [

    //创建多用户的跑单
    Route("/add", "post", "add", {
        validate: {
            content: [
                Validate.MUST_VALIDATE,
                ['require', "ValueNotNullErr"]
            ],
            gender_constraint: [
                Validate.MUST_VALIDATE,
                [[-1, 0, 1], 'genderConstraintTypeErr', 'in']
            ],
            college: [
                Validate.MUST_VALIDATE,
                ["require", "ValueNotNullErr"]
            ],
            maxNum:[
                Validate.MUST_VALIDATE,
                ["Number", "ValueNotNullErr",'varType']
            ]
        }
    }),
    //取消跑跑订单
    Route('/cancel', 'delete', 'cancel', {
        validate: {
            id: [
                Validate.MUST_VALIDATE,
                ['require', 'orderNotNull']
            ]
        }
    }),
    /**
     * 抢单  用户需要跑跑
     */
    Route("/grab", 'post', 'grab', {
        validate: {
            id: [
                Validate.MUST_VALIDATE,
                ['require', 'orderNotNull']
            ],
            content:[
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
        }
    }),
    /**
     * 放弃订单  用户不需要跑跑
     */
    Route("/quit", 'delete', 'quit', {
        validate: {
            id: [
                Validate.MUST_VALIDATE,
                ['require', 'orderNotNull']
            ]
        }
    }),
    /**
     * 发货   创建人发货
     */
    Route("/deliver", 'put', 'deliver', {
        validate: {
            id: [
                Validate.MUST_VALIDATE,
                ['require', 'orderNotNull']
            ]
        }
    }),
    /**
     * 完成 创建人完成
     */
    Route("/finally", 'put', 'finally', {
        validate: {
            id: [
                Validate.MUST_VALIDATE,
                ['require', 'orderNotNull']
            ],
            user:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ]
        }
    }),
    /**
     * 结束  用户结束
     */
    Route("/end", 'put', 'end', {
        validate: {
            id: [
                Validate.MUST_VALIDATE,
                ['require', 'orderNotNull']
            ],
            user:[
                Validate.MUST_VALIDATE,
                ['require', 'ValueNotNullErr']
            ]
        }
    }),
]);