'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var forgotPwd = function (_wepy$page) {
  _inherits(forgotPwd, _wepy$page);

  function forgotPwd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, forgotPwd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = forgotPwd.__proto__ || Object.getPrototypeOf(forgotPwd)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
      jumpTo: function jumpTo(e) {
        var url = e.target.dataset.url;

        _wepy2.default.navigateTo({
          url: url
        });
      },
      redirectTo: function redirectTo(e) {
        var url = e.target.dataset.url;

        _wepy2.default.redirectTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return forgotPwd;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(forgotPwd , 'pages/account/forgotPwd/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZvcmdvdFB3ZCIsIm1ldGhvZHMiLCJqdW1wVG8iLCJlIiwidXJsIiwidGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTyxHQUFVO0FBQ1JDLGNBQVEsZ0JBQVNDLENBQVQsRUFBWTtBQUFBLFlBQ1pDLEdBRFksR0FDSkQsRUFBRUUsTUFBRixDQUFTQyxPQURMLENBQ1pGLEdBRFk7O0FBRWxCLHVCQUFLRyxVQUFMLENBQWdCO0FBQ2RIO0FBRGMsU0FBaEI7QUFHRCxPQU5PO0FBT1JJLGtCQUFZLG9CQUFTTCxDQUFULEVBQVk7QUFBQSxZQUNoQkMsR0FEZ0IsR0FDUkQsRUFBRUUsTUFBRixDQUFTQyxPQURELENBQ2hCRixHQURnQjs7QUFFdEIsdUJBQUtJLFVBQUwsQ0FBZ0I7QUFDZEo7QUFEYyxTQUFoQjtBQUdEO0FBWk8sSzs7OztFQUQyQixlQUFLSyxJOztrQkFBdkJULFMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9yZ290UHdkIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBtZXRob2RzID0ge1xyXG4gICAganVtcFRvOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGxldCB7IHVybCB9ID0gZS50YXJnZXQuZGF0YXNldFxyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHJlZGlyZWN0VG86IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0IHsgdXJsIH0gPSBlLnRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHdlcHkucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgdXJsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==