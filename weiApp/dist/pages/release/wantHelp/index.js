'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../../components/toast/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../lib/utils/index.js');

var _wantHelpOrder = require('./../../../lib/apis/wantHelpOrder.js');

var _wantHelpOrder2 = _interopRequireDefault(_wantHelpOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReleaseWantHelp = function (_wepy$page) {
  _inherits(ReleaseWantHelp, _wepy$page);

  function ReleaseWantHelp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReleaseWantHelp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReleaseWantHelp.__proto__ || Object.getPrototypeOf(ReleaseWantHelp)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      startDate: null,
      endDate: null,
      otherReward: ['请你吃饭', '你开价', '自定义1', '自定义2', '自定义3', '自定义4'],
      form: {
        rewardType: 'money'
      }
    }, _this.components = {
      toast: _index2.default
    }, _this.methods = {
      formValueChange: function formValueChange(e) {
        this.form[e.currentTarget.dataset.name] = e.detail.value;
        this.$apply();
      },
      switchType: function switchType(type) {
        delete this.form.reward;
        this.form.rewardType = type;
        this.$apply();
      },
      selectGender: function selectGender(value) {
        this.form['gender_constraint'] = value;
        this.$apply();
      },
      switchReward: function switchReward(value) {
        this.form['reward'] = value;
        this.$apply();
      },
      release: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var params, college, _ref3, data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  params = this.form;
                  _context.prev = 1;

                  params = _index3.Validate.check(params, [['title', 'require', '请填写标题', _index3.Validate.MUST_VALIDATE], ['address', 'require', '请填写地址', _index3.Validate.MUST_VALIDATE], ['gender_constraint', 'require', '请设置性别约束', _index3.Validate.MUST_VALIDATE], ['dueDate', 'require', '请选择截至日期', _index3.Validate.MUST_VALIDATE], ['dueTime', 'require', '请选择截至时间', _index3.Validate.MUST_VALIDATE], ['reward', 'require', '请填写酬劳', _index3.Validate.MUST_VALIDATE], ['phoneNumber', 'tel', '联系电话格式不正确', _index3.Validate.MUST_VALIDATE], ['weixin', 'require', '微信号不能为空', _index3.Validate.MUST_VALIDATE]]);
                  college = this.$parent.globalData.college;

                  params['deadline'] = params['dueDate'] + ' ' + params['dueTime'];
                  params['college'] = college['college_id'];
                  delete params['dueDate'];
                  delete params['dueTime'];
                  this.$invoke('toast', 'showToast', {
                    title: '创建中',
                    icon: 'loading'
                  });
                  _context.next = 11;
                  return _wantHelpOrder2.default.add(params);

                case 11:
                  _ref3 = _context.sent;
                  data = _ref3.data;

                  if (data) {
                    this.$invoke('toast', 'showToast', {
                      title: '创建成功',
                      icon: 'success'
                    });
                    setTimeout(function () {
                      _wepy2.default.navigateTo({
                        url: '/pages/order/result/index?type=add'
                      });
                    }, 3000);
                  } else {
                    this.$invoke('toast', 'showToast', {
                      title: '创建失败',
                      icon: 'error'
                    });
                  }
                  _context.next = 19;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context['catch'](1);

                  this.$invoke('toast', 'showToast', {
                    title: _context.t0.message,
                    icon: 'error'
                  });

                case 19:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 16]]);
        }));

        function release() {
          return _ref2.apply(this, arguments);
        }

        return release;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReleaseWantHelp, [{
    key: 'onShow',
    value: function onShow() {
      var date = new Date();
      /**
       * 开始时间
       */
      this.startDate = {
        date: date.format('yyyy-MM-dd'),
        time: date.format('hh:mm')
        /**
         * 结束时间
         */
      };date.setYear(date.getFullYear() + 1);
      this.endDate = {
        date: date.format('yyyy-MM-dd')
      };
      this.$apply();
    }
  }]);

  return ReleaseWantHelp;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(ReleaseWantHelp , 'pages/release/wantHelp/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlbGVhc2VXYW50SGVscCIsImRhdGEiLCJzdGFydERhdGUiLCJlbmREYXRlIiwib3RoZXJSZXdhcmQiLCJmb3JtIiwicmV3YXJkVHlwZSIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIm1ldGhvZHMiLCJmb3JtVmFsdWVDaGFuZ2UiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYW1lIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJzd2l0Y2hUeXBlIiwidHlwZSIsInJld2FyZCIsInNlbGVjdEdlbmRlciIsInN3aXRjaFJld2FyZCIsInJlbGVhc2UiLCJwYXJhbXMiLCJjaGVjayIsIk1VU1RfVkFMSURBVEUiLCJjb2xsZWdlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCIkaW52b2tlIiwidGl0bGUiLCJpY29uIiwiYWRkIiwic2V0VGltZW91dCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJtZXNzYWdlIiwiZGF0ZSIsIkRhdGUiLCJmb3JtYXQiLCJ0aW1lIiwic2V0WWVhciIsImdldEZ1bGxZZWFyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxJLEdBQU87QUFDTEMsaUJBQVcsSUFETjtBQUVMQyxlQUFTLElBRko7QUFHTEMsbUJBQWEsQ0FDWCxNQURXLEVBQ0gsS0FERyxFQUNJLE1BREosRUFDWSxNQURaLEVBQ29CLE1BRHBCLEVBQzRCLE1BRDVCLENBSFI7QUFNTEMsWUFBTTtBQUNKQyxvQkFBWTtBQURSO0FBTkQsSyxRQVVQQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBR2JDLE8sR0FBVTtBQUNSQyx1QkFBaUIseUJBQVNDLENBQVQsRUFBWTtBQUMzQixhQUFLTixJQUFMLENBQVVNLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUFsQyxJQUEwQ0gsRUFBRUksTUFB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WUFBRU0sT0FEd0I7QUFFakNMLDBCQUFNO0FBRjJCLG1CQUFuQzs7QUF4Q0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWxCUSxLOzs7Ozs2QkFpRUQ7QUFDUCxVQUFJTSxPQUFPLElBQUlDLElBQUosRUFBWDtBQUNBOzs7QUFHQSxXQUFLckMsU0FBTCxHQUFpQjtBQUNmb0MsY0FBTUEsS0FBS0UsTUFBTCxDQUFZLFlBQVosQ0FEUztBQUVmQyxjQUFNSCxLQUFLRSxNQUFMLENBQVksT0FBWjtBQUVSOzs7QUFKaUIsT0FBakIsQ0FPQUYsS0FBS0ksT0FBTCxDQUFhSixLQUFLSyxXQUFMLEtBQXFCLENBQWxDO0FBQ0EsV0FBS3hDLE9BQUwsR0FBZTtBQUNibUMsY0FBTUEsS0FBS0UsTUFBTCxDQUFZLFlBQVo7QUFETyxPQUFmO0FBR0EsV0FBS3ZCLE1BQUw7QUFDRDs7OztFQWhHMEMsZUFBSzJCLEk7O2tCQUE3QjVDLGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdG9hc3QvaW5kZXgnXHJcbmltcG9ydCB7IFZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3V0aWxzL2luZGV4J1xyXG5pbXBvcnQgV2FuSGVscE9yZGVyQXBpIGZyb20gJy4uLy4uLy4uL2xpYi9hcGlzL3dhbnRIZWxwT3JkZXInXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VXYW50SGVscCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YSA9IHtcclxuICAgIHN0YXJ0RGF0ZTogbnVsbCxcclxuICAgIGVuZERhdGU6IG51bGwsXHJcbiAgICBvdGhlclJld2FyZDogW1xyXG4gICAgICAn6K+35L2g5ZCD6aWtJywgJ+S9oOW8gOS7tycsICfoh6rlrprkuYkxJywgJ+iHquWumuS5iTInLCAn6Ieq5a6a5LmJMycsICfoh6rlrprkuYk0J1xyXG4gICAgXSxcclxuICAgIGZvcm06IHtcclxuICAgICAgcmV3YXJkVHlwZTogJ21vbmV5J1xyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtVmFsdWVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5mb3JtW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHN3aXRjaFR5cGU6IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuZm9ybS5yZXdhcmRcclxuICAgICAgdGhpcy5mb3JtLnJld2FyZFR5cGUgPSB0eXBlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBzZWxlY3RHZW5kZXI6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybVsnZ2VuZGVyX2NvbnN0cmFpbnQnXSA9IHZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hSZXdhcmQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybVsncmV3YXJkJ10gPSB2YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgcmVsZWFzZTogYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmZvcm1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBwYXJhbXMgPSBWYWxpZGF0ZS5jaGVjayhwYXJhbXMsIFtcclxuICAgICAgICAgIFsndGl0bGUnLCAncmVxdWlyZScsICfor7floavlhpnmoIfpopgnLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsnYWRkcmVzcycsICdyZXF1aXJlJywgJ+ivt+Whq+WGmeWcsOWdgCcsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWydnZW5kZXJfY29uc3RyYWludCcsICdyZXF1aXJlJywgJ+ivt+iuvue9ruaAp+WIq+e6puadnycsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWydkdWVEYXRlJywgJ3JlcXVpcmUnLCAn6K+36YCJ5oup5oiq6Iez5pel5pyfJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ2R1ZVRpbWUnLCAncmVxdWlyZScsICfor7fpgInmi6nmiKroh7Pml7bpl7QnLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsncmV3YXJkJywgJ3JlcXVpcmUnLCAn6K+35aGr5YaZ6YWs5YqzJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ3Bob25lTnVtYmVyJywgJ3RlbCcsICfogZTns7vnlLXor53moLzlvI/kuI3mraPnoa4nLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsnd2VpeGluJywgJ3JlcXVpcmUnLCAn5b6u5L+h5Y+35LiN6IO95Li656m6JywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV1cclxuICAgICAgICBdKVxyXG4gICAgICAgIGxldCBjb2xsZWdlID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuY29sbGVnZVxyXG4gICAgICAgIHBhcmFtc1snZGVhZGxpbmUnXSA9IHBhcmFtc1snZHVlRGF0ZSddICsgJyAnICsgcGFyYW1zWydkdWVUaW1lJ11cclxuICAgICAgICBwYXJhbXNbJ2NvbGxlZ2UnXSA9IGNvbGxlZ2VbJ2NvbGxlZ2VfaWQnXVxyXG4gICAgICAgIGRlbGV0ZSBwYXJhbXNbJ2R1ZURhdGUnXVxyXG4gICAgICAgIGRlbGV0ZSBwYXJhbXNbJ2R1ZVRpbWUnXVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6ICfliJvlu7rkuK0nLFxyXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBXYW5IZWxwT3JkZXJBcGkuYWRkKHBhcmFtcylcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5Yib5bu65oiQ5YqfJyxcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleD90eXBlPWFkZCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WIm+W7uuWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KCkge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+aXtumXtFxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHtcclxuICAgICAgZGF0ZTogZGF0ZS5mb3JtYXQoJ3l5eXktTU0tZGQnKSxcclxuICAgICAgdGltZTogZGF0ZS5mb3JtYXQoJ2hoOm1tJylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2f5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIGRhdGUuc2V0WWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKVxyXG4gICAgdGhpcy5lbmREYXRlID0ge1xyXG4gICAgICBkYXRlOiBkYXRlLmZvcm1hdCgneXl5eS1NTS1kZCcpXHJcbiAgICB9XHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG59XHJcbiJdfQ==