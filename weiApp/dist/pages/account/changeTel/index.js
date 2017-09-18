'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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


var changeTel = function (_wepy$page) {
  _inherits(changeTel, _wepy$page);

  function changeTel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, changeTel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = changeTel.__proto__ || Object.getPrototypeOf(changeTel)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      step: 1,
      form: {
        newTel: '',
        newCode: '',
        tel: '',
        code: ''
      },
      unbindTel: null,
      bindTel: null
    }, _this.components = {
      toast: _index2.default
    }, _this.methods = {
      textChange: function textChange(e) {
        this.form[e.currentTarget.dataset.name] = e.detail.value;
        this.$apply();
      },
      sendCode: function sendCode(e) {
        var _this2 = this;

        /**
         * 获取验证码
         */
        var params = {};
        var type = e.currentTarget.dataset.type;
        /**
         * 获取不同的手机号
         */
        if (type === 'unbindTel') {
          params['tel'] = this.form.tel;
        } else {
          params['tel'] = this.form.newTel;
        }
        try {
          params = _tools.Validate.check(_extends({ type: type }, params), [['type', 'require', '短信类型错误', _tools.Validate.MUST_VALIDATE], ['tel', 'tel', '手机号格式错误', _tools.Validate.MUST_VALIDATE]]);
          this.$invoke('toast', 'showToast', {
            title: '发送中...',
            icon: 'loading',
            mask: true
          });
          (0, _tools.request)(_api.apis.sms.sendCode, params).then(function (_ref2) {
            var data = _ref2.data;

            _this2[type] = data;
            var nextReq = data['nextReq'];
            var currentDate = new Date();
            var seconds = parseInt((nextReq - currentDate.getTime()) / 1000);
            _this2.$apply();
            setTimeout(function () {
              _this2.countDown(seconds, type);
            }, 500);
            _this2.$invoke('toast', 'showToast', {
              title: '发送成功',
              icon: 'success',
              mask: true
            });
          }, function (reson) {
            _this2.$invoke('toast', 'showToast', {
              title: reson,
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
      },
      onNext: function onNext() {
        var _this3 = this;

        var step = this.data.step;

        if (step === 1) {
          try {
            var _form = this.form,
                tel = _form.tel,
                code = _form.code,
                unbindTel = this.unbindTel;

            var params = _tools.Validate.check({ tel: tel, code: code }, [['code', 'require', '短信验证码错误', _tools.Validate.MUST_VALIDATE], ['tel', 'tel', '手机号格式错误', _tools.Validate.MUST_VALIDATE]]);
            console.log();
            if (!unbindTel || (0, _tools.md5)(params['code']) !== unbindTel['code']) {
              this.$invoke('toast', 'showToast', {
                title: '短信验证码错误',
                icon: 'error',
                mask: true
              });
              return;
            }
            this.step = 2;
            this.$apply();
          } catch (e) {
            this.$invoke('toast', 'showToast', {
              title: e.message,
              icon: 'error',
              mask: true
            });
          }
        } else if (step === 2) {
          try {
            var _form2 = this.form,
                _tel = _form2.tel,
                _code = _form2.code,
                newTel = _form2.newTel,
                newCode = _form2.newCode,
                bindTel = this.bindTel;

            var _params = _tools.Validate.check({ tel: _tel, code: _code, newTel: newTel, newCode: newCode }, [['newCode', 'require', '短信验证码错误', _tools.Validate.MUST_VALIDATE], ['newTel', 'tel', '新手机号格式错误', _tools.Validate.MUST_VALIDATE]]);
            if (!bindTel || (0, _tools.md5)(_params['newCode']) !== bindTel['code']) {
              this.$invoke('toast', 'showToast', {
                title: '短信验证码错误',
                icon: 'error',
                mask: true
              });
              return;
            }
            this.$invoke('toast', 'showToast', {
              title: '修改中...',
              icon: 'loading',
              mask: true
            });
            /**
             * 修改手机号
             */
            (0, _tools.request)(_api.apis.account.changeTel, _params).then(function (data) {
              _this3.$invoke('toast', 'showToast', {
                title: '修改成功',
                icon: 'success',
                mask: true
              });
              (0, _user.setUserInfo)({
                account: newTel
              });
              setTimeout(function () {
                _wepy2.default.navigateBack({
                  delta: 1
                });
              }, 3000);
            }, function (reson) {
              _this3.$invoke('toast', 'showToast', {
                title: reson,
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(changeTel, [{
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref4, _ref4$data, userinfo;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.getStorage({
                  key: 'userinfo'
                });

              case 2:
                _ref4 = _context.sent;
                _ref4$data = _ref4.data;
                userinfo = _ref4$data === undefined ? {} : _ref4$data;

                if ('account' in userinfo) {
                  this.form['tel'] = userinfo['account'];
                  this.$apply();
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
    /**
     * 倒计时
     */

  }, {
    key: 'countDown',
    value: function countDown(seconds, type) {
      var _this4 = this;

      this[type]['nextReq'] = seconds;
      this.$apply();
      if (seconds <= 0) {
        return;
      }
      setTimeout(function () {
        _this4.countDown(seconds - 1, type);
      }, 1000);
    }
  }]);

  return changeTel;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(changeTel , 'pages/account/changeTel/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNoYW5nZVRlbCIsImRhdGEiLCJzdGVwIiwiZm9ybSIsIm5ld1RlbCIsIm5ld0NvZGUiLCJ0ZWwiLCJjb2RlIiwidW5iaW5kVGVsIiwiYmluZFRlbCIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIm1ldGhvZHMiLCJ0ZXh0Q2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmFtZSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5Iiwic2VuZENvZGUiLCJwYXJhbXMiLCJ0eXBlIiwiY2hlY2siLCJNVVNUX1ZBTElEQVRFIiwiJGludm9rZSIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJzbXMiLCJ0aGVuIiwibmV4dFJlcSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInNlY29uZHMiLCJwYXJzZUludCIsImdldFRpbWUiLCJzZXRUaW1lb3V0IiwiY291bnREb3duIiwicmVzb24iLCJtZXNzYWdlIiwib25OZXh0IiwiY29uc29sZSIsImxvZyIsImFjY291bnQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFN0b3JhZ2UiLCJrZXkiLCJ1c2VyaW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7OztBQUpBOzs7SUFLcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FERDtBQUVMQyxZQUFNO0FBQ0pDLGdCQUFRLEVBREo7QUFFSkMsaUJBQVMsRUFGTDtBQUdKQyxhQUFLLEVBSEQ7QUFJSkMsY0FBTTtBQUpGLE9BRkQ7QUFRTEMsaUJBQVcsSUFSTjtBQVNMQyxlQUFTO0FBVEosSyxRQVdQQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBR2JDLE8sR0FBVTtBQUNSQyxrQkFBWSxvQkFBU0MsQ0FBVCxFQUFZO0FBQ3RCLGFBQUtYLElBQUwsQ0FBVVcsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQWxDLElBQTBDSCxFQUFFSSxNQUFGLENBQVNDLEtBQW5EO0FBQ0EsYUFBS0MsTUFBTDtBQUNELE9BSk87QUFLUkMsZ0JBQVUsa0JBQVNQLENBQVQsRUFBWTtBQUFBOztBQUNwQjs7O0FBR0EsWUFBSVEsU0FBUyxFQUFiO0FBQ0EsWUFBSUMsT0FBT1QsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JPLElBQW5DO0FBQ0E7OztBQUdBLFlBQUlBLFNBQVMsV0FBYixFQUEwQjtBQUN4QkQsaUJBQU8sS0FBUCxJQUFnQixLQUFLbkIsSUFBTCxDQUFVRyxHQUExQjtBQUNELFNBRkQsTUFFTztBQUNMZ0IsaUJBQU8sS0FBUCxJQUFnQixLQUFLbkIsSUFBTCxDQUFVQyxNQUExQjtBQUNEO0FBQ0QsWUFBSTtBQUNGa0IsbUJBQVMsZ0JBQVNFLEtBQVQsWUFBaUJELFVBQWpCLElBQTBCRCxNQUExQixHQUFvQyxDQUMzQyxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFFBQXBCLEVBQThCLGdCQUFTRyxhQUF2QyxDQUQyQyxFQUUzQyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsU0FBZixFQUEwQixnQkFBU0EsYUFBbkMsQ0FGMkMsQ0FBcEMsQ0FBVDtBQUlBLGVBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQyxtQkFBTyxRQUQwQjtBQUVqQ0Msa0JBQU0sU0FGMkI7QUFHakNDLGtCQUFNO0FBSDJCLFdBQW5DO0FBS0EsOEJBQVEsVUFBS0MsR0FBTCxDQUFTVCxRQUFqQixFQUEyQkMsTUFBM0IsRUFBbUNTLElBQW5DLENBQXdDLGlCQUFjO0FBQUEsZ0JBQVg5QixJQUFXLFNBQVhBLElBQVc7O0FBQ3BELG1CQUFLc0IsSUFBTCxJQUFhdEIsSUFBYjtBQUNBLGdCQUFJK0IsVUFBVS9CLEtBQUssU0FBTCxDQUFkO0FBQ0EsZ0JBQUlnQyxjQUFjLElBQUlDLElBQUosRUFBbEI7QUFDQSxnQkFBSUMsVUFBVUMsU0FBUyxDQUFDSixVQUFVQyxZQUFZSSxPQUFaLEVBQVgsSUFBb0MsSUFBN0MsQ0FBZDtBQUNBLG1CQUFLakIsTUFBTDtBQUNBa0IsdUJBQVcsWUFBTTtBQUNmLHFCQUFLQyxTQUFMLENBQWVKLE9BQWYsRUFBd0JaLElBQXhCO0FBQ0QsYUFGRCxFQUVHLEdBRkg7QUFHQSxtQkFBS0csT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLHFCQUFPLE1BRDBCO0FBRWpDQyxvQkFBTSxTQUYyQjtBQUdqQ0Msb0JBQU07QUFIMkIsYUFBbkM7QUFLRCxXQWRELEVBY0csaUJBQVM7QUFDVixtQkFBS0gsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLHFCQUFPYSxLQUQwQjtBQUVqQ1osb0JBQU0sT0FGMkI7QUFHakNDLG9CQUFNO0FBSDJCLGFBQW5DO0FBS0QsV0FwQkQ7QUFxQkQsU0EvQkQsQ0ErQkUsT0FBT2YsQ0FBUCxFQUFVO0FBQ1YsZUFBS1ksT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLG1CQUFPYixFQUFFMkIsT0FEd0I7QUFFakNiLGtCQUFNLE9BRjJCO0FBR2pDQyxrQkFBTTtBQUgyQixXQUFuQztBQUtEO0FBQ0YsT0F6RE87QUEwRFJhLGNBQVEsa0JBQVc7QUFBQTs7QUFBQSxZQUNYeEMsSUFEVyxHQUNGLEtBQUtELElBREgsQ0FDWEMsSUFEVzs7QUFFakIsWUFBSUEsU0FBUyxDQUFiLEVBQWdCO0FBQ2QsY0FBSTtBQUFBLHdCQUN1QyxJQUR2QyxDQUNJQyxJQURKO0FBQUEsZ0JBQ1lHLEdBRFosU0FDWUEsR0FEWjtBQUFBLGdCQUNpQkMsSUFEakIsU0FDaUJBLElBRGpCO0FBQUEsZ0JBQ3lCQyxTQUR6QixHQUN1QyxJQUR2QyxDQUN5QkEsU0FEekI7O0FBRUYsZ0JBQUljLFNBQVMsZ0JBQVNFLEtBQVQsQ0FBZSxFQUFFbEIsUUFBRixFQUFPQyxVQUFQLEVBQWYsRUFBOEIsQ0FDekMsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixnQkFBU2tCLGFBQXhDLENBRHlDLEVBRXpDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxTQUFmLEVBQTBCLGdCQUFTQSxhQUFuQyxDQUZ5QyxDQUE5QixDQUFiO0FBSUFrQixvQkFBUUMsR0FBUjtBQUNBLGdCQUFJLENBQUNwQyxTQUFELElBQWUsZ0JBQUljLE9BQU8sTUFBUCxDQUFKLE1BQXdCZCxVQUFVLE1BQVYsQ0FBM0MsRUFBK0Q7QUFDN0QsbUJBQUtrQixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsdUJBQU8sU0FEMEI7QUFFakNDLHNCQUFNLE9BRjJCO0FBR2pDQyxzQkFBTTtBQUgyQixlQUFuQztBQUtBO0FBQ0Q7QUFDRCxpQkFBSzNCLElBQUwsR0FBWSxDQUFaO0FBQ0EsaUJBQUtrQixNQUFMO0FBQ0QsV0FqQkQsQ0FpQkUsT0FBT04sQ0FBUCxFQUFVO0FBQ1YsaUJBQUtZLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQyxxQkFBT2IsRUFBRTJCLE9BRHdCO0FBRWpDYixvQkFBTSxPQUYyQjtBQUdqQ0Msb0JBQU07QUFIMkIsYUFBbkM7QUFLRDtBQUNGLFNBekJELE1BeUJPLElBQUkzQixTQUFTLENBQWIsRUFBZ0I7QUFDckIsY0FBSTtBQUFBLHlCQUNzRCxJQUR0RCxDQUNJQyxJQURKO0FBQUEsZ0JBQ1lHLElBRFosVUFDWUEsR0FEWjtBQUFBLGdCQUNpQkMsS0FEakIsVUFDaUJBLElBRGpCO0FBQUEsZ0JBQ3VCSCxNQUR2QixVQUN1QkEsTUFEdkI7QUFBQSxnQkFDK0JDLE9BRC9CLFVBQytCQSxPQUQvQjtBQUFBLGdCQUMwQ0ksT0FEMUMsR0FDc0QsSUFEdEQsQ0FDMENBLE9BRDFDOztBQUVGLGdCQUFJYSxVQUFTLGdCQUFTRSxLQUFULENBQWUsRUFBRWxCLFNBQUYsRUFBT0MsV0FBUCxFQUFhSCxjQUFiLEVBQXFCQyxnQkFBckIsRUFBZixFQUErQyxDQUMxRCxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLGdCQUFTb0IsYUFBM0MsQ0FEMEQsRUFFMUQsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixVQUFsQixFQUE4QixnQkFBU0EsYUFBdkMsQ0FGMEQsQ0FBL0MsQ0FBYjtBQUlBLGdCQUFJLENBQUNoQixPQUFELElBQWEsZ0JBQUlhLFFBQU8sU0FBUCxDQUFKLE1BQTJCYixRQUFRLE1BQVIsQ0FBNUMsRUFBOEQ7QUFDNUQsbUJBQUtpQixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsdUJBQU8sU0FEMEI7QUFFakNDLHNCQUFNLE9BRjJCO0FBR2pDQyxzQkFBTTtBQUgyQixlQUFuQztBQUtBO0FBQ0Q7QUFDRCxpQkFBS0gsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLHFCQUFPLFFBRDBCO0FBRWpDQyxvQkFBTSxTQUYyQjtBQUdqQ0Msb0JBQU07QUFIMkIsYUFBbkM7QUFLQTs7O0FBR0EsZ0NBQVEsVUFBS2dCLE9BQUwsQ0FBYTdDLFNBQXJCLEVBQWdDc0IsT0FBaEMsRUFBd0NTLElBQXhDLENBQTZDLGdCQUFRO0FBQ25ELHFCQUFLTCxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsdUJBQU8sTUFEMEI7QUFFakNDLHNCQUFNLFNBRjJCO0FBR2pDQyxzQkFBTTtBQUgyQixlQUFuQztBQUtBLHFDQUFZO0FBQ1ZnQix5QkFBU3pDO0FBREMsZUFBWjtBQUdBa0MseUJBQVcsWUFBTTtBQUNmLCtCQUFLUSxZQUFMLENBQWtCO0FBQ2hCQyx5QkFBTztBQURTLGlCQUFsQjtBQUdELGVBSkQsRUFJRSxJQUpGO0FBS0QsYUFkRCxFQWNHLGlCQUFTO0FBQ1YscUJBQUtyQixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsdUJBQU9hLEtBRDBCO0FBRWpDWixzQkFBTSxPQUYyQjtBQUdqQ0Msc0JBQU07QUFIMkIsZUFBbkM7QUFLRCxhQXBCRDtBQXFCRCxXQTNDRCxDQTJDRSxPQUFPZixDQUFQLEVBQVU7QUFDVixpQkFBS1ksT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLHFCQUFPYixFQUFFMkIsT0FEd0I7QUFFakNiLG9CQUFNLE9BRjJCO0FBR2pDQyxvQkFBTTtBQUgyQixhQUFuQztBQUtEO0FBQ0Y7QUFDRjtBQXpJTyxLOzs7Ozs7Ozs7Ozs7Ozt1QkE0STRCLGVBQUttQixVQUFMLENBQWdCO0FBQ2xEQyx1QkFBSztBQUQ2QyxpQkFBaEIsQzs7OzttQ0FBOUJoRCxJO0FBQU1pRCx3Qiw4QkFBVyxFOztBQUd2QixvQkFBSSxhQUFhQSxRQUFqQixFQUEyQjtBQUN6Qix1QkFBSy9DLElBQUwsQ0FBVSxLQUFWLElBQW1CK0MsU0FBUyxTQUFULENBQW5CO0FBQ0EsdUJBQUs5QixNQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSDs7Ozs7OzhCQUdVZSxPLEVBQVNaLEksRUFBTTtBQUFBOztBQUN2QixXQUFLQSxJQUFMLEVBQVcsU0FBWCxJQUF3QlksT0FBeEI7QUFDQSxXQUFLZixNQUFMO0FBQ0EsVUFBSWUsV0FBVyxDQUFmLEVBQWtCO0FBQ2hCO0FBQ0Q7QUFDREcsaUJBQVcsWUFBTTtBQUNmLGVBQUtDLFNBQUwsQ0FBZUosVUFBVSxDQUF6QixFQUE0QlosSUFBNUI7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBL0tvQyxlQUFLNEIsSTs7a0JBQXZCbkQsUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyBpbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvYXZhdGFyL2luZGV4J1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdC9pbmRleCdcclxuaW1wb3J0IHsgVmFsaWRhdGUsIHJlcXVlc3QsIG1kNSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Rvb2xzJ1xyXG5pbXBvcnQgeyBhcGlzIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2FwaSdcclxuaW1wb3J0IHsgc2V0VXNlckluZm8gfSBmcm9tICcuLi8uLi8uLi91dGlscy91c2VyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFuZ2VUZWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBzdGVwOiAxLFxyXG4gICAgZm9ybToge1xyXG4gICAgICBuZXdUZWw6ICcnLFxyXG4gICAgICBuZXdDb2RlOiAnJyxcclxuICAgICAgdGVsOiAnJyxcclxuICAgICAgY29kZTogJydcclxuICAgIH0sXHJcbiAgICB1bmJpbmRUZWw6IG51bGwsXHJcbiAgICBiaW5kVGVsOiBudWxsXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICB0b2FzdDogVG9hc3RcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5mb3JtW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHNlbmRDb2RlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiDojrflj5bpqozor4HnoIFcclxuICAgICAgICovXHJcbiAgICAgIGxldCBwYXJhbXMgPSB7fVxyXG4gICAgICBsZXQgdHlwZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGVcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOiOt+WPluS4jeWQjOeahOaJi+acuuWPt1xyXG4gICAgICAgKi9cclxuICAgICAgaWYgKHR5cGUgPT09ICd1bmJpbmRUZWwnKSB7XHJcbiAgICAgICAgcGFyYW1zWyd0ZWwnXSA9IHRoaXMuZm9ybS50ZWxcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJhbXNbJ3RlbCddID0gdGhpcy5mb3JtLm5ld1RlbFxyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGFyYW1zID0gVmFsaWRhdGUuY2hlY2soeyB0eXBlLCAuLi5wYXJhbXMgfSwgW1xyXG4gICAgICAgICAgWyd0eXBlJywgJ3JlcXVpcmUnLCAn55+t5L+h57G75Z6L6ZSZ6K+vJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ3RlbCcsICd0ZWwnLCAn5omL5py65Y+35qC85byP6ZSZ6K+vJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV1cclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6ICflj5HpgIHkuK0uLi4nLFxyXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVxdWVzdChhcGlzLnNtcy5zZW5kQ29kZSwgcGFyYW1zKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgdGhpc1t0eXBlXSA9IGRhdGFcclxuICAgICAgICAgIGxldCBuZXh0UmVxID0gZGF0YVsnbmV4dFJlcSddXHJcbiAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICBsZXQgc2Vjb25kcyA9IHBhcnNlSW50KChuZXh0UmVxIC0gY3VycmVudERhdGUuZ2V0VGltZSgpKSAvIDEwMDApXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd24oc2Vjb25kcywgdHlwZSlcclxuICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKnycsXHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LCByZXNvbiA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6IHJlc29uLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgIHRpdGxlOiBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbk5leHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgeyBzdGVwIH0gPSB0aGlzLmRhdGFcclxuICAgICAgaWYgKHN0ZXAgPT09IDEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IHsgZm9ybTogeyB0ZWwsIGNvZGUgfSwgdW5iaW5kVGVsIH0gPSB0aGlzXHJcbiAgICAgICAgICBsZXQgcGFyYW1zID0gVmFsaWRhdGUuY2hlY2soeyB0ZWwsIGNvZGUgfSwgW1xyXG4gICAgICAgICAgICBbJ2NvZGUnLCAncmVxdWlyZScsICfnn63kv6Hpqozor4HnoIHplJnor68nLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgICAgWyd0ZWwnLCAndGVsJywgJ+aJi+acuuWPt+agvOW8j+mUmeivrycsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgaWYgKCF1bmJpbmRUZWwgfHwgKG1kNShwYXJhbXNbJ2NvZGUnXSkgIT09IHVuYmluZFRlbFsnY29kZSddKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+efreS/oemqjOivgeeggemUmeivrycsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zdGVwID0gMlxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzdGVwID09PSAyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGxldCB7IGZvcm06IHsgdGVsLCBjb2RlLCBuZXdUZWwsIG5ld0NvZGUgfSwgYmluZFRlbCB9ID0gdGhpc1xyXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IFZhbGlkYXRlLmNoZWNrKHsgdGVsLCBjb2RlLCBuZXdUZWwsIG5ld0NvZGUgfSwgW1xyXG4gICAgICAgICAgICBbJ25ld0NvZGUnLCAncmVxdWlyZScsICfnn63kv6Hpqozor4HnoIHplJnor68nLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgICAgWyduZXdUZWwnLCAndGVsJywgJ+aWsOaJi+acuuWPt+agvOW8j+mUmeivrycsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgaWYgKCFiaW5kVGVsIHx8IChtZDUocGFyYW1zWyduZXdDb2RlJ10pICE9PSBiaW5kVGVsWydjb2RlJ10pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn55+t5L+h6aqM6K+B56CB6ZSZ6K+vJyxcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfkv67mlLnkuK0uLi4nLFxyXG4gICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIOS/ruaUueaJi+acuuWPt1xyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICByZXF1ZXN0KGFwaXMuYWNjb3VudC5jaGFuZ2VUZWwsIHBhcmFtcykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfkv67mlLnmiJDlip8nLFxyXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICBhY2NvdW50OiBuZXdUZWxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LDMwMDApXHJcbiAgICAgICAgICB9LCByZXNvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiByZXNvbixcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIG9uU2hvdygpIHtcclxuICAgIGxldCB7IGRhdGE6IHVzZXJpbmZvID0ge30gfSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3VzZXJpbmZvJ1xyXG4gICAgfSlcclxuICAgIGlmICgnYWNjb3VudCcgaW4gdXNlcmluZm8pIHtcclxuICAgICAgdGhpcy5mb3JtWyd0ZWwnXSA9IHVzZXJpbmZvWydhY2NvdW50J11cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDlgJLorqHml7ZcclxuICAgKi9cclxuICBjb3VudERvd24oc2Vjb25kcywgdHlwZSkge1xyXG4gICAgdGhpc1t0eXBlXVsnbmV4dFJlcSddID0gc2Vjb25kc1xyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgaWYgKHNlY29uZHMgPD0gMCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvdW50RG93bihzZWNvbmRzIC0gMSwgdHlwZSlcclxuICAgIH0sIDEwMDApXHJcbiAgfVxyXG59XHJcbiJdfQ==