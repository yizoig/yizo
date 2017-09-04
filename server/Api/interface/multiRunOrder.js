let MultiRunOrderController = require("../controller/MultiRunOrder")
let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
/**
 * 跑跑多单
 */
Interface.create('/multi', MultiRunOrderController, [

    //创建多用户的跑单
    Route("add", "get", "add", {
        Validate: {
            content: [
                Validate.MUST_VALIDATE,
                ['require', "ValueNotNullErr"]
            ],
            gender_constraint: [
                Validate.MUST_VALIDATE,
                [[-1, 0, 1], 'genderConstraintTypeErr', 'in']
            ],
            college:[
                Validate.MUST_VALIDATE,
                ["require","ValueNotNullErr"]
            ]
        }
    })
]);