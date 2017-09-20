'use strict';

//环境
var env = 'development'; //'development' or 'production'

var version = 2.0;

var hosts = {
  development: 'https://192.168.1.108:3000',
  production: 'https://api.yizo.zhiyuan95.cn'

  //apis
};var apis = {
  account: {
    path: '/account',
    weixinSignin: {
      method: 'POST',
      url: '/signIn/weixin'
    },
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
    },
    cancel: {
      method: 'DELETE',
      url: '/cancel'
    },
    grab: {
      method: 'POST',
      url: '/grab'
    },
    quit: {
      method: 'DELETE',
      url: '/quit'
    },
    deliver: {
      method: 'PUT',
      url: '/deliver'
    },
    finally: {
      method: 'PUT',
      url: '/finally'
    },
    end: {
      ethod: 'PUT',
      url: '/end'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJlbnYiLCJ2ZXJzaW9uIiwiaG9zdHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJhcGlzIiwiYWNjb3VudCIsInBhdGgiLCJ3ZWl4aW5TaWduaW4iLCJtZXRob2QiLCJ1cmwiLCJzaWduSW4iLCJ1cGRhdGVJbmZvIiwiY2hhbmdlUHdkIiwiY2hhbmdlVGVsIiwiY29sbGVnZSIsImxpc3QiLCJzbXMiLCJzZW5kQ29kZSIsIndhbnRIZWxwT3JkZXIiLCJpbmZvIiwiYWRkIiwiY2FuY2VsIiwiZ3JhYiIsInF1aXQiLCJkZWxpdmVyIiwiZmluYWxseSIsImVuZCIsImV0aG9kIiwibW9kdWxlIiwiZXhwb3J0cyIsImhvc3QiLCJkaXNwb3NlVXJsIiwib2JqIiwicHJlZml4IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2Il0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0EsSUFBTUEsTUFBTSxhQUFaLEMsQ0FBMEI7O0FBRTFCLElBQU1DLFVBQVUsR0FBaEI7O0FBR0EsSUFBTUMsUUFBUTtBQUNaQyxlQUFhLDRCQUREO0FBRVpDLGNBQVk7O0FBR2Q7QUFMYyxDQUFkLENBTUEsSUFBTUMsT0FBTztBQUNYQyxXQUFTO0FBQ1BDLFVBQU0sVUFEQztBQUVQQyxrQkFBYTtBQUNYQyxjQUFRLE1BREc7QUFFWEMsV0FBSztBQUZNLEtBRk47QUFNUEMsWUFBUTtBQUNORixjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDLEtBTkQ7QUFVUEUsZ0JBQVc7QUFDVEgsY0FBUSxLQURDO0FBRVRDLFdBQUs7QUFGSSxLQVZKO0FBY1BHLGVBQVU7QUFDUkosY0FBTyxLQURDO0FBRVJDLFdBQUk7QUFGSSxLQWRIO0FBa0JQSSxlQUFVO0FBQ1JMLGNBQU8sS0FEQztBQUVSQyxXQUFJO0FBRkk7QUFsQkgsR0FERTtBQXdCWEssV0FBUTtBQUNOUixVQUFLLFdBREM7QUFFTlMsVUFBSztBQUNIUCxjQUFRLEtBREw7QUFFSEMsV0FBSztBQUZGO0FBRkMsR0F4Qkc7QUErQlhPLE9BQUk7QUFDRlYsVUFBSyxVQURIO0FBRUZXLGNBQVM7QUFDUFQsY0FBTyxLQURBO0FBRVBDLFdBQUk7QUFGRztBQUZQLEdBL0JPO0FBc0NYUyxpQkFBZTtBQUNiWixVQUFNLGtCQURPO0FBRWI7QUFDQVMsVUFBTTtBQUNKUCxjQUFRLEtBREo7QUFFSkMsV0FBSztBQUZELEtBSE87QUFPYlUsVUFBSztBQUNIWCxjQUFRLEtBREw7QUFFSEMsV0FBSztBQUZGLEtBUFE7QUFXYlcsU0FBSTtBQUNGWixjQUFPLE1BREw7QUFFRkMsV0FBSTtBQUZGLEtBWFM7QUFlYlksWUFBTztBQUNMYixjQUFPLFFBREY7QUFFTEMsV0FBSTtBQUZDLEtBZk07QUFtQmJhLFVBQUs7QUFDSGQsY0FBTyxNQURKO0FBRUhDLFdBQUk7QUFGRCxLQW5CUTtBQXVCYmMsVUFBSztBQUNIZixjQUFPLFFBREo7QUFFSEMsV0FBSTtBQUZELEtBdkJRO0FBMkJiZSxhQUFRO0FBQ05oQixjQUFPLEtBREQ7QUFFTkMsV0FBSTtBQUZFLEtBM0JLO0FBK0JiZ0IsYUFBUTtBQUNOakIsY0FBTyxLQUREO0FBRU5DLFdBQUk7QUFGRSxLQS9CSztBQW1DYmlCLFNBQUk7QUFDRkMsYUFBTSxLQURKO0FBRUZsQixXQUFJO0FBRkY7QUFuQ1M7QUF0Q0osQ0FBYjtBQStFQW1CLE9BQU9DLE9BQVAsR0FBaUI7QUFDZjlCLFVBRGU7QUFFZkMsa0JBRmU7QUFHZjhCLFFBQUs3QixNQUFNRixHQUFOLENBSFU7QUFJZkssUUFBTTJCLFdBQVczQixJQUFYLEVBQWlCSCxNQUFNRixHQUFOLENBQWpCO0FBSlMsQ0FBakI7O0FBT0EsU0FBU2dDLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCQyxNQUF6QixFQUFpQztBQUMvQkMsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixhQUFLO0FBQzVCLFFBQUlKLElBQUlLLENBQUosRUFBTzVCLEdBQVgsRUFBZ0I7QUFDZHVCLFVBQUlLLENBQUosRUFBTzVCLEdBQVAsR0FBYXdCLFNBQVNELElBQUlLLENBQUosRUFBTzVCLEdBQTdCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBRzRCLE1BQUksTUFBUCxFQUFjO0FBQ1pMLFlBQUlLLENBQUosSUFBU04sV0FBV0MsSUFBSUssQ0FBSixDQUFYLEVBQW1CSixVQUFRRCxJQUFJSyxDQUFKLEVBQU8sTUFBUCxLQUFpQixFQUF6QixDQUFuQixDQUFUO0FBQ0Q7QUFDRjtBQUNGLEdBUkQ7QUFTQSxTQUFPTCxHQUFQO0FBQ0Q7O0FBbUJEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy/njq/looNcclxuY29uc3QgZW52ID0gJ2RldmVsb3BtZW50JzsvLydkZXZlbG9wbWVudCcgb3IgJ3Byb2R1Y3Rpb24nXHJcblxyXG5jb25zdCB2ZXJzaW9uID0gMi4wXHJcblxyXG5cclxuY29uc3QgaG9zdHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwczovLzE5Mi4xNjguMS4xMDg6MzAwMCcsXHJcbiAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vYXBpLnlpem8uemhpeXVhbjk1LmNuJ1xyXG59XHJcblxyXG4vL2FwaXNcclxuY29uc3QgYXBpcyA9IHtcclxuICBhY2NvdW50OiB7XHJcbiAgICBwYXRoOiAnL2FjY291bnQnLFxyXG4gICAgd2VpeGluU2lnbmluOntcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9zaWduSW4vd2VpeGluJ1xyXG4gICAgfSxcclxuICAgIHNpZ25Jbjoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL3NpZ25JbidcclxuICAgIH0sXHJcbiAgICB1cGRhdGVJbmZvOntcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsOiAnLzppZCdcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VQd2Q6e1xyXG4gICAgICBtZXRob2Q6J1BVVCcsXHJcbiAgICAgIHVybDonL3B3ZC86aWQnXHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVGVsOntcclxuICAgICAgbWV0aG9kOidQVVQnLFxyXG4gICAgICB1cmw6Jy90ZWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb2xsZWdlOntcclxuICAgIHBhdGg6Jy9jb2xsZWdlcycsXHJcbiAgICBsaXN0OntcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnLydcclxuICAgIH1cclxuICB9LFxyXG4gIHNtczp7XHJcbiAgICBwYXRoOicvc21zQ29kZScsXHJcbiAgICBzZW5kQ29kZTp7XHJcbiAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgdXJsOicvOnRlbC86dHlwZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHdhbnRIZWxwT3JkZXI6IHtcclxuICAgIHBhdGg6ICcvb3JkZXIvaGVscC93YW50JyxcclxuICAgIC8v6I635Y+W5YiX6KGoXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy8nXHJcbiAgICB9LFxyXG4gICAgaW5mbzp7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9pbmZvLzppZCdcclxuICAgIH0sXHJcbiAgICBhZGQ6e1xyXG4gICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICB1cmw6Jy8nXHJcbiAgICB9LFxyXG4gICAgY2FuY2VsOntcclxuICAgICAgbWV0aG9kOidERUxFVEUnLFxyXG4gICAgICB1cmw6Jy9jYW5jZWwnXHJcbiAgICB9LFxyXG4gICAgZ3JhYjp7XHJcbiAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgIHVybDonL2dyYWInXHJcbiAgICB9LFxyXG4gICAgcXVpdDp7XHJcbiAgICAgIG1ldGhvZDonREVMRVRFJyxcclxuICAgICAgdXJsOicvcXVpdCdcclxuICAgIH0sXHJcbiAgICBkZWxpdmVyOntcclxuICAgICAgbWV0aG9kOidQVVQnLFxyXG4gICAgICB1cmw6Jy9kZWxpdmVyJ1xyXG4gICAgfSxcclxuICAgIGZpbmFsbHk6e1xyXG4gICAgICBtZXRob2Q6J1BVVCcsXHJcbiAgICAgIHVybDonL2ZpbmFsbHknXHJcbiAgICB9LFxyXG4gICAgZW5kOntcclxuICAgICAgZXRob2Q6J1BVVCcsXHJcbiAgICAgIHVybDonL2VuZCdcclxuICAgIH1cclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZW52LFxyXG4gIHZlcnNpb24sXHJcbiAgaG9zdDpob3N0c1tlbnZdLFxyXG4gIGFwaXM6IGRpc3Bvc2VVcmwoYXBpcywgaG9zdHNbZW52XSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcG9zZVVybChvYmosIHByZWZpeCkge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCh2ID0+IHtcclxuICAgIGlmIChvYmpbdl0udXJsKSB7XHJcbiAgICAgIG9ialt2XS51cmwgPSBwcmVmaXggKyBvYmpbdl0udXJsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZih2IT09J3BhdGgnKXtcclxuICAgICAgICBvYmpbdl0gPSBkaXNwb3NlVXJsKG9ialt2XSwgcHJlZml4KyhvYmpbdl1bJ3BhdGgnXSB8fCcnKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IGFwaXMgPSB7XHJcblxyXG4vLyAgIC8v5a2m5qCh5YiX6KGoXHJcbi8vICAgXCJjb2xsZWdlbGlzdFwiOiBbXCJHRVRcIiwgJy9jb2xsZWdlcyddLFxyXG4vLyAgIC8v6LeR5Y2V5YiX6KGoXHJcbi8vICAgXCJydW5PcmRlcmxpc3RcIjogW1wiR0VUXCIsIFwiL29yZGVyL3JlY3J1aXRcIl0sXHJcblxyXG4vLyAgIC8v54Ku5by55L+h5oGvXHJcbi8vICAgXCJydW5PcmRlckluZm9cIjogWydHRVQnLCAnL29yZGVyL3JlY3J1aXQvaW5mby86aWQnXVxyXG4vLyAgIC8v5Yib5bu66LeR6LeR6K6i5Y2VXHJcbi8vICAgXCJjcmVhdGVGaW5kT3JkZXJcIjogWydQT1NUJywgJy9vcmRlci9yZWNydWl0J10sXHJcbi8vICAgLy/miqLljZVcclxuLy8gICBcImdyYWJGaW5kT3JkZXJcIjogWydQT1NUJywgJy9vcmRlci9yZWNydWl0L2dyYWInXSxcclxuXHJcbi8vICAgLy/mlL7lvIPot5Hohb9cclxuLy8gICBcInF1aXRGaW5kT3JkZXJcIjogWydkZWxldGUnLCAnL29yZGVyL3JlY3J1aXQvcXVpdCddLFxyXG4vLyAgIC8v5Y+W5raI6K6i5Y2VXHJcbi8vICAgXCJjYW5jZWxPcmRlcnNcIjogWydkZWxldGUnLCAnL29yZGVyL3JlY3J1aXQvY2FuY2VsJ10sXHJcbi8vICAgXCJzaWduSW5cIjogW1wiUE9TVFwiLCAnL2FjY291bnQvc2lnbkluJ10sXHJcbi8vICAgXCJ1cGRhdGVVc2VySW5mb1wiOiBbXCJQVVRcIiwgJy9hY2NvdW50LzppZCddLFxyXG4vLyAgIFwiY2hhbmdlQ29sbGVnZVwiOltcIlBVVFwiLCcvdXNlcnMvY29sbGVnZS86aWQnXSxcclxuLy8gICBcImNoYW5nZVB3ZFwiOiBbJ1BVVCcsICcvYWNjb3VudC9wd2QvOmlkJ10sXHJcbi8vICAgXCJjaGFuZ2VUZWxcIjogWydQVVQnLCAnL2FjY291bnQvdGVsJ10sXHJcbi8vICAgXCJzZW5kQ29kZVwiOiBbJ0dFVCcsICcvc21zQ29kZS86dGVsLzp0eXBlJ10sXHJcbi8vICAgXCJzaWduVXBcIjogWydQT1NUJywgJy91c2Vycy9zaWduVXAnXSxcclxuLy8gICBcInJlc2V0UHdkXCI6IFsnUFVUJywgJy9hY2NvdW50L3B3ZC90ZWwvOnRlbCddLFxyXG4vLyB9OyJdfQ==