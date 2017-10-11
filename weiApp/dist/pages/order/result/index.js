'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../../npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Result = function (_wepy$page) {
  _inherits(Result, _wepy$page);

  function Result() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Result);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      type: 'other',
      mes: {
        grab: '抢单成功',
        add: '发布成功',
        cancel: '取消成功',
        quit: '抢单成功',
        other: '操作成功'
      }
    }, _this.methods = {
      goBack: function goBack() {
        _wepy2.default.navigateBack();
      },
      goHome: function goHome() {
        _wepy2.default.switchTab({
          url: '/pages/home/index'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Result, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var type = _ref2.type;

      this.type = type in this.data.mess ? type : 'other';
      this.$apply();
    }
  }]);

  return Result;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Result , 'pages/order/result/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlc3VsdCIsImRhdGEiLCJ0eXBlIiwibWVzIiwiZ3JhYiIsImFkZCIsImNhbmNlbCIsInF1aXQiLCJvdGhlciIsIm1ldGhvZHMiLCJnb0JhY2siLCJuYXZpZ2F0ZUJhY2siLCJnb0hvbWUiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJtZXNzIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxJLEdBQU87QUFDTEMsWUFBTSxPQUREO0FBRUxDLFdBQUs7QUFDSEMsY0FBTSxNQURIO0FBRUhDLGFBQUssTUFGRjtBQUdIQyxnQkFBUSxNQUhMO0FBSUhDLGNBQU0sTUFKSDtBQUtIQyxlQUFPO0FBTEo7QUFGQSxLLFFBVVBDLE8sR0FBVTtBQUNSQyxjQUFRLGtCQUFNO0FBQ1osdUJBQUtDLFlBQUw7QUFDRCxPQUhPO0FBSVJDLGNBQVEsa0JBQU07QUFDWix1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGVBQUs7QUFEUSxTQUFmO0FBR0Q7QUFSTyxLOzs7OztrQ0FVTztBQUFBLFVBQVJaLElBQVEsU0FBUkEsSUFBUTs7QUFDZixXQUFLQSxJQUFMLEdBQWFBLFFBQVEsS0FBS0QsSUFBTCxDQUFVYyxJQUFuQixHQUEyQmIsSUFBM0IsR0FBa0MsT0FBOUM7QUFDQSxXQUFLYyxNQUFMO0FBQ0Q7Ozs7RUF4QmlDLGVBQUtDLEk7O2tCQUFwQmpCLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICB0eXBlOiAnb3RoZXInLFxyXG4gICAgbWVzOiB7XHJcbiAgICAgIGdyYWI6ICfmiqLljZXmiJDlip8nLFxyXG4gICAgICBhZGQ6ICflj5HluIPmiJDlip8nLFxyXG4gICAgICBjYW5jZWw6ICflj5bmtojmiJDlip8nLFxyXG4gICAgICBxdWl0OiAn5oqi5Y2V5oiQ5YqfJyxcclxuICAgICAgb3RoZXI6ICfmk43kvZzmiJDlip8nXHJcbiAgICB9XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBnb0JhY2s6ICgpID0+IHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgfSxcclxuICAgIGdvSG9tZTogKCkgPT4ge1xyXG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2hvbWUvaW5kZXgnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uTG9hZCh7IHR5cGUgfSkge1xyXG4gICAgdGhpcy50eXBlID0gKHR5cGUgaW4gdGhpcy5kYXRhLm1lc3MpID8gdHlwZSA6ICdvdGhlcidcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbn1cclxuIl19