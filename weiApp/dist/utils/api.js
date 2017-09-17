'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./user.js');

var _code = require('./../config/code.js');

var _code2 = _interopRequireDefault(_code);

var _detail = require('./../config/detail.js');

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = {};
for (var key in _code2.default) {
  code[_code2.default[key]] = _detail2.default[key];
}

// console.log(code)
/**
 *
 * @param api 请求的api
 * @param data 参数
 * @param valid 参数验证
 * @returns {Promise}
 */
function request(api, data) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'normal';
  var file = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  return new Promise(function (resolve, reject) {

    var token = wx.getStorageSync("access-token");
    var header = {
      'content-type': 'application/json'
    };
    if (token) {
      header['access-token'] = token;
    }
    console.log(api);
    var url = api.url,
        _api$method = api.method,
        method = _api$method === undefined ? 'GET' : _api$method;

    if (!url) {
      reject('不存在此url');
    }
    var arr = url.match(/\/:[a-zA-Z][0-9a-zA-Z]+/g);
    if (data && arr != null) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          if (value.substring(2) in data) {
            url = url.replace(value, '/' + data[value.substring(2)]);
            delete data[value.substring(2)];
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    switch (type) {

      case "upload":
        {
          var _file$filePath = file.filePath,
              filePath = _file$filePath === undefined ? '' : _file$filePath,
              _file$name = file.name,
              name = _file$name === undefined ? '' : _file$name;

          console.log(filePath, name);
          wx.uploadFile({
            url: url,
            filePath: filePath,
            name: name,
            formData: data,
            rejectUnauthorized: false,
            success: function success(res) {
              try {
                resolve(_success(res));
              } catch (e) {
                reject(e);
              }
            },
            fail: function fail(err) {
              reject(_fail(err));
            }
          });
          break;
        }
      case "normal":
      default:
        {
          //请求数据
          wx.request({
            url: url,
            method: method,
            data: data,
            header: header,
            success: function success(res) {
              try {

                resolve(_success(res));
              } catch (e) {
                reject(e.message);
              }
            },
            fail: function fail(err) {
              reject(_fail(err));
            }
          });
        }
    }
  });
}
function _success(res) {

  //不在登录界面
  if ([1001, 1001, 1002, 1003].includes(parseInt(res.data.code)) && api != 'signIn') {
    setTimeout(function () {
      (0, _user.signOut)();
      wx.navigateTo({
        url: '../../logins/login/login'
      });
    }, 2000);
    throw new Error("用户登录失效,2秒后自动跳转登录界面!");
  }

  if (res.data.code != 0) {
    throw new Error(code[res.data.code]);
  }
  var keys = Object.keys(res.header);
  if (keys.indexOf("access-token") !== -1) {
    // wx.showToast({
    //     title: '保存token',
    // })
    var newtoken = res.header['access-token'];
    wx.setStorage({
      key: "access-token",
      data: newtoken
    });
  }
  if (keys.indexOf("uinfo") !== -1) {
    wx.setStorage({
      key: "userinfo",
      data: res.data.data.info
    });
  }
  console.log(res.data);
  return res.data;
}

function _fail(err) {
  console.log(err);
  if (err && err['errMsg'] == "request:fail request:fail") {
    return "连接服务器失败";
  }
  return "网络不可达";
}

exports.default = request;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJjb2RlIiwia2V5IiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJ0eXBlIiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwiaGVhZGVyIiwiY29uc29sZSIsImxvZyIsInVybCIsIm1ldGhvZCIsImFyciIsIm1hdGNoIiwidmFsdWUiLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwiZmlsZVBhdGgiLCJuYW1lIiwidXBsb2FkRmlsZSIsImZvcm1EYXRhIiwicmVqZWN0VW5hdXRob3JpemVkIiwic3VjY2VzcyIsInJlcyIsImUiLCJmYWlsIiwiZXJyIiwibWVzc2FnZSIsImluY2x1ZGVzIiwicGFyc2VJbnQiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVUbyIsIkVycm9yIiwia2V5cyIsIk9iamVjdCIsImluZGV4T2YiLCJuZXd0b2tlbiIsInNldFN0b3JhZ2UiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFJQSxPQUFPLEVBQVg7QUFDQSxLQUFLLElBQUlDLEdBQVQsb0JBQXNCO0FBQ3BCRCxPQUFLLGVBQUtDLEdBQUwsQ0FBTCxJQUFrQixpQkFBT0EsR0FBUCxDQUFsQjtBQUNEOztBQUdEO0FBQ0E7Ozs7Ozs7QUFPQSxTQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsSUFBdEIsRUFBd0Q7QUFBQSxNQUE1QkMsSUFBNEIsdUVBQXJCLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUN0RCxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7O0FBRXRDLFFBQUlDLFFBQVFDLEdBQUdDLGNBQUgsQ0FBa0IsY0FBbEIsQ0FBWjtBQUNBLFFBQUlDLFNBQVM7QUFDWCxzQkFBZ0I7QUFETCxLQUFiO0FBR0EsUUFBSUgsS0FBSixFQUFXO0FBQ1RHLGFBQU8s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LENBQVUscUJBQVYsQ0FBTjtBQUNEOztBQUVELE1BQUlULElBQUl6QixJQUFKLENBQVNKLElBQVQsSUFBaUIsQ0FBckIsRUFBd0I7QUFDdEIsVUFBTSxJQUFJc0MsS0FBSixDQUFVdEMsS0FBSzZCLElBQUl6QixJQUFKLENBQVNKLElBQWQsQ0FBVixDQUFOO0FBQ0Q7QUFDRCxNQUFJdUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZVixJQUFJaEIsTUFBaEIsQ0FBWDtBQUNBLE1BQUkwQixLQUFLRSxPQUFMLENBQWEsY0FBYixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFFBQUlDLFdBQVdiLElBQUloQixNQUFKLENBQVcsY0FBWCxDQUFmO0FBQ0FGLE9BQUdnQyxVQUFILENBQWM7QUFDWjFDLFdBQUssY0FETztBQUVaRyxZQUFNc0M7QUFGTSxLQUFkO0FBSUQ7QUFDRCxNQUFJSCxLQUFLRSxPQUFMLENBQWEsT0FBYixNQUEwQixDQUFDLENBQS9CLEVBQWtDO0FBQ2hDOUIsT0FBR2dDLFVBQUgsQ0FBYztBQUNaMUMsV0FBSyxVQURPO0FBRVpHLFlBQU15QixJQUFJekIsSUFBSixDQUFTQSxJQUFULENBQWN3QztBQUZSLEtBQWQ7QUFJRDtBQUNEOUIsVUFBUUMsR0FBUixDQUFZYyxJQUFJekIsSUFBaEI7QUFDQSxTQUFPeUIsSUFBSXpCLElBQVg7QUFDRDs7QUFFRCxTQUFTMkIsS0FBVCxDQUFjQyxHQUFkLEVBQW1CO0FBQ2pCbEIsVUFBUUMsR0FBUixDQUFZaUIsR0FBWjtBQUNBLE1BQUlBLE9BQU9BLElBQUksUUFBSixLQUFpQiwyQkFBNUIsRUFBeUQ7QUFDdkQsV0FBTyxTQUFQO0FBQ0Q7QUFDRCxTQUFPLE9BQVA7QUFDRDs7a0JBRWM5QixPIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBDb2RlIGZyb20gJy4uL2NvbmZpZy9jb2RlLmpzJztcclxuaW1wb3J0IERldGFpbCBmcm9tICcuLi9jb25maWcvZGV0YWlsLmpzJztcclxuXHJcblxyXG5sZXQgY29kZSA9IHt9O1xyXG5mb3IgKGxldCBrZXkgaW4gQ29kZSkge1xyXG4gIGNvZGVbQ29kZVtrZXldXSA9IERldGFpbFtrZXldO1xyXG59XHJcblxyXG5cclxuLy8gY29uc29sZS5sb2coY29kZSlcclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBhcGkg6K+35rGC55qEYXBpXHJcbiAqIEBwYXJhbSBkYXRhIOWPguaVsFxyXG4gKiBAcGFyYW0gdmFsaWQg5Y+C5pWw6aqM6K+BXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gcmVxdWVzdChhcGksIGRhdGEsIHR5cGUgPSAnbm9ybWFsJywgZmlsZSA9IHt9KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcImFjY2Vzcy10b2tlblwiKTtcclxuICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH1cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBoZWFkZXJbJ2FjY2Vzcy10b2tlbiddID0gdG9rZW47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhhcGkpXHJcbiAgICBsZXQgeyB1cmwsIG1ldGhvZD0nR0VUJyB9ID0gYXBpO1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgcmVqZWN0KCfkuI3lrZjlnKjmraR1cmwnKTtcclxuICAgIH1cclxuICAgIGxldCBhcnIgPSB1cmwubWF0Y2goL1xcLzpbYS16QS1aXVswLTlhLXpBLVpdKy9nKTtcclxuICAgIGlmIChkYXRhICYmIGFyciAhPSBudWxsKSB7XHJcbiAgICAgIGZvciAobGV0IHZhbHVlIG9mIGFycikge1xyXG4gICAgICAgIGlmICh2YWx1ZS5zdWJzdHJpbmcoMikgaW4gZGF0YSkge1xyXG4gICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UodmFsdWUsICcvJyArIGRhdGFbdmFsdWUuc3Vic3RyaW5nKDIpXSk7XHJcbiAgICAgICAgICBkZWxldGUgZGF0YVt2YWx1ZS5zdWJzdHJpbmcoMildO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcblxyXG4gICAgICBjYXNlIFwidXBsb2FkXCI6IHtcclxuXHJcbiAgICAgICAgbGV0IHsgZmlsZVBhdGggPSAnJywgbmFtZSA9ICcnIH0gPSBmaWxlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVQYXRoLCBuYW1lKVxyXG4gICAgICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgZmlsZVBhdGgsXHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgZm9ybURhdGE6IGRhdGEsXHJcbiAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoc3VjY2VzcyhyZXMpKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZmFpbChlcnIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJub3JtYWxcIjpcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIC8v6K+35rGC5pWw5o2uXHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICByZXNvbHZlKHN1Y2Nlc3MocmVzKSlcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgIHJlamVjdChlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZmFpbChlcnIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcclxuXHJcbiAgLy/kuI3lnKjnmbvlvZXnlYzpnaJcclxuICBpZiAoWzEwMDEsIDEwMDEsIDEwMDIsIDEwMDNdLmluY2x1ZGVzKHBhcnNlSW50KHJlcy5kYXRhLmNvZGUpKSAmJiBhcGkgIT0gJ3NpZ25JbicpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzaWduT3V0KCk7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uLy4uL2xvZ2lucy9sb2dpbi9sb2dpbidcclxuICAgICAgfSlcclxuICAgIH0sIDIwMDApO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwi55So5oi355m75b2V5aSx5pWILDLnp5LlkI7oh6rliqjot7PovaznmbvlvZXnlYzpnaIhXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHJlcy5kYXRhLmNvZGUgIT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGNvZGVbcmVzLmRhdGEuY29kZV0pXHJcbiAgfVxyXG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMocmVzLmhlYWRlcik7XHJcbiAgaWYgKGtleXMuaW5kZXhPZihcImFjY2Vzcy10b2tlblwiKSAhPT0gLTEpIHtcclxuICAgIC8vIHd4LnNob3dUb2FzdCh7XHJcbiAgICAvLyAgICAgdGl0bGU6ICfkv53lrZh0b2tlbicsXHJcbiAgICAvLyB9KVxyXG4gICAgbGV0IG5ld3Rva2VuID0gcmVzLmhlYWRlclsnYWNjZXNzLXRva2VuJ107XHJcbiAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiBcImFjY2Vzcy10b2tlblwiLFxyXG4gICAgICBkYXRhOiBuZXd0b2tlblxyXG4gICAgfSlcclxuICB9XHJcbiAgaWYgKGtleXMuaW5kZXhPZihcInVpbmZvXCIpICE9PSAtMSkge1xyXG4gICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogXCJ1c2VyaW5mb1wiLFxyXG4gICAgICBkYXRhOiByZXMuZGF0YS5kYXRhLmluZm9cclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICByZXR1cm4gcmVzLmRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhaWwoZXJyKSB7XHJcbiAgY29uc29sZS5sb2coZXJyKTtcclxuICBpZiAoZXJyICYmIGVyclsnZXJyTXNnJ10gPT0gXCJyZXF1ZXN0OmZhaWwgcmVxdWVzdDpmYWlsXCIpIHtcclxuICAgIHJldHVybiBcIui/nuaOpeacjeWKoeWZqOWksei0pVwiO1xyXG4gIH1cclxuICByZXR1cm4gXCLnvZHnu5zkuI3lj6/ovr5cIjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDsiXX0=