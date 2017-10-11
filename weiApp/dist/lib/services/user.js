'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../utils/fetch.js');

var _fetch2 = _interopRequireDefault(_fetch);

var _user = require('./../apis/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function replace(source, target) {

  for (var item in target) {

    if (item in source) {
      source[item] = target[item];
    }
  }
  return source;
}
var User = {
  autoSignIn: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, code, _ref3, rawData, signature, encryptedData, iv, _ref4, result, header;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _wepy2.default.login();

            case 3:
              _ref2 = _context.sent;
              code = _ref2.code;
              _context.next = 7;
              return _wepy2.default.getUserInfo();

            case 7:
              _ref3 = _context.sent;
              rawData = _ref3.rawData;
              signature = _ref3.signature;
              encryptedData = _ref3.encryptedData;
              iv = _ref3.iv;
              _context.next = 14;
              return _user2.default.weixinSignin({ rawData: rawData, signature: signature, encryptedData: encryptedData, iv: iv, code: code });

            case 14:
              _ref4 = _context.sent;
              result = _ref4.data;
              header = _ref4.header;
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 19]]);
    }));

    return function autoSignIn() {
      return _ref.apply(this, arguments);
    };
  }(),
  setUserInfo: function setUserInfo(data) {
    var userInfo = _wepy2.default.getStorageSync("userInfo");
    var remember = _wepy2.default.getStorageSync("remember");
    if (userInfo) {
      userInfo = replace(userInfo, data);
      _wepy2.default.setStorage({
        key: "userInfo",
        data: userInfo
      });
    }
    if (remember) {
      remember = replace(remember, data);
      _wepy2.default.setStorage({
        key: "remember",
        data: remember
      });
    }
  },
  signOut: function signOut() {
    //移除token
    _wepy2.default.removeStorage({ key: 'access-token' });
    _wepy2.default.removeStorage({ key: 'remember' });
    _wepy2.default.removeStorage({ key: 'userinfo' });
  },
  syncWxInfo: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _ref6, rawData, _ref7, data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _wepy2.default.getUserInfo();

            case 2:
              _ref6 = _context2.sent;
              rawData = _ref6.rawData;
              _context2.next = 6;
              return _user2.default.syncWxInfo({ rawData: rawData });

            case 6:
              _ref7 = _context2.sent;
              data = _ref7.data;
              return _context2.abrupt('return', data);

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function syncWxInfo() {
      return _ref5.apply(this, arguments);
    };
  }()
};
exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsicmVwbGFjZSIsInNvdXJjZSIsInRhcmdldCIsIml0ZW0iLCJVc2VyIiwiYXV0b1NpZ25JbiIsImxvZ2luIiwiY29kZSIsImdldFVzZXJJbmZvIiwicmF3RGF0YSIsInNpZ25hdHVyZSIsImVuY3J5cHRlZERhdGEiLCJpdiIsIndlaXhpblNpZ25pbiIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJjb25zb2xlIiwibG9nIiwic2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImdldFN0b3JhZ2VTeW5jIiwicmVtZW1iZXIiLCJzZXRTdG9yYWdlIiwia2V5Iiwic2lnbk91dCIsInJlbW92ZVN0b3JhZ2UiLCJzeW5jV3hJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsU0FBU0EsT0FBVCxDQUFpQkMsTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDOztBQUUvQixPQUFLLElBQUlDLElBQVQsSUFBaUJELE1BQWpCLEVBQXlCOztBQUV2QixRQUFJQyxRQUFRRixNQUFaLEVBQW9CO0FBQ2xCQSxhQUFPRSxJQUFQLElBQWVELE9BQU9DLElBQVAsQ0FBZjtBQUNEO0FBQ0Y7QUFDRCxTQUFPRixNQUFQO0FBQ0Q7QUFDRCxJQUFNRyxPQUFPO0FBQ1hDO0FBQUEsdUVBQVk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFYSxlQUFLQyxLQUFMLEVBRmI7O0FBQUE7QUFBQTtBQUVGQyxrQkFGRSxTQUVGQSxJQUZFO0FBQUE7QUFBQSxxQkFHOEMsZUFBS0MsV0FBTCxFQUg5Qzs7QUFBQTtBQUFBO0FBR0ZDLHFCQUhFLFNBR0ZBLE9BSEU7QUFHT0MsdUJBSFAsU0FHT0EsU0FIUDtBQUdrQkMsMkJBSGxCLFNBR2tCQSxhQUhsQjtBQUdpQ0MsZ0JBSGpDLFNBR2lDQSxFQUhqQztBQUFBO0FBQUEscUJBSTZCLGVBQVFDLFlBQVIsQ0FBcUIsRUFBRUosZ0JBQUYsRUFBV0Msb0JBQVgsRUFBc0JDLDRCQUF0QixFQUFxQ0MsTUFBckMsRUFBeUNMLFVBQXpDLEVBQXJCLENBSjdCOztBQUFBO0FBQUE7QUFJSU8sb0JBSkosU0FJRkMsSUFKRTtBQUlZQyxvQkFKWixTQUlZQSxNQUpaO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBTVJDLHNCQUFRQyxHQUFSOztBQU5RO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEVztBQVVYQyxlQUFhLHFCQUFDSixJQUFELEVBQVU7QUFDckIsUUFBSUssV0FBVyxlQUFLQyxjQUFMLENBQW9CLFVBQXBCLENBQWY7QUFDQSxRQUFJQyxXQUFXLGVBQUtELGNBQUwsQ0FBb0IsVUFBcEIsQ0FBZjtBQUNBLFFBQUlELFFBQUosRUFBYztBQUNaQSxpQkFBV3BCLFFBQVFvQixRQUFSLEVBQWtCTCxJQUFsQixDQUFYO0FBQ0EscUJBQUtRLFVBQUwsQ0FBZ0I7QUFDZEMsYUFBSyxVQURTO0FBRWRULGNBQU1LO0FBRlEsT0FBaEI7QUFJRDtBQUNELFFBQUlFLFFBQUosRUFBYztBQUNaQSxpQkFBV3RCLFFBQVFzQixRQUFSLEVBQWtCUCxJQUFsQixDQUFYO0FBQ0EscUJBQUtRLFVBQUwsQ0FBZ0I7QUFDZEMsYUFBSyxVQURTO0FBRWRULGNBQU1PO0FBRlEsT0FBaEI7QUFJRDtBQUNGLEdBM0JVO0FBNEJYRyxXQUFTLG1CQUFNO0FBQ2I7QUFDQSxtQkFBS0MsYUFBTCxDQUFtQixFQUFFRixLQUFLLGNBQVAsRUFBbkI7QUFDQSxtQkFBS0UsYUFBTCxDQUFtQixFQUFFRixLQUFLLFVBQVAsRUFBbkI7QUFDQSxtQkFBS0UsYUFBTCxDQUFtQixFQUFFRixLQUFLLFVBQVAsRUFBbkI7QUFDRCxHQWpDVTtBQWtDWEc7QUFBQSx3RUFBVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZSxlQUFLbkIsV0FBTCxFQURmOztBQUFBO0FBQUE7QUFDSEMscUJBREcsU0FDSEEsT0FERztBQUFBO0FBQUEscUJBRVksZUFBUWtCLFVBQVIsQ0FBbUIsRUFBRWxCLGdCQUFGLEVBQW5CLENBRlo7O0FBQUE7QUFBQTtBQUVITSxrQkFGRyxTQUVIQSxJQUZHO0FBQUEsZ0RBR0ZBLElBSEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWxDVyxDQUFiO2tCQXdDZVgsSSIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IEFwaSBmcm9tICcuLi91dGlscy9mZXRjaCdcclxuaW1wb3J0IFVzZXJBcGkgZnJvbSAnLi4vYXBpcy91c2VyJztcclxuZnVuY3Rpb24gcmVwbGFjZShzb3VyY2UsIHRhcmdldCkge1xyXG5cclxuICBmb3IgKGxldCBpdGVtIGluIHRhcmdldCkge1xyXG5cclxuICAgIGlmIChpdGVtIGluIHNvdXJjZSkge1xyXG4gICAgICBzb3VyY2VbaXRlbV0gPSB0YXJnZXRbaXRlbV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzb3VyY2U7XHJcbn1cclxuY29uc3QgVXNlciA9IHtcclxuICBhdXRvU2lnbkluOiBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKCk7XHJcbiAgICAgIGxldCB7IHJhd0RhdGEsIHNpZ25hdHVyZSwgZW5jcnlwdGVkRGF0YSwgaXYgfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKTtcclxuICAgICAgbGV0IHsgZGF0YTogcmVzdWx0LCBoZWFkZXIgfSA9IGF3YWl0IFVzZXJBcGkud2VpeGluU2lnbmluKHsgcmF3RGF0YSwgc2lnbmF0dXJlLCBlbmNyeXB0ZWREYXRhLCBpdiwgY29kZSB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2V0VXNlckluZm86IChkYXRhKSA9PiB7XHJcbiAgICBsZXQgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFwidXNlckluZm9cIik7XHJcbiAgICBsZXQgcmVtZW1iZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFwicmVtZW1iZXJcIik7XHJcbiAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgdXNlckluZm8gPSByZXBsYWNlKHVzZXJJbmZvLCBkYXRhKTtcclxuICAgICAgd2VweS5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6IFwidXNlckluZm9cIixcclxuICAgICAgICBkYXRhOiB1c2VySW5mb1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChyZW1lbWJlcikge1xyXG4gICAgICByZW1lbWJlciA9IHJlcGxhY2UocmVtZW1iZXIsIGRhdGEpO1xyXG4gICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleTogXCJyZW1lbWJlclwiLFxyXG4gICAgICAgIGRhdGE6IHJlbWVtYmVyXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2lnbk91dDogKCkgPT4ge1xyXG4gICAgLy/np7vpmaR0b2tlblxyXG4gICAgd2VweS5yZW1vdmVTdG9yYWdlKHsga2V5OiAnYWNjZXNzLXRva2VuJyB9KTtcclxuICAgIHdlcHkucmVtb3ZlU3RvcmFnZSh7IGtleTogJ3JlbWVtYmVyJyB9KTtcclxuICAgIHdlcHkucmVtb3ZlU3RvcmFnZSh7IGtleTogJ3VzZXJpbmZvJyB9KTtcclxuICB9LFxyXG4gIHN5bmNXeEluZm86YXN5bmMgKCk9PntcclxuICAgIGxldCB7IHJhd0RhdGEgfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKTtcclxuICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFVzZXJBcGkuc3luY1d4SW5mbyh7IHJhd0RhdGEgfSlcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdfQ==