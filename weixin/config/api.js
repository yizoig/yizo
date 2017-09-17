// export let host = "https://api.yizo.zhiyuan95.cn";
export let host = "https://192.168.1.122:3000";


export let apis = {
  
    //学校列表
    "collegelist": ["GET", '/colleges'],
    //跑单列表
    "runOrderlist": ["GET", "/order/recruit"],

    //炮弹信息
    "runOrderInfo":['GET','/order/recruit/info/:id']
    // //创建跑跑订单
    // "createFindOrder": ['POST', '/order/recruit'],
    // //抢单
    // "grabFindOrder": ['POST', '/order/recruit/grab'],
    
    // //放弃跑腿
    // "quitFindOrder": ['delete', '/order/recruit/quit'],
    // //取消订单
    // "cancelOrders": ['delete', '/order/recruit/cancel'],
    // "signIn": ["POST", '/account/signIn'],
    // "updateUserInfo": ["PUT", '/account/:id'],
    // "changeCollege":["PUT",'/users/college/:id'],
    // "changePwd": ['PUT', '/account/pwd/:id'],
    // "changeTel": ['PUT', '/account/tel'],
    // "sendCode": ['GET', '/smsCode/:tel/:type'],
    // "signUp": ['POST', '/users/signUp'],
    // "resetPwd": ['PUT', '/account/pwd/tel/:tel'],
};