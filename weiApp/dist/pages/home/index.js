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
// import request from '../../utils/api'
// import { host } from '../../config/api'


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
      this.college = _wepy2.default.getStorageSync('college');
      this.$apply();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJjb25maWciLCJkYXRhIiwiY29sbGVnZSIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibWVudSIsIndhbnRIZWxwT3JkZXIiLCJldmVudHMiLCJjb21wb25lbnROYW1lIiwiJGV2ZW50Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIiRicm9hZGNhc3QiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFIQTtBQUNBOzs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1AsK0JBQXlCLElBRGxCO0FBRVAseUJBQW1CO0FBRlosSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBUztBQURKLEssUUFHUkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLG9CQUFtQiw0QkFBcEIsRUFBUixFLFFBQ1ZDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQywyQkFEVTtBQUVWQztBQUZVLEssUUFJWkMsTSxHQUFTO0FBQ1AsMEJBQW9CLHlCQUFDQyxhQUFELEVBQWdCQyxNQUFoQixFQUEyQjtBQUM3Qyx1QkFBS0MsbUJBQUw7QUFDRDtBQUhNLEs7Ozs7O29DQUtPO0FBQ2I7OztBQUdELFdBQUtDLFVBQUwsQ0FBZ0IsaUJBQWhCLEVBQW1DLGVBQW5DO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtWLE9BQUwsR0FBZSxlQUFLVyxjQUFMLENBQW9CLFNBQXBCLENBQWY7QUFDQSxXQUFLQyxNQUFMO0FBQ0Q7Ozt3Q0FDbUI7QUFDbEI7OztBQUdBLFdBQUtGLFVBQUwsQ0FBZ0IsaUJBQWhCLEVBQW1DLGVBQW5DO0FBQ0Q7Ozs7RUFsQytCLGVBQUtHLEk7O2tCQUFsQmhCLEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuLy8gaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xyXG4vLyBpbXBvcnQgeyBob3N0IH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwaSdcclxuaW1wb3J0IE1lbnVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVudXMvaW5kZXgnXHJcbmltcG9ydCBXYW50SGVscE9yZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3JkZXIvbGlzdC93YW50SGVscC9pbmRleCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgJ2VuYWJsZVB1bGxEb3duUmVmcmVzaCc6IHRydWUsXHJcbiAgICAnYmFja2dyb3VuZENvbG9yJzogJyMzMzg1ZmYnXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBjb2xsZWdlOiBudWxsXHJcbiAgfVxyXG4gJHByb3BzID0ge1wibWVudVwiOntcInYtYmluZDptZW51Lm9uY2VcIjpcInt7bmF2cy5uYXZbbmF2cy5jdXJyZW50XX19XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIG1lbnU6IE1lbnVzLFxyXG4gICAgd2FudEhlbHBPcmRlcjogV2FudEhlbHBPcmRlclxyXG4gIH1cclxuICBldmVudHMgPSB7XHJcbiAgICAncmVzcG9uc2UtcmVmcmVzaCc6IChjb21wb25lbnROYW1lLCAkZXZlbnQpID0+IHtcclxuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgIH1cclxuICB9XHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAvKipcclxuICAgICAqIOS4juaMh+WumueahOe7hOS7tumAmuS/oVxyXG4gICAgICovXHJcbiAgICB0aGlzLiRicm9hZGNhc3QoJ3JlcXVlc3QtbG9hZE1yZScsICd3YW50SGVscE9yZGVyJylcclxuICB9XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5jb2xsZWdlID0gd2VweS5nZXRTdG9yYWdlU3luYygnY29sbGVnZScpXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuI7mjIflrprnmoTnu4Tku7bpgJrkv6FcclxuICAgICAqL1xyXG4gICAgdGhpcy4kYnJvYWRjYXN0KCdyZXF1ZXN0LXJlZnJlc2gnLCAnd2FudEhlbHBPcmRlcicpXHJcbiAgfVxyXG59XHJcbiJdfQ==