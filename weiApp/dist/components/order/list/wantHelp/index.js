'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../../../config/api.js');

var _tools = require('./../../../../utils/tools.js');

var _index = require('./../../../users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../toast/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          if (_this.limit.count > _this.orderList.length) {
            _this.loadMore();
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WantHelpOrder, [{
    key: 'onLoad',
    value: function onLoad() {
      this.loadMore();
    }
  }, {
    key: 'loadMore',
    value: function loadMore() {
      var _this2 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$refresh = _ref2.refresh,
          refresh = _ref2$refresh === undefined ? false : _ref2$refresh;

      this.$invoke('toast', 'showToast', {
        title: '加载中',
        icon: 'loading',
        mask: true
      });

      var _wepy$getStorageSync = _wepy2.default.getStorageSync('college'),
          college_id = _wepy$getStorageSync.college_id;

      (0, _tools.request)(_api.apis.wantHelpOrder.list, _extends({ needPage: true }, this.limit, { college: college_id })).then(function (_ref3) {
        var data = _ref3.data;
        var _data$orders = data.orders,
            orders = _data$orders === undefined ? [] : _data$orders;
        /**
         * 先进行数据处理
         */

        var time = void 0;
        for (var i = 0; i < orders.length; i++) {
          time = new Date(orders[i]['_c']);
          orders[i]['_c'] = time.getDateDiff(time);
        }
        _this2.limit['count'] = data.count;
        if (refresh) {
          _this2.orderList = orders;
          _this2.limit['page'] = 1;
          _this2.$emit('response-refresh', 'home');
        } else {
          _this2.limit['page']++;
          _this2.orderList.push.apply(_this2.orderList, orders);
        }
        _this2.$invoke('toast', 'hiddenToast');
        _this2.$apply();
      }).catch(function (reson) {
        _this2.$invoke('toast', 'showToast', {
          title: reson,
          icon: 'error',
          mask: true
        });
      });
    }
  }]);

  return WantHelpOrder;
}(_wepy2.default.component);

exports.default = WantHelpOrder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwT3JkZXIiLCJkYXRhIiwib3JkZXJMaXN0IiwibGltaXQiLCJzaXplIiwicGFnZSIsIm1ldGhvZHMiLCJvblZpZXciLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImF2YXRhciIsInRvYXN0IiwiZXZlbnRzIiwiY29tcG9uZW50TmFtZSIsIiRldmVudCIsImxvYWRNb3JlIiwicmVmcmVzaCIsImNvdW50IiwibGVuZ3RoIiwiJGludm9rZSIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJnZXRTdG9yYWdlU3luYyIsImNvbGxlZ2VfaWQiLCJ3YW50SGVscE9yZGVyIiwibGlzdCIsIm5lZWRQYWdlIiwiY29sbGVnZSIsInRoZW4iLCJvcmRlcnMiLCJ0aW1lIiwiaSIsIkRhdGUiLCJnZXREYXRlRGlmZiIsIiRlbWl0IiwicHVzaCIsImFwcGx5IiwiJGFwcGx5IiwiY2F0Y2giLCJyZXNvbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxhQUFPO0FBQ0xDLGNBQU0sQ0FERDtBQUVMQyxjQUFNO0FBRkQ7QUFGRixLLFFBT1BDLE8sR0FBVTtBQUNSQyxjQUFRLGdCQUFTQyxDQUFULEVBQVk7QUFDbEIsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyw0Q0FBNENGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQztBQUQzRCxTQUFoQjtBQUdEO0FBTE8sSyxRQU9YQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsa0JBQWlCLEVBQUMsT0FBTSxXQUFQLEVBQW1CLFFBQU8sV0FBMUIsRUFBc0MsU0FBUSxPQUE5QyxFQUFzRCxPQUFNLE9BQTVELEVBQW9FLFNBQVEsbUJBQTVFLEVBQWxCLEVBQVYsRSxRQUNWQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsNkJBRFU7QUFFVkM7QUFGVSxLLFFBSVpDLE0sR0FBUztBQUNQLHlCQUFtQix3QkFBQ0MsYUFBRCxFQUFnQkMsTUFBaEIsRUFBMkI7QUFDNUMsWUFBSUQsa0JBQWtCLGVBQXRCLEVBQXVDO0FBQ3JDLGdCQUFLRSxRQUFMLENBQWM7QUFDWkMscUJBQVM7QUFERyxXQUFkO0FBR0Q7QUFDRixPQVBNO0FBUVAseUJBQW1CLHdCQUFDSCxhQUFELEVBQWdCQyxNQUFoQixFQUEyQjtBQUM1QyxZQUFJRCxrQkFBa0IsZUFBdEIsRUFBdUM7QUFDckMsY0FBSSxNQUFLakIsS0FBTCxDQUFXcUIsS0FBWCxHQUFtQixNQUFLdEIsU0FBTCxDQUFldUIsTUFBdEMsRUFBOEM7QUFDNUMsa0JBQUtILFFBQUw7QUFDRDtBQUNGO0FBQ0Y7QUFkTSxLOzs7Ozs2QkFnQkE7QUFDUCxXQUFLQSxRQUFMO0FBQ0Q7OzsrQkFDa0M7QUFBQTs7QUFBQSxzRkFBSixFQUFJO0FBQUEsZ0NBQXhCQyxPQUF3QjtBQUFBLFVBQXhCQSxPQUF3QixpQ0FBZCxLQUFjOztBQUNqQyxXQUFLRyxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsZUFBTyxLQUQwQjtBQUVqQ0MsY0FBTSxTQUYyQjtBQUdqQ0MsY0FBTTtBQUgyQixPQUFuQzs7QUFEaUMsaUNBTWQsZUFBS0MsY0FBTCxDQUFvQixTQUFwQixDQU5jO0FBQUEsVUFNNUJDLFVBTjRCLHdCQU01QkEsVUFONEI7O0FBT2pDLDBCQUFRLFVBQUtDLGFBQUwsQ0FBbUJDLElBQTNCLGFBQW1DQyxVQUFVLElBQTdDLElBQXNELEtBQUsvQixLQUEzRCxJQUFpRWdDLFNBQVFKLFVBQXpFLEtBQXVGSyxJQUF2RixDQUE0RixpQkFBYztBQUFBLFlBQVhuQyxJQUFXLFNBQVhBLElBQVc7QUFBQSwyQkFDbEZBLElBRGtGLENBQ2xHb0MsTUFEa0c7QUFBQSxZQUNsR0EsTUFEa0csZ0NBQ3pGLEVBRHlGO0FBRXhHOzs7O0FBR0EsWUFBSUMsYUFBSjtBQUNBLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixPQUFPWixNQUEzQixFQUFtQ2MsR0FBbkMsRUFBd0M7QUFDdENELGlCQUFPLElBQUlFLElBQUosQ0FBU0gsT0FBT0UsQ0FBUCxFQUFVLElBQVYsQ0FBVCxDQUFQO0FBQ0FGLGlCQUFPRSxDQUFQLEVBQVUsSUFBVixJQUFrQkQsS0FBS0csV0FBTCxDQUFpQkgsSUFBakIsQ0FBbEI7QUFDRDtBQUNELGVBQUtuQyxLQUFMLENBQVcsT0FBWCxJQUFzQkYsS0FBS3VCLEtBQTNCO0FBQ0EsWUFBSUQsT0FBSixFQUFhO0FBQ1gsaUJBQUtyQixTQUFMLEdBQWlCbUMsTUFBakI7QUFDQSxpQkFBS2xDLEtBQUwsQ0FBVyxNQUFYLElBQXFCLENBQXJCO0FBQ0EsaUJBQUt1QyxLQUFMLENBQVcsa0JBQVgsRUFBK0IsTUFBL0I7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBS3ZDLEtBQUwsQ0FBVyxNQUFYO0FBQ0EsaUJBQUtELFNBQUwsQ0FBZXlDLElBQWYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQUsxQyxTQUEvQixFQUEwQ21DLE1BQTFDO0FBQ0Q7QUFDRCxlQUFLWCxPQUFMLENBQWEsT0FBYixFQUFzQixhQUF0QjtBQUNBLGVBQUttQixNQUFMO0FBQ0QsT0FyQkQsRUFxQkdDLEtBckJILENBcUJTLGlCQUFTO0FBQ2hCLGVBQUtwQixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsaUJBQU9vQixLQUQwQjtBQUVqQ25CLGdCQUFNLE9BRjJCO0FBR2pDQyxnQkFBTTtBQUgyQixTQUFuQztBQUtELE9BM0JEO0FBNEJEOzs7O0VBM0V3QyxlQUFLbUIsUzs7a0JBQTNCaEQsYSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBhcGlzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL2FwaSdcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3Rvb2xzJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uL3VzZXJzL2F2YXRhci9pbmRleCdcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uLy4uL3RvYXN0L2luZGV4J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYW50SGVscE9yZGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBvcmRlckxpc3Q6IFtdLFxyXG4gICAgbGltaXQ6IHtcclxuICAgICAgc2l6ZTogNSxcclxuICAgICAgcGFnZTogMVxyXG4gICAgfVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgb25WaWV3OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL2RldGFpbHMvd2FudEhlbHAvaW5kZXg/aWQ9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gJHByb3BzID0ge1wiYXZhdGFyXCI6e1widi1iaW5kOmlkLm9uY2VcIjp7XCJmb3JcIjpcIm9yZGVyTGlzdFwiLFwiaXRlbVwiOlwib3JkZXJJdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIixcInZhbHVlXCI6XCJvcmRlckl0ZW0uY3JlYXRlclwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgYXZhdGFyOiBBdmF0YXIsXHJcbiAgICB0b2FzdDogVG9hc3RcclxuICB9XHJcbiAgZXZlbnRzID0ge1xyXG4gICAgJ3JlcXVlc3QtcmVmcmVzaCc6IChjb21wb25lbnROYW1lLCAkZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGNvbXBvbmVudE5hbWUgPT09ICd3YW50SGVscE9yZGVyJykge1xyXG4gICAgICAgIHRoaXMubG9hZE1vcmUoe1xyXG4gICAgICAgICAgcmVmcmVzaDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAncmVxdWVzdC1sb2FkTXJlJzogKGNvbXBvbmVudE5hbWUsICRldmVudCkgPT4ge1xyXG4gICAgICBpZiAoY29tcG9uZW50TmFtZSA9PT0gJ3dhbnRIZWxwT3JkZXInKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGltaXQuY291bnQgPiB0aGlzLm9yZGVyTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMubG9hZE1vcmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWRNb3JlKClcclxuICB9XHJcbiAgbG9hZE1vcmUoeyByZWZyZXNoID0gZmFsc2UgfSA9IHt9KSB7XHJcbiAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgIG1hc2s6IHRydWVcclxuICAgIH0pXHJcbiAgICBsZXQge2NvbGxlZ2VfaWR9ID0gd2VweS5nZXRTdG9yYWdlU3luYygnY29sbGVnZScpO1xyXG4gICAgcmVxdWVzdChhcGlzLndhbnRIZWxwT3JkZXIubGlzdCwgeyBuZWVkUGFnZTogdHJ1ZSwgLi4udGhpcy5saW1pdCxjb2xsZWdlOmNvbGxlZ2VfaWQgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgbGV0IHsgb3JkZXJzID0gW10gfSA9IGRhdGFcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOWFiOi/m+ihjOaVsOaNruWkhOeQhlxyXG4gICAgICAgKi9cclxuICAgICAgbGV0IHRpbWVcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aW1lID0gbmV3IERhdGUob3JkZXJzW2ldWydfYyddKVxyXG4gICAgICAgIG9yZGVyc1tpXVsnX2MnXSA9IHRpbWUuZ2V0RGF0ZURpZmYodGltZSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpbWl0Wydjb3VudCddID0gZGF0YS5jb3VudFxyXG4gICAgICBpZiAocmVmcmVzaCkge1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0ID0gb3JkZXJzXHJcbiAgICAgICAgdGhpcy5saW1pdFsncGFnZSddID0gMVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3Jlc3BvbnNlLXJlZnJlc2gnLCAnaG9tZScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5saW1pdFsncGFnZSddKytcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5wdXNoLmFwcGx5KHRoaXMub3JkZXJMaXN0LCBvcmRlcnMpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdoaWRkZW5Ub2FzdCcpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0pLmNhdGNoKHJlc29uID0+IHtcclxuICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgdGl0bGU6IHJlc29uLFxyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19