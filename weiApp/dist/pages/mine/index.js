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

var Mine = function (_wepy$page) {
  _inherits(Mine, _wepy$page);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'enablePullDownRefresh': true,
      'backgroundColor': '#3385ff'
    }, _this.data = {
      id: null,
      userInfo: null,
      weiInfo: null
    }, _this.$props = { "avatar": { "v-bind:id.once": "id", "v-bind:id.sync": "id" } }, _this.$events = {}, _this.components = {
      avatar: _index2.default
    }, _this.mixins = [_login2.default], _this.methods = {
      syncWxInfo: function syncWxInfo() {},
      navigateTo: function navigateTo(url) {
        _wepy2.default.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref3, weiInfo;

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

                this.weiInfo = weiInfo;
                this.userInfo = this.$parent.globalData['userInfo'];
                this.id = this.userInfo['id'];
                this.$apply();
                console.log(this);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Mine;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1pbmUiLCJjb25maWciLCJkYXRhIiwiaWQiLCJ1c2VySW5mbyIsIndlaUluZm8iLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImF2YXRhciIsIm1peGlucyIsIm1ldGhvZHMiLCJzeW5jV3hJbmZvIiwibmF2aWdhdGVUbyIsInVybCIsImdldFN0b3JhZ2UiLCJrZXkiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQLCtCQUF5QixJQURsQjtBQUVQLHlCQUFtQjtBQUZaLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFVBQUksSUFEQztBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLGVBQVM7QUFISixLLFFBS1JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxrQkFBaUIsSUFBbEIsRUFBdUIsa0JBQWlCLElBQXhDLEVBQVYsRSxRQUNWQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBR1pDLE0sR0FBUyxpQixRQUNUQyxPLEdBQVU7QUFDUkMsa0JBQVksc0JBQVcsQ0FFdEIsQ0FITztBQUlSQyxrQkFBWSxvQkFBU0MsR0FBVCxFQUFjO0FBQ3hCLHVCQUFLRCxVQUFMLENBQWdCO0FBQ2RDO0FBRGMsU0FBaEI7QUFHRDtBQVJPLEs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFld0IsZUFBS0MsVUFBTCxDQUFnQjtBQUM1Q0MsdUJBQUs7QUFEdUMsaUJBQWhCLEM7Ozs7QUFBbEJYLHVCLFNBQU5ILEk7O0FBR04scUJBQUtHLE9BQUwsR0FBZUEsT0FBZjtBQUNBLHFCQUFLRCxRQUFMLEdBQWdCLEtBQUthLE9BQUwsQ0FBYUMsVUFBYixDQUF3QixVQUF4QixDQUFoQjtBQUNBLHFCQUFLZixFQUFMLEdBQVUsS0FBS0MsUUFBTCxDQUFjLElBQWQsQ0FBVjtBQUNBLHFCQUFLZSxNQUFMO0FBQ0FDLHdCQUFRQyxHQUFSLENBQVksSUFBWjs7Ozs7Ozs7QUFFQUQsd0JBQVFDLEdBQVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4QzRCLGVBQUtDLEk7O2tCQUFsQnRCLEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvYXZhdGFyL2luZGV4J1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9taXhpbnMvbG9naW4nXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgICdlbmFibGVQdWxsRG93blJlZnJlc2gnOiB0cnVlLFxyXG4gICAgJ2JhY2tncm91bmRDb2xvcic6ICcjMzM4NWZmJ1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIHdlaUluZm86IG51bGxcclxuICB9XHJcbiAkcHJvcHMgPSB7XCJhdmF0YXJcIjp7XCJ2LWJpbmQ6aWQub25jZVwiOlwiaWRcIixcInYtYmluZDppZC5zeW5jXCI6XCJpZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBhdmF0YXI6IEF2YXRhclxyXG4gIH1cclxuICBtaXhpbnMgPSBbbG9naW5dXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHN5bmNXeEluZm86IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0ZVRvOiBmdW5jdGlvbih1cmwpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICAgKi9cclxuICAgICAgbGV0IHsgZGF0YTogd2VpSW5mbyB9ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICd3ZWlJbmZvJ1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLndlaUluZm8gPSB3ZWlJbmZvXHJcbiAgICAgIHRoaXMudXNlckluZm8gPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YVsndXNlckluZm8nXVxyXG4gICAgICB0aGlzLmlkID0gdGhpcy51c2VySW5mb1snaWQnXVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==