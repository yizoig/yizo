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
      pages: ['pages/index/index', 'pages/order/details/wantHelp/index', 'pages/home/index', 'pages/mine/index', 'pages/release/wantHelp/index', 'pages/order/result/index', 'pages/release/index', 'pages/mine/setting/baseinfo/index', 'pages/mine/setting/account/index', 'pages/account/changePwd/index', 'pages/account/changeTel/index', 'pages/release/offerHelp/index', 'pages/account/signIn/index', 'pages/account/forgotPwd/index', 'pages/account/signUp/index'],
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
                this.globalData['userInfo'] = _wepy2.default.getStorageSync('userInfo');

              case 3:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwiY29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJjb2xsZWdlIiwidXNlIiwiYXV0b1NpZ25JbiIsImdldFN0b3JhZ2VTeW5jIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQTBERSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBeERkQSxNQXdEYyxHQXhETDtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFFTCxvQ0FGSyxFQUdMLGtCQUhLLEVBSUwsa0JBSkssRUFLTCw4QkFMSyxFQU1MLDBCQU5LLEVBT0wscUJBUEssRUFRTCxtQ0FSSyxFQVNMLGtDQVRLLEVBVUwsK0JBVkssRUFXTCwrQkFYSyxFQVlMLCtCQVpLLEVBYUwsNEJBYkssRUFjTCwrQkFkSyxFQWVMLDRCQWZLLENBREE7QUFrQlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixTQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FsQkQ7QUF3QlBDLGNBQVE7QUFDTkMsdUJBQWUsU0FEVDtBQUVOQyxlQUFPLFNBRkQ7QUFHTkMscUJBQWEsT0FIUDtBQUlOQyx5QkFBaUIsTUFKWDtBQUtOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsa0JBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSwwQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQVFKO0FBQ0VILG9CQUFVLHFCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsNEJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUkksRUFjSjtBQUNFSCxvQkFBVSxrQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHlCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQWRJO0FBTEE7QUF4QkQsS0F3REs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxlQUFTO0FBRkUsS0FJQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsV0FBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxZQUFUO0FBSFk7QUFJYjs7Ozs7Ozs7Ozs7dUJBRU8sZUFBS0MsVUFBTCxFOzs7QUFDTixxQkFBS0osVUFBTCxDQUFnQixVQUFoQixJQUE4QixlQUFLSyxjQUFMLENBQW9CLFVBQXBCLENBQTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEV5QixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbmltcG9ydCAnLi9saWIvdXRpbHMvZGF0ZSdcbmltcG9ydCBVc2VyIGZyb20gJy4vbGliL3NlcnZpY2VzL3VzZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL29yZGVyL2RldGFpbHMvd2FudEhlbHAvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL21pbmUvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3JlbGVhc2Uvd2FudEhlbHAvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleCcsXG4gICAgICAncGFnZXMvcmVsZWFzZS9pbmRleCcsXG4gICAgICAncGFnZXMvbWluZS9zZXR0aW5nL2Jhc2VpbmZvL2luZGV4JyxcbiAgICAgICdwYWdlcy9taW5lL3NldHRpbmcvYWNjb3VudC9pbmRleCcsXG4gICAgICAncGFnZXMvYWNjb3VudC9jaGFuZ2VQd2QvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2FjY291bnQvY2hhbmdlVGVsL2luZGV4JyxcbiAgICAgICdwYWdlcy9yZWxlYXNlL29mZmVySGVscC9pbmRleCcsXG4gICAgICAncGFnZXMvYWNjb3VudC9zaWduSW4vaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2FjY291bnQvZm9yZ290UHdkL2luZGV4JyxcbiAgICAgICdwYWdlcy9hY2NvdW50L3NpZ25VcC9pbmRleCdcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMzM4NWZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd5aXpv5b6u5qCh5ZutJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMxQzc5RkYnLFxuICAgICAgY29sb3I6ICcjOGE4YThhJyxcbiAgICAgIGJvcmRlclN0eWxlOiAnd2hpdGUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgIGljb25QYXRoOiAnLi9wdWJsaWMvaW1hZ2UvaW5kZXgucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9wdWJsaWMvaW1hZ2UvaW5kZXgtYWN0aXZlLnBuZydcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9yZWxlYXNlL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn5Y+R5biDJyxcbiAgICAgICAgICBpY29uUGF0aDogJy4vcHVibGljL2ltYWdlL3JlbGVhc2UucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9wdWJsaWMvaW1hZ2UvcmVsZWFzZS1hY3RpdmUucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn5oiR55qEJyxcbiAgICAgICAgICBpY29uUGF0aDogJy4vcHVibGljL2ltYWdlL21pbmUucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9wdWJsaWMvaW1hZ2UvbWluZS1hY3RpdmUucG5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGwsXG4gICAgY29sbGVnZTogbnVsbFxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gIH1cbiAgYXN5bmMgb25MYXVuY2goKSB7XG4gICAgYXdhaXQgVXNlci5hdXRvU2lnbkluKClcbiAgICB0aGlzLmdsb2JhbERhdGFbJ3VzZXJJbmZvJ10gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXG4gIH1cbn1cbiJdfQ==