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

var _index3 = require('./../../../lib/utils/index.js');

var _user = require('./../../../lib/apis/user.js');

var _user2 = _interopRequireDefault(_user);

var _sms = require('./../../../lib/apis/sms.js');

var _sms2 = _interopRequireDefault(_sms);

var _user3 = require('./../../../lib/services/user.js');

var _user4 = _interopRequireDefault(_user3);

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
      sendCode: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var _this2 = this;

          var params, type, _ref3, data, nextReq, currentDate, seconds;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  /**
                   * 获取验证码
                   */
                  params = {};
                  type = e.currentTarget.dataset.type;
                  /**
                   * 获取不同的手机号
                   */

                  if (type === 'unbindTel') {
                    params['tel'] = this.form.tel;
                  } else {
                    params['tel'] = this.form.newTel;
                  }
                  _context.prev = 3;

                  params = _index3.Validate.check(_extends({ type: type }, params), [['type', 'require', '短信类型错误', _index3.Validate.MUST_VALIDATE], ['tel', 'tel', '手机号格式错误', _index3.Validate.MUST_VALIDATE]]);
                  this.$invoke('toast', 'showToast', {
                    title: '发送中...',
                    icon: 'loading',
                    mask: true
                  });
                  _context.next = 8;
                  return _sms2.default.sendCode(params);

                case 8:
                  _ref3 = _context.sent;
                  data = _ref3.data;

                  if (data) {
                    this[type] = data;
                    nextReq = data['nextReq'];
                    currentDate = new Date();
                    seconds = parseInt((nextReq - currentDate.getTime()) / 1000);

                    this.$apply();
                    setTimeout(function () {
                      _this2.countDown(seconds, type);
                    }, 500);
                    this.$invoke('toast', 'showToast', {
                      title: '发送成功',
                      icon: 'success',
                      mask: true
                    });
                  }
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](3);

                  this.$invoke('toast', 'showToast', {
                    title: _context.t0.message,
                    icon: 'error',
                    mask: true
                  });

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 13]]);
        }));

        function sendCode(_x) {
          return _ref2.apply(this, arguments);
        }

        return sendCode;
      }(),
      onNext: function onNext() {
        var step = this.data.step;

        if (step === 1) {
          try {
            var _form = this.form,
                tel = _form.tel,
                code = _form.code,
                unbindTel = this.unbindTel;

            var params = _index3.Validate.check({ tel: tel, code: code }, [['code', 'require', '短信验证码错误', _index3.Validate.MUST_VALIDATE], ['tel', 'tel', '手机号格式错误', _index3.Validate.MUST_VALIDATE]]);
            console.log();
            if (!unbindTel || (0, _index3.md5)(params['code']) !== unbindTel['code']) {
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

            var _params = _index3.Validate.check({ tel: _tel, code: _code, newTel: newTel, newCode: newCode }, [['newCode', 'require', '短信验证码错误', _index3.Validate.MUST_VALIDATE], ['newTel', 'tel', '新手机号格式错误', _index3.Validate.MUST_VALIDATE]]);
            if (!bindTel || (0, _index3.md5)(_params['newCode']) !== bindTel['code']) {
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

            var _UserApi$changeTel = _user2.default.changeTel(_params),
                data = _UserApi$changeTel.data;

            if (data) {
              this.$invoke('toast', 'showToast', {
                title: '修改成功',
                icon: 'success',
                mask: true
              });
              _user4.default.setUserInfo({
                account: newTel
              });
              setTimeout(function () {
                _wepy2.default.navigateBack({
                  delta: 1
                });
              }, 3000);
            }
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref5, _ref5$data, userinfo;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wepy2.default.getStorage({
                  key: 'userinfo'
                });

              case 2:
                _ref5 = _context2.sent;
                _ref5$data = _ref5.data;
                userinfo = _ref5$data === undefined ? {} : _ref5$data;

                if ('account' in userinfo) {
                  this.form['tel'] = userinfo['account'];
                  this.$apply();
                }

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
    /**
     * 倒计时
     */

  }, {
    key: 'countDown',
    value: function countDown(seconds, type) {
      var _this3 = this;

      this[type]['nextReq'] = seconds;
      this.$apply();
      if (seconds <= 0) {
        return;
      }
      setTimeout(function () {
        _this3.countDown(seconds - 1, type);
      }, 1000);
    }
  }]);

  return changeTel;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(changeTel , 'pages/account/changeTel/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNoYW5nZVRlbCIsImRhdGEiLCJzdGVwIiwiZm9ybSIsIm5ld1RlbCIsIm5ld0NvZGUiLCJ0ZWwiLCJjb2RlIiwidW5iaW5kVGVsIiwiYmluZFRlbCIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIm1ldGhvZHMiLCJ0ZXh0Q2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmFtZSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5Iiwic2VuZENvZGUiLCJwYXJhbXMiLCJ0eXBlIiwiY2hlY2siLCJNVVNUX1ZBTElEQVRFIiwiJGludm9rZSIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJuZXh0UmVxIiwiY3VycmVudERhdGUiLCJEYXRlIiwic2Vjb25kcyIsInBhcnNlSW50IiwiZ2V0VGltZSIsInNldFRpbWVvdXQiLCJjb3VudERvd24iLCJtZXNzYWdlIiwib25OZXh0IiwiY29uc29sZSIsImxvZyIsInNldFVzZXJJbmZvIiwiYWNjb3VudCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZ2V0U3RvcmFnZSIsImtleSIsInVzZXJpbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBTEE7OztJQU1xQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsWUFBTSxDQUREO0FBRUxDLFlBQU07QUFDSkMsZ0JBQVEsRUFESjtBQUVKQyxpQkFBUyxFQUZMO0FBR0pDLGFBQUssRUFIRDtBQUlKQyxjQUFNO0FBSkYsT0FGRDtBQVFMQyxpQkFBVyxJQVJOO0FBU0xDLGVBQVM7QUFUSixLLFFBV1BDLFUsR0FBYTtBQUNYQztBQURXLEssUUFHYkMsTyxHQUFVO0FBQ1JDLGtCQUFZLG9CQUFTQyxDQUFULEVBQVk7QUFDdEIsYUFBS1gsSUFBTCxDQUFVVyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixD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Qyx1QkFBSztBQUQ2QyxpQkFBaEIsQzs7OzttQ0FBOUI5QyxJO0FBQU0rQyx3Qiw4QkFBVyxFOztBQUd2QixvQkFBSSxhQUFhQSxRQUFqQixFQUEyQjtBQUN6Qix1QkFBSzdDLElBQUwsQ0FBVSxLQUFWLElBQW1CNkMsU0FBUyxTQUFULENBQW5CO0FBQ0EsdUJBQUs1QixNQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSDs7Ozs7OzhCQUdVYSxPLEVBQVNWLEksRUFBTTtBQUFBOztBQUN2QixXQUFLQSxJQUFMLEVBQVcsU0FBWCxJQUF3QlUsT0FBeEI7QUFDQSxXQUFLYixNQUFMO0FBQ0EsVUFBSWEsV0FBVyxDQUFmLEVBQWtCO0FBQ2hCO0FBQ0Q7QUFDREcsaUJBQVcsWUFBTTtBQUNmLGVBQUtDLFNBQUwsQ0FBZUosVUFBVSxDQUF6QixFQUE0QlYsSUFBNUI7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBcktvQyxlQUFLMEIsSTs7a0JBQXZCakQsUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyBpbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvYXZhdGFyL2luZGV4J1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdC9pbmRleCdcclxuaW1wb3J0IHsgVmFsaWRhdGUsIG1kNSB9IGZyb20gJy4uLy4uLy4uL2xpYi91dGlscy9pbmRleCdcclxuaW1wb3J0IFVzZXJBcGkgZnJvbSAnLi4vLi4vLi4vbGliL2FwaXMvdXNlcidcclxuaW1wb3J0IFNtc0FwaSBmcm9tICcuLi8uLi8uLi9saWIvYXBpcy9zbXMnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL2xpYi9zZXJ2aWNlcy91c2VyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFuZ2VUZWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBzdGVwOiAxLFxyXG4gICAgZm9ybToge1xyXG4gICAgICBuZXdUZWw6ICcnLFxyXG4gICAgICBuZXdDb2RlOiAnJyxcclxuICAgICAgdGVsOiAnJyxcclxuICAgICAgY29kZTogJydcclxuICAgIH0sXHJcbiAgICB1bmJpbmRUZWw6IG51bGwsXHJcbiAgICBiaW5kVGVsOiBudWxsXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICB0b2FzdDogVG9hc3RcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5mb3JtW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHNlbmRDb2RlOiBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiDojrflj5bpqozor4HnoIFcclxuICAgICAgICovXHJcbiAgICAgIGxldCBwYXJhbXMgPSB7fVxyXG4gICAgICBsZXQgdHlwZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGVcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOiOt+WPluS4jeWQjOeahOaJi+acuuWPt1xyXG4gICAgICAgKi9cclxuICAgICAgaWYgKHR5cGUgPT09ICd1bmJpbmRUZWwnKSB7XHJcbiAgICAgICAgcGFyYW1zWyd0ZWwnXSA9IHRoaXMuZm9ybS50ZWxcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJhbXNbJ3RlbCddID0gdGhpcy5mb3JtLm5ld1RlbFxyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGFyYW1zID0gVmFsaWRhdGUuY2hlY2soeyB0eXBlLCAuLi5wYXJhbXMgfSwgW1xyXG4gICAgICAgICAgWyd0eXBlJywgJ3JlcXVpcmUnLCAn55+t5L+h57G75Z6L6ZSZ6K+vJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ3RlbCcsICd0ZWwnLCAn5omL5py65Y+35qC85byP6ZSZ6K+vJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV1cclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6ICflj5HpgIHkuK0uLi4nLFxyXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgU21zQXBpLnNlbmRDb2RlKHBhcmFtcylcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgdGhpc1t0eXBlXSA9IGRhdGFcclxuICAgICAgICAgIGxldCBuZXh0UmVxID0gZGF0YVsnbmV4dFJlcSddXHJcbiAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICBsZXQgc2Vjb25kcyA9IHBhcnNlSW50KChuZXh0UmVxIC0gY3VycmVudERhdGUuZ2V0VGltZSgpKSAvIDEwMDApXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd24oc2Vjb25kcywgdHlwZSlcclxuICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKnycsXHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgIHRpdGxlOiBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbk5leHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgeyBzdGVwIH0gPSB0aGlzLmRhdGFcclxuICAgICAgaWYgKHN0ZXAgPT09IDEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IHsgZm9ybTogeyB0ZWwsIGNvZGUgfSwgdW5iaW5kVGVsIH0gPSB0aGlzXHJcbiAgICAgICAgICBsZXQgcGFyYW1zID0gVmFsaWRhdGUuY2hlY2soeyB0ZWwsIGNvZGUgfSwgW1xyXG4gICAgICAgICAgICBbJ2NvZGUnLCAncmVxdWlyZScsICfnn63kv6Hpqozor4HnoIHplJnor68nLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgICAgWyd0ZWwnLCAndGVsJywgJ+aJi+acuuWPt+agvOW8j+mUmeivrycsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgaWYgKCF1bmJpbmRUZWwgfHwgKG1kNShwYXJhbXNbJ2NvZGUnXSkgIT09IHVuYmluZFRlbFsnY29kZSddKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+efreS/oemqjOivgeeggemUmeivrycsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zdGVwID0gMlxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzdGVwID09PSAyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGxldCB7IGZvcm06IHsgdGVsLCBjb2RlLCBuZXdUZWwsIG5ld0NvZGUgfSwgYmluZFRlbCB9ID0gdGhpc1xyXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IFZhbGlkYXRlLmNoZWNrKHsgdGVsLCBjb2RlLCBuZXdUZWwsIG5ld0NvZGUgfSwgW1xyXG4gICAgICAgICAgICBbJ25ld0NvZGUnLCAncmVxdWlyZScsICfnn63kv6Hpqozor4HnoIHplJnor68nLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgICAgWyduZXdUZWwnLCAndGVsJywgJ+aWsOaJi+acuuWPt+agvOW8j+mUmeivrycsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgaWYgKCFiaW5kVGVsIHx8IChtZDUocGFyYW1zWyduZXdDb2RlJ10pICE9PSBiaW5kVGVsWydjb2RlJ10pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn55+t5L+h6aqM6K+B56CB6ZSZ6K+vJyxcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfkv67mlLnkuK0uLi4nLFxyXG4gICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIOS/ruaUueaJi+acuuWPt1xyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBsZXQgeyBkYXRhIH0gPSBVc2VyQXBpLmNoYW5nZVRlbChwYXJhbXMpXHJcbiAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+S/ruaUueaIkOWKnycsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgVXNlci5zZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgYWNjb3VudDogbmV3VGVsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgbGV0IHsgZGF0YTogdXNlcmluZm8gPSB7fSB9ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndXNlcmluZm8nXHJcbiAgICB9KVxyXG4gICAgaWYgKCdhY2NvdW50JyBpbiB1c2VyaW5mbykge1xyXG4gICAgICB0aGlzLmZvcm1bJ3RlbCddID0gdXNlcmluZm9bJ2FjY291bnQnXVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOWAkuiuoeaXtlxyXG4gICAqL1xyXG4gIGNvdW50RG93bihzZWNvbmRzLCB0eXBlKSB7XHJcbiAgICB0aGlzW3R5cGVdWyduZXh0UmVxJ10gPSBzZWNvbmRzXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgICBpZiAoc2Vjb25kcyA8PSAwKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY291bnREb3duKHNlY29uZHMgLSAxLCB0eXBlKVxyXG4gICAgfSwgMTAwMClcclxuICB9XHJcbn1cclxuIl19