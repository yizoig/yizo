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
  }()
};
exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImF1dG9TaWduSW4iLCJsb2dpbiIsImNvZGUiLCJnZXRVc2VySW5mbyIsInJhd0RhdGEiLCJzaWduYXR1cmUiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJ3ZWl4aW5TaWduaW4iLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU1BLE9BQU87QUFDWEM7QUFBQSx1RUFBWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVhLGVBQUtDLEtBQUwsRUFGYjs7QUFBQTtBQUFBO0FBRUZDLGtCQUZFLFNBRUZBLElBRkU7QUFBQTtBQUFBLHFCQUc4QyxlQUFLQyxXQUFMLEVBSDlDOztBQUFBO0FBQUE7QUFHRkMscUJBSEUsU0FHRkEsT0FIRTtBQUdPQyx1QkFIUCxTQUdPQSxTQUhQO0FBR2tCQywyQkFIbEIsU0FHa0JBLGFBSGxCO0FBR2lDQyxnQkFIakMsU0FHaUNBLEVBSGpDO0FBQUE7QUFBQSxxQkFJeUIsZUFBUUMsWUFBUixDQUFxQixFQUFFSixnQkFBRixFQUFXQyxvQkFBWCxFQUFzQkMsNEJBQXRCLEVBQXFDQyxNQUFyQyxFQUF5Q0wsVUFBekMsRUFBckIsQ0FKekI7O0FBQUE7QUFBQTtBQUlFTyxvQkFKRixTQUlIQyxJQUpHO0FBSVNDLG9CQUpULFNBSVNBLE1BSlQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFNUkMsc0JBQVFDLEdBQVI7O0FBTlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURXLENBQWI7a0JBV2VkLEkiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vdXRpbHMvZmV0Y2gnXHJcbmltcG9ydCBVc2VyQXBpIGZyb20gJy4uL2FwaXMvdXNlcic7XHJcbmNvbnN0IFVzZXIgPSB7XHJcbiAgYXV0b1NpZ25JbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpO1xyXG4gICAgICBsZXQgeyByYXdEYXRhLCBzaWduYXR1cmUsIGVuY3J5cHRlZERhdGEsIGl2IH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKCk7XHJcbiAgICAgIGxldCB7ZGF0YTpyZXN1bHQsaGVhZGVyfSA9IGF3YWl0IFVzZXJBcGkud2VpeGluU2lnbmluKHsgcmF3RGF0YSwgc2lnbmF0dXJlLCBlbmNyeXB0ZWREYXRhLCBpdiAsY29kZX0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il19