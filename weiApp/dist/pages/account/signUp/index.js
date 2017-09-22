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

var SignUp = function (_wepy$page) {
  _inherits(SignUp, _wepy$page);

  function SignUp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SignUp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
      jumpTo: function jumpTo(e) {
        var url = e.target.dataset.url;

        _wepy2.default.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SignUp;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(SignUp , 'pages/account/signUp/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNpZ25VcCIsIm1ldGhvZHMiLCJqdW1wVG8iLCJlIiwidXJsIiwidGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRlVG8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxPLEdBQVU7QUFDUkMsY0FBUSxnQkFBU0MsQ0FBVCxFQUFZO0FBQUEsWUFDWkMsR0FEWSxHQUNKRCxFQUFFRSxNQUFGLENBQVNDLE9BREwsQ0FDWkYsR0FEWTs7QUFFbEIsdUJBQUtHLFVBQUwsQ0FBZ0I7QUFDZEg7QUFEYyxTQUFoQjtBQUdEO0FBTk8sSzs7OztFQUR3QixlQUFLSSxJOztrQkFBcEJSLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblVwIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBtZXRob2RzID0ge1xyXG4gICAganVtcFRvOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGxldCB7IHVybCB9ID0gZS50YXJnZXQuZGF0YXNldFxyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=