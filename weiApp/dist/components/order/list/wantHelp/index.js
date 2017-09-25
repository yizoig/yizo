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

        var _ref4, college_id, _ref5, data, _data$orders, orders, time, i;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _ref4 = _wepy2.default.getStorageSync('college') || {}, college_id = _ref4.college_id;
                _context.next = 4;
                return _wantHelpOrder2.default.list(_extends({ needPage: true }, this.limit, { college: college_id }));

              case 4:
                _ref5 = _context.sent;
                data = _ref5.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwT3JkZXIiLCJkYXRhIiwib3JkZXJMaXN0IiwibGltaXQiLCJzaXplIiwicGFnZSIsIm1ldGhvZHMiLCJvblZpZXciLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImF2YXRhciIsInRvYXN0IiwiZXZlbnRzIiwiY29tcG9uZW50TmFtZSIsIiRldmVudCIsImxvYWRNb3JlIiwicmVmcmVzaCIsImNvdW50IiwibGVuZ3RoIiwiZ2V0U3RvcmFnZVN5bmMiLCJjb2xsZWdlX2lkIiwibGlzdCIsIm5lZWRQYWdlIiwiY29sbGVnZSIsIm9yZGVycyIsInRpbWUiLCJpIiwiRGF0ZSIsImdldERhdGVEaWZmIiwiJGVtaXQiLCJwdXNoIiwiYXBwbHkiLCIkaW52b2tlIiwiJGFwcGx5IiwidGl0bGUiLCJtZXNzYWdlIiwiaWNvbiIsIm1hc2siLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGFBQU87QUFDTEMsY0FBTSxDQUREO0FBRUxDLGNBQU07QUFGRDtBQUZGLEssUUFPUEMsTyxHQUFVO0FBQ1JDLGNBQVEsZ0JBQVNDLENBQVQsRUFBWTtBQUNsQix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLDRDQUE0Q0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDO0FBRDNELFNBQWhCO0FBR0Q7QUFMTyxLLFFBT1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxrQkFBaUIsRUFBQyxPQUFNLFdBQVAsRUFBbUIsUUFBTyxXQUExQixFQUFzQyxTQUFRLE9BQTlDLEVBQXNELE9BQU0sT0FBNUQsRUFBb0UsU0FBUSxtQkFBNUUsRUFBbEIsRUFBVixFLFFBQ1ZDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyw2QkFEVTtBQUVWQztBQUZVLEssUUFJWkMsTSxHQUFTO0FBQ1AseUJBQW1CLHdCQUFDQyxhQUFELEVBQWdCQyxNQUFoQixFQUEyQjtBQUM1QyxZQUFJRCxrQkFBa0IsZUFBdEIsRUFBdUM7QUFDckMsZ0JBQUtFLFFBQUwsQ0FBYztBQUNaQyxxQkFBUztBQURHLFdBQWQ7QUFHRDtBQUNGLE9BUE07QUFRUCx5QkFBbUIsd0JBQUNILGFBQUQsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQzVDLFlBQUlELGtCQUFrQixlQUF0QixFQUF1QztBQUNyQyxjQUFJLENBQUMsTUFBS2pCLEtBQUwsQ0FBV3FCLEtBQVosSUFBc0IsTUFBS3JCLEtBQUwsQ0FBV3FCLEtBQVgsR0FBbUIsTUFBS3RCLFNBQUwsQ0FBZXVCLE1BQTVELEVBQXFFO0FBQ25FLGtCQUFLSCxRQUFMO0FBQ0Q7QUFDRjtBQUNGO0FBRUg7OztBQWhCUyxLOzs7Ozs7O3dGQW1CNEIsRTtrQ0FBcEJDLE87WUFBQUEsTyxpQ0FBVSxLOzs7Ozs7Ozs7d0JBRUYsZUFBS0csY0FBTCxDQUFvQixTQUFwQixLQUFrQyxFLEVBQWpEQyxVLFNBQUFBLFU7O3VCQUNlLHdCQUFnQkMsSUFBaEIsWUFBdUJDLFVBQVUsSUFBakMsSUFBMEMsS0FBSzFCLEtBQS9DLElBQXNEMkIsU0FBU0gsVUFBL0QsSTs7OztBQUFmMUIsb0IsU0FBQUEsSTsrQkFDZ0JBLEksQ0FBaEI4QixNLEVBQUFBLE0sZ0NBQVMsRTtBQUNmOzs7O0FBR0lDLG9COztBQUNKLHFCQUFTQyxDQUFULEdBQWEsQ0FBYixFQUFnQkEsSUFBSUYsT0FBT04sTUFBM0IsRUFBbUNRLEdBQW5DLEVBQXdDO0FBQ3RDRCx5QkFBTyxJQUFJRSxJQUFKLENBQVNILE9BQU9FLENBQVAsRUFBVSxJQUFWLENBQVQsQ0FBUDtBQUNBRix5QkFBT0UsQ0FBUCxFQUFVLElBQVYsSUFBa0JELEtBQUtHLFdBQUwsQ0FBaUJILElBQWpCLENBQWxCO0FBQ0Q7QUFDRCxxQkFBSzdCLEtBQUwsQ0FBVyxPQUFYLElBQXNCRixLQUFLdUIsS0FBM0I7QUFDQSxvQkFBSUQsT0FBSixFQUFhO0FBQ1gsdUJBQUtyQixTQUFMLEdBQWlCNkIsTUFBakI7QUFDQSx1QkFBSzVCLEtBQUwsQ0FBVyxNQUFYLElBQXFCLENBQXJCO0FBQ0EsdUJBQUtpQyxLQUFMLENBQVcsa0JBQVgsRUFBK0IsTUFBL0I7QUFDRCxpQkFKRCxNQUlPO0FBQ0wsdUJBQUtqQyxLQUFMLENBQVcsTUFBWDtBQUNBLHVCQUFLRCxTQUFMLENBQWVtQyxJQUFmLENBQW9CQyxLQUFwQixDQUEwQixLQUFLcEMsU0FBL0IsRUFBMEM2QixNQUExQztBQUNEO0FBQ0QscUJBQUtRLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLGFBQXRCO0FBQ0EscUJBQUtDLE1BQUw7Ozs7Ozs7O0FBRUEscUJBQUtELE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDRSx5QkFBTyxZQUFFQyxPQUR3QjtBQUVqQ0Msd0JBQU0sT0FGMkI7QUFHakNDLHdCQUFNO0FBSDJCLGlCQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpFcUMsZUFBS0MsUzs7a0JBQTNCN0MsYSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uL3VzZXJzL2F2YXRhci9pbmRleCdcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uLy4uL3RvYXN0L2luZGV4J1xyXG5pbXBvcnQgV2FuSGVscE9yZGVyQXBpIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9hcGlzL3dhbnRIZWxwT3JkZXInXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbnRIZWxwT3JkZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgZGF0YSA9IHtcclxuICAgIG9yZGVyTGlzdDogW10sXHJcbiAgICBsaW1pdDoge1xyXG4gICAgICBzaXplOiA1LFxyXG4gICAgICBwYWdlOiAxXHJcbiAgICB9XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBvblZpZXc6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvZGV0YWlscy93YW50SGVscC9pbmRleD9pZD0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAkcHJvcHMgPSB7XCJhdmF0YXJcIjp7XCJ2LWJpbmQ6aWQub25jZVwiOntcImZvclwiOlwib3JkZXJMaXN0XCIsXCJpdGVtXCI6XCJvcmRlckl0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwiLFwidmFsdWVcIjpcIm9yZGVySXRlbS5jcmVhdGVyXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBhdmF0YXI6IEF2YXRhcixcclxuICAgIHRvYXN0OiBUb2FzdFxyXG4gIH1cclxuICBldmVudHMgPSB7XHJcbiAgICAncmVxdWVzdC1yZWZyZXNoJzogKGNvbXBvbmVudE5hbWUsICRldmVudCkgPT4ge1xyXG4gICAgICBpZiAoY29tcG9uZW50TmFtZSA9PT0gJ3dhbnRIZWxwT3JkZXInKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTW9yZSh7XHJcbiAgICAgICAgICByZWZyZXNoOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICdyZXF1ZXN0LWxvYWRNcmUnOiAoY29tcG9uZW50TmFtZSwgJGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChjb21wb25lbnROYW1lID09PSAnd2FudEhlbHBPcmRlcicpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGltaXQuY291bnQgfHwgKHRoaXMubGltaXQuY291bnQgPiB0aGlzLm9yZGVyTGlzdC5sZW5ndGgpKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRNb3JlKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5rGC57uE5L+h5oGvXHJcbiAgICovXHJcbiAgYXN5bmMgbG9hZE1vcmUoeyByZWZyZXNoID0gZmFsc2UgfSA9IHt9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgeyBjb2xsZWdlX2lkIH0gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdjb2xsZWdlJykgfHwge31cclxuICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmxpc3QoeyBuZWVkUGFnZTogdHJ1ZSwgLi4udGhpcy5saW1pdCwgY29sbGVnZTogY29sbGVnZV9pZCB9KVxyXG4gICAgICBsZXQgeyBvcmRlcnMgPSBbXSB9ID0gZGF0YVxyXG4gICAgICAvKipcclxuICAgICAgICog5YWI6L+b6KGM5pWw5o2u5aSE55CGXHJcbiAgICAgICAqL1xyXG4gICAgICBsZXQgdGltZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZShvcmRlcnNbaV1bJ19jJ10pXHJcbiAgICAgICAgb3JkZXJzW2ldWydfYyddID0gdGltZS5nZXREYXRlRGlmZih0aW1lKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGltaXRbJ2NvdW50J10gPSBkYXRhLmNvdW50XHJcbiAgICAgIGlmIChyZWZyZXNoKSB7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QgPSBvcmRlcnNcclxuICAgICAgICB0aGlzLmxpbWl0WydwYWdlJ10gPSAxXHJcbiAgICAgICAgdGhpcy4kZW1pdCgncmVzcG9uc2UtcmVmcmVzaCcsICdob21lJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxpbWl0WydwYWdlJ10rK1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnB1c2guYXBwbHkodGhpcy5vcmRlckxpc3QsIG9yZGVycylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ2hpZGRlblRvYXN0JylcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=