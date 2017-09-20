'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tools = require('./../../../utils/tools.js');

var _index = require('./../../../components/toast/index.js');

var _index2 = _interopRequireDefault(_index);

var _api = require('./../../../config/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      release: function release() {
        var _this2 = this;

        var params = this.form;
        try {
          params = _tools.Validate.check(params, [['title', 'require', '请填写标题', _tools.Validate.MUST_VALIDATE], ['address', 'require', '请填写地址', _tools.Validate.MUST_VALIDATE], ['gender_constraint', 'require', '请设置性别约束', _tools.Validate.MUST_VALIDATE], ['dueDate', 'require', '请选择截至日期', _tools.Validate.MUST_VALIDATE], ['dueTime', 'require', '请选择截至时间', _tools.Validate.MUST_VALIDATE], ['reward', 'require', '请填写酬劳', _tools.Validate.MUST_VALIDATE], ['phoneNumber', 'tel', '联系电话格式不正确', _tools.Validate.MUST_VALIDATE], ['weixin', 'require', '微信号不能为空', _tools.Validate.MUST_VALIDATE]]);
          var college = this.$parent.globalData.college;
          params['deadline'] = params['dueDate'] + ' ' + params['dueTime'];
          params['college'] = college['college_id'];
          delete params['dueDate'];
          delete params['dueTime'];
          this.$invoke('toast', 'showToast', {
            title: '创建中',
            icon: 'loading'
          });
          (0, _tools.request)(_api.apis.wantHelpOrder.add, params).then(function (data) {
            _this2.$invoke('toast', 'showToast', {
              title: '创建成功',
              icon: 'success'
            });
            setTimeout(function () {
              _wepy2.default.navigateBack({
                delta: 1
              });
            }, 3000);
          }, function (reson) {
            _this2.$invoke('toast', 'showToast', {
              title: reson,
              icon: 'error'
            });
          });
        } catch (e) {
          this.$invoke('toast', 'showToast', {
            title: e.message,
            icon: 'error'
          });
        }
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlbGVhc2VXYW50SGVscCIsImRhdGEiLCJzdGFydERhdGUiLCJlbmREYXRlIiwib3RoZXJSZXdhcmQiLCJmb3JtIiwicmV3YXJkVHlwZSIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIm1ldGhvZHMiLCJmb3JtVmFsdWVDaGFuZ2UiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYW1lIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJzd2l0Y2hUeXBlIiwidHlwZSIsInJld2FyZCIsInNlbGVjdEdlbmRlciIsInN3aXRjaFJld2FyZCIsInJlbGVhc2UiLCJwYXJhbXMiLCJjaGVjayIsIk1VU1RfVkFMSURBVEUiLCJjb2xsZWdlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCIkaW52b2tlIiwidGl0bGUiLCJpY29uIiwid2FudEhlbHBPcmRlciIsImFkZCIsInRoZW4iLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJyZXNvbiIsIm1lc3NhZ2UiLCJkYXRlIiwiRGF0ZSIsImZvcm1hdCIsInRpbWUiLCJzZXRZZWFyIiwiZ2V0RnVsbFllYXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXLElBRE47QUFFTEMsZUFBUyxJQUZKO0FBR0xDLG1CQUFhLENBQ1gsTUFEVyxFQUNILEtBREcsRUFDSSxNQURKLEVBQ1ksTUFEWixFQUNvQixNQURwQixFQUM0QixNQUQ1QixDQUhSO0FBTUxDLFlBQU07QUFDSkMsb0JBQVk7QUFEUjtBQU5ELEssUUFVUEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUdiQyxPLEdBQVU7QUFDUkMsdUJBQWlCLHlCQUFTQyxDQUFULEVBQVk7QUFDM0IsYUFBS04sSUFBTCxDQUFVTSxFQUFFQyxhQUFGLENBQWdCQyxPQUFo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RWpDUixrQkFBTTtBQUYyQixXQUFuQztBQUlEO0FBQ0Y7QUE5RE8sSzs7Ozs7NkJBZ0VEO0FBQ1AsVUFBSVMsT0FBTyxJQUFJQyxJQUFKLEVBQVg7QUFDQTs7O0FBR0EsV0FBS3hDLFNBQUwsR0FBaUI7QUFDZnVDLGNBQU1BLEtBQUtFLE1BQUwsQ0FBWSxZQUFaLENBRFM7QUFFZkMsY0FBTUgsS0FBS0UsTUFBTCxDQUFZLE9BQVo7QUFFUjs7O0FBSmlCLE9BQWpCLENBT0FGLEtBQUtJLE9BQUwsQ0FBYUosS0FBS0ssV0FBTCxLQUFxQixDQUFsQztBQUNBLFdBQUszQyxPQUFMLEdBQWU7QUFDYnNDLGNBQU1BLEtBQUtFLE1BQUwsQ0FBWSxZQUFaO0FBRE8sT0FBZjtBQUdBLFdBQUsxQixNQUFMO0FBQ0Q7Ozs7RUEvRjBDLGVBQUs4QixJOztrQkFBN0IvQyxlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IHJlcXVlc3QsIFZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdG9vbHMnXHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RvYXN0L2luZGV4J1xyXG5pbXBvcnQgeyBhcGlzIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2FwaSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZVdhbnRIZWxwIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgc3RhcnREYXRlOiBudWxsLFxyXG4gICAgZW5kRGF0ZTogbnVsbCxcclxuICAgIG90aGVyUmV3YXJkOiBbXHJcbiAgICAgICfor7fkvaDlkIPppa0nLCAn5L2g5byA5Lu3JywgJ+iHquWumuS5iTEnLCAn6Ieq5a6a5LmJMicsICfoh6rlrprkuYkzJywgJ+iHquWumuS5iTQnXHJcbiAgICBdLFxyXG4gICAgZm9ybToge1xyXG4gICAgICByZXdhcmRUeXBlOiAnbW9uZXknLFxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtVmFsdWVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5mb3JtW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHN3aXRjaFR5cGU6IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuZm9ybS5yZXdhcmRcclxuICAgICAgdGhpcy5mb3JtLnJld2FyZFR5cGUgPSB0eXBlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBzZWxlY3RHZW5kZXI6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybVsnZ2VuZGVyX2NvbnN0cmFpbnQnXSA9IHZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hSZXdhcmQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybVsncmV3YXJkJ10gPSB2YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgcmVsZWFzZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmZvcm1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBwYXJhbXMgPSBWYWxpZGF0ZS5jaGVjayhwYXJhbXMsIFtcclxuICAgICAgICAgIFsndGl0bGUnLCAncmVxdWlyZScsICfor7floavlhpnmoIfpopgnLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsnYWRkcmVzcycsICdyZXF1aXJlJywgJ+ivt+Whq+WGmeWcsOWdgCcsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWydnZW5kZXJfY29uc3RyYWludCcsICdyZXF1aXJlJywgJ+ivt+iuvue9ruaAp+WIq+e6puadnycsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWydkdWVEYXRlJywgJ3JlcXVpcmUnLCAn6K+36YCJ5oup5oiq6Iez5pel5pyfJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ2R1ZVRpbWUnLCAncmVxdWlyZScsICfor7fpgInmi6nmiKroh7Pml7bpl7QnLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsncmV3YXJkJywgJ3JlcXVpcmUnLCAn6K+35aGr5YaZ6YWs5YqzJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ3Bob25lTnVtYmVyJywgJ3RlbCcsICfogZTns7vnlLXor53moLzlvI/kuI3mraPnoa4nLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsnd2VpeGluJywgJ3JlcXVpcmUnLCAn5b6u5L+h5Y+35LiN6IO95Li656m6JywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV1cclxuICAgICAgICBdKVxyXG4gICAgICAgIGxldCBjb2xsZWdlID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuY29sbGVnZTtcclxuICAgICAgICBwYXJhbXNbJ2RlYWRsaW5lJ10gPSBwYXJhbXNbJ2R1ZURhdGUnXSsnICcrcGFyYW1zWydkdWVUaW1lJ11cclxuICAgICAgICBwYXJhbXNbJ2NvbGxlZ2UnXSA9IGNvbGxlZ2VbJ2NvbGxlZ2VfaWQnXVxyXG4gICAgICAgIGRlbGV0ZSBwYXJhbXNbJ2R1ZURhdGUnXVxyXG4gICAgICAgIGRlbGV0ZSBwYXJhbXNbJ2R1ZVRpbWUnXVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6ICfliJvlu7rkuK0nLFxyXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXF1ZXN0KGFwaXMud2FudEhlbHBPcmRlci5hZGQsIHBhcmFtcykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WIm+W7uuaIkOWKnycsXHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgfSwgcmVzb24gPT4ge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiByZXNvbixcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KCkge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+aXtumXtFxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHtcclxuICAgICAgZGF0ZTogZGF0ZS5mb3JtYXQoJ3l5eXktTU0tZGQnKSxcclxuICAgICAgdGltZTogZGF0ZS5mb3JtYXQoJ2hoOm1tJylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2f5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIGRhdGUuc2V0WWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKVxyXG4gICAgdGhpcy5lbmREYXRlID0ge1xyXG4gICAgICBkYXRlOiBkYXRlLmZvcm1hdCgneXl5eS1NTS1kZCcpXHJcbiAgICB9XHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG59XHJcbiJdfQ==