'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../../components/toast/index.js');

var _index2 = _interopRequireDefault(_index);

var _tools = require('./../../../utils/tools.js');

var _api = require('./../../../config/api.js');

var _user = require('./../../../utils/user.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Avatar from '../../../../../components/users/avatar/index'


var changePwd = function (_wepy$page) {
  _inherits(changePwd, _wepy$page);

  function changePwd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, changePwd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = changePwd.__proto__ || Object.getPrototypeOf(changePwd)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      userinfo: null,
      password: '',
      newPassword: ''
    }, _this.components = {
      toast: _index2.default
    }, _this.methods = {
      textChange: function textChange(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
        this.$apply();
      },
      submit: function submit() {
        var _this2 = this;

        var _data = this.data,
            userinfo = _data.userinfo,
            password = _data.password,
            newPassword = _data.newPassword;

        try {
          var params = _tools.Validate.check({ id: userinfo['id'], password: password, newPassword: newPassword }, [['password', 'require', '原密码不能为空', _tools.Validate.MUST_VALIDATE], ['newPassword', 'require', '新密码不能为空', _tools.Validate.MUST_VALIDATE]]);
          if (userinfo && userinfo['password'] !== params['password']) {
            this.$invoke('toast', 'showToast', {
              title: '原密码不正确',
              icon: 'error',
              mask: true
            });
            return;
          }
          this.$invoke('toast', 'showToast', {
            title: '修改密码中...',
            icon: 'loading',
            mask: true
          });
          (0, _tools.request)(_api.apis.account.changePwd, params).then(function (data) {
            _this2.$invoke('toast', 'showToast', {
              title: '修改成功',
              icon: 'success',
              mask: true
            });
            (0, _user.setUserInfo)({
              password: newPassword
            });
            setTimeout(function () {
              _this2.$back();
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

  _createClass(changePwd, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref3, userinfo, _ref4, remember;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _wepy2.default.getStorage({
                  key: 'userinfo'
                });

              case 3:
                _ref3 = _context.sent;
                userinfo = _ref3.data;
                _context.next = 7;
                return _wepy2.default.getStorage({
                  key: 'remember'
                });

              case 7:
                _ref4 = _context.sent;
                remember = _ref4.data;

                this.userinfo = {
                  id: userinfo['id'],
                  password: remember['password']
                };
                this.$apply();
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return changePwd;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(changePwd , 'pages/account/changePwd/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNoYW5nZVB3ZCIsImRhdGEiLCJ1c2VyaW5mbyIsInBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb21wb25lbnRzIiwidG9hc3QiLCJtZXRob2RzIiwidGV4dENoYW5nZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsInN1Ym1pdCIsInBhcmFtcyIsImNoZWNrIiwiaWQiLCJNVVNUX1ZBTElEQVRFIiwiJGludm9rZSIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJhY2NvdW50IiwidGhlbiIsInNldFRpbWVvdXQiLCIkYmFjayIsInJlYXNvbiIsIm1lc3NhZ2UiLCJnZXRTdG9yYWdlIiwia2V5IiwicmVtZW1iZXIiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7OztBQUpBOzs7SUFLcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxtQkFBYTtBQUhSLEssUUFLUEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUdiQyxPLEdBQVU7QUFDUkMsa0JBQVksb0JBQVNDLENBQVQsRUFBWTtBQUN0QixhQUFLQSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBN0IsSUFBcUNILEVBQUVJLE1BQUYsQ0FBU0MsS0FBOUM7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKTztBQUtSQyxjQUFRLGtCQUFXO0FBQUE7O0FBQUEsb0JBQ3lCLEtBQUtmLElBRDlCO0FBQUEsWUFDWEMsUUFEVyxTQUNYQSxRQURXO0FBQUEsWUFDREMsUUFEQyxTQUNEQSxRQURDO0FBQUEsWUFDU0MsV0FEVCxTQUNTQSxXQURUOztBQUVqQixZQUFJO0FBQ0YsY0FBSWEsU0FBUyxnQkFBU0MsS0FBVCxDQUFlLEVBQUVDLElBQUlqQixTQUFTLElBQVQsQ0FBTixFQUFzQkMsa0JBQXRCLEVBQWdDQyx3QkFBaEMsRUFBZixFQUE4RCxDQUN6RSxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFNBQXhCLEVBQW1DLGdCQUFTZ0IsYUFBNUMsQ0FEeUUsRUFFekUsQ0FBQyxhQUFELEVBQWdCLFNBQWhCLEVBQTJCLFNBQTNCLEVBQXNDLGdCQUFTQSxhQUEvQyxDQUZ5RSxDQUE5RCxDQUFiO0FBSUEsY0FBSWxCLFlBQWFBLFNBQVMsVUFBVCxNQUF5QmUsT0FBTyxVQUFQLENBQTFDLEVBQStEO0FBQzdELGlCQUFLSSxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MscUJBQU8sUUFEMEI7QUFFakNDLG9CQUFNLE9BRjJCO0FBR2pDQyxvQkFBTTtBQUgyQixhQUFuQztBQUtBO0FBQ0Q7QUFDRCxlQUFLSCxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsbUJBQU8sVUFEMEI7QUFFakNDLGtCQUFNLFNBRjJCO0FBR2pDQyxrQkFBTTtBQUgyQixXQUFuQztBQUtBLDhCQUFRLFVBQUtDLE9BQUwsQ0FBYXpCLFNBQXJCLEVBQWdDaUIsTUFBaEMsRUFBd0NTLElBQXhDLENBQ0UsZ0JBQVE7QUFDTixtQkFBS0wsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLHFCQUFPLE1BRDBCO0FBRWpDQyxvQkFBTSxTQUYyQjtBQUdqQ0Msb0JBQU07QUFIMkIsYUFBbkM7QUFLQSxtQ0FBWTtBQUNWckIsd0JBQVVDO0FBREEsYUFBWjtBQUdBdUIsdUJBQVcsWUFBTTtBQUNmLHFCQUFLQyxLQUFMO0FBQ0QsYUFGRCxFQUVHLElBRkg7QUFHRCxXQWJILEVBY0Usa0JBQVU7QUFDUixtQkFBS1AsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLHFCQUFPTyxNQUQwQjtBQUVqQ04sb0JBQU0sT0FGMkI7QUFHakNDLG9CQUFNO0FBSDJCLGFBQW5DO0FBS0QsV0FwQkg7QUFzQkQsU0F4Q0QsQ0F3Q0UsT0FBT2YsQ0FBUCxFQUFVO0FBQ1YsZUFBS1ksT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLG1CQUFPYixFQUFFcUIsT0FEd0I7QUFFakNQLGtCQUFNLE9BRjJCO0FBR2pDQyxrQkFBTTtBQUgyQixXQUFuQztBQUtEO0FBQ0Y7QUF0RE8sSzs7Ozs7Ozs7Ozs7Ozs7O3VCQTBEeUIsZUFBS08sVUFBTCxDQUFnQjtBQUM3Q0MsdUJBQUs7QUFEd0MsaUJBQWhCLEM7Ozs7QUFBbkI5Qix3QixTQUFORCxJOzt1QkFHeUIsZUFBSzhCLFVBQUwsQ0FBZ0I7QUFDN0NDLHVCQUFLO0FBRHdDLGlCQUFoQixDOzs7O0FBQW5CQyx3QixTQUFOaEMsSTs7QUFHTixxQkFBS0MsUUFBTCxHQUFnQjtBQUNkaUIsc0JBQUlqQixTQUFTLElBQVQsQ0FEVTtBQUVkQyw0QkFBVThCLFNBQVMsVUFBVDtBQUZJLGlCQUFoQjtBQUlBLHFCQUFLbEIsTUFBTDs7Ozs7Ozs7QUFFQW1CLHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0VpQyxlQUFLQyxJOztrQkFBdkJwQyxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy91c2Vycy9hdmF0YXIvaW5kZXgnXHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RvYXN0L2luZGV4J1xyXG5pbXBvcnQgeyBWYWxpZGF0ZSwgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Rvb2xzJ1xyXG5pbXBvcnQge2FwaXN9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9hcGknXHJcbmltcG9ydCB7IHNldFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXNlcidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhbmdlUHdkIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgdXNlcmluZm86IG51bGwsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBuZXdQYXNzd29yZDogJydcclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIHRvYXN0OiBUb2FzdFxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgdGV4dENoYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCB7IHVzZXJpbmZvLCBwYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHRoaXMuZGF0YVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBWYWxpZGF0ZS5jaGVjayh7IGlkOiB1c2VyaW5mb1snaWQnXSwgcGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0sIFtcclxuICAgICAgICAgIFsncGFzc3dvcmQnLCAncmVxdWlyZScsICfljp/lr4bnoIHkuI3og73kuLrnqbonLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsnbmV3UGFzc3dvcmQnLCAncmVxdWlyZScsICfmlrDlr4bnoIHkuI3og73kuLrnqbonLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgaWYgKHVzZXJpbmZvICYmICh1c2VyaW5mb1sncGFzc3dvcmQnXSAhPT0gcGFyYW1zWydwYXNzd29yZCddKSkge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5Y6f5a+G56CB5LiN5q2j56GuJyxcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgIHRpdGxlOiAn5L+u5pS55a+G56CB5LitLi4uJyxcclxuICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlcXVlc3QoYXBpcy5hY2NvdW50LmNoYW5nZVB3ZCwgcGFyYW1zKS50aGVuKFxyXG4gICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5L+u5pS55oiQ5YqfJyxcclxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IG5ld1Bhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGJhY2soKVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlYXNvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiByZWFzb24sXHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB7IGRhdGE6IHVzZXJpbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleTogJ3VzZXJpbmZvJ1xyXG4gICAgICB9KVxyXG4gICAgICBsZXQgeyBkYXRhOiByZW1lbWJlciB9ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICdyZW1lbWJlcidcclxuICAgICAgfSlcclxuICAgICAgdGhpcy51c2VyaW5mbyA9IHtcclxuICAgICAgICBpZDogdXNlcmluZm9bJ2lkJ10sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHJlbWVtYmVyWydwYXNzd29yZCddXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=