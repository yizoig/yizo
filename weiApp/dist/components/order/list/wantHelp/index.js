'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../../users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../toast/index.js');

var _index4 = _interopRequireDefault(_index3);

var _wantHelpOrder = require('./../../../../lib/apis/wantHelpOrder.js');

var _wantHelpOrder2 = _interopRequireDefault(_wantHelpOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WantHelpOrder = function (_wepy$component) {
  _inherits(WantHelpOrder, _wepy$component);

  function WantHelpOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WantHelpOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WantHelpOrder.__proto__ || Object.getPrototypeOf(WantHelpOrder)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      orderList: [],
      limit: {
        size: 5,
        page: 1
      }
    }, _this.methods = {
      onView: function onView(e) {
        _wepy2.default.navigateTo({
          url: '/pages/order/details/wantHelp/index?id=' + e.currentTarget.dataset.id
        });
      }
    }, _this.$props = { "avatar": { "v-bind:id.once": { "for": "orderList", "item": "orderItem", "index": "index", "key": "index", "value": "orderItem.creater" } } }, _this.$events = {}, _this.components = {
      avatar: _index2.default,
      toast: _index4.default
    }, _this.events = {
      'request-refresh': function requestRefresh(componentName, $event) {
        if (componentName === 'wantHelpOrder') {
          _this.loadMore({
            refresh: true
          });
        }
      },
      'request-loadMre': function requestLoadMre(componentName, $event) {
        if (componentName === 'wantHelpOrder') {
          if (!_this.limit.count || _this.limit.count > _this.orderList.length) {
            _this.loadMore();
          }
        }
      }
      /**
       * 获取求组信息
       */
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WantHelpOrder, [{
    key: 'loadMore',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref3$refresh = _ref3.refresh,
            refresh = _ref3$refresh === undefined ? false : _ref3$refresh;

        var college_id, _ref4, data, _data$orders, orders, time, i;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                console.log(this.$parent.data.college);
                college_id = this.$parent.data.college.college_id;
                _context.next = 5;
                return _wantHelpOrder2.default.list(_extends({ needPage: true }, this.limit, { college: college_id }));

              case 5:
                _ref4 = _context.sent;
                data = _ref4.data;
                _data$orders = data.orders, orders = _data$orders === undefined ? [] : _data$orders;
                /**
                 * 先进行数据处理
                 */

                time = void 0;

                for (i = 0; i < orders.length; i++) {
                  time = new Date(orders[i]['_c']);
                  orders[i]['_c'] = time.getDateDiff(time);
                }
                this.limit['count'] = data.count;
                if (refresh) {
                  this.orderList = orders;
                  this.limit['page'] = 1;
                  this.$emit('response-refresh', 'home');
                } else {
                  this.limit['page']++;
                  this.orderList.push.apply(this.orderList, orders);
                }
                this.$invoke('toast', 'hiddenToast');
                this.$apply();
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](0);

                this.$invoke('toast', 'showToast', {
                  title: _context.t0.message,
                  icon: 'error',
                  mask: true
                });

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 16]]);
      }));

      function loadMore() {
        return _ref2.apply(this, arguments);
      }

      return loadMore;
    }()
  }]);

  return WantHelpOrder;
}(_wepy2.default.component);

exports.default = WantHelpOrder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwT3JkZXIiLCJkYXRhIiwib3JkZXJMaXN0IiwibGltaXQiLCJzaXplIiwicGFnZSIsIm1ldGhvZHMiLCJvblZpZXciLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImF2YXRhciIsInRvYXN0IiwiZXZlbnRzIiwiY29tcG9uZW50TmFtZSIsIiRldmVudCIsImxvYWRNb3JlIiwicmVmcmVzaCIsImNvdW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJjb2xsZWdlIiwiY29sbGVnZV9pZCIsImxpc3QiLCJuZWVkUGFnZSIsIm9yZGVycyIsInRpbWUiLCJpIiwiRGF0ZSIsImdldERhdGVEaWZmIiwiJGVtaXQiLCJwdXNoIiwiYXBwbHkiLCIkaW52b2tlIiwiJGFwcGx5IiwidGl0bGUiLCJtZXNzYWdlIiwiaWNvbiIsIm1hc2siLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGFBQU87QUFDTEMsY0FBTSxDQUREO0FBRUxDLGNBQU07QUFGRDtBQUZGLEssUUFPUEMsTyxHQUFVO0FBQ1JDLGNBQVEsZ0JBQVNDLENBQVQsRUFBWTtBQUNsQix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLDRDQUE0Q0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDO0FBRDNELFNBQWhCO0FBR0Q7QUFMTyxLLFFBT1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxrQkFBaUIsRUFBQyxPQUFNLFdBQVAsRUFBbUIsUUFBTyxXQUExQixFQUFzQyxTQUFRLE9BQTlDLEVBQXNELE9BQU0sT0FBNUQsRUFBb0UsU0FBUSxtQkFBNUUsRUFBbEIsRUFBVixFLFFBQ1ZDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyw2QkFEVTtBQUVWQztBQUZVLEssUUFJWkMsTSxHQUFTO0FBQ1AseUJBQW1CLHdCQUFDQyxhQUFELEVBQWdCQyxNQUFoQixFQUEyQjtBQUM1QyxZQUFJRCxrQkFBa0IsZUFBdEIsRUFBdUM7QUFDckMsZ0JBQUtFLFFBQUwsQ0FBYztBQUNaQyxxQkFBUztBQURHLFdBQWQ7QUFHRDtBQUNGLE9BUE07QUFRUCx5QkFBbUIsd0JBQUNILGFBQUQsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQzVDLFlBQUlELGtCQUFrQixlQUF0QixFQUF1QztBQUNyQyxjQUFJLENBQUMsTUFBS2pCLEtBQUwsQ0FBV3FCLEtBQVosSUFBc0IsTUFBS3JCLEtBQUwsQ0FBV3FCLEtBQVgsR0FBbUIsTUFBS3RCLFNBQUwsQ0FBZXVCLE1BQTVELEVBQXFFO0FBQ25FLGtCQUFLSCxRQUFMO0FBQ0Q7QUFDRjtBQUNGO0FBRUg7OztBQWhCUyxLOzs7Ozs7O3dGQW1CNEIsRTtrQ0FBcEJDLE87WUFBQUEsTyxpQ0FBVSxLOzs7Ozs7Ozs7O0FBR3ZCRyx3QkFBUUMsR0FBUixDQUFZLEtBQUtDLE9BQUwsQ0FBYTNCLElBQWIsQ0FBa0I0QixPQUE5QjtBQUNNQywwQixHQUFlLEtBQUtGLE9BQUwsQ0FBYTNCLElBQWIsQ0FBa0I0QixPLENBQWpDQyxVOzt1QkFDZSx3QkFBZ0JDLElBQWhCLFlBQXVCQyxVQUFVLElBQWpDLElBQTBDLEtBQUs3QixLQUEvQyxJQUFzRDBCLFNBQVNDLFVBQS9ELEk7Ozs7QUFBZjdCLG9CLFNBQUFBLEk7K0JBQ2dCQSxJLENBQWhCZ0MsTSxFQUFBQSxNLGdDQUFTLEU7QUFDZjs7OztBQUdJQyxvQjs7QUFDSixxQkFBU0MsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLElBQUlGLE9BQU9SLE1BQTNCLEVBQW1DVSxHQUFuQyxFQUF3QztBQUN0Q0QseUJBQU8sSUFBSUUsSUFBSixDQUFTSCxPQUFPRSxDQUFQLEVBQVUsSUFBVixDQUFULENBQVA7QUFDQUYseUJBQU9FLENBQVAsRUFBVSxJQUFWLElBQWtCRCxLQUFLRyxXQUFMLENBQWlCSCxJQUFqQixDQUFsQjtBQUNEO0FBQ0QscUJBQUsvQixLQUFMLENBQVcsT0FBWCxJQUFzQkYsS0FBS3VCLEtBQTNCO0FBQ0Esb0JBQUlELE9BQUosRUFBYTtBQUNYLHVCQUFLckIsU0FBTCxHQUFpQitCLE1BQWpCO0FBQ0EsdUJBQUs5QixLQUFMLENBQVcsTUFBWCxJQUFxQixDQUFyQjtBQUNBLHVCQUFLbUMsS0FBTCxDQUFXLGtCQUFYLEVBQStCLE1BQS9CO0FBQ0QsaUJBSkQsTUFJTztBQUNMLHVCQUFLbkMsS0FBTCxDQUFXLE1BQVg7QUFDQSx1QkFBS0QsU0FBTCxDQUFlcUMsSUFBZixDQUFvQkMsS0FBcEIsQ0FBMEIsS0FBS3RDLFNBQS9CLEVBQTBDK0IsTUFBMUM7QUFDRDtBQUNELHFCQUFLUSxPQUFMLENBQWEsT0FBYixFQUFzQixhQUF0QjtBQUNBLHFCQUFLQyxNQUFMOzs7Ozs7OztBQUVBLHFCQUFLRCxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0UseUJBQU8sWUFBRUMsT0FEd0I7QUFFakNDLHdCQUFNLE9BRjJCO0FBR2pDQyx3QkFBTTtBQUgyQixpQkFBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuRXFDLGVBQUtDLFM7O2tCQUEzQi9DLGEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi8uLi91c2Vycy9hdmF0YXIvaW5kZXgnXHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi8uLi90b2FzdC9pbmRleCdcclxuaW1wb3J0IFdhbkhlbHBPcmRlckFwaSBmcm9tICcuLi8uLi8uLi8uLi9saWIvYXBpcy93YW50SGVscE9yZGVyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYW50SGVscE9yZGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBvcmRlckxpc3Q6IFtdLFxyXG4gICAgbGltaXQ6IHtcclxuICAgICAgc2l6ZTogNSxcclxuICAgICAgcGFnZTogMSxcclxuICAgIH1cclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uVmlldzogZnVuY3Rpb24oZSkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9vcmRlci9kZXRhaWxzL3dhbnRIZWxwL2luZGV4P2lkPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICRwcm9wcyA9IHtcImF2YXRhclwiOntcInYtYmluZDppZC5vbmNlXCI6e1wiZm9yXCI6XCJvcmRlckxpc3RcIixcIml0ZW1cIjpcIm9yZGVySXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCIsXCJ2YWx1ZVwiOlwib3JkZXJJdGVtLmNyZWF0ZXJcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIGF2YXRhcjogQXZhdGFyLFxyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfVxyXG4gIGV2ZW50cyA9IHtcclxuICAgICdyZXF1ZXN0LXJlZnJlc2gnOiAoY29tcG9uZW50TmFtZSwgJGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChjb21wb25lbnROYW1lID09PSAnd2FudEhlbHBPcmRlcicpIHtcclxuICAgICAgICB0aGlzLmxvYWRNb3JlKHtcclxuICAgICAgICAgIHJlZnJlc2g6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ3JlcXVlc3QtbG9hZE1yZSc6IChjb21wb25lbnROYW1lLCAkZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGNvbXBvbmVudE5hbWUgPT09ICd3YW50SGVscE9yZGVyJykge1xyXG4gICAgICAgIGlmICghdGhpcy5saW1pdC5jb3VudCB8fCAodGhpcy5saW1pdC5jb3VudCA+IHRoaXMub3JkZXJMaXN0Lmxlbmd0aCkpIHtcclxuICAgICAgICAgIHRoaXMubG9hZE1vcmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5bmsYLnu4Tkv6Hmga9cclxuICAgKi9cclxuICBhc3luYyBsb2FkTW9yZSh7IHJlZnJlc2ggPSBmYWxzZSB9ID0ge30pIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQuZGF0YS5jb2xsZWdlKVxyXG4gICAgICBsZXQgeyBjb2xsZWdlX2lkIH0gPSB0aGlzLiRwYXJlbnQuZGF0YS5jb2xsZWdlXHJcbiAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFdhbkhlbHBPcmRlckFwaS5saXN0KHsgbmVlZFBhZ2U6IHRydWUsIC4uLnRoaXMubGltaXQsIGNvbGxlZ2U6IGNvbGxlZ2VfaWQgfSlcclxuICAgICAgbGV0IHsgb3JkZXJzID0gW10gfSA9IGRhdGFcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOWFiOi/m+ihjOaVsOaNruWkhOeQhlxyXG4gICAgICAgKi9cclxuICAgICAgbGV0IHRpbWVcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aW1lID0gbmV3IERhdGUob3JkZXJzW2ldWydfYyddKVxyXG4gICAgICAgIG9yZGVyc1tpXVsnX2MnXSA9IHRpbWUuZ2V0RGF0ZURpZmYodGltZSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpbWl0Wydjb3VudCddID0gZGF0YS5jb3VudFxyXG4gICAgICBpZiAocmVmcmVzaCkge1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0ID0gb3JkZXJzXHJcbiAgICAgICAgdGhpcy5saW1pdFsncGFnZSddID0gMVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3Jlc3BvbnNlLXJlZnJlc2gnLCAnaG9tZScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5saW1pdFsncGFnZSddKytcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5wdXNoLmFwcGx5KHRoaXMub3JkZXJMaXN0LCBvcmRlcnMpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdoaWRkZW5Ub2FzdCcpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19