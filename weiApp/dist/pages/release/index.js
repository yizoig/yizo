'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import request from '../../utils/api'
// import { host } from '../../config/api'
var Release = function (_wepy$page) {
  _inherits(Release, _wepy$page);

  function Release() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Release);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Release.__proto__ || Object.getPrototypeOf(Release)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
      navigateTo: function navigateTo(url) {
        _wepy2.default.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Release;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Release , 'pages/release/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlbGVhc2UiLCJtZXRob2RzIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxPLEdBQVU7QUFDUkMsa0JBQVksb0JBQVVDLEdBQVYsRUFBZTtBQUN6Qix1QkFBS0QsVUFBTCxDQUFnQjtBQUNkQztBQURjLFNBQWhCO0FBR0Q7QUFMTyxLOzs7O0VBRHlCLGVBQUtDLEk7O2tCQUFyQkosTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyBpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9hcGknXHJcbi8vIGltcG9ydCB7IGhvc3QgfSBmcm9tICcuLi8uLi9jb25maWcvYXBpJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBtZXRob2RzID0ge1xyXG4gICAgbmF2aWdhdGVUbzogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=