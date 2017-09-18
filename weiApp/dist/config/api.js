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
    },
    updateInfo: {
      method: 'PUT',
      url: '/:id'
    },
    changePwd: {
      method: 'PUT',
      url: '/pwd/:id'
    },
    changeTel: {
      method: 'PUT',
      url: '/tel'
    }
  },
  college: {
    path: '/colleges',
    list: {
      method: 'GET',
      url: '/'
    }
  },
  sms: {
    path: '/smsCode',
    sendCode: {
      method: 'GET',
      url: '/:tel/:type'
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
    },
    add: {
      method: 'POST',
      url: '/'
    }
  }
};
module.exports = {
  env: env,
  version: version,
  host: hosts[env],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJlbnYiLCJ2ZXJzaW9uIiwiaG9zdHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJhcGlzIiwiYWNjb3VudCIsInBhdGgiLCJzaWduSW4iLCJtZXRob2QiLCJ1cmwiLCJ1cGRhdGVJbmZvIiwiY2hhbmdlUHdkIiwiY2hhbmdlVGVsIiwiY29sbGVnZSIsImxpc3QiLCJzbXMiLCJzZW5kQ29kZSIsIndhbnRIZWxwT3JkZXIiLCJpbmZvIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyIsImhvc3QiLCJkaXNwb3NlVXJsIiwib2JqIiwicHJlZml4IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2Il0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0EsSUFBTUEsTUFBTSxhQUFaLEMsQ0FBMEI7O0FBRTFCLElBQU1DLFVBQVUsR0FBaEI7O0FBR0EsSUFBTUMsUUFBUTtBQUNaQyxlQUFhLDRCQUREO0FBRVpDLGNBQVk7O0FBR2Q7QUFMYyxDQUFkLENBTUEsSUFBTUMsT0FBTztBQUNYQyxXQUFTO0FBQ1BDLFVBQU0sVUFEQztBQUVQQyxZQUFRO0FBQ05DLGNBQVEsTUFERjtBQUVOQyxXQUFLO0FBRkMsS0FGRDtBQU1QQyxnQkFBVztBQUNURixjQUFRLEtBREM7QUFFVEMsV0FBSztBQUZJLEtBTko7QUFVUEUsZUFBVTtBQUNSSCxjQUFPLEtBREM7QUFFUkMsV0FBSTtBQUZJLEtBVkg7QUFjUEcsZUFBVTtBQUNSSixjQUFPLEtBREM7QUFFUkMsV0FBSTtBQUZJO0FBZEgsR0FERTtBQW9CWEksV0FBUTtBQUNOUCxVQUFLLFdBREM7QUFFTlEsVUFBSztBQUNITixjQUFRLEtBREw7QUFFSEMsV0FBSztBQUZGO0FBRkMsR0FwQkc7QUEyQlhNLE9BQUk7QUFDRlQsVUFBSyxVQURIO0FBRUZVLGNBQVM7QUFDUFIsY0FBTyxLQURBO0FBRVBDLFdBQUk7QUFGRztBQUZQLEdBM0JPO0FBa0NYUSxpQkFBZTtBQUNiWCxVQUFNLGtCQURPO0FBRWI7QUFDQVEsVUFBTTtBQUNKTixjQUFRLEtBREo7QUFFSkMsV0FBSztBQUZELEtBSE87QUFPYlMsVUFBSztBQUNIVixjQUFRLEtBREw7QUFFSEMsV0FBSztBQUZGLEtBUFE7QUFXYlUsU0FBSTtBQUNGWCxjQUFPLE1BREw7QUFFRkMsV0FBSTtBQUZGO0FBWFM7QUFsQ0osQ0FBYjtBQW1EQVcsT0FBT0MsT0FBUCxHQUFpQjtBQUNmdEIsVUFEZTtBQUVmQyxrQkFGZTtBQUdmc0IsUUFBS3JCLE1BQU1GLEdBQU4sQ0FIVTtBQUlmSyxRQUFNbUIsV0FBV25CLElBQVgsRUFBaUJILE1BQU1GLEdBQU4sQ0FBakI7QUFKUyxDQUFqQjs7QUFPQSxTQUFTd0IsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQy9CQyxTQUFPQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLGFBQUs7QUFDNUIsUUFBSUosSUFBSUssQ0FBSixFQUFPcEIsR0FBWCxFQUFnQjtBQUNkZSxVQUFJSyxDQUFKLEVBQU9wQixHQUFQLEdBQWFnQixTQUFTRCxJQUFJSyxDQUFKLEVBQU9wQixHQUE3QjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUdvQixNQUFJLE1BQVAsRUFBYztBQUNaTCxZQUFJSyxDQUFKLElBQVNOLFdBQVdDLElBQUlLLENBQUosQ0FBWCxFQUFtQkosVUFBUUQsSUFBSUssQ0FBSixFQUFPLE1BQVAsS0FBaUIsRUFBekIsQ0FBbkIsQ0FBVDtBQUNEO0FBQ0Y7QUFDRixHQVJEO0FBU0EsU0FBT0wsR0FBUDtBQUNEOztBQW1CRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v546v5aKDXHJcbmNvbnN0IGVudiA9ICdkZXZlbG9wbWVudCc7Ly8nZGV2ZWxvcG1lbnQnIG9yICdwcm9kdWN0aW9uJ1xyXG5cclxuY29uc3QgdmVyc2lvbiA9IDIuMFxyXG5cclxuXHJcbmNvbnN0IGhvc3RzID0ge1xyXG4gIGRldmVsb3BtZW50OiAnaHR0cHM6Ly8xOTIuMTY4LjEuMTIyOjMwMDAnLFxyXG4gIHByb2R1Y3Rpb246ICdodHRwczovL2FwaS55aXpvLnpoaXl1YW45NS5jbidcclxufVxyXG5cclxuLy9hcGlzXHJcbmNvbnN0IGFwaXMgPSB7XHJcbiAgYWNjb3VudDoge1xyXG4gICAgcGF0aDogJy9hY2NvdW50JyxcclxuICAgIHNpZ25Jbjoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL3NpZ25JbidcclxuICAgIH0sXHJcbiAgICB1cGRhdGVJbmZvOntcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsOiAnLzppZCdcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VQd2Q6e1xyXG4gICAgICBtZXRob2Q6J1BVVCcsXHJcbiAgICAgIHVybDonL3B3ZC86aWQnXHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVGVsOntcclxuICAgICAgbWV0aG9kOidQVVQnLFxyXG4gICAgICB1cmw6Jy90ZWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb2xsZWdlOntcclxuICAgIHBhdGg6Jy9jb2xsZWdlcycsXHJcbiAgICBsaXN0OntcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnLydcclxuICAgIH1cclxuICB9LFxyXG4gIHNtczp7XHJcbiAgICBwYXRoOicvc21zQ29kZScsXHJcbiAgICBzZW5kQ29kZTp7XHJcbiAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgdXJsOicvOnRlbC86dHlwZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHdhbnRIZWxwT3JkZXI6IHtcclxuICAgIHBhdGg6ICcvb3JkZXIvaGVscC93YW50JyxcclxuICAgIC8v6I635Y+W5YiX6KGoXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy8nXHJcbiAgICB9LFxyXG4gICAgaW5mbzp7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9pbmZvLzppZCdcclxuICAgIH0sXHJcbiAgICBhZGQ6e1xyXG4gICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICB1cmw6Jy8nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGVudixcclxuICB2ZXJzaW9uLFxyXG4gIGhvc3Q6aG9zdHNbZW52XSxcclxuICBhcGlzOiBkaXNwb3NlVXJsKGFwaXMsIGhvc3RzW2Vudl0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3Bvc2VVcmwob2JqLCBwcmVmaXgpIHtcclxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2godiA9PiB7XHJcbiAgICBpZiAob2JqW3ZdLnVybCkge1xyXG4gICAgICBvYmpbdl0udXJsID0gcHJlZml4ICsgb2JqW3ZdLnVybFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYodiE9PSdwYXRoJyl7XHJcbiAgICAgICAgb2JqW3ZdID0gZGlzcG9zZVVybChvYmpbdl0sIHByZWZpeCsob2JqW3ZdWydwYXRoJ10gfHwnJykpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBhcGlzID0ge1xyXG5cclxuLy8gICAvL+WtpuagoeWIl+ihqFxyXG4vLyAgIFwiY29sbGVnZWxpc3RcIjogW1wiR0VUXCIsICcvY29sbGVnZXMnXSxcclxuLy8gICAvL+i3keWNleWIl+ihqFxyXG4vLyAgIFwicnVuT3JkZXJsaXN0XCI6IFtcIkdFVFwiLCBcIi9vcmRlci9yZWNydWl0XCJdLFxyXG5cclxuLy8gICAvL+eCruW8ueS/oeaBr1xyXG4vLyAgIFwicnVuT3JkZXJJbmZvXCI6IFsnR0VUJywgJy9vcmRlci9yZWNydWl0L2luZm8vOmlkJ11cclxuLy8gICAvL+WIm+W7uui3kei3keiuouWNlVxyXG4vLyAgIFwiY3JlYXRlRmluZE9yZGVyXCI6IFsnUE9TVCcsICcvb3JkZXIvcmVjcnVpdCddLFxyXG4vLyAgIC8v5oqi5Y2VXHJcbi8vICAgXCJncmFiRmluZE9yZGVyXCI6IFsnUE9TVCcsICcvb3JkZXIvcmVjcnVpdC9ncmFiJ10sXHJcblxyXG4vLyAgIC8v5pS+5byD6LeR6IW/XHJcbi8vICAgXCJxdWl0RmluZE9yZGVyXCI6IFsnZGVsZXRlJywgJy9vcmRlci9yZWNydWl0L3F1aXQnXSxcclxuLy8gICAvL+WPlua2iOiuouWNlVxyXG4vLyAgIFwiY2FuY2VsT3JkZXJzXCI6IFsnZGVsZXRlJywgJy9vcmRlci9yZWNydWl0L2NhbmNlbCddLFxyXG4vLyAgIFwic2lnbkluXCI6IFtcIlBPU1RcIiwgJy9hY2NvdW50L3NpZ25JbiddLFxyXG4vLyAgIFwidXBkYXRlVXNlckluZm9cIjogW1wiUFVUXCIsICcvYWNjb3VudC86aWQnXSxcclxuLy8gICBcImNoYW5nZUNvbGxlZ2VcIjpbXCJQVVRcIiwnL3VzZXJzL2NvbGxlZ2UvOmlkJ10sXHJcbi8vICAgXCJjaGFuZ2VQd2RcIjogWydQVVQnLCAnL2FjY291bnQvcHdkLzppZCddLFxyXG4vLyAgIFwiY2hhbmdlVGVsXCI6IFsnUFVUJywgJy9hY2NvdW50L3RlbCddLFxyXG4vLyAgIFwic2VuZENvZGVcIjogWydHRVQnLCAnL3Ntc0NvZGUvOnRlbC86dHlwZSddLFxyXG4vLyAgIFwic2lnblVwXCI6IFsnUE9TVCcsICcvdXNlcnMvc2lnblVwJ10sXHJcbi8vICAgXCJyZXNldFB3ZFwiOiBbJ1BVVCcsICcvYWNjb3VudC9wd2QvdGVsLzp0ZWwnXSxcclxuLy8gfTsiXX0=