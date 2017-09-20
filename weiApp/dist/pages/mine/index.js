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
                this.$apply();
                console.log(this);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1pbmUiLCJjb25maWciLCJkYXRhIiwiaWQiLCJ1c2VySW5mbyIsIndlaUluZm8iLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImF2YXRhciIsIm1peGlucyIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0U3RvcmFnZSIsImtleSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiJGFwcGx5IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUhBO0FBQ0E7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUCwrQkFBeUIsSUFEbEI7QUFFUCx5QkFBbUI7QUFGWixLLFFBSVRDLEksR0FBTztBQUNMQyxVQUFJLElBREM7QUFFTEMsZ0JBQVUsSUFGTDtBQUdMQyxlQUFTO0FBSEosSyxRQUtSQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsa0JBQWlCLElBQWxCLEVBQXVCLGtCQUFpQixJQUF4QyxFQUFWLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUdaQyxNLEdBQVMsaUIsUUFDVEMsTyxHQUFVO0FBQ1JDLGtCQUFZLG9CQUFTQyxHQUFULEVBQWM7QUFDeEIsdUJBQUtELFVBQUwsQ0FBZ0I7QUFDZEM7QUFEYyxTQUFoQjtBQUdEO0FBTE8sSzs7Ozs7Ozs7Ozs7Ozs7O3VCQVl3QixlQUFLQyxVQUFMLENBQWdCO0FBQzVDQyx1QkFBSztBQUR1QyxpQkFBaEIsQzs7OztBQUFsQlYsdUIsU0FBTkgsSTs7QUFHTixxQkFBS0csT0FBTCxHQUFlQSxPQUFmO0FBQ0EscUJBQUtELFFBQUwsR0FBZ0IsS0FBS1ksT0FBTCxDQUFhQyxVQUFiLENBQXdCLFVBQXhCLENBQWhCO0FBQ0EscUJBQUtDLE1BQUw7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWSxJQUFaOzs7Ozs7OztBQUVBRCx3QkFBUUMsR0FBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBDNEIsZUFBS0MsSTs7a0JBQWxCckIsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbi8vIGltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuLy8gaW1wb3J0IHsgaG9zdCB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2Vycy9hdmF0YXIvaW5kZXgnXHJcbmltcG9ydCBsb2dpbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL21peGlucy9sb2dpbidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgJ2VuYWJsZVB1bGxEb3duUmVmcmVzaCc6IHRydWUsXHJcbiAgICAnYmFja2dyb3VuZENvbG9yJzogJyMzMzg1ZmYnXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBpZDogbnVsbCxcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgd2VpSW5mbzogbnVsbFxyXG4gIH1cclxuICRwcm9wcyA9IHtcImF2YXRhclwiOntcInYtYmluZDppZC5vbmNlXCI6XCJpZFwiLFwidi1iaW5kOmlkLnN5bmNcIjpcImlkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIGF2YXRhcjogQXZhdGFyXHJcbiAgfVxyXG4gIG1peGlucyA9IFtsb2dpbl1cclxuICBtZXRob2RzID0ge1xyXG4gICAgbmF2aWdhdGVUbzogZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIG9uU2hvdygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICovXHJcbiAgICAgIGxldCB7IGRhdGE6IHdlaUluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OiAnd2VpSW5mbydcclxuICAgICAgfSlcclxuICAgICAgdGhpcy53ZWlJbmZvID0gd2VpSW5mb1xyXG4gICAgICB0aGlzLnVzZXJJbmZvID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGFbJ3VzZXJJbmZvJ11cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=