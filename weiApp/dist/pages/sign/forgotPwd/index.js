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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(forgotPwd , 'pages/sign/forgotPwd/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZvcmdvdFB3ZCIsIm1ldGhvZHMiLCJqdW1wVG8iLCJlIiwidXJsIiwidGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE8sR0FBVTtBQUNSQyxjQUFRLGdCQUFTQyxDQUFULEVBQVk7QUFBQSxZQUNaQyxHQURZLEdBQ0pELEVBQUVFLE1BQUYsQ0FBU0MsT0FETCxDQUNaRixHQURZOztBQUVsQix1QkFBS0csVUFBTCxDQUFnQjtBQUNkSDtBQURjLFNBQWhCO0FBR0QsT0FOTztBQU9SSSxrQkFBWSxvQkFBU0wsQ0FBVCxFQUFZO0FBQUEsWUFDaEJDLEdBRGdCLEdBQ1JELEVBQUVFLE1BQUYsQ0FBU0MsT0FERCxDQUNoQkYsR0FEZ0I7O0FBRXRCLHVCQUFLSSxVQUFMLENBQWdCO0FBQ2RKO0FBRGMsU0FBaEI7QUFHRDtBQVpPLEs7Ozs7RUFEMkIsZUFBS0ssSTs7a0JBQXZCVCxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuLy8gaW1wb3J0IHsgaG9zdCB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvcmdvdFB3ZCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGp1bXBUbzogZnVuY3Rpb24oZSkge1xyXG4gICAgICBsZXQgeyB1cmwgfSA9IGUudGFyZ2V0LmRhdGFzZXRcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmxcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICByZWRpcmVjdFRvOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGxldCB7IHVybCB9ID0gZS50YXJnZXQuZGF0YXNldFxyXG4gICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIHVybFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=