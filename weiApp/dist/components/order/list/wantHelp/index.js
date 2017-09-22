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
                college_id = this.$parent.data.college.college_id;
                _context.next = 4;
                return _wantHelpOrder2.default.list(_extends({ needPage: true }, this.limit, { college: college_id }));

              case 4:
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
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](0);

                this.$invoke('toast', 'showToast', {
                  title: _context.t0.message,
                  icon: 'error',
                  mask: true
                });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwT3JkZXIiLCJkYXRhIiwib3JkZXJMaXN0IiwibGltaXQiLCJzaXplIiwicGFnZSIsIm1ldGhvZHMiLCJvblZpZXciLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImF2YXRhciIsInRvYXN0IiwiZXZlbnRzIiwiY29tcG9uZW50TmFtZSIsIiRldmVudCIsImxvYWRNb3JlIiwicmVmcmVzaCIsImNvdW50IiwibGVuZ3RoIiwiY29sbGVnZV9pZCIsIiRwYXJlbnQiLCJjb2xsZWdlIiwibGlzdCIsIm5lZWRQYWdlIiwib3JkZXJzIiwidGltZSIsImkiLCJEYXRlIiwiZ2V0RGF0ZURpZmYiLCIkZW1pdCIsInB1c2giLCJhcHBseSIsIiRpbnZva2UiLCIkYXBwbHkiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJpY29uIiwibWFzayIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsYUFBTztBQUNMQyxjQUFNLENBREQ7QUFFTEMsY0FBTTtBQUZEO0FBRkYsSyxRQU9QQyxPLEdBQVU7QUFDUkMsY0FBUSxnQkFBU0MsQ0FBVCxFQUFZO0FBQ2xCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssNENBQTRDRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkM7QUFEM0QsU0FBaEI7QUFHRDtBQUxPLEssUUFPWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGtCQUFpQixFQUFDLE9BQU0sV0FBUCxFQUFtQixRQUFPLFdBQTFCLEVBQXNDLFNBQVEsT0FBOUMsRUFBc0QsT0FBTSxPQUE1RCxFQUFvRSxTQUFRLG1CQUE1RSxFQUFsQixFQUFWLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLDZCQURVO0FBRVZDO0FBRlUsSyxRQUlaQyxNLEdBQVM7QUFDUCx5QkFBbUIsd0JBQUNDLGFBQUQsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQzVDLFlBQUlELGtCQUFrQixlQUF0QixFQUF1QztBQUNyQyxnQkFBS0UsUUFBTCxDQUFjO0FBQ1pDLHFCQUFTO0FBREcsV0FBZDtBQUdEO0FBQ0YsT0FQTTtBQVFQLHlCQUFtQix3QkFBQ0gsYUFBRCxFQUFnQkMsTUFBaEIsRUFBMkI7QUFDNUMsWUFBSUQsa0JBQWtCLGVBQXRCLEVBQXVDO0FBQ3JDLGNBQUksQ0FBQyxNQUFLakIsS0FBTCxDQUFXcUIsS0FBWixJQUFzQixNQUFLckIsS0FBTCxDQUFXcUIsS0FBWCxHQUFtQixNQUFLdEIsU0FBTCxDQUFldUIsTUFBNUQsRUFBcUU7QUFDbkUsa0JBQUtILFFBQUw7QUFDRDtBQUNGO0FBQ0Y7QUFFSDs7O0FBaEJTLEs7Ozs7Ozs7d0ZBbUI0QixFO2tDQUFwQkMsTztZQUFBQSxPLGlDQUFVLEs7Ozs7Ozs7OztBQUVqQkcsMEIsR0FBZSxLQUFLQyxPQUFMLENBQWExQixJQUFiLENBQWtCMkIsTyxDQUFqQ0YsVTs7dUJBQ2Usd0JBQWdCRyxJQUFoQixZQUF1QkMsVUFBVSxJQUFqQyxJQUEwQyxLQUFLM0IsS0FBL0MsSUFBc0R5QixTQUFTRixVQUEvRCxJOzs7O0FBQWZ6QixvQixTQUFBQSxJOytCQUNnQkEsSSxDQUFoQjhCLE0sRUFBQUEsTSxnQ0FBUyxFO0FBQ2Y7Ozs7QUFHSUMsb0I7O0FBQ0oscUJBQVNDLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxJQUFJRixPQUFPTixNQUEzQixFQUFtQ1EsR0FBbkMsRUFBd0M7QUFDdENELHlCQUFPLElBQUlFLElBQUosQ0FBU0gsT0FBT0UsQ0FBUCxFQUFVLElBQVYsQ0FBVCxDQUFQO0FBQ0FGLHlCQUFPRSxDQUFQLEVBQVUsSUFBVixJQUFrQkQsS0FBS0csV0FBTCxDQUFpQkgsSUFBakIsQ0FBbEI7QUFDRDtBQUNELHFCQUFLN0IsS0FBTCxDQUFXLE9BQVgsSUFBc0JGLEtBQUt1QixLQUEzQjtBQUNBLG9CQUFJRCxPQUFKLEVBQWE7QUFDWCx1QkFBS3JCLFNBQUwsR0FBaUI2QixNQUFqQjtBQUNBLHVCQUFLNUIsS0FBTCxDQUFXLE1BQVgsSUFBcUIsQ0FBckI7QUFDQSx1QkFBS2lDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQixNQUEvQjtBQUNELGlCQUpELE1BSU87QUFDTCx1QkFBS2pDLEtBQUwsQ0FBVyxNQUFYO0FBQ0EsdUJBQUtELFNBQUwsQ0FBZW1DLElBQWYsQ0FBb0JDLEtBQXBCLENBQTBCLEtBQUtwQyxTQUEvQixFQUEwQzZCLE1BQTFDO0FBQ0Q7QUFDRCxxQkFBS1EsT0FBTCxDQUFhLE9BQWIsRUFBc0IsYUFBdEI7QUFDQSxxQkFBS0MsTUFBTDs7Ozs7Ozs7QUFFQSxxQkFBS0QsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNFLHlCQUFPLFlBQUVDLE9BRHdCO0FBRWpDQyx3QkFBTSxPQUYyQjtBQUdqQ0Msd0JBQU07QUFIMkIsaUJBQW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakVxQyxlQUFLQyxTOztrQkFBM0I3QyxhIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vdXNlcnMvYXZhdGFyL2luZGV4J1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vLi4vdG9hc3QvaW5kZXgnXHJcbmltcG9ydCBXYW5IZWxwT3JkZXJBcGkgZnJvbSAnLi4vLi4vLi4vLi4vbGliL2FwaXMvd2FudEhlbHBPcmRlcidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FudEhlbHBPcmRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBkYXRhID0ge1xyXG4gICAgb3JkZXJMaXN0OiBbXSxcclxuICAgIGxpbWl0OiB7XHJcbiAgICAgIHNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDFcclxuICAgIH1cclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uVmlldzogZnVuY3Rpb24oZSkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9vcmRlci9kZXRhaWxzL3dhbnRIZWxwL2luZGV4P2lkPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICRwcm9wcyA9IHtcImF2YXRhclwiOntcInYtYmluZDppZC5vbmNlXCI6e1wiZm9yXCI6XCJvcmRlckxpc3RcIixcIml0ZW1cIjpcIm9yZGVySXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCIsXCJ2YWx1ZVwiOlwib3JkZXJJdGVtLmNyZWF0ZXJcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIGF2YXRhcjogQXZhdGFyLFxyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfVxyXG4gIGV2ZW50cyA9IHtcclxuICAgICdyZXF1ZXN0LXJlZnJlc2gnOiAoY29tcG9uZW50TmFtZSwgJGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChjb21wb25lbnROYW1lID09PSAnd2FudEhlbHBPcmRlcicpIHtcclxuICAgICAgICB0aGlzLmxvYWRNb3JlKHtcclxuICAgICAgICAgIHJlZnJlc2g6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ3JlcXVlc3QtbG9hZE1yZSc6IChjb21wb25lbnROYW1lLCAkZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGNvbXBvbmVudE5hbWUgPT09ICd3YW50SGVscE9yZGVyJykge1xyXG4gICAgICAgIGlmICghdGhpcy5saW1pdC5jb3VudCB8fCAodGhpcy5saW1pdC5jb3VudCA+IHRoaXMub3JkZXJMaXN0Lmxlbmd0aCkpIHtcclxuICAgICAgICAgIHRoaXMubG9hZE1vcmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5bmsYLnu4Tkv6Hmga9cclxuICAgKi9cclxuICBhc3luYyBsb2FkTW9yZSh7IHJlZnJlc2ggPSBmYWxzZSB9ID0ge30pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB7IGNvbGxlZ2VfaWQgfSA9IHRoaXMuJHBhcmVudC5kYXRhLmNvbGxlZ2VcclxuICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmxpc3QoeyBuZWVkUGFnZTogdHJ1ZSwgLi4udGhpcy5saW1pdCwgY29sbGVnZTogY29sbGVnZV9pZCB9KVxyXG4gICAgICBsZXQgeyBvcmRlcnMgPSBbXSB9ID0gZGF0YVxyXG4gICAgICAvKipcclxuICAgICAgICog5YWI6L+b6KGM5pWw5o2u5aSE55CGXHJcbiAgICAgICAqL1xyXG4gICAgICBsZXQgdGltZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZShvcmRlcnNbaV1bJ19jJ10pXHJcbiAgICAgICAgb3JkZXJzW2ldWydfYyddID0gdGltZS5nZXREYXRlRGlmZih0aW1lKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGltaXRbJ2NvdW50J10gPSBkYXRhLmNvdW50XHJcbiAgICAgIGlmIChyZWZyZXNoKSB7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QgPSBvcmRlcnNcclxuICAgICAgICB0aGlzLmxpbWl0WydwYWdlJ10gPSAxXHJcbiAgICAgICAgdGhpcy4kZW1pdCgncmVzcG9uc2UtcmVmcmVzaCcsICdob21lJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxpbWl0WydwYWdlJ10rK1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnB1c2guYXBwbHkodGhpcy5vcmRlckxpc3QsIG9yZGVycylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ2hpZGRlblRvYXN0JylcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=