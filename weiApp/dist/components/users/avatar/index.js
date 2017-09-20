'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../../npm/wepy-async-function/index.js');

var _user = require('./../../../lib/apis/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_wepy$component) {
  _inherits(Avatar, _wepy$component);

  function Avatar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      id: String,
      url: String
    }, _this.data = {
      avatarPath: _user2.default.avatar
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Avatar, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this);
    }
  }]);

  return Avatar;
}(_wepy2.default.component);

exports.default = Avatar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkF2YXRhciIsInByb3BzIiwiaWQiLCJTdHJpbmciLCJ1cmwiLCJkYXRhIiwiYXZhdGFyUGF0aCIsImF2YXRhciIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsVUFBSUMsTUFERTtBQUVOQyxXQUFLRDtBQUZDLEssUUFJUkUsSSxHQUFPO0FBQ0xDLGtCQUFZLGVBQVFDO0FBRGYsSzs7Ozs7NkJBR0U7QUFDUEMsY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDRDs7OztFQVZpQyxlQUFLQyxTOztrQkFBcEJWLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgVXNlckFwaSBmcm9tICcuLi8uLi8uLi9saWIvYXBpcy91c2VyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICBpZDogU3RyaW5nLFxyXG4gICAgdXJsOiBTdHJpbmdcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGF2YXRhclBhdGg6IFVzZXJBcGkuYXZhdGFyXHJcbiAgfVxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgfVxyXG59XHJcbiJdfQ==