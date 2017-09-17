'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      orderList: []
    }, _this.methods = {
      onView: function onView(e) {
        _wepy2.default.navigateTo({
          url: '/pages/order/details/wantHelp/index?id=' + e.currentTarget.dataset.id
        });
      }
    }, _this.$props = { "avatar": { "v-bind:id.once": { "for": "orderList", "item": "orderItem", "index": "index", "key": "index", "value": "orderItem.creater" } } }, _this.$events = {}, _this.components = {
      avatar: _index2.default,
      toast: _index4.default
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

      this.$invoke('toast', 'showToast', {
        title: '加载中',
        icon: 'loading',
        mask: true
      });
      (0, _tools.request)(_api.apis.wantHelpOrder.list, {}).then(function (_ref2) {
        var data = _ref2.data;
        var _data$orders = data.orders,
            orders = _data$orders === undefined ? [] : _data$orders;
        /**
         * 先进行数据处理
         */

        for (var i = 0; i < orders.length; i++) {
          orders[i]['_c'] = (0, _tools.getDateDiff)(new Date(orders[i]['_c']).getTime());
        }
        _this2.$invoke('toast', 'hiddenToast');
        _this2.orderList.push.apply(_this2.orderList, orders);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwT3JkZXIiLCJkYXRhIiwib3JkZXJMaXN0IiwibWV0aG9kcyIsIm9uVmlldyIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYXZhdGFyIiwidG9hc3QiLCJsb2FkTW9yZSIsIiRpbnZva2UiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwid2FudEhlbHBPcmRlciIsImxpc3QiLCJ0aGVuIiwib3JkZXJzIiwiaSIsImxlbmd0aCIsIkRhdGUiLCJnZXRUaW1lIiwicHVzaCIsImFwcGx5IiwiJGFwcGx5IiwiY2F0Y2giLCJyZXNvbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXO0FBRE4sSyxRQUdQQyxPLEdBQVU7QUFDUkMsY0FBUSxnQkFBU0MsQ0FBVCxFQUFZO0FBQ2xCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssNENBQTRDRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkM7QUFEM0QsU0FBaEI7QUFHRDtBQUxPLEssUUFPWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGtCQUFpQixFQUFDLE9BQU0sV0FBUCxFQUFtQixRQUFPLFdBQTFCLEVBQXNDLFNBQVEsT0FBOUMsRUFBc0QsT0FBTSxPQUE1RCxFQUFvRSxTQUFRLG1CQUE1RSxFQUFsQixFQUFWLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLDZCQURVO0FBRVZDO0FBRlUsSzs7Ozs7NkJBSUg7QUFDUCxXQUFLQyxRQUFMO0FBQ0Q7OzsrQkFDVTtBQUFBOztBQUNULFdBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQyxlQUFPLEtBRDBCO0FBRWpDQyxjQUFNLFNBRjJCO0FBR2pDQyxjQUFNO0FBSDJCLE9BQW5DO0FBS0EsMEJBQVEsVUFBS0MsYUFBTCxDQUFtQkMsSUFBM0IsRUFBaUMsRUFBakMsRUFBcUNDLElBQXJDLENBQTBDLGlCQUFjO0FBQUEsWUFBWHRCLElBQVcsU0FBWEEsSUFBVztBQUFBLDJCQUNoQ0EsSUFEZ0MsQ0FDaER1QixNQURnRDtBQUFBLFlBQ2hEQSxNQURnRCxnQ0FDdkMsRUFEdUM7QUFFdEQ7Ozs7QUFHQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsT0FBT0UsTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3RDRCxpQkFBT0MsQ0FBUCxFQUFVLElBQVYsSUFBa0Isd0JBQVksSUFBSUUsSUFBSixDQUFTSCxPQUFPQyxDQUFQLEVBQVUsSUFBVixDQUFULEVBQTBCRyxPQUExQixFQUFaLENBQWxCO0FBQ0Q7QUFDRCxlQUFLWCxPQUFMLENBQWEsT0FBYixFQUFzQixhQUF0QjtBQUNBLGVBQUtmLFNBQUwsQ0FBZTJCLElBQWYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQUs1QixTQUEvQixFQUEwQ3NCLE1BQTFDO0FBQ0EsZUFBS08sTUFBTDtBQUNELE9BWEQsRUFXR0MsS0FYSCxDQVdTLGlCQUFTO0FBQ2hCLGVBQUtmLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQyxpQkFBT2UsS0FEMEI7QUFFakNkLGdCQUFNLE9BRjJCO0FBR2pDQyxnQkFBTTtBQUgyQixTQUFuQztBQUtELE9BakJEO0FBa0JEOzs7O0VBNUN3QyxlQUFLYyxTOztrQkFBM0JsQyxhIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcvYXBpJ1xyXG5pbXBvcnQgeyBnZXREYXRlRGlmZiwgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3Rvb2xzJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uL3VzZXJzL2F2YXRhci9pbmRleCdcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uLy4uL3RvYXN0L2luZGV4J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYW50SGVscE9yZGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBvcmRlckxpc3Q6IFtdXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBvblZpZXc6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvZGV0YWlscy93YW50SGVscC9pbmRleD9pZD0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAkcHJvcHMgPSB7XCJhdmF0YXJcIjp7XCJ2LWJpbmQ6aWQub25jZVwiOntcImZvclwiOlwib3JkZXJMaXN0XCIsXCJpdGVtXCI6XCJvcmRlckl0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwiLFwidmFsdWVcIjpcIm9yZGVySXRlbS5jcmVhdGVyXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBhdmF0YXI6IEF2YXRhcixcclxuICAgIHRvYXN0OiBUb2FzdFxyXG4gIH1cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWRNb3JlKClcclxuICB9XHJcbiAgbG9hZE1vcmUoKSB7XHJcbiAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgIG1hc2s6IHRydWVcclxuICAgIH0pXHJcbiAgICByZXF1ZXN0KGFwaXMud2FudEhlbHBPcmRlci5saXN0LCB7fSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgbGV0IHsgb3JkZXJzID0gW10gfSA9IGRhdGFcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOWFiOi/m+ihjOaVsOaNruWkhOeQhlxyXG4gICAgICAgKi9cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBvcmRlcnNbaV1bJ19jJ10gPSBnZXREYXRlRGlmZihuZXcgRGF0ZShvcmRlcnNbaV1bJ19jJ10pLmdldFRpbWUoKSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ2hpZGRlblRvYXN0JylcclxuICAgICAgdGhpcy5vcmRlckxpc3QucHVzaC5hcHBseSh0aGlzLm9yZGVyTGlzdCwgb3JkZXJzKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9KS5jYXRjaChyZXNvbiA9PiB7XHJcbiAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgIHRpdGxlOiByZXNvbixcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==