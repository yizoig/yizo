let OrderCommentController = require("../controller/orderComment");

let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/order/comment', OrderCommentController, [


  Route('/', 'get', 'list', {
    validate: {
      needPage: [
        Validate.EXISTS_VALIDATE,
        ['Boolean', 'varTypeErr', 'varType']
      ],
      page: [
        Validate.EXISTS_VALIDATE,
        ['Number', 'varTypeErr', 'varType']
      ],
      size: [
        Validate.EXISTS_VALIDATE,
        ['Number', 'varTypeErr', 'varType']
      ]
    },
    needToken: false
  }),
  //创建聘跑跑的订单
  Route('/', 'post', 'add', {
    validate: {
      user: [
        Validate.MUST_VALIDATE,
        ['require', "ValueNotNullErr"]
      ],
      content: [
        Validate.MUST_VALIDATE,
        ['require', "ValueNotNullErr"]
      ],
      order_id: [
        Validate.MUST_VALIDATE,
        ['require', "ValueNotNullErr"]
      ],
    },
    needToken: true
  })
]);