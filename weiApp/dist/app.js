'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

require('./lib/utils/date.js');

var _user = require('./lib/services/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index/index', 'pages/release/wantHelp/index', 'pages/account/signIn/index', 'pages/order/details/wantHelp/index', 'pages/home/index', 'pages/mine/index', 'pages/release/index', 'pages/order/result/index', 'pages/mine/setting/baseinfo/index', 'pages/mine/setting/account/index', 'pages/account/changePwd/index', 'pages/account/changeTel/index', 'pages/release/offerHelp/index', 'pages/account/forgotPwd/index'],
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
          iconPath: './public/image/release.png',
          selectedIconPath: './public/image/release-active.png'
        }, {
          pagePath: 'pages/mine/index',
          text: '我的',
          iconPath: './public/image/mine.png',
          selectedIconPath: './public/image/mine-active.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null,
      college: null
    };

    _this.use('promisify');
    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user2.default.autoSignIn();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwiY29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJjb2xsZWdlIiwidXNlIiwiYXV0b1NpZ25JbiIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQXZEZEEsTUF1RGMsR0F2REw7QUFDUEMsYUFBTyxDQUNMLG1CQURLLEVBRUwsOEJBRkssRUFHTCw0QkFISyxFQUlMLG9DQUpLLEVBS0wsa0JBTEssRUFNTCxrQkFOSyxFQU9MLHFCQVBLLEVBUUwsMEJBUkssRUFTTCxtQ0FUSyxFQVVMLGtDQVZLLEVBV0wsK0JBWEssRUFZTCwrQkFaSyxFQWFMLCtCQWJLLEVBY0wsK0JBZEssQ0FEQTtBQWlCUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFNBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQWpCRDtBQXVCUEMsY0FBUTtBQUNOQyx1QkFBZSxTQURUO0FBRU5DLGVBQU8sU0FGRDtBQUdOQyxxQkFBYSxPQUhQO0FBSU5DLHlCQUFpQixNQUpYO0FBS05DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSxrQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLDBCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQURJLEVBUUo7QUFDRUgsb0JBQVUscUJBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSw0QkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FSSSxFQWNKO0FBQ0VILG9CQUFVLGtCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUseUJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBZEk7QUFMQTtBQXZCRCxLQXVESztBQUFBLFVBSmRDLFVBSWMsR0FKRDtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGVBQVM7QUFGRSxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFlBQVQ7QUFIWTtBQUliOzs7Ozs7Ozs7Ozt1QkFFTyxlQUFLQyxVQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE5RG1CLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0ICcuL2xpYi91dGlscy9kYXRlJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9saWIvc2VydmljZXMvdXNlcidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAncGFnZXMvcmVsZWFzZS93YW50SGVscC9pbmRleCcsXG4gICAgICAncGFnZXMvYWNjb3VudC9zaWduSW4vaW5kZXgnLFxuICAgICAgJ3BhZ2VzL29yZGVyL2RldGFpbHMvd2FudEhlbHAvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL21pbmUvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3JlbGVhc2UvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleCcsXG4gICAgICAncGFnZXMvbWluZS9zZXR0aW5nL2Jhc2VpbmZvL2luZGV4JyxcbiAgICAgICdwYWdlcy9taW5lL3NldHRpbmcvYWNjb3VudC9pbmRleCcsXG4gICAgICAncGFnZXMvYWNjb3VudC9jaGFuZ2VQd2QvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2FjY291bnQvY2hhbmdlVGVsL2luZGV4JyxcbiAgICAgICdwYWdlcy9yZWxlYXNlL29mZmVySGVscC9pbmRleCcsXG4gICAgICAncGFnZXMvYWNjb3VudC9mb3Jnb3RQd2QvaW5kZXgnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzMzODVmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAneWl6b+W+ruagoeWbrScsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMUM3OUZGJyxcbiAgICAgIGNvbG9yOiAnIzhhOGE4YScsXG4gICAgICBib3JkZXJTdHlsZTogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn6aaW6aG1JyxcbiAgICAgICAgICBpY29uUGF0aDogJy4vcHVibGljL2ltYWdlL2luZGV4LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vcHVibGljL2ltYWdlL2luZGV4LWFjdGl2ZS5wbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvcmVsZWFzZS9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+WPkeW4gycsXG4gICAgICAgICAgaWNvblBhdGg6ICcuL3B1YmxpYy9pbWFnZS9yZWxlYXNlLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vcHVibGljL2ltYWdlL3JlbGVhc2UtYWN0aXZlLnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbWluZS9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+aIkeeahCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcuL3B1YmxpYy9pbWFnZS9taW5lLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vcHVibGljL2ltYWdlL21pbmUtYWN0aXZlLnBuZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIGNvbGxlZ2U6IG51bGxcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICB9XG4gIGFzeW5jIG9uTGF1bmNoKCkge1xuICAgIGF3YWl0IFVzZXIuYXV0b1NpZ25JbigpXG4gIH1cbn1cbiJdfQ==