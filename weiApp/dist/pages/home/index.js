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
      runOrdersPost: _index4.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      this.college = _wepy2.default.getStorageSync('college');
      this.$apply();
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJjb25maWciLCJkYXRhIiwiY29sbGVnZSIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibWVudSIsInJ1bk9yZGVyc1Bvc3QiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFIQTtBQUNBOzs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFRO0FBQ04sK0JBQXlCLElBRG5CO0FBRU4seUJBQW1CO0FBRmIsSyxRQUlSQyxJLEdBQU87QUFDTEMsZUFBUztBQURKLEssUUFHUkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLG9CQUFtQiw0QkFBcEIsRUFBUixFLFFBQ1ZDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQywyQkFEVTtBQUVWQztBQUZVLEs7Ozs7OzZCQUlIO0FBQ1AsV0FBS0wsT0FBTCxHQUFlLGVBQUtNLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBZjtBQUNBLFdBQUtDLE1BQUw7QUFDRDs7OztFQWpCK0IsZUFBS0MsSTs7a0JBQWxCWCxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuLy8gaW1wb3J0IHsgaG9zdCB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknXHJcbmltcG9ydCBNZW51cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lbnVzL2luZGV4J1xyXG5pbXBvcnQgV2FudEhlbHBPcmRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZGVyL2xpc3Qvd2FudEhlbHAvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9e1xyXG4gICAgJ2VuYWJsZVB1bGxEb3duUmVmcmVzaCc6IHRydWUsXHJcbiAgICAnYmFja2dyb3VuZENvbG9yJzogJyMzMzg1ZmYnXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBjb2xsZWdlOiBudWxsXHJcbiAgfVxyXG4gJHByb3BzID0ge1wibWVudVwiOntcInYtYmluZDptZW51Lm9uY2VcIjpcInt7bmF2cy5uYXZbbmF2cy5jdXJyZW50XX19XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIG1lbnU6IE1lbnVzLFxyXG4gICAgcnVuT3JkZXJzUG9zdDogV2FudEhlbHBPcmRlclxyXG4gIH07XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5jb2xsZWdlID0gd2VweS5nZXRTdG9yYWdlU3luYygnY29sbGVnZScpXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG59XHJcbiJdfQ==