'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../../components/toast/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../components/alert/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./../../../lib/utils/index.js');

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
      otherReward: ['请你吃饭', '你开价'],
      form: {
        rewardType: 'money'
      }
    }, _this.components = {
      toast: _index2.default,
      alert: _index4.default
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
      addReward: function addReward() {
        var _this2 = this;

        this.$invoke('alert', 'showAlert', {
          title: '添加酬劳',
          okText: "编辑完成",
          placeholder: "请输入酬劳方式(最多6个字)",
          onOK: function onOK(value) {
            _this2.otherReward.push(value);
            _this2.$apply();
          }
        });
      },
      release: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var params, _ref3, collegeId, _ref4, data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  params = this.form;
                  _context.prev = 1;

                  params = _index5.Validate.check(params, [['title', 'require', '请填写标题', _index5.Validate.MUST_VALIDATE], ['address', 'require', '请填写地址', _index5.Validate.MUST_VALIDATE], ['gender_constraint', 'require', '请设置性别约束', _index5.Validate.MUST_VALIDATE], ['dueDate', 'require', '请选择截至日期', _index5.Validate.MUST_VALIDATE], ['dueTime', 'require', '请选择截至时间', _index5.Validate.MUST_VALIDATE], ['reward', 'require', '请填写酬劳', _index5.Validate.MUST_VALIDATE], ['phoneNumber', 'tel', '联系电话格式不正确', _index5.Validate.MUST_VALIDATE], ['weixin', 'require', '微信号不能为空', _index5.Validate.MUST_VALIDATE]]);
                  _ref3 = _wepy2.default.getStorageSync('college') || {}, collegeId = _ref3.college_id;

                  params['deadline'] = params['dueDate'] + ' ' + params['dueTime'];
                  params['college'] = collegeId;
                  delete params['dueDate'];
                  delete params['dueTime'];
                  this.$invoke('toast', 'showToast', {
                    title: '创建中',
                    icon: 'loading'
                  });
                  _context.next = 11;
                  return _wantHelpOrder2.default.add(params);

                case 11:
                  _ref4 = _context.sent;
                  data = _ref4.data;

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlbGVhc2VXYW50SGVscCIsImRhdGEiLCJzdGFydERhdGUiLCJlbmREYXRlIiwib3RoZXJSZXdhcmQiLCJmb3JtIiwicmV3YXJkVHlwZSIsImNvbXBvbmVudHMiLCJ0b2FzdCIsImFsZXJ0IiwibWV0aG9kcyIsImZvcm1WYWx1ZUNoYW5nZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsInN3aXRjaFR5cGUiLCJ0eXBlIiwicmV3YXJkIiwic2VsZWN0R2VuZGVyIiwic3dpdGNoUmV3YXJkIiwiYWRkUmV3YXJkIiwiJGludm9rZSIsInRpdGxlIiwib2tUZXh0IiwicGxhY2Vob2xkZXIiLCJvbk9LIiwicHVzaCIsInJlbGVhc2UiLCJwYXJhbXMiLCJjaGVjayIsIk1VU1RfVkFMSURBVEUiLCJnZXRTdG9yYWdlU3luYyIsImNvbGxlZ2VJZCIsImNvbGxlZ2VfaWQiLCJpY29uIiwiYWRkIiwic2V0VGltZW91dCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJtZXNzYWdlIiwiZGF0ZSIsIkRhdGUiLCJmb3JtYXQiLCJ0aW1lIiwic2V0WWVhciIsImdldEZ1bGxZZWFyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLEksR0FBTztBQUNMQyxpQkFBVyxJQUROO0FBRUxDLGVBQVMsSUFGSjtBQUdMQyxtQkFBYSxDQUNYLE1BRFcsRUFDSCxLQURHLENBSFI7QUFNTEMsWUFBTTtBQUNKQyxvQkFBWTtBQURSO0FBTkQsSyxRQVVQQyxVLEdBQWE7QUFDWEMsNEJBRFc7QUFFWEM7QUFGVyxLLFFBSWJDLE8sR0FBVTtBQUNSQyx1QkFBaUIseUJBQVNDLENBQVQsRUFBWTtBQUMzQixhQUFLUCxJQUFMLENBQVVPLEVBQUVDLGFBQUYs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O0FBRjJCLHFCQUFuQztBQUlBRSwrQkFBVyxZQUFNO0FBQ2YscUNBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsNkJBQUs7QUFEUyx1QkFBaEI7QUFHRCxxQkFKRCxFQUlHLElBSkg7QUFLRCxtQkFWRCxNQVVPO0FBQ0wseUJBQUtqQixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsNkJBQU8sTUFEMEI7QUFFakNZLDRCQUFNO0FBRjJCLHFCQUFuQztBQUlEO0FBdENJO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXdDTCx1QkFBS2IsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDJCQUFPLFlBQUVpQixPQUR3QjtBQUVqQ0wsMEJBQU07QUFGMkIsbUJBQW5DOztBQXhDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFUOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBN0JRLEs7Ozs7OzZCQTRFRDtBQUNQLFVBQUlNLE9BQU8sSUFBSUMsSUFBSixFQUFYO0FBQ0E7OztBQUdBLFdBQUszQyxTQUFMLEdBQWlCO0FBQ2YwQyxjQUFNQSxLQUFLRSxNQUFMLENBQVksWUFBWixDQURTO0FBRWZDLGNBQU1ILEtBQUtFLE1BQUwsQ0FBWSxPQUFaO0FBRVI7OztBQUppQixPQUFqQixDQU9BRixLQUFLSSxPQUFMLENBQWFKLEtBQUtLLFdBQUwsS0FBcUIsQ0FBbEM7QUFDQSxXQUFLOUMsT0FBTCxHQUFlO0FBQ2J5QyxjQUFNQSxLQUFLRSxNQUFMLENBQVksWUFBWjtBQURPLE9BQWY7QUFHQSxXQUFLNUIsTUFBTDtBQUNEOzs7O0VBNUcwQyxlQUFLZ0MsSTs7a0JBQTdCbEQsZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdC9pbmRleCdcclxuaW1wb3J0IEFsZXJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWxlcnQvaW5kZXgnXHJcbmltcG9ydCB7IFZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3V0aWxzL2luZGV4J1xyXG5pbXBvcnQgV2FuSGVscE9yZGVyQXBpIGZyb20gJy4uLy4uLy4uL2xpYi9hcGlzL3dhbnRIZWxwT3JkZXInXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VXYW50SGVscCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YSA9IHtcclxuICAgIHN0YXJ0RGF0ZTogbnVsbCxcclxuICAgIGVuZERhdGU6IG51bGwsXHJcbiAgICBvdGhlclJld2FyZDogW1xyXG4gICAgICAn6K+35L2g5ZCD6aWtJywgJ+S9oOW8gOS7tydcclxuICAgIF0sXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIHJld2FyZFR5cGU6ICdtb25leSdcclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIHRvYXN0OiBUb2FzdCxcclxuICAgIGFsZXJ0OiBBbGVydFxyXG4gIH0gXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGZvcm1WYWx1ZUNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmZvcm1bZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZV0gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgc3dpdGNoVHlwZTogZnVuY3Rpb24odHlwZSkge1xyXG4gICAgICBkZWxldGUgdGhpcy5mb3JtLnJld2FyZFxyXG4gICAgICB0aGlzLmZvcm0ucmV3YXJkVHlwZSA9IHR5cGVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHNlbGVjdEdlbmRlcjogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgdGhpcy5mb3JtWydnZW5kZXJfY29uc3RyYWludCddID0gdmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHN3aXRjaFJld2FyZDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgdGhpcy5mb3JtWydyZXdhcmQnXSA9IHZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBhZGRSZXdhcmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLiRpbnZva2UoJ2FsZXJ0JywgJ3Nob3dBbGVydCcsIHtcclxuICAgICAgICB0aXRsZTogJ+a3u+WKoOmFrOWKsycsXHJcbiAgICAgICAgb2tUZXh0OiBcIue8lui+keWujOaIkFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpemFrOWKs+aWueW8jyjmnIDlpJo25Liq5a2XKVwiLFxyXG4gICAgICAgIG9uT0s6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vdGhlclJld2FyZC5wdXNoKHZhbHVlKVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICByZWxlYXNlOiBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZm9ybVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHBhcmFtcyA9IFZhbGlkYXRlLmNoZWNrKHBhcmFtcywgW1xyXG4gICAgICAgICAgWyd0aXRsZScsICdyZXF1aXJlJywgJ+ivt+Whq+WGmeagh+mimCcsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWydhZGRyZXNzJywgJ3JlcXVpcmUnLCAn6K+35aGr5YaZ5Zyw5Z2AJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ2dlbmRlcl9jb25zdHJhaW50JywgJ3JlcXVpcmUnLCAn6K+36K6+572u5oCn5Yir57qm5p2fJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ2R1ZURhdGUnLCAncmVxdWlyZScsICfor7fpgInmi6nmiKroh7Pml6XmnJ8nLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsnZHVlVGltZScsICdyZXF1aXJlJywgJ+ivt+mAieaLqeaIquiHs+aXtumXtCcsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWydyZXdhcmQnLCAncmVxdWlyZScsICfor7floavlhpnphazlirMnLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsncGhvbmVOdW1iZXInLCAndGVsJywgJ+iBlOezu+eUteivneagvOW8j+S4jeato+ehricsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWyd3ZWl4aW4nLCAncmVxdWlyZScsICflvq7kv6Hlj7fkuI3og73kuLrnqbonLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgbGV0IHsgY29sbGVnZV9pZDogY29sbGVnZUlkIH0gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdjb2xsZWdlJykgfHwge31cclxuICAgICAgICBwYXJhbXNbJ2RlYWRsaW5lJ10gPSBwYXJhbXNbJ2R1ZURhdGUnXSArICcgJyArIHBhcmFtc1snZHVlVGltZSddXHJcbiAgICAgICAgcGFyYW1zWydjb2xsZWdlJ10gPSBjb2xsZWdlSWRcclxuICAgICAgICBkZWxldGUgcGFyYW1zWydkdWVEYXRlJ11cclxuICAgICAgICBkZWxldGUgcGFyYW1zWydkdWVUaW1lJ11cclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yib5bu65LitJyxcclxuICAgICAgICAgIGljb246ICdsb2FkaW5nJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmFkZChwYXJhbXMpXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WIm+W7uuaIkOWKnycsXHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9vcmRlci9yZXN1bHQvaW5kZXg/dHlwZT1hZGQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LCAzMDAwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfliJvlu7rlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdlcnJvcidcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uU2hvdygpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vml7bpl7RcclxuICAgICAqL1xyXG4gICAgdGhpcy5zdGFydERhdGUgPSB7XHJcbiAgICAgIGRhdGU6IGRhdGUuZm9ybWF0KCd5eXl5LU1NLWRkJyksXHJcbiAgICAgIHRpbWU6IGRhdGUuZm9ybWF0KCdoaDptbScpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe7k+adn+aXtumXtFxyXG4gICAgICovXHJcbiAgICBkYXRlLnNldFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgMSlcclxuICAgIHRoaXMuZW5kRGF0ZSA9IHtcclxuICAgICAgZGF0ZTogZGF0ZS5mb3JtYXQoJ3l5eXktTU0tZGQnKVxyXG4gICAgfVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxufVxyXG4iXX0=