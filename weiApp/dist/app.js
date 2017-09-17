'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

require('./utils/date.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/mine/index', 'pages/mine/setting/baseinfo/index', 'pages/mine/setting/account/index', 'pages/sign/signIn/index', 'pages/home/index', 'pages/release/wantHelp/index', 'pages/release/offerHelp/index', 'pages/release/index', 'pages/index/index', 'pages/order/details/wantHelp/index', 'pages/sign/forgotPwd/index', 'pages/sign/signUp/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#3385ff',
        navigationBarTitleText: 'yizo微校园',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        selectedColor: '#1C79FF',
        color: '#8a8a8a',
        borderStyle: 'white',
        backgroundColor: '#fff',
        list: [{
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: './public/image/index.png',
          selectedIconPath: './public/image/index-active.png'
        }, {
          pagePath: 'pages/release/index',
          text: '发布',
          iconPath: './public/image/near.png',
          selectedIconPath: './public/image/near-active.png'
        }, {
          pagePath: 'pages/mine/index',
          text: '我的',
          iconPath: './public/image/mine.png',
          selectedIconPath: './public/image/mine-active.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('promisify');
    _this.use('requestfix');
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwiY29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBdURFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFyRGRBLE1BcURjLEdBckRMO0FBQ1BDLGFBQU8sQ0FDTCxrQkFESyxFQUVMLG1DQUZLLEVBR0wsa0NBSEssRUFJTCx5QkFKSyxFQUtMLGtCQUxLLEVBTUwsOEJBTkssRUFPTCwrQkFQSyxFQVFMLHFCQVJLLEVBU0wsbUJBVEssRUFVTCxvQ0FWSyxFQVdMLDRCQVhLLEVBWUwseUJBWkssQ0FEQTtBQWVQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsU0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BZkQ7QUFxQlBDLGNBQVE7QUFDTkMsdUJBQWUsU0FEVDtBQUVOQyxlQUFPLFNBRkQ7QUFHTkMscUJBQWEsT0FIUDtBQUlOQyx5QkFBaUIsTUFKWDtBQUtOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsa0JBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSwwQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLHFCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUseUJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUEksRUFhSjtBQUNFSCxvQkFBVSxrQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHlCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQWJJO0FBTEE7QUFyQkQsS0FxREs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFlBQVQ7QUFIWTtBQUliOzs7RUExRDBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0ICcuL3V0aWxzL2RhdGUnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvbWluZS9pbmRleCcsXG4gICAgICAncGFnZXMvbWluZS9zZXR0aW5nL2Jhc2VpbmZvL2luZGV4JyxcbiAgICAgICdwYWdlcy9taW5lL3NldHRpbmcvYWNjb3VudC9pbmRleCcsXG4gICAgICAncGFnZXMvc2lnbi9zaWduSW4vaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3JlbGVhc2Uvd2FudEhlbHAvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3JlbGVhc2Uvb2ZmZXJIZWxwL2luZGV4JyxcbiAgICAgICdwYWdlcy9yZWxlYXNlL2luZGV4JyxcbiAgICAgICdwYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAncGFnZXMvb3JkZXIvZGV0YWlscy93YW50SGVscC9pbmRleCcsXG4gICAgICAncGFnZXMvc2lnbi9mb3Jnb3RQd2QvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3NpZ24vc2lnblVwL2luZGV4J1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMzMzg1ZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3lpem/lvq7moKHlm60nLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzFDNzlGRicsXG4gICAgICBjb2xvcjogJyM4YThhOGEnLFxuICAgICAgYm9yZGVyU3R5bGU6ICd3aGl0ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaG9tZS9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+mmlumhtScsXG4gICAgICAgICAgaWNvblBhdGg6ICcuL3B1YmxpYy9pbWFnZS9pbmRleC5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL3B1YmxpYy9pbWFnZS9pbmRleC1hY3RpdmUucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9yZWxlYXNlL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn5Y+R5biDJyxcbiAgICAgICAgICBpY29uUGF0aDogJy4vcHVibGljL2ltYWdlL25lYXIucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9wdWJsaWMvaW1hZ2UvbmVhci1hY3RpdmUucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn5oiR55qEJyxcbiAgICAgICAgICBpY29uUGF0aDogJy4vcHVibGljL2ltYWdlL21pbmUucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9wdWJsaWMvaW1hZ2UvbWluZS1hY3RpdmUucG5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgfVxufVxuIl19