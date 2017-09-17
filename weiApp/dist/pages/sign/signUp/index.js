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

// import request from '../../utils/api'
// import { host } from '../../config/api'
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(SignUp , 'pages/sign/signUp/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNpZ25VcCIsIm1ldGhvZHMiLCJqdW1wVG8iLCJlIiwidXJsIiwidGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRlVG8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTyxHQUFVO0FBQ1JDLGNBQVEsZ0JBQVNDLENBQVQsRUFBWTtBQUFBLFlBQ1pDLEdBRFksR0FDSkQsRUFBRUUsTUFBRixDQUFTQyxPQURMLENBQ1pGLEdBRFk7O0FBRWxCLHVCQUFLRyxVQUFMLENBQWdCO0FBQ2RIO0FBRGMsU0FBaEI7QUFHRDtBQU5PLEs7Ozs7RUFEd0IsZUFBS0ksSTs7a0JBQXBCUixNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuLy8gaW1wb3J0IHsgaG9zdCB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25VcCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGp1bXBUbzogZnVuY3Rpb24oZSkge1xyXG4gICAgICBsZXQgeyB1cmwgfSA9IGUudGFyZ2V0LmRhdGFzZXRcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19