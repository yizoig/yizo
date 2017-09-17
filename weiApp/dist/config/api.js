'use strict';

//环境
var env = 'development'; //'development' or 'production'

var version = 2.0;

var hosts = {
  development: 'https://192.168.1.122:3000',
  production: 'https://api.yizo.zhiyuan95.cn'

  //apis
};var apis = {
  account: {
    path: '/account',
    signIn: {
      method: 'POST',
      url: '/signIn'
    }
  },
  wantHelpOrder: {
    path: '/order/help/want',
    //获取列表
    list: {
      method: 'GET',
      url: '/'
    },
    info: {
      method: 'GET',
      url: '/info/:id'
    }
  }
};
module.exports = {
  env: env,
  version: version,
  apis: disposeUrl(apis, hosts[env])
};

function disposeUrl(obj, prefix) {
  Object.keys(obj).forEach(function (v) {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url;
    } else {
      if (v !== 'path') {
        obj[v] = disposeUrl(obj[v], prefix + (obj[v]['path'] || ''));
      }
    }
  });
  return obj;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJlbnYiLCJ2ZXJzaW9uIiwiaG9zdHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJhcGlzIiwiYWNjb3VudCIsInBhdGgiLCJzaWduSW4iLCJtZXRob2QiLCJ1cmwiLCJ3YW50SGVscE9yZGVyIiwibGlzdCIsImluZm8iLCJtb2R1bGUiLCJleHBvcnRzIiwiZGlzcG9zZVVybCIsIm9iaiIsInByZWZpeCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwidiJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBLElBQU1BLE1BQU0sYUFBWixDLENBQTBCOztBQUUxQixJQUFNQyxVQUFVLEdBQWhCOztBQUdBLElBQU1DLFFBQVE7QUFDWkMsZUFBYSw0QkFERDtBQUVaQyxjQUFZOztBQUdkO0FBTGMsQ0FBZCxDQU1BLElBQU1DLE9BQU87QUFDWEMsV0FBUztBQUNQQyxVQUFNLFVBREM7QUFFUEMsWUFBUTtBQUNOQyxjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDO0FBRkQsR0FERTtBQVFYQyxpQkFBZTtBQUNiSixVQUFNLGtCQURPO0FBRWI7QUFDQUssVUFBTTtBQUNKSCxjQUFRLEtBREo7QUFFSkMsV0FBSztBQUZELEtBSE87QUFPYkcsVUFBSztBQUNISixjQUFRLEtBREw7QUFFSEMsV0FBSztBQUZGO0FBUFE7QUFSSixDQUFiO0FBcUJBSSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZmLFVBRGU7QUFFZkMsa0JBRmU7QUFHZkksUUFBTVcsV0FBV1gsSUFBWCxFQUFpQkgsTUFBTUYsR0FBTixDQUFqQjtBQUhTLENBQWpCOztBQU1BLFNBQVNnQixVQUFULENBQW9CQyxHQUFwQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0JDLFNBQU9DLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsYUFBSztBQUM1QixRQUFJSixJQUFJSyxDQUFKLEVBQU9aLEdBQVgsRUFBZ0I7QUFDZE8sVUFBSUssQ0FBSixFQUFPWixHQUFQLEdBQWFRLFNBQVNELElBQUlLLENBQUosRUFBT1osR0FBN0I7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFHWSxNQUFJLE1BQVAsRUFBYztBQUNaTCxZQUFJSyxDQUFKLElBQVNOLFdBQVdDLElBQUlLLENBQUosQ0FBWCxFQUFtQkosVUFBUUQsSUFBSUssQ0FBSixFQUFPLE1BQVAsS0FBaUIsRUFBekIsQ0FBbkIsQ0FBVDtBQUNEO0FBQ0Y7QUFDRixHQVJEO0FBU0EsU0FBT0wsR0FBUDtBQUNEOztBQW1CRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v546v5aKDXHJcbmNvbnN0IGVudiA9ICdkZXZlbG9wbWVudCc7Ly8nZGV2ZWxvcG1lbnQnIG9yICdwcm9kdWN0aW9uJ1xyXG5cclxuY29uc3QgdmVyc2lvbiA9IDIuMFxyXG5cclxuXHJcbmNvbnN0IGhvc3RzID0ge1xyXG4gIGRldmVsb3BtZW50OiAnaHR0cHM6Ly8xOTIuMTY4LjEuMTIyOjMwMDAnLFxyXG4gIHByb2R1Y3Rpb246ICdodHRwczovL2FwaS55aXpvLnpoaXl1YW45NS5jbidcclxufVxyXG5cclxuLy9hcGlzXHJcbmNvbnN0IGFwaXMgPSB7XHJcbiAgYWNjb3VudDoge1xyXG4gICAgcGF0aDogJy9hY2NvdW50JyxcclxuICAgIHNpZ25Jbjoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL3NpZ25JbidcclxuICAgIH1cclxuICB9LFxyXG4gIHdhbnRIZWxwT3JkZXI6IHtcclxuICAgIHBhdGg6ICcvb3JkZXIvaGVscC93YW50JyxcclxuICAgIC8v6I635Y+W5YiX6KGoXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy8nXHJcbiAgICB9LFxyXG4gICAgaW5mbzp7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9pbmZvLzppZCdcclxuICAgIH1cclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZW52LFxyXG4gIHZlcnNpb24sXHJcbiAgYXBpczogZGlzcG9zZVVybChhcGlzLCBob3N0c1tlbnZdKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwb3NlVXJsKG9iaiwgcHJlZml4KSB7XHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgaWYgKG9ialt2XS51cmwpIHtcclxuICAgICAgb2JqW3ZdLnVybCA9IHByZWZpeCArIG9ialt2XS51cmxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmKHYhPT0ncGF0aCcpe1xyXG4gICAgICAgIG9ialt2XSA9IGRpc3Bvc2VVcmwob2JqW3ZdLCBwcmVmaXgrKG9ialt2XVsncGF0aCddIHx8JycpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3QgYXBpcyA9IHtcclxuXHJcbi8vICAgLy/lrabmoKHliJfooahcclxuLy8gICBcImNvbGxlZ2VsaXN0XCI6IFtcIkdFVFwiLCAnL2NvbGxlZ2VzJ10sXHJcbi8vICAgLy/ot5HljZXliJfooahcclxuLy8gICBcInJ1bk9yZGVybGlzdFwiOiBbXCJHRVRcIiwgXCIvb3JkZXIvcmVjcnVpdFwiXSxcclxuXHJcbi8vICAgLy/ngq7lvLnkv6Hmga9cclxuLy8gICBcInJ1bk9yZGVySW5mb1wiOiBbJ0dFVCcsICcvb3JkZXIvcmVjcnVpdC9pbmZvLzppZCddXHJcbi8vICAgLy/liJvlu7rot5Hot5HorqLljZVcclxuLy8gICBcImNyZWF0ZUZpbmRPcmRlclwiOiBbJ1BPU1QnLCAnL29yZGVyL3JlY3J1aXQnXSxcclxuLy8gICAvL+aKouWNlVxyXG4vLyAgIFwiZ3JhYkZpbmRPcmRlclwiOiBbJ1BPU1QnLCAnL29yZGVyL3JlY3J1aXQvZ3JhYiddLFxyXG5cclxuLy8gICAvL+aUvuW8g+i3keiFv1xyXG4vLyAgIFwicXVpdEZpbmRPcmRlclwiOiBbJ2RlbGV0ZScsICcvb3JkZXIvcmVjcnVpdC9xdWl0J10sXHJcbi8vICAgLy/lj5bmtojorqLljZVcclxuLy8gICBcImNhbmNlbE9yZGVyc1wiOiBbJ2RlbGV0ZScsICcvb3JkZXIvcmVjcnVpdC9jYW5jZWwnXSxcclxuLy8gICBcInNpZ25JblwiOiBbXCJQT1NUXCIsICcvYWNjb3VudC9zaWduSW4nXSxcclxuLy8gICBcInVwZGF0ZVVzZXJJbmZvXCI6IFtcIlBVVFwiLCAnL2FjY291bnQvOmlkJ10sXHJcbi8vICAgXCJjaGFuZ2VDb2xsZWdlXCI6W1wiUFVUXCIsJy91c2Vycy9jb2xsZWdlLzppZCddLFxyXG4vLyAgIFwiY2hhbmdlUHdkXCI6IFsnUFVUJywgJy9hY2NvdW50L3B3ZC86aWQnXSxcclxuLy8gICBcImNoYW5nZVRlbFwiOiBbJ1BVVCcsICcvYWNjb3VudC90ZWwnXSxcclxuLy8gICBcInNlbmRDb2RlXCI6IFsnR0VUJywgJy9zbXNDb2RlLzp0ZWwvOnR5cGUnXSxcclxuLy8gICBcInNpZ25VcFwiOiBbJ1BPU1QnLCAnL3VzZXJzL3NpZ25VcCddLFxyXG4vLyAgIFwicmVzZXRQd2RcIjogWydQVVQnLCAnL2FjY291bnQvcHdkL3RlbC86dGVsJ10sXHJcbi8vIH07Il19