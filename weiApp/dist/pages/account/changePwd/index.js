'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../../components/toast/index.js');

var _index2 = _interopRequireDefault(_index);

var _user = require('./../../../lib/services/user.js');

var _user2 = _interopRequireDefault(_user);

var _index3 = require('./../../../lib/utils/index.js');

var _user3 = require('./../../../lib/apis/user.js');

var _user4 = _interopRequireDefault(_user3);

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
      userInfo: null,
      password: '',
      newPassword: ''
    }, _this.components = {
      toast: _index2.default
    }, _this.methods = {
      textChange: function textChange(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
        this.$apply();
      },
      submit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this2 = this;

          var _data, userInfo, password, newPassword, params, _ref3, data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _data = this.data, userInfo = _data.userInfo, password = _data.password, newPassword = _data.newPassword;
                  _context.prev = 1;
                  params = _index3.Validate.check({ id: userInfo['id'], password: password, newPassword: newPassword }, [['password', 'require', '原密码不能为空', _index3.Validate.MUST_VALIDATE], ['newPassword', 'require', '新密码不能为空', _index3.Validate.MUST_VALIDATE]]);

                  if (!(userInfo && userInfo['password'] !== params['password'])) {
                    _context.next = 6;
                    break;
                  }

                  this.$invoke('toast', 'showToast', {
                    title: '原密码不正确',
                    icon: 'error',
                    mask: true
                  });
                  return _context.abrupt('return');

                case 6:
                  this.$invoke('toast', 'showToast', {
                    title: '修改密码中...',
                    icon: 'loading',
                    mask: true
                  });

                  _context.next = 9;
                  return _user4.default.changePwd(params);

                case 9:
                  _ref3 = _context.sent;
                  data = _ref3.data;

                  if (data) {
                    this.$invoke('toast', 'showToast', {
                      title: '修改成功',
                      icon: 'success',
                      mask: true
                    });
                    _user2.default.setuserInfo({
                      password: newPassword
                    });
                    setTimeout(function () {
                      _this2.$back();
                    }, 1000);
                  } else {
                    this.$invoke('toast', 'showToast', {
                      title: '修改失败',
                      icon: 'error',
                      mask: true
                    });
                  }
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](1);

                  this.$invoke('toast', 'showToast', {
                    title: _context.t0.message,
                    icon: 'error',
                    mask: true
                  });

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 14]]);
        }));

        function submit() {
          return _ref2.apply(this, arguments);
        }

        return submit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(changePwd, [{
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var userInfo, _ref5, remember;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                console.log(this.$parent.globalData.userInfo);
                userInfo = this.$parent.globalData.userInfo.data;
                _context2.next = 5;
                return _wepy2.default.getStorage({
                  key: 'remember'
                });

              case 5:
                _ref5 = _context2.sent;
                remember = _ref5.data;

                this.userInfo = {
                  id: userInfo['id'],
                  password: remember['password']
                };
                this.$apply();
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function onLoad() {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return changePwd;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(changePwd , 'pages/account/changePwd/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNoYW5nZVB3ZCIsImRhdGEiLCJ1c2VySW5mbyIsInBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb21wb25lbnRzIiwidG9hc3QiLCJtZXRob2RzIiwidGV4dENoYW5nZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsInN1Ym1pdCIsInBhcmFtcyIsImNoZWNrIiwiaWQiLCJNVVNUX1ZBTElEQVRFIiwiJGludm9rZSIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJzZXR1c2VySW5mbyIsInNldFRpbWVvdXQiLCIkYmFjayIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJnZXRTdG9yYWdlIiwia2V5IiwicmVtZW1iZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUxBOzs7SUFNcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxtQkFBYTtBQUhSLEssUUFLUEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUdiQyxPLEdBQVU7QUFDUkMsa0JBQVksb0JBQVNDLENBQVQsRUFBWTtBQUN0QixhQUFLQSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBN0IsSUFBcUNILEVBQUVJLE1BQUYsQ0FBU0MsS0FBOUM7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKTztBQUtSQztBQUFBLDRFQUFRO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFDb0MsS0FBS2YsSUFEekMsRUFDQUMsUUFEQSxTQUNBQSxRQURBLEVBQ1VDLFFBRFYsU0FDVUEsUUFEVixFQUNvQkMsV0FEcEIsU0FDb0JBLFdBRHBCO0FBQUE7QUFHQWEsd0JBSEEsR0FHUyxpQkFBU0MsS0FBVCxDQUFlLEVBQUVDLElBQUlqQixTQUFTLElBQVQsQ0FBTixFQUFzQkMsa0JBQXRCLEVBQWdDQyx3QkFBaEMsRUFBZixFQUE4RCxDQUN6RSxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFNBQXhCLEVBQW1DLGlCQUFTZ0IsYUFBNUMsQ0FEeUUsRUFFekUsQ0FBQyxhQUFELEVBQWdCLFNBQWhCLEVBQTJCLFNBQTNCLEVBQXNDLGlCQUFTQSxhQUEvQyxDQUZ5RSxDQUE5RCxDQUhUOztBQUFBLHdCQU9BbEIsWUFBYUEsU0FBUyxVQUFULE1BQXlCZSxPQUFPLFVBQVAsQ0FQdEM7QUFBQTtBQUFBO0FBQUE7O0FBUUYsdUJBQUtJLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQywyQkFBTyxRQUQwQjtBQUVqQ0MsMEJBQU0sT0FGMkI7QUFHakNDLDBCQUFNO0FBSDJCLG1CQUFuQztBQVJFOztBQUFBO0FBZUosdUJBQUtILE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQywyQkFBTyxVQUQwQjtBQUVqQ0MsMEJBQU0sU0FGMkI7QUFHakNDLDBCQUFNO0FBSDJCLG1CQUFuQzs7QUFmSTtBQUFBLHlCQXFCaUIsZUFBUXhCLFNBQVIsQ0FBa0JpQixNQUFsQixDQXJCakI7O0FBQUE7QUFBQTtBQXFCRWhCLHNCQXJCRixTQXFCRUEsSUFyQkY7O0FBc0JKLHNCQUFJQSxJQUFKLEVBQVU7QUFDUix5QkFBS29CLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQyw2QkFBTyxNQUQwQjtBQUVqQ0MsNEJBQU0sU0FGMkI7QUFHakNDLDRCQUFNO0FBSDJCLHFCQUFuQztBQUtBLG1DQUFLQyxXQUFMLENBQWlCO0FBQ2Z0QixnQ0FBVUM7QUFESyxxQkFBakI7QUFHQXNCLCtCQUFXLFlBQU07QUFDZiw2QkFBS0MsS0FBTDtBQUNELHFCQUZELEVBRUcsSUFGSDtBQUdELG1CQVpELE1BWU87QUFDTCx5QkFBS04sT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDZCQUFPLE1BRDBCO0FBRWpDQyw0QkFBTSxPQUYyQjtBQUdqQ0MsNEJBQU07QUFIMkIscUJBQW5DO0FBS0Q7QUF4Q0c7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBMENKLHVCQUFLSCxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsMkJBQU8sWUFBRU0sT0FEd0I7QUFFakNMLDBCQUFNLE9BRjJCO0FBR2pDQywwQkFBTTtBQUgyQixtQkFBbkM7O0FBMUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFMUSxLOzs7Ozs7Ozs7Ozs7Ozs7QUF5RE5LLHdCQUFRQyxHQUFSLENBQVksS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCOUIsUUFBcEM7QUFDWUEsd0IsR0FBYSxLQUFLNkIsT0FBTCxDQUFhQyxVQUFiLENBQXdCOUIsUSxDQUEzQ0QsSTs7dUJBQ3lCLGVBQUtnQyxVQUFMLENBQWdCO0FBQzdDQyx1QkFBSztBQUR3QyxpQkFBaEIsQzs7OztBQUFuQkMsd0IsU0FBTmxDLEk7O0FBR04scUJBQUtDLFFBQUwsR0FBZ0I7QUFDZGlCLHNCQUFJakIsU0FBUyxJQUFULENBRFU7QUFFZEMsNEJBQVVnQyxTQUFTLFVBQVQ7QUFGSSxpQkFBaEI7QUFJQSxxQkFBS3BCLE1BQUw7Ozs7Ozs7O0FBRUFjLHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0VpQyxlQUFLTSxJOztrQkFBdkJwQyxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy91c2Vycy9hdmF0YXIvaW5kZXgnXHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RvYXN0L2luZGV4J1xyXG5cclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbGliL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCB7IFZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3V0aWxzL2luZGV4J1xyXG5pbXBvcnQgVXNlckFwaSBmcm9tICcuLi8uLi8uLi9saWIvYXBpcy91c2VyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFuZ2VQd2QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIG5ld1Bhc3N3b3JkOiAnJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXNbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZV0gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgc3VibWl0OiBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IHsgdXNlckluZm8sIHBhc3N3b3JkLCBuZXdQYXNzd29yZCB9ID0gdGhpcy5kYXRhXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFZhbGlkYXRlLmNoZWNrKHsgaWQ6IHVzZXJJbmZvWydpZCddLCBwYXNzd29yZCwgbmV3UGFzc3dvcmQgfSwgW1xyXG4gICAgICAgICAgWydwYXNzd29yZCcsICdyZXF1aXJlJywgJ+WOn+WvhueggeS4jeiDveS4uuepuicsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWyduZXdQYXNzd29yZCcsICdyZXF1aXJlJywgJ+aWsOWvhueggeS4jeiDveS4uuepuicsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdXHJcbiAgICAgICAgXSlcclxuICAgICAgICBpZiAodXNlckluZm8gJiYgKHVzZXJJbmZvWydwYXNzd29yZCddICE9PSBwYXJhbXNbJ3Bhc3N3b3JkJ10pKSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfljp/lr4bnoIHkuI3mraPnoa4nLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6ICfkv67mlLnlr4bnoIHkuK0uLi4nLFxyXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFVzZXJBcGkuY2hhbmdlUHdkKHBhcmFtcylcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5L+u5pS55oiQ5YqfJyxcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgVXNlci5zZXR1c2VySW5mbyh7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBuZXdQYXNzd29yZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRiYWNrKClcclxuICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+S/ruaUueWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvKVxyXG4gICAgICBsZXQgeyBkYXRhOiB1c2VySW5mbyB9ID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm9cclxuICAgICAgbGV0IHsgZGF0YTogcmVtZW1iZXIgfSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OiAncmVtZW1iZXInXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMudXNlckluZm8gPSB7XHJcbiAgICAgICAgaWQ6IHVzZXJJbmZvWydpZCddLFxyXG4gICAgICAgIHBhc3N3b3JkOiByZW1lbWJlclsncGFzc3dvcmQnXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19