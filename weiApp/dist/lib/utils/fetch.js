'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var doFetch = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var token, arr, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value, urlData, item, res, keys, newtoken;

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

            if (!(data && arr != null)) {
              _context.next = 24;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 8;

            for (_iterator = arr[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              value = _step.value;

              if (value.substring(2) in data) {
                url = url.replace(value, '/' + data[value.substring(2)]);
                delete data[value.substring(2)];
              }
            }
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](8);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 16:
            _context.prev = 16;
            _context.prev = 17;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 19:
            _context.prev = 19;

            if (!_didIteratorError) {
              _context.next = 22;
              break;
            }

            throw _iteratorError;

          case 22:
            return _context.finish(19);

          case 23:
            return _context.finish(16);

          case 24:
            if (method == 'GET') {
              urlData = [];

              for (item in data) {
                urlData.push(item + '=' + encodeURIComponent(data[item]));
              }
              url += '?' + urlData.join('&');
              data = {};
            }
            //发起请求
            _context.next = 27;
            return _wepy2.default.request({
              url: url,
              data: data,
              header: header,
              method: method
            });

          case 27:
            res = _context.sent;

            if (!(res.data.code != 0)) {
              _context.next = 30;
              break;
            }

            throw new Error(code[res.data.code]);

          case 30:
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

          case 34:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 12, 16, 24], [17,, 19, 23]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJ0b2tlbiIsImdldFN0b3JhZ2VTeW5jIiwiYXJyIiwibWF0Y2giLCJ2YWx1ZSIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJ1cmxEYXRhIiwiaXRlbSIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicmVxdWVzdCIsInJlcyIsImNvZGUiLCJFcnJvciIsImtleXMiLCJPYmplY3QiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsIm5ld3Rva2VuIiwid3giLCJzZXRTdG9yYWdlIiwia2V5IiwiaW5mbyIsImRvRmV0Y2giLCJBcGkiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FFQVFBLGlCQUF1QkEsR0FBdkI7QUFBQSxRQUE0QkMsTUFBNUIsdUVBQXFDLEtBQXJDO0FBQUEsUUFBNENDLElBQTVDLHVFQUFtRCxFQUFuRDtBQUFBLFFBQXVEQyxNQUF2RCx1RUFBZ0UsRUFBaEU7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTUMsaUJBSE4sR0FHYyxlQUFLQyxjQUFMLENBQW9CLGNBQXBCLENBSGQ7O0FBSUVGLG1CQUFPLGNBQVAsSUFBeUIsa0JBQXpCO0FBQ0EsZ0JBQUlDLEtBQUosRUFBVztBQUNURCxxQkFBTyxjQUFQLElBQXlCQyxLQUF6QjtBQUNEO0FBQ0Q7QUFDSUUsZUFUTixHQVNZTixJQUFJTyxLQUFKLENBQVUsMEJBQVYsQ0FUWjs7QUFBQSxrQkFVTUwsUUFBUUksT0FBTyxJQVZyQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXSSw2QkFBa0JBLEdBQWxCLHVIQUF1QjtBQUFkRSxtQkFBYzs7QUFDckIsa0JBQUlBLE1BQU1DLFNBQU4sQ0FBZ0IsQ0FBaEIsS0FBc0JQLElBQTFCLEVBQWdDO0FBQzlCRixzQkFBTUEsSUFBSVUsT0FBSixDQUFZRixLQUFaLEVBQW1C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QUFBQSxPQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGSTtBQUdWZ0MsT0FBSztBQUFBO0FBQUEsMEVBQU8sa0JBQU9oQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFzQjRCLFFBQVE5QixHQUFSLEVBQWEsS0FBYixFQUFvQkUsSUFBcEIsQ0FBdEI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FISztBQUlWaUMsVUFBUTtBQUFBO0FBQUEsMEVBQU8sa0JBQU9qQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFzQjRCLFFBQVE5QixHQUFSLEVBQWEsUUFBYixFQUF1QkUsSUFBdkIsQ0FBdEI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRSxDQUFaO2tCQU1lNkIsRyIsImZpbGUiOiJmZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBDb2RlIGZyb20gJy4uLy4uL2NvbmZpZy9jb2RlJztcclxuaW1wb3J0IERldGFpbCBmcm9tICcuLi8uLi9jb25maWcvZGV0YWlsLmpzJztcclxuXHJcbmxldCBjb2RlID0ge307XHJcbmZvciAobGV0IGtleSBpbiBDb2RlKSB7XHJcbiAgY29kZVtDb2RlW2tleV1dID0gRGV0YWlsW2tleV07XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCh1cmwsIG1ldGhvZCA9ICdHRVQnLCBkYXRhID0ge30sIGhlYWRlciA9IHt9KSB7XHJcblxyXG5cclxuICBsZXQgdG9rZW4gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFwiYWNjZXNzLXRva2VuXCIpXHJcbiAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gIGlmICh0b2tlbikge1xyXG4gICAgaGVhZGVyWydhY2Nlc3MtdG9rZW4nXSA9IHRva2VuO1xyXG4gIH1cclxuICAvL+abv+aNonVybOWPguaVsFxyXG4gIGxldCBhcnIgPSB1cmwubWF0Y2goL1xcLzpbYS16QS1aXVswLTlhLXpBLVpdKy9nKTtcclxuICBpZiAoZGF0YSAmJiBhcnIgIT0gbnVsbCkge1xyXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgYXJyKSB7XHJcbiAgICAgIGlmICh2YWx1ZS5zdWJzdHJpbmcoMikgaW4gZGF0YSkge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKHZhbHVlLCAnLycgKyBkYXRhW3ZhbHVlLnN1YnN0cmluZygyKV0pO1xyXG4gICAgICAgIGRlbGV0ZSBkYXRhW3ZhbHVlLnN1YnN0cmluZygyKV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYgKG1ldGhvZCA9PSAnR0VUJykge1xyXG4gICAgbGV0IHVybERhdGEgPSBbXTtcclxuICAgIGZvciAobGV0IGl0ZW0gaW4gZGF0YSkge1xyXG4gICAgICB1cmxEYXRhLnB1c2goaXRlbSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2l0ZW1dKSk7XHJcbiAgICB9XHJcbiAgICB1cmwgKz0gJz8nICsgdXJsRGF0YS5qb2luKCcmJylcclxuICAgIGRhdGEgPSB7fVxyXG4gIH1cclxuICAvL+WPkei1t+ivt+axglxyXG4gIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgdXJsLFxyXG4gICAgZGF0YSxcclxuICAgIGhlYWRlcixcclxuICAgIG1ldGhvZFxyXG4gIH0pXHJcbiAgaWYgKHJlcy5kYXRhLmNvZGUgIT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGNvZGVbcmVzLmRhdGEuY29kZV0pXHJcbiAgfVxyXG4gIC8v5L+d5a2YdG9rZW5cclxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlcy5oZWFkZXIpO1xyXG4gIGlmIChrZXlzLmluZGV4T2YoXCJhY2Nlc3MtdG9rZW5cIikgIT09IC0xKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ+S/neWtmHRva2VuJylcclxuICAgIGxldCBuZXd0b2tlbiA9IHJlcy5oZWFkZXJbJ2FjY2Vzcy10b2tlbiddO1xyXG4gICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogXCJhY2Nlc3MtdG9rZW5cIixcclxuICAgICAgZGF0YTogbmV3dG9rZW5cclxuICAgIH0pXHJcbiAgfVxyXG4gIGlmIChrZXlzLmluZGV4T2YoXCJ1c2VyLWluZm9cIikgIT09IC0xKSB7XHJcbiAgICBjb25zb2xlLmxvZygn5L+d5a2Y55So5oi35L+h5oGvJylcclxuICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6IFwidXNlckluZm9cIixcclxuICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5pbmZvXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gcmVzLmRhdGE7XHJcbn1cclxuXHJcbmNvbnN0IEFwaSA9IHtcclxuICBnZXQ6IHVybCA9PiBhc3luYyAoZGF0YSkgPT4gYXdhaXQgZG9GZXRjaCh1cmwsICdHRVQnLCBkYXRhKSxcclxuICBwb3N0OiB1cmwgPT4gYXN5bmMgKGRhdGEpID0+IGF3YWl0IGRvRmV0Y2godXJsLCAnUE9TVCcsIGRhdGEpLFxyXG4gIHB1dDogdXJsID0+IGFzeW5jIChkYXRhKSA9PiBhd2FpdCBkb0ZldGNoKHVybCwgJ1BVVCcsIGRhdGEpLFxyXG4gIGRlbGV0ZTogdXJsID0+IGFzeW5jIChkYXRhKSA9PiBhd2FpdCBkb0ZldGNoKHVybCwgJ0RFTEVURScsIGRhdGEpLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwaTsiXX0=