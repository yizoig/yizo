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
      pages: ['pages/index/index', 'pages/release/wantHelp/index', 'pages/mine/index', 'pages/mine/setting/baseinfo/index', 'pages/mine/setting/account/index', 'pages/account/changePwd/index', 'pages/account/changeTel/index', 'pages/account/signIn/index', 'pages/home/index', 'pages/release/offerHelp/index', 'pages/release/index', 'pages/order/details/wantHelp/index', 'pages/account/forgotPwd/index', 'pages/account/signUp/index'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwiY29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBeURFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUF2RGRBLE1BdURjLEdBdkRMO0FBQ1BDLGFBQU8sQ0FDTCxtQkFESyxFQUVMLDhCQUZLLEVBR0wsa0JBSEssRUFJTCxtQ0FKSyxFQUtMLGtDQUxLLEVBTUwsK0JBTkssRUFPTCwrQkFQSyxFQVFMLDRCQVJLLEVBU0wsa0JBVEssRUFVTCwrQkFWSyxFQVdMLHFCQVhLLEVBWUwsb0NBWkssRUFhTCwrQkFiSyxFQWNMLDRCQWRLLENBREE7QUFpQlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixTQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FqQkQ7QUF1QlBDLGNBQVE7QUFDTkMsdUJBQWUsU0FEVDtBQUVOQyxlQUFPLFNBRkQ7QUFHTkMscUJBQWEsT0FIUDtBQUlOQyx5QkFBaUIsTUFKWDtBQUtOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsa0JBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSwwQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLHFCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUseUJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUEksRUFhSjtBQUNFSCxvQkFBVSxrQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHlCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQWJJO0FBTEE7QUF2QkQsS0F1REs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFlBQVQ7QUFIWTtBQUliOzs7RUE1RDBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0ICcuL3V0aWxzL2RhdGUnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3JlbGVhc2Uvd2FudEhlbHAvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL21pbmUvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL21pbmUvc2V0dGluZy9iYXNlaW5mby9pbmRleCcsXG4gICAgICAncGFnZXMvbWluZS9zZXR0aW5nL2FjY291bnQvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2FjY291bnQvY2hhbmdlUHdkL2luZGV4JyxcbiAgICAgICdwYWdlcy9hY2NvdW50L2NoYW5nZVRlbC9pbmRleCcsXG4gICAgICAncGFnZXMvYWNjb3VudC9zaWduSW4vaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3JlbGVhc2Uvb2ZmZXJIZWxwL2luZGV4JyxcbiAgICAgICdwYWdlcy9yZWxlYXNlL2luZGV4JyxcbiAgICAgICdwYWdlcy9vcmRlci9kZXRhaWxzL3dhbnRIZWxwL2luZGV4JyxcbiAgICAgICdwYWdlcy9hY2NvdW50L2ZvcmdvdFB3ZC9pbmRleCcsXG4gICAgICAncGFnZXMvYWNjb3VudC9zaWduVXAvaW5kZXgnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzMzODVmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAneWl6b+W+ruagoeWbrScsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMUM3OUZGJyxcbiAgICAgIGNvbG9yOiAnIzhhOGE4YScsXG4gICAgICBib3JkZXJTdHlsZTogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn6aaW6aG1JyxcbiAgICAgICAgICBpY29uUGF0aDogJy4vcHVibGljL2ltYWdlL2luZGV4LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vcHVibGljL2ltYWdlL2luZGV4LWFjdGl2ZS5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3JlbGVhc2UvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICflj5HluIMnLFxuICAgICAgICAgIGljb25QYXRoOiAnLi9wdWJsaWMvaW1hZ2UvbmVhci5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL3B1YmxpYy9pbWFnZS9uZWFyLWFjdGl2ZS5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfmiJHnmoQnLFxuICAgICAgICAgIGljb25QYXRoOiAnLi9wdWJsaWMvaW1hZ2UvbWluZS5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL3B1YmxpYy9pbWFnZS9taW5lLWFjdGl2ZS5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICB9XG59XG4iXX0=