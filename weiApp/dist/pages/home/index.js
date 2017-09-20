'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/menus/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../components/order/list/wantHelp/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'enablePullDownRefresh': true,
      'backgroundColor': '#3385ff'
    }, _this.data = {
      college: null
    }, _this.$props = { "menu": { "v-bind:menu.once": "{{navs.nav[navs.current]}}" } }, _this.$events = {}, _this.components = {
      menu: _index2.default,
      wantHelpOrder: _index4.default
    }, _this.events = {
      'response-refresh': function responseRefresh(componentName, $event) {
        _wepy2.default.stopPullDownRefresh();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onReachBottom',
    value: function onReachBottom() {
      /**
      * 与指定的组件通信
      */
      this.$broadcast('request-loadMre', 'wantHelpOrder');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.college = this.$parent.globalData.college;
      this.$apply();
      this.$broadcast('request-loadMre', 'wantHelpOrder');
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      /**
       * 与指定的组件通信
       */
      this.$broadcast('request-refresh', 'wantHelpOrder');
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJjb25maWciLCJkYXRhIiwiY29sbGVnZSIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibWVudSIsIndhbnRIZWxwT3JkZXIiLCJldmVudHMiLCJjb21wb25lbnROYW1lIiwiJGV2ZW50Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIiRicm9hZGNhc3QiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQLCtCQUF5QixJQURsQjtBQUVQLHlCQUFtQjtBQUZaLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGVBQVM7QUFESixLLFFBR1JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxvQkFBbUIsNEJBQXBCLEVBQVIsRSxRQUNWQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsMkJBRFU7QUFFVkM7QUFGVSxLLFFBSVpDLE0sR0FBUztBQUNQLDBCQUFvQix5QkFBQ0MsYUFBRCxFQUFnQkMsTUFBaEIsRUFBMkI7QUFDN0MsdUJBQUtDLG1CQUFMO0FBQ0Q7QUFITSxLOzs7OztvQ0FLTztBQUNiOzs7QUFHRCxXQUFLQyxVQUFMLENBQWdCLGlCQUFoQixFQUFtQyxlQUFuQztBQUNEOzs7NkJBQ1E7QUFDUCxXQUFLVixPQUFMLEdBQWUsS0FBS1csT0FBTCxDQUFhQyxVQUFiLENBQXdCWixPQUF2QztBQUNBLFdBQUthLE1BQUw7QUFDQSxXQUFLSCxVQUFMLENBQWdCLGlCQUFoQixFQUFtQyxlQUFuQztBQUNEOzs7d0NBQ21CO0FBQ2xCOzs7QUFHQSxXQUFLQSxVQUFMLENBQWdCLGlCQUFoQixFQUFtQyxlQUFuQztBQUNEOzs7O0VBbkMrQixlQUFLSSxJOztrQkFBbEJqQixJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBNZW51cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lbnVzL2luZGV4J1xyXG5pbXBvcnQgV2FudEhlbHBPcmRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZGVyL2xpc3Qvd2FudEhlbHAvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgICdlbmFibGVQdWxsRG93blJlZnJlc2gnOiB0cnVlLFxyXG4gICAgJ2JhY2tncm91bmRDb2xvcic6ICcjMzM4NWZmJ1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgY29sbGVnZTogbnVsbFxyXG4gIH1cclxuICRwcm9wcyA9IHtcIm1lbnVcIjp7XCJ2LWJpbmQ6bWVudS5vbmNlXCI6XCJ7e25hdnMubmF2W25hdnMuY3VycmVudF19fVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBtZW51OiBNZW51cyxcclxuICAgIHdhbnRIZWxwT3JkZXI6IFdhbnRIZWxwT3JkZXJcclxuICB9XHJcbiAgZXZlbnRzID0ge1xyXG4gICAgJ3Jlc3BvbnNlLXJlZnJlc2gnOiAoY29tcG9uZW50TmFtZSwgJGV2ZW50KSA9PiB7XHJcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgLyoqXHJcbiAgICAgKiDkuI7mjIflrprnmoTnu4Tku7bpgJrkv6FcclxuICAgICAqL1xyXG4gICAgdGhpcy4kYnJvYWRjYXN0KCdyZXF1ZXN0LWxvYWRNcmUnLCAnd2FudEhlbHBPcmRlcicpXHJcbiAgfVxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuY29sbGVnZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmNvbGxlZ2VcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICAgIHRoaXMuJGJyb2FkY2FzdCgncmVxdWVzdC1sb2FkTXJlJywgJ3dhbnRIZWxwT3JkZXInKVxyXG4gIH1cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIC8qKlxyXG4gICAgICog5LiO5oyH5a6a55qE57uE5Lu26YCa5L+hXHJcbiAgICAgKi9cclxuICAgIHRoaXMuJGJyb2FkY2FzdCgncmVxdWVzdC1yZWZyZXNoJywgJ3dhbnRIZWxwT3JkZXInKVxyXG4gIH1cclxufVxyXG4iXX0=