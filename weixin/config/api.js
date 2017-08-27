export let host = "https://api.yizo.exvu.vip";


export let apis = {
    "runOrders": ["GET", "/runOrders"],
    "collegelist": ["GET", '/colleges'],
    "signIn": ["POST", '/session'],
    "updateUserInfo": ["PUT", '/users/:id'],
    "changePwd": ['PUT', '/users/pwd/:id'],
    "changeTel": ['PUT', '/users/tel'],
    "sendCode": ['GET', '/sms/code/:tel'],
    "signUp": ['POST', '/users/signUp'],
    "resetPwd": ['PATCH', '/users/pwd'],
    "createRunOrder": ['POST', '/runOrders'],
    "commentList": ['GET', '/runOrders/comment'],
    "updateOrder": ['PUT', '/runOrders/:id'],
    "addComment": ['post', '/runOrders/comment'],
};