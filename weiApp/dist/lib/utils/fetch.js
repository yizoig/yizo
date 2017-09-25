'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var doFetch = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var token, arr, k, urlData, item, res, keys, newtoken;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = _wepy2.default.getStorageSync("access-token");

            header['content-type'] = 'application/json';
            if (token) {
              header['access-token'] = token;
            }
            //替换url参数
            arr = url.match(/\/:[a-zA-Z][0-9a-zA-Z]+/g);

            if (data && arr != null) {
              for (k in arr) {
                if (arr[k].substring(2) in data) {
                  url = url.replace(arr[k], '/' + data[value.substring(2)]);
                  delete data[arr[k].substring(2)];
                }
              }
            }
            if (method == 'GET') {
              urlData = [];

              for (item in data) {
                urlData.push(item + '=' + encodeURIComponent(data[item]));
              }
              url += '?' + urlData.join('&');
              data = {};
            }
            //发起请求
            _context.next = 8;
            return _wepy2.default.request({
              url: url,
              data: data,
              header: header,
              method: method
            });

          case 8:
            res = _context.sent;

            if (!(res.data.code != 0)) {
              _context.next = 11;
              break;
            }

            throw new Error(code[res.data.code]);

          case 11:
            //保存token
            keys = Object.keys(res.header);

            if (keys.indexOf("access-token") !== -1) {

              console.log('保存token');
              newtoken = res.header['access-token'];

              wx.setStorage({
                key: "access-token",
                data: newtoken
              });
            }
            if (keys.indexOf("user-info") !== -1) {
              console.log('保存用户信息');
              wx.setStorage({
                key: "userInfo",
                data: res.data.data.info
              });
            }
            return _context.abrupt('return', res.data);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function doFetch(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _code = require('./../../config/code.js');

var _code2 = _interopRequireDefault(_code);

var _detail = require('./../../config/detail.js');

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var code = {};
for (var key in _code2.default) {
  code[_code2.default[key]] = _detail2.default[key];
}


var Api = {
  get: function get(url) {
    return function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return doFetch(url, 'GET', data);

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function (_x5) {
        return _ref2.apply(this, arguments);
      };
    }();
  },
  post: function post(url) {
    return function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return doFetch(url, 'POST', data);

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function (_x6) {
        return _ref3.apply(this, arguments);
      };
    }();
  },
  put: function put(url) {
    return function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return doFetch(url, 'PUT', data);

              case 2:
                return _context4.abrupt('return', _context4.sent);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      return function (_x7) {
        return _ref4.apply(this, arguments);
      };
    }();
  },
  delete: function _delete(url) {
    return function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return doFetch(url, 'DELETE', data);

              case 2:
                return _context5.abrupt('return', _context5.sent);

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      return function (_x8) {
        return _ref5.apply(this, arguments);
      };
    }();
  }
};
exports.default = Api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJ0b2tlbiIsImdldFN0b3JhZ2VTeW5jIiwiYXJyIiwibWF0Y2giLCJrIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsInZhbHVlIiwidXJsRGF0YSIsIml0ZW0iLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInJlcXVlc3QiLCJyZXMiLCJjb2RlIiwiRXJyb3IiLCJrZXlzIiwiT2JqZWN0IiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJuZXd0b2tlbiIsInd4Iiwic2V0U3RvcmFnZSIsImtleSIsImluZm8iLCJkb0ZldGNoIiwiQXBpIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxRUFRQSxpQkFBdUJBLEdBQXZCO0FBQUEsUUFBNEJDLE1BQTVCLHVFQUFxQyxLQUFyQztBQUFBLFFBQTRDQyxJQUE1Qyx1RUFBbUQsRUFBbkQ7QUFBQSxRQUF1REMsTUFBdkQsdUVBQWdFLEVBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVNQyxpQkFGTixHQUVjLGVBQUtDLGNBQUwsQ0FBb0IsY0FBcEIsQ0FGZDs7QUFHRUYsbUJBQU8sY0FBUCxJQUF5QixrQkFBekI7QUFDQSxnQkFBSUMsS0FBSixFQUFXO0FBQ1RELHFCQUFPLGNBQVAsSUFBeUJDLEtBQXpCO0FBQ0Q7QUFDRDtBQUNJRSxlQVJOLEdBUVlOLElBQUlPLEtBQUosQ0FBVSwwQkFBVixDQVJaOztBQVNFLGdCQUFJTCxRQUFRSSxPQUFPLElBQW5CLEVBQXlCO0FBQ3ZCLG1CQUFTRSxDQUFULElBQWNGLEdBQWQsRUFBbUI7QUFDakIsb0JBQUlBLElBQUlFLENBQUosRUFBT0MsU0FBUCxDQUFpQixDQUFqQixLQUF1QlAsSUFBM0IsRUFBaUM7QUFDL0JGLHdCQUFNQSxJQUFJVSxPQUFKLENBQVlKLElBQUlFLENBQUosQ0FBWixFQUFvQixNQUFNTixLQUFL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QixHQUFSLEVBQWEsS0FBYixFQUFvQkUsSUFBcEIsQ0FBdEI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FISztBQUlWa0MsVUFBUTtBQUFBO0FBQUEsMEVBQU8sa0JBQU9sQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFzQjZCLFFBQVEvQixHQUFSLEVBQWEsUUFBYixFQUF1QkUsSUFBdkIsQ0FBdEI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRSxDQUFaO2tCQU1lOEIsRyIsImZpbGUiOiJmZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBDb2RlIGZyb20gJy4uLy4uL2NvbmZpZy9jb2RlJztcclxuaW1wb3J0IERldGFpbCBmcm9tICcuLi8uLi9jb25maWcvZGV0YWlsLmpzJztcclxuXHJcbmxldCBjb2RlID0ge307XHJcbmZvciAobGV0IGtleSBpbiBDb2RlKSB7XHJcbiAgY29kZVtDb2RlW2tleV1dID0gRGV0YWlsW2tleV07XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCh1cmwsIG1ldGhvZCA9ICdHRVQnLCBkYXRhID0ge30sIGhlYWRlciA9IHt9KSB7XHJcblxyXG4gIGxldCB0b2tlbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoXCJhY2Nlc3MtdG9rZW5cIilcclxuICBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgICBoZWFkZXJbJ2FjY2Vzcy10b2tlbiddID0gdG9rZW47XHJcbiAgfVxyXG4gIC8v5pu/5o2idXJs5Y+C5pWwXHJcbiAgbGV0IGFyciA9IHVybC5tYXRjaCgvXFwvOlthLXpBLVpdWzAtOWEtekEtWl0rL2cpO1xyXG4gIGlmIChkYXRhICYmIGFyciAhPSBudWxsKSB7XHJcbiAgICBmb3IgKGxldCBrIGluIGFycikge1xyXG4gICAgICBpZiAoYXJyW2tdLnN1YnN0cmluZygyKSBpbiBkYXRhKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoYXJyW2tdLCAnLycgKyBkYXRhW3ZhbHVlLnN1YnN0cmluZygyKV0pO1xyXG4gICAgICAgIGRlbGV0ZSBkYXRhW2FycltrXS5zdWJzdHJpbmcoMildO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChtZXRob2QgPT0gJ0dFVCcpIHtcclxuICAgIGxldCB1cmxEYXRhID0gW107XHJcbiAgICBmb3IgKGxldCBpdGVtIGluIGRhdGEpIHtcclxuICAgICAgdXJsRGF0YS5wdXNoKGl0ZW0gKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtpdGVtXSkpO1xyXG4gICAgfVxyXG4gICAgdXJsICs9ICc/JyArIHVybERhdGEuam9pbignJicpXHJcbiAgICBkYXRhID0ge31cclxuICB9XHJcbiAgLy/lj5Hotbfor7fmsYJcclxuICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgIHVybCxcclxuICAgIGRhdGEsXHJcbiAgICBoZWFkZXIsXHJcbiAgICBtZXRob2RcclxuICB9KVxyXG4gIGlmIChyZXMuZGF0YS5jb2RlICE9IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihjb2RlW3Jlcy5kYXRhLmNvZGVdKVxyXG4gIH1cclxuICAvL+S/neWtmHRva2VuXHJcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyZXMuaGVhZGVyKTtcclxuICBpZiAoa2V5cy5pbmRleE9mKFwiYWNjZXNzLXRva2VuXCIpICE9PSAtMSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfkv53lrZh0b2tlbicpXHJcbiAgICBsZXQgbmV3dG9rZW4gPSByZXMuaGVhZGVyWydhY2Nlc3MtdG9rZW4nXTtcclxuICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6IFwiYWNjZXNzLXRva2VuXCIsXHJcbiAgICAgIGRhdGE6IG5ld3Rva2VuXHJcbiAgICB9KVxyXG4gIH1cclxuICBpZiAoa2V5cy5pbmRleE9mKFwidXNlci1pbmZvXCIpICE9PSAtMSkge1xyXG4gICAgY29uc29sZS5sb2coJ+S/neWtmOeUqOaIt+S/oeaBrycpXHJcbiAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiBcInVzZXJJbmZvXCIsXHJcbiAgICAgIGRhdGE6IHJlcy5kYXRhLmRhdGEuaW5mb1xyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5kYXRhO1xyXG59XHJcblxyXG5jb25zdCBBcGkgPSB7XHJcbiAgZ2V0OiB1cmwgPT4gYXN5bmMgKGRhdGEpID0+IGF3YWl0IGRvRmV0Y2godXJsLCAnR0VUJywgZGF0YSksXHJcbiAgcG9zdDogdXJsID0+IGFzeW5jIChkYXRhKSA9PiBhd2FpdCBkb0ZldGNoKHVybCwgJ1BPU1QnLCBkYXRhKSxcclxuICBwdXQ6IHVybCA9PiBhc3luYyAoZGF0YSkgPT4gYXdhaXQgZG9GZXRjaCh1cmwsICdQVVQnLCBkYXRhKSxcclxuICBkZWxldGU6IHVybCA9PiBhc3luYyAoZGF0YSkgPT4gYXdhaXQgZG9GZXRjaCh1cmwsICdERUxFVEUnLCBkYXRhKSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcGk7Il19