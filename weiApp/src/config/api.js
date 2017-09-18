
//环境
const env = 'development';//'development' or 'production'

const version = 2.0


const hosts = {
  development: 'https://192.168.1.122:3000',
  production: 'https://api.yizo.zhiyuan95.cn'
}

//apis
const apis = {
  account: {
    path: '/account',
    signIn: {
      method: 'POST',
      url: '/signIn'
    },
    updateInfo:{
      method: 'PUT',
      url: '/:id'
    },
    changePwd:{
      method:'PUT',
      url:'/pwd/:id'
    },
    changeTel:{
      method:'PUT',
      url:'/tel'
    }
  },
  college:{
    path:'/colleges',
    list:{
      method: 'GET',
      url: '/'
    }
  },
  sms:{
    path:'/smsCode',
    sendCode:{
      method:'GET',
      url:'/:tel/:type'
    }
  },
  wantHelpOrder: {
    path: '/order/help/want',
    //获取列表
    list: {
      method: 'GET',
      url: '/'
    },
    info:{
      method: 'GET',
      url: '/info/:id'
    },
    add:{
      method:'POST',
      url:'/'
    }
  }
}
module.exports = {
  env,
  version,
  host:hosts[env],
  apis: disposeUrl(apis, hosts[env])
}

function disposeUrl(obj, prefix) {
  Object.keys(obj).forEach(v => {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url
    } else {
      if(v!=='path'){
        obj[v] = disposeUrl(obj[v], prefix+(obj[v]['path'] ||''))
      }
    }
  })
  return obj
}


















// const apis = {

//   //学校列表
//   "collegelist": ["GET", '/colleges'],
//   //跑单列表
//   "runOrderlist": ["GET", "/order/recruit"],

//   //炮弹信息
//   "runOrderInfo": ['GET', '/order/recruit/info/:id']
//   //创建跑跑订单
//   "createFindOrder": ['POST', '/order/recruit'],
//   //抢单
//   "grabFindOrder": ['POST', '/order/recruit/grab'],

//   //放弃跑腿
//   "quitFindOrder": ['delete', '/order/recruit/quit'],
//   //取消订单
//   "cancelOrders": ['delete', '/order/recruit/cancel'],
//   "signIn": ["POST", '/account/signIn'],
//   "updateUserInfo": ["PUT", '/account/:id'],
//   "changeCollege":["PUT",'/users/college/:id'],
//   "changePwd": ['PUT', '/account/pwd/:id'],
//   "changeTel": ['PUT', '/account/tel'],
//   "sendCode": ['GET', '/smsCode/:tel/:type'],
//   "signUp": ['POST', '/users/signUp'],
//   "resetPwd": ['PUT', '/account/pwd/tel/:tel'],
// };