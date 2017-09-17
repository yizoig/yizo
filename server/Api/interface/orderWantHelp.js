let OrderWantHelpController = require("../controller/orderWantHelp");

let { Interface, Route, Validate } = jike;
/**
 * 创建接口解析函数 将对应的接口解析到对应的controller的对应方法
 * 默认需要token
 */
Interface.create('/order', OrderWantHelpController, [

  //获取所有订单
  Route('/help/want', 'get', 'list', {
    validate: {
      needPage:[
        Validate.EXISTS_VALIDATE,
        ['Boolean','varTypeErr','varType']
      ],
      page:[
        Validate.EXISTS_VALIDATE,
        ['Number','varTypeErr','varType']
      ],
      size:[
        Validate.EXISTS_VALIDATE,
        ['Number','varTypeErr','varType']
      ],
      college:[
        Validate.EXISTS_VALIDATE,
        ['require','ValueNotNullErr']
      ]
    },
    needToken: false
  }),
  //获取指定订单
  Route('/help/want/info/:id', 'get', 'getinfoById', {
    needToken: false
  }),
  //创建聘跑跑的订单
  Route('/help/want', 'post', 'add', {
    validate: {
      content: [
        Validate.MUST_VALIDATE,
        ['require', 'ValueNotNullErr']
      ],
      title: [
        Validate.MUST_VALIDATE,
        ['require', 'ValueNotNullErr']
      ],
      college: [
        Validate.MUST_VALIDATE,
        ['require', 'ValueNotNullErr']
      ],
      gender_constraint: [
        Validate.MUST_VALIDATE,
        [[-1, 0, 1], 'genderConstraintTypeErr', 'in']
      ],
      address: [
        Validate.MUST_VALIDATE,
        ['require', 'ValueNotNullErr']
      ],
      money: [
        Validate.MUST_VALIDATE,
        ['require', 'runOrderMoneyTypeErr']
      ],
      demands: [
        Validate.MUST_VALIDATE,
        ['require', 'demandTypeErr']
      ],
      contact: [
        Validate.MUST_VALIDATE,
        ['require', 'ValueNotNullErr']
      ],
      number: [
        Validate.MUST_VALIDATE,
        ['tel', 'telErr']
      ],
      deadline: [
        Validate.EXISTS_VALIDATE,
        ['require', 'ValueNotNullErr']
      ],
    },
  }),
  //取消订单
  Route('/help/want/cancel', 'delete', 'cancel', {
    validate: {
      id: [
        Validate.MUST_VALIDATE,
        ['require', 'orderNotNull']
      ]
    }
  }),
  /**
   * 抢单
   */
  Route("/help/want/grab", 'post', 'grab', {
    validate: {
      id: [
        Validate.MUST_VALIDATE,
        ['require', 'orderNotNull']
      ]
    }
  }),
  /**
   * 放弃跑腿
   */
  Route("/help/want/quit", 'delete', 'quit', {
    validate: {
      id: [
        Validate.MUST_VALIDATE,
        ['require', 'orderNotNull']
      ]
    }
  }),
  /**
   * 发货
   */
  Route("/help/want/deliver", 'put', 'deliver', {
    validate: {
      id: [
        Validate.MUST_VALIDATE,
        ['require', 'orderNotNull']
      ]
    }
  }),
  /**
   * 完成
   */
  Route("/help/want/finally", 'put', 'finally', {
    validate: {
      id: [
        Validate.MUST_VALIDATE,
        ['require', 'orderNotNull']
      ]
    }
  }),
  /**
   * 结束
   */
  Route("/help/want/end", 'put', 'end', {
    validate: {
      id: [
        Validate.MUST_VALIDATE,
        ['require', 'orderNotNull']
      ]
    }
  }),
])