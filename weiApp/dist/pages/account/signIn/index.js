'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../../config/api.js');

var _tools = require('./../../../utils/tools.js');

var _user = require('./../../../utils/user.js');

var _index = require('./../../../components/toast/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_wepy$page) {
  _inherits(SignIn, _wepy$page);

  function SignIn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SignIn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      account: '',
      password: ''
    }, _this.components = {
      toast: _index2.default
    }, _this.methods = {
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
      },
      ontextChange: function ontextChange(e) {
        this[e.target.dataset.name] = e.detail.value;
        this.$apply();
      },
      onSignIn: function onSignIn() {
        var _this2 = this;

        var _data = this.data,
            account = _data.account,
            password = _data.password;

        try {
          console.log({ account: account, password: password });
          var params = _tools.Validate.check({ account: account, password: password }, [['account', 'tel', '手机号格式错误', _tools.Validate.MUST_VALIDATE], ['password', 'require', '密码不能为空', _tools.Validate.MUST_VALIDATE]]);
          this.$invoke('toast', 'showToast', {
            title: '登录中',
            icon: 'loading',
            mask: true
          });
          (0, _tools.request)(_api.apis.account.signIn, params).then(function (_ref2) {
            var data = _ref2.data;

            _wepy2.default.setStorage({
              key: 'remember',
              data: {
                account: account,
                password: password
              }
            });
            _this2.$invoke('toast', 'showToast', {
              title: '登录成功',
              icon: 'success',
              mask: true
            });
            (0, _user.saveUserInfo)(data, _this2);
            setTimeout(function () {
              _wepy2.default.switchTab({
                url: '/pages/mine/index'
              });
            }, 1000);
          }, function (reason) {
            _this2.$invoke('toast', 'showToast', {
              title: reason,
              icon: 'error',
              mask: true
            });
          });
        } catch (e) {
          this.$invoke('toast', 'showToast', {
            title: e.message,
            icon: 'error',
            mask: true
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SignIn;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(SignIn , 'pages/account/signIn/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNpZ25JbiIsImRhdGEiLCJhY2NvdW50IiwicGFzc3dvcmQiLCJjb21wb25lbnRzIiwidG9hc3QiLCJtZXRob2RzIiwianVtcFRvIiwiZSIsInVybCIsInRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0ZVRvIiwicmVkaXJlY3RUbyIsIm9udGV4dENoYW5nZSIsIm5hbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsIm9uU2lnbkluIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsImNoZWNrIiwiTVVTVF9WQUxJREFURSIsIiRpbnZva2UiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwic2lnbkluIiwidGhlbiIsInNldFN0b3JhZ2UiLCJrZXkiLCJzZXRUaW1lb3V0Iiwic3dpdGNoVGFiIiwicmVhc29uIiwibWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxnQkFBVTtBQUZMLEssUUFJUEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUdiQyxPLEdBQVU7QUFDUkMsY0FBUSxnQkFBU0MsQ0FBVCxFQUFZO0FBQUEsWUFDWkMsR0FEWSxHQUNKRCxFQUFFRSxNQUFGLENBQVNDLE9BREwsQ0FDWkYsR0FEWTs7QUFFbEIsdUJBQUtHLFVBQUwsQ0FBZ0I7QUFDZEg7QUFEYyxTQUFoQjtBQUdELE9BTk87QUFPUkksa0JBQVksb0JBQVNMLENBQVQsRUFBWTtBQUFBLFlBQ2hCQyxHQURnQixHQUNSRCxFQUFFRSxNQUFGLENBQVNDLE9BREQsQ0FDaEJGLEdBRGdCOztBQUV0Qix1QkFBS0ksVUFBTCxDQUFnQjtBQUNkSjtBQURjLFNBQWhCO0FBR0QsT0FaTztBQWFSSyxvQkFBYyxzQkFBU04sQ0FBVCxFQUFZO0FBQ3hCLGFBQUtBLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkksSUFBdEIsSUFBOEJQLEVBQUVRLE1BQUYsQ0FBU0MsS0FBdkM7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FoQk87QUFpQlJDLGdCQUFVLG9CQUFXO0FBQUE7O0FBQUEsb0JBQ1MsS0FBS2xCLElBRGQ7QUFBQSxZQUNiQyxPQURhLFNBQ2JBLE9BRGE7QUFBQSxZQUNKQyxRQURJLFNBQ0pBLFFBREk7O0FBRW5CLFlBQUk7QUFDRmlCLGtCQUFRQyxHQUFSLENBQVksRUFBRW5CLGdCQUFGLEVBQVdDLGtCQUFYLEVBQVo7QUFDQSxjQUFJbUIsU0FBUyxnQkFBU0MsS0FBVCxDQUFlLEVBQUVyQixnQkFBRixFQUFXQyxrQkFBWCxFQUFmLEVBQXNDLENBQ2pELENBQUMsU0FBRCxFQUFZLEtBQVosRUFBbUIsU0FBbkIsRUFBOEIsZ0JBQVNxQixhQUF2QyxDQURpRCxFQUVqRCxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFFBQXhCLEVBQWtDLGdCQUFTQSxhQUEzQyxDQUZpRCxDQUF0QyxDQUFiO0FBSUEsZUFBS0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLG1CQUFPLEtBRDBCO0FBRWpDQyxrQkFBTSxTQUYyQjtBQUdqQ0Msa0JBQU07QUFIMkIsV0FBbkM7QUFLQSw4QkFBUSxVQUFLMUIsT0FBTCxDQUFhMkIsTUFBckIsRUFBNkJQLE1BQTdCLEVBQXFDUSxJQUFyQyxDQUEwQyxpQkFBYztBQUFBLGdCQUFYN0IsSUFBVyxTQUFYQSxJQUFXOztBQUN0RCwyQkFBSzhCLFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUssVUFEUztBQUVkL0Isb0JBQU07QUFDSkMsZ0NBREk7QUFFSkM7QUFGSTtBQUZRLGFBQWhCO0FBT0EsbUJBQUtzQixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MscUJBQU8sTUFEMEI7QUFFakNDLG9CQUFNLFNBRjJCO0FBR2pDQyxvQkFBTTtBQUgyQixhQUFuQztBQUtBLG9DQUFhM0IsSUFBYjtBQUNBZ0MsdUJBQVcsWUFBTTtBQUNmLDZCQUFLQyxTQUFMLENBQWU7QUFDYnpCLHFCQUFLO0FBRFEsZUFBZjtBQUdELGFBSkQsRUFJRyxJQUpIO0FBS0QsV0FuQkQsRUFvQkUsa0JBQVU7QUFDUixtQkFBS2dCLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQyxxQkFBT1MsTUFEMEI7QUFFakNSLG9CQUFNLE9BRjJCO0FBR2pDQyxvQkFBTTtBQUgyQixhQUFuQztBQUtELFdBMUJIO0FBMkJELFNBdENELENBc0NFLE9BQU9wQixDQUFQLEVBQVU7QUFDVixlQUFLaUIsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLG1CQUFPbEIsRUFBRTRCLE9BRHdCO0FBRWpDVCxrQkFBTSxPQUYyQjtBQUdqQ0Msa0JBQU07QUFIMkIsV0FBbkM7QUFLRDtBQUNGO0FBaEVPLEs7Ozs7RUFSd0IsZUFBS1MsSTs7a0JBQXBCckMsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBhcGlzIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2FwaSdcclxuaW1wb3J0IHsgVmFsaWRhdGUsIHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy90b29scydcclxuaW1wb3J0IHsgc2F2ZVVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXNlcidcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdG9hc3QvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YSA9IHtcclxuICAgIGFjY291bnQ6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICB0b2FzdDogVG9hc3RcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGp1bXBUbzogZnVuY3Rpb24oZSkge1xyXG4gICAgICBsZXQgeyB1cmwgfSA9IGUudGFyZ2V0LmRhdGFzZXRcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmxcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICByZWRpcmVjdFRvOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGxldCB7IHVybCB9ID0gZS50YXJnZXQuZGF0YXNldFxyXG4gICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIHVybFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9udGV4dENoYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzW2UudGFyZ2V0LmRhdGFzZXQubmFtZV0gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgb25TaWduSW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgeyBhY2NvdW50LCBwYXNzd29yZCB9ID0gdGhpcy5kYXRhXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBhY2NvdW50LCBwYXNzd29yZCB9KVxyXG4gICAgICAgIGxldCBwYXJhbXMgPSBWYWxpZGF0ZS5jaGVjayh7IGFjY291bnQsIHBhc3N3b3JkIH0sIFtcclxuICAgICAgICAgIFsnYWNjb3VudCcsICd0ZWwnLCAn5omL5py65Y+35qC85byP6ZSZ6K+vJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ3Bhc3N3b3JkJywgJ3JlcXVpcmUnLCAn5a+G56CB5LiN6IO95Li656m6JywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV1cclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6ICfnmbvlvZXkuK0nLFxyXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVxdWVzdChhcGlzLmFjY291bnQuc2lnbkluLCBwYXJhbXMpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdyZW1lbWJlcicsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBhY2NvdW50LFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXmiJDlip8nLFxyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBzYXZlVXNlckluZm8oZGF0YSx0aGlzKVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWluZS9pbmRleCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgIHJlYXNvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiByZWFzb24sXHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==