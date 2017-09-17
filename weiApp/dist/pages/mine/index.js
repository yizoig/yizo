'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../npm/wepy-async-function/index.js');

var _index = require('./../../components/users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

var _login = require('./../../components/mixins/login.js');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import request from '../../utils/api'
// import { host } from '../../config/api'


var Mine = function (_wepy$page) {
  _inherits(Mine, _wepy$page);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      id: 1,
      userinfo: null,
      weiInfo: null
    }, _this.$props = { "avatar": { "v-bind:id.sync": "id" } }, _this.$events = {}, _this.components = {
      avatar: _index2.default
    }, _this.mixins = [_login2.default], _this.methods = {
      navigateTo: function navigateTo(url) {
        _wepy2.default.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref3, weiInfo, _ref4, userinfo;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _wepy2.default.getStorage({
                  key: 'weiInfo'
                });

              case 3:
                _ref3 = _context.sent;
                weiInfo = _ref3.data;
                _context.next = 7;
                return _wepy2.default.getStorage({
                  key: 'userinfo'
                });

              case 7:
                _ref4 = _context.sent;
                userinfo = _ref4.data;

                this.weiInfo = weiInfo;
                this.userinfo = userinfo;
                this.$apply();
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Mine;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1pbmUiLCJkYXRhIiwiaWQiLCJ1c2VyaW5mbyIsIndlaUluZm8iLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImF2YXRhciIsIm1peGlucyIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0U3RvcmFnZSIsImtleSIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFIQTtBQUNBOzs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSSxHQUFPO0FBQ0xDLFVBQUksQ0FEQztBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLGVBQVM7QUFISixLLFFBS1JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxrQkFBaUIsSUFBbEIsRUFBVixFLFFBQ1ZDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFHWkMsTSxHQUFTLGlCLFFBQ1RDLE8sR0FBVTtBQUNSQyxrQkFBWSxvQkFBU0MsR0FBVCxFQUFjO0FBQ3hCLHVCQUFLRCxVQUFMLENBQWdCO0FBQ2RDO0FBRGMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFZd0IsZUFBS0MsVUFBTCxDQUFnQjtBQUM1Q0MsdUJBQUs7QUFEdUMsaUJBQWhCLEM7Ozs7QUFBbEJWLHVCLFNBQU5ILEk7O3VCQUd5QixlQUFLWSxVQUFMLENBQWdCO0FBQzdDQyx1QkFBSztBQUR3QyxpQkFBaEIsQzs7OztBQUFuQlgsd0IsU0FBTkYsSTs7QUFHTixxQkFBS0csT0FBTCxHQUFlQSxPQUFmO0FBQ0EscUJBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUtZLE1BQUw7Ozs7Ozs7O0FBRUFDLHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEM0QixlQUFLQyxJOztrQkFBbEJsQixJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuLy8gaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xyXG4vLyBpbXBvcnQgeyBob3N0IH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwaSdcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJzL2F2YXRhci9pbmRleCdcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWl4aW5zL2xvZ2luJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB1c2VyaW5mbzogbnVsbCxcclxuICAgIHdlaUluZm86IG51bGxcclxuICB9XHJcbiAkcHJvcHMgPSB7XCJhdmF0YXJcIjp7XCJ2LWJpbmQ6aWQuc3luY1wiOlwiaWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgYXZhdGFyOiBBdmF0YXJcclxuICB9XHJcbiAgbWl4aW5zID0gW2xvZ2luXVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBuYXZpZ2F0ZVRvOiBmdW5jdGlvbih1cmwpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICAgKi9cclxuICAgICAgbGV0IHsgZGF0YTogd2VpSW5mbyB9ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICd3ZWlJbmZvJ1xyXG4gICAgICB9KVxyXG4gICAgICBsZXQgeyBkYXRhOiB1c2VyaW5mbyB9ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICd1c2VyaW5mbydcclxuICAgICAgfSlcclxuICAgICAgdGhpcy53ZWlJbmZvID0gd2VpSW5mb1xyXG4gICAgICB0aGlzLnVzZXJpbmZvID0gdXNlcmluZm9cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=