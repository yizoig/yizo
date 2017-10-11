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
                  url = url.replace(arr[k], '/' + data[arr[k].substring(2)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJ0b2tlbiIsImdldFN0b3JhZ2VTeW5jIiwiYXJyIiwibWF0Y2giLCJrIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsInVybERhdGEiLCJpdGVtIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXF1ZXN0IiwicmVzIiwiY29kZSIsIkVycm9yIiwia2V5cyIsIk9iamVjdCIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwibmV3dG9rZW4iLCJ3eCIsInNldFN0b3JhZ2UiLCJrZXkiLCJpbmZvIiwiZG9GZXRjaCIsIkFwaSIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUVBUUEsaUJBQXVCQSxHQUF2QjtBQUFBLFFBQTRCQyxNQUE1Qix1RUFBcUMsS0FBckM7QUFBQSxRQUE0Q0MsSUFBNUMsdUVBQW1ELEVBQW5EO0FBQUEsUUFBdURDLE1BQXZELHVFQUFnRSxFQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTUMsaUJBRk4sR0FFYyxlQUFLQyxjQUFMLENBQW9CLGNBQXBCLENBRmQ7O0FBR0VGLG1CQUFPLGNBQVAsSUFBeUIsa0JBQXpCO0FBQ0EsZ0JBQUlDLEtBQUosRUFBVztBQUNURCxxQkFBTyxjQUFQLElBQXlCQyxLQUF6QjtBQUNEO0FBQ0Q7QUFDSUUsZUFSTixHQVFZTixJQUFJTyxLQUFKLENBQVUsMEJBQVYsQ0FSWjs7QUFTRSxnQkFBSUwsUUFBUUksT0FBTyxJQUFuQixFQUF5QjtBQUN2QixtQkFBU0UsQ0FBVCxJQUFjRixHQUFkLEVBQW1CO0FBQ2pCLG9CQUFJQSxJQUFJRSxDQUFKLEVBQU9DLFNBQVAsQ0FBaUIsQ0FBakIsS0FBdUJQLElBQTNCLEVBQWlDO0FBQy9CRix3QkFBTUEsSUFBSVUsT0FBSixDQUFZSixJQUFJRSxDQUFKLENBQVosRUFBb0IsTUFBTU4sS0FBS0ksSUFBSUUs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R0FBUixFQUFhLEtBQWIsRUFBb0JFLElBQXBCLENBQXRCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBSEs7QUFJVmlDLFVBQVE7QUFBQTtBQUFBLDBFQUFPLGtCQUFPakMsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBc0I0QixRQUFROUIsR0FBUixFQUFhLFFBQWIsRUFBdUJFLElBQXZCLENBQXRCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkUsQ0FBWjtrQkFNZTZCLEciLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgQ29kZSBmcm9tICcuLi8uLi9jb25maWcvY29kZSc7XHJcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi4vLi4vY29uZmlnL2RldGFpbC5qcyc7XHJcblxyXG5sZXQgY29kZSA9IHt9O1xyXG5mb3IgKGxldCBrZXkgaW4gQ29kZSkge1xyXG4gIGNvZGVbQ29kZVtrZXldXSA9IERldGFpbFtrZXldO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGRvRmV0Y2godXJsLCBtZXRob2QgPSAnR0VUJywgZGF0YSA9IHt9LCBoZWFkZXIgPSB7fSkge1xyXG5cclxuICBsZXQgdG9rZW4gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFwiYWNjZXNzLXRva2VuXCIpXHJcbiAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gIGlmICh0b2tlbikge1xyXG4gICAgaGVhZGVyWydhY2Nlc3MtdG9rZW4nXSA9IHRva2VuO1xyXG4gIH1cclxuICAvL+abv+aNonVybOWPguaVsFxyXG4gIGxldCBhcnIgPSB1cmwubWF0Y2goL1xcLzpbYS16QS1aXVswLTlhLXpBLVpdKy9nKTtcclxuICBpZiAoZGF0YSAmJiBhcnIgIT0gbnVsbCkge1xyXG4gICAgZm9yIChsZXQgayBpbiBhcnIpIHtcclxuICAgICAgaWYgKGFycltrXS5zdWJzdHJpbmcoMikgaW4gZGF0YSkge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKGFycltrXSwgJy8nICsgZGF0YVthcnJba10uc3Vic3RyaW5nKDIpXSk7XHJcbiAgICAgICAgZGVsZXRlIGRhdGFbYXJyW2tdLnN1YnN0cmluZygyKV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYgKG1ldGhvZCA9PSAnR0VUJykge1xyXG4gICAgbGV0IHVybERhdGEgPSBbXTtcclxuICAgIGZvciAobGV0IGl0ZW0gaW4gZGF0YSkge1xyXG4gICAgICB1cmxEYXRhLnB1c2goaXRlbSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2l0ZW1dKSk7XHJcbiAgICB9XHJcbiAgICB1cmwgKz0gJz8nICsgdXJsRGF0YS5qb2luKCcmJylcclxuICAgIGRhdGEgPSB7fVxyXG4gIH1cclxuICAvL+WPkei1t+ivt+axglxyXG4gIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgdXJsLFxyXG4gICAgZGF0YSxcclxuICAgIGhlYWRlcixcclxuICAgIG1ldGhvZFxyXG4gIH0pXHJcbiAgaWYgKHJlcy5kYXRhLmNvZGUgIT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGNvZGVbcmVzLmRhdGEuY29kZV0pXHJcbiAgfVxyXG4gIC8v5L+d5a2YdG9rZW5cclxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlcy5oZWFkZXIpO1xyXG4gIGlmIChrZXlzLmluZGV4T2YoXCJhY2Nlc3MtdG9rZW5cIikgIT09IC0xKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ+S/neWtmHRva2VuJylcclxuICAgIGxldCBuZXd0b2tlbiA9IHJlcy5oZWFkZXJbJ2FjY2Vzcy10b2tlbiddO1xyXG4gICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogXCJhY2Nlc3MtdG9rZW5cIixcclxuICAgICAgZGF0YTogbmV3dG9rZW5cclxuICAgIH0pXHJcbiAgfVxyXG4gIGlmIChrZXlzLmluZGV4T2YoXCJ1c2VyLWluZm9cIikgIT09IC0xKSB7XHJcbiAgICBjb25zb2xlLmxvZygn5L+d5a2Y55So5oi35L+h5oGvJylcclxuICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6IFwidXNlckluZm9cIixcclxuICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5pbmZvXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gcmVzLmRhdGE7XHJcbn1cclxuXHJcbmNvbnN0IEFwaSA9IHtcclxuICBnZXQ6IHVybCA9PiBhc3luYyAoZGF0YSkgPT4gYXdhaXQgZG9GZXRjaCh1cmwsICdHRVQnLCBkYXRhKSxcclxuICBwb3N0OiB1cmwgPT4gYXN5bmMgKGRhdGEpID0+IGF3YWl0IGRvRmV0Y2godXJsLCAnUE9TVCcsIGRhdGEpLFxyXG4gIHB1dDogdXJsID0+IGFzeW5jIChkYXRhKSA9PiBhd2FpdCBkb0ZldGNoKHVybCwgJ1BVVCcsIGRhdGEpLFxyXG4gIGRlbGV0ZTogdXJsID0+IGFzeW5jIChkYXRhKSA9PiBhd2FpdCBkb0ZldGNoKHVybCwgJ0RFTEVURScsIGRhdGEpLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwaTsiXX0=