'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../../../components/users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import request from '../../utils/api'
// import { host } from '../../config/api'


var AccountSettting = function (_wepy$page) {
  _inherits(AccountSettting, _wepy$page);

  function AccountSettting() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AccountSettting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AccountSettting.__proto__ || Object.getPrototypeOf(AccountSettting)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      id: '1',
      userinfo: null
    }, _this.components = {
      avatar: _index2.default
    }, _this.methods = {
      navigateTo: function navigateTo(url) {
        _wepy2.default.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return AccountSettting;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(AccountSettting , 'pages/mine/setting/account/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkFjY291bnRTZXR0dGluZyIsImRhdGEiLCJpZCIsInVzZXJpbmZvIiwiY29tcG9uZW50cyIsImF2YXRhciIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7O0FBRkE7QUFDQTs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLEksR0FBTztBQUNMQyxVQUFJLEdBREM7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBSVBDLFUsR0FBYTtBQUNYQztBQURXLEssUUFHYkMsTyxHQUFVO0FBQ1JDLGtCQUFZLG9CQUFTQyxHQUFULEVBQWM7QUFDeEIsdUJBQUtELFVBQUwsQ0FBZ0I7QUFDZEM7QUFEYyxTQUFoQjtBQUdEO0FBTE8sSzs7OztFQVJpQyxlQUFLQyxJOztrQkFBN0JULGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuLy8gaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xyXG4vLyBpbXBvcnQgeyBob3N0IH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwaSdcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzL2F2YXRhci9pbmRleCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudFNldHR0aW5nIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgaWQ6ICcxJyxcclxuICAgIHVzZXJpbmZvOiBudWxsXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBhdmF0YXI6IEF2YXRhclxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgbmF2aWdhdGVUbzogZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==