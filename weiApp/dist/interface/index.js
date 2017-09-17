"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var interfaces = {
  getUserInfo: function getUserInfo() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var loginData, userInfo;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _wepy2.default.login();

            case 2:
              loginData = _context.sent;
              _context.t0 = console;
              _context.next = 6;
              return _wepy2.default.login();

            case 6:
              _context.t1 = _context.sent;

              _context.t0.log.call(_context.t0, _context.t1);

              console.log("登录成功", loginData);
              _context.next = 11;
              return _wepy2.default.getUserInfo();

            case 11:
              userInfo = _context.sent;

              console.log("获取用户信息", userInfo);
              userInfo.code = loginData.code;
              wx.setStorage({
                key: "weiInfo",
                data: userInfo.userInfo
              });
              return _context.abrupt("return", userInfo);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};
exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsImxvZ2luIiwibG9naW5EYXRhIiwiY29uc29sZSIsImxvZyIsInVzZXJJbmZvIiwiY29kZSIsInd4Iiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztBQUNBLElBQU1BLGFBQWE7QUFDWEMsYUFEVyx5QkFDRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ00sZUFBS0MsS0FBTCxFQUROOztBQUFBO0FBQ1pDLHVCQURZO0FBQUEsNEJBRWxCQyxPQUZrQjtBQUFBO0FBQUEscUJBRUEsZUFBS0YsS0FBTCxFQUZBOztBQUFBO0FBQUE7O0FBQUEsMEJBRVZHLEdBRlU7O0FBSWxCRCxzQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JGLFNBQXBCO0FBSmtCO0FBQUEscUJBS0ssZUFBS0YsV0FBTCxFQUxMOztBQUFBO0FBS1pLLHNCQUxZOztBQU1sQkYsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCQyxRQUF0QjtBQUNBQSx1QkFBU0MsSUFBVCxHQUFnQkosVUFBVUksSUFBMUI7QUFDQUMsaUJBQUdDLFVBQUgsQ0FBYztBQUNaQyxxQkFBSyxTQURPO0FBRVpDLHNCQUFNTCxTQUFTQTtBQUZILGVBQWQ7QUFSa0IsK0NBWVhBLFFBWlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhbkI7QUFkZ0IsQ0FBbkI7a0JBZ0JlTixVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuY29uc3QgaW50ZXJmYWNlcyA9IHtcclxuICBhc3luYyBnZXRVc2VySW5mbygpIHtcclxuICAgIGNvbnN0IGxvZ2luRGF0YSA9IGF3YWl0IHdlcHkubG9naW4oKTtcclxuICAgIGNvbnNvbGUubG9nKGF3YWl0IHdlcHkubG9naW4oKSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIueZu+W9leaIkOWKn1wiLCBsb2dpbkRhdGEpO1xyXG4gICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgIGNvbnNvbGUubG9nKFwi6I635Y+W55So5oi35L+h5oGvXCIsIHVzZXJJbmZvKVxyXG4gICAgdXNlckluZm8uY29kZSA9IGxvZ2luRGF0YS5jb2RlXHJcbiAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiBcIndlaUluZm9cIixcclxuICAgICAgZGF0YTogdXNlckluZm8udXNlckluZm9cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdXNlckluZm9cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlcyJdfQ==