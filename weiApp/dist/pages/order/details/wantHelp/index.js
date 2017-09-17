'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../../../npm/wepy-async-function/index.js');

var _api = require('./../../../../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _api3 = require('./../../../../config/api.js');

var _index = require('./../../../../components/users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WantHelp = function (_wepy$page) {
  _inherits(WantHelp, _wepy$page);

  function WantHelp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WantHelp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WantHelp.__proto__ || Object.getPrototypeOf(WantHelp)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      detail: {},
      uid: '1'
    }, _this.$props = { "avatar": { "v-bind:id.sync": "uid", "v-bind:id.once": "detail.runner  " } }, _this.$events = {}, _this.components = {
      avatar: _index2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WantHelp, [{
    key: 'onLoad',
    value: function onLoad(opt) {
      this.id = opt.id || null;
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      try {
        (0, _api2.default)(_api3.apis.wantHelpOrder.info, { id: this.id }).then(function (_ref2) {
          var data = _ref2.data;

          _this2.detail = data.info;
          _this2.$apply();
        }, function (reson) {
          console.log(reson);
        });
      } catch (e) {
        console.log(e);
      }
    }
  }]);

  return WantHelp;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(WantHelp , 'pages/order/details/wantHelp/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwIiwiZGF0YSIsImRldGFpbCIsInVpZCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYXZhdGFyIiwib3B0IiwiaWQiLCJsb2FkRGF0YSIsIndhbnRIZWxwT3JkZXIiLCJpbmZvIiwidGhlbiIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJyZXNvbiIsImUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLFdBQUs7QUFGQSxLLFFBSVJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxrQkFBaUIsS0FBbEIsRUFBd0Isa0JBQWlCLGlCQUF6QyxFQUFWLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSzs7Ozs7MkJBR0xDLEcsRUFBSztBQUNWLFdBQUtDLEVBQUwsR0FBVUQsSUFBSUMsRUFBSixJQUFVLElBQXBCO0FBQ0EsV0FBS0MsUUFBTDtBQUNEOzs7K0JBQ1U7QUFBQTs7QUFDVCxVQUFJO0FBQ0YsMkJBQVEsV0FBS0MsYUFBTCxDQUFtQkMsSUFBM0IsRUFBaUMsRUFBRUgsSUFBSSxLQUFLQSxFQUFYLEVBQWpDLEVBQWtESSxJQUFsRCxDQUF1RCxpQkFBYztBQUFBLGNBQVhaLElBQVcsU0FBWEEsSUFBVzs7QUFDbkUsaUJBQUtDLE1BQUwsR0FBY0QsS0FBS1csSUFBbkI7QUFDQSxpQkFBS0UsTUFBTDtBQUNELFNBSEQsRUFHRyxpQkFBUztBQUNWQyxrQkFBUUMsR0FBUixDQUFZQyxLQUFaO0FBQ0QsU0FMRDtBQU1ELE9BUEQsQ0FPRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkgsZ0JBQVFDLEdBQVIsQ0FBWUUsQ0FBWjtBQUNEO0FBQ0Y7Ozs7RUF6Qm1DLGVBQUtDLEk7O2tCQUF0Qm5CLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hcGknXHJcbmltcG9ydCB7YXBpc30gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL2FwaSdcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzL2F2YXRhci9pbmRleCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FudEhlbHAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBkZXRhaWw6IHt9LFxyXG4gICAgdWlkOiAnMSdcclxuICB9XHJcbiAkcHJvcHMgPSB7XCJhdmF0YXJcIjp7XCJ2LWJpbmQ6aWQuc3luY1wiOlwidWlkXCIsXCJ2LWJpbmQ6aWQub25jZVwiOlwiZGV0YWlsLnJ1bm5lciAgXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIGF2YXRhcjogQXZhdGFyXHJcbiAgfVxyXG4gIG9uTG9hZChvcHQpIHtcclxuICAgIHRoaXMuaWQgPSBvcHQuaWQgfHwgbnVsbFxyXG4gICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgfVxyXG4gIGxvYWREYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVxdWVzdChhcGlzLndhbnRIZWxwT3JkZXIuaW5mbywgeyBpZDogdGhpcy5pZCB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGV0YWlsID0gZGF0YS5pbmZvXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LCByZXNvbiA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzb24pXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==