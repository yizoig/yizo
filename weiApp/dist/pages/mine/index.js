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

var _user = require('./../../lib/apis/user.js');

var _user2 = _interopRequireDefault(_user);

var _index3 = require('./../../components/toast/index.js');

var _index4 = _interopRequireDefault(_index3);

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
      avatar: _index2.default,
      toast: _index4.default
    }, _this.mixins = [_login2.default], _this.methods = {
      syncWxInfo: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var id, _ref3, rawData, result;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  id = this.data.id;
                  _context.next = 4;
                  return _wepy2.default.getUserInfo();

                case 4:
                  _ref3 = _context.sent;
                  rawData = _ref3.rawData;

                  this.$invoke('toast', 'showToast', {
                    title: '同步中...',
                    icon: 'loading',
                    mask: true
                  });
                  _context.next = 9;
                  return _user2.default.syncWxInfo({
                    id: id, rawData: rawData
                  });

                case 9:
                  result = _context.sent;

                  this.$invoke('toast', 'showToast', {
                    title: result ? '同步成功' : '同步失败',
                    icon: result ? 'success' : 'error'
                  });
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](0);

                  this.$invoke('toast', 'showToast', {
                    title: _context.t0.message,
                    icon: 'error'
                  });

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 13]]);
        }));

        function syncWxInfo() {
          return _ref2.apply(this, arguments);
        }

        return syncWxInfo;
      }(),
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref5, weiInfo;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _wepy2.default.getStorage({
                  key: 'weiInfo'
                });

              case 3:
                _ref5 = _context2.sent;
                weiInfo = _ref5.data;

                this.weiInfo = weiInfo;
                this.userInfo = _wepy2.default.getStorageSync('userInfo');
                this.id = this.userInfo['id'];
                this.$apply();
                console.log(this);
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 12]]);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Mine;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1pbmUiLCJjb25maWciLCJkYXRhIiwiaWQiLCJ1c2VySW5mbyIsIndlaUluZm8iLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImF2YXRhciIsInRvYXN0IiwibWl4aW5zIiwibWV0aG9kcyIsInN5bmNXeEluZm8iLCJnZXRVc2VySW5mbyIsInJhd0RhdGEiLCIkaW52b2tlIiwidGl0bGUiLCJpY29uIiwibWFzayIsInJlc3VsdCIsIm1lc3NhZ2UiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0U3RvcmFnZSIsImtleSIsImdldFN0b3JhZ2VTeW5jIiwiJGFwcGx5IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQLCtCQUF5QixJQURsQjtBQUVQLHlCQUFtQjtBQUZaLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFVBQUksSUFEQztBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLGVBQVM7QUFISixLLFFBS1JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxrQkFBaUIsSUFBbEIsRUFBdUIsa0JBQWlCLElBQXhDLEVBQVYsRSxRQUNWQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsNkJBRFU7QUFFVkM7QUFGVSxLLFFBSVpDLE0sR0FBUyxpQixRQUNUQyxPLEdBQVU7QUFDUkM7QUFBQSw0RUFBWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRlYsb0JBRkUsR0FFSyxLQUFLRCxJQUZWLENBRUZDLEVBRkU7QUFBQTtBQUFBLHlCQUdnQixlQUFLVyxXQUFMLEVBSGhCOztBQUFBO0FBQUE7QUFHRkMseUJBSEUsU0FHRkEsT0FIRTs7QUFJUix1QkFBS0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDJCQUFPLFFBRDBCO0FBRWpDQywwQkFBTSxTQUYyQjtBQUdqQ0MsMEJBQU07QUFIMkIsbUJBQW5DO0FBSlE7QUFBQSx5QkFTVyxlQUFRTixVQUFSLENBQW1CO0FBQ3BDViwwQkFEb0MsRUFDaENZO0FBRGdDLG1CQUFuQixDQVRYOztBQUFBO0FBU0pLLHdCQVRJOztBQVlSLHVCQUFLSixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsMkJBQU9HLFNBQVMsTUFBVCxHQUFrQixNQURRO0FBRWpDRiwwQkFBTUUsU0FBUyxTQUFULEdBQXFCO0FBRk0sbUJBQW5DO0FBWlE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBaUJSLHVCQUFLSixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsMkJBQU8sWUFBRUksT0FEd0I7QUFFakNILDBCQUFNO0FBRjJCLG1CQUFuQzs7QUFqQlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxTQURRO0FBd0JSSSxrQkFBWSxvQkFBU0MsR0FBVCxFQUFjO0FBQ3hCLHVCQUFLRCxVQUFMLENBQWdCO0FBQ2RDO0FBRGMsU0FBaEI7QUFHRDtBQTVCTyxLOzs7Ozs7Ozs7Ozs7Ozs7dUJBbUN3QixlQUFLQyxVQUFMLENBQWdCO0FBQzVDQyx1QkFBSztBQUR1QyxpQkFBaEIsQzs7OztBQUFsQnBCLHVCLFNBQU5ILEk7O0FBR04scUJBQUtHLE9BQUwsR0FBZUEsT0FBZjtBQUNBLHFCQUFLRCxRQUFMLEdBQWdCLGVBQUtzQixjQUFMLENBQW9CLFVBQXBCLENBQWhCO0FBQ0EscUJBQUt2QixFQUFMLEdBQVUsS0FBS0MsUUFBTCxDQUFjLElBQWQsQ0FBVjtBQUNBLHFCQUFLdUIsTUFBTDtBQUNBQyx3QkFBUUMsR0FBUixDQUFZLElBQVo7Ozs7Ozs7O0FBRUFELHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0Q0QixlQUFLQyxJOztrQkFBbEI5QixJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJzL2F2YXRhci9pbmRleCdcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWl4aW5zL2xvZ2luJ1xyXG5pbXBvcnQgdXNlckFwaSBmcm9tICcuLi8uLi9saWIvYXBpcy91c2VyJ1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90b2FzdC9pbmRleCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgJ2VuYWJsZVB1bGxEb3duUmVmcmVzaCc6IHRydWUsXHJcbiAgICAnYmFja2dyb3VuZENvbG9yJzogJyMzMzg1ZmYnXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBpZDogbnVsbCxcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgd2VpSW5mbzogbnVsbFxyXG4gIH1cclxuICRwcm9wcyA9IHtcImF2YXRhclwiOntcInYtYmluZDppZC5vbmNlXCI6XCJpZFwiLFwidi1iaW5kOmlkLnN5bmNcIjpcImlkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIGF2YXRhcjogQXZhdGFyLFxyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfVxyXG4gIG1peGlucyA9IFtsb2dpbl1cclxuICBtZXRob2RzID0ge1xyXG4gICAgc3luY1d4SW5mbzogYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgaWQgfSA9IHRoaXMuZGF0YVxyXG4gICAgICAgIGxldCB7IHJhd0RhdGEgfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6ICflkIzmraXkuK0uLi4nLFxyXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHVzZXJBcGkuc3luY1d4SW5mbyh7XHJcbiAgICAgICAgICBpZCwgcmF3RGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogcmVzdWx0ID8gJ+WQjOatpeaIkOWKnycgOiAn5ZCM5q2l5aSx6LSlJyxcclxuICAgICAgICAgIGljb246IHJlc3VsdCA/ICdzdWNjZXNzJyA6ICdlcnJvcidcclxuICAgICAgICB9KVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0ZVRvOiBmdW5jdGlvbih1cmwpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICAgKi9cclxuICAgICAgbGV0IHsgZGF0YTogd2VpSW5mbyB9ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICd3ZWlJbmZvJ1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLndlaUluZm8gPSB3ZWlJbmZvXHJcbiAgICAgIHRoaXMudXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnVzZXJJbmZvWydpZCddXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19