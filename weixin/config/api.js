// export let host = "https://api.yizo.zhiyuan95.cn";
export let host = "https://127.0.0.1:3000";


export let apis = {
    "runOrders": ["GET", "/runOrders"],
    "collegelist": ["GET", '/colleges'],
    "signIn": ["POST", '/account/signIn'],
    "updateUserInfo": ["PUT", '/account/:id'],
    "changeCollege":["PUT",'/users/college/:id'],
    "changePwd": ['PUT', '/account/pwd/:id'],
    "changeTel": ['PUT', '/account/tel'],
    "sendCode": ['GET', '/smsCode/:tel/:type'],
    "signUp": ['POST', '/users/signUp'],
    "resetPwd": ['PUT', '/account/pwd/tel/:tel'],
    "createRunOrder": ['POST', '/runOrders'],
    "commentList": ['GET', '/runOrders/comment'],
    "updateOrder": ['PUT', '/runOrders/:id'],
    "addComment": ['post', '/runOrders/comment'],
};