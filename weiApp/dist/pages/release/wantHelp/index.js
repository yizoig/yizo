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
          var college = _wepy2.default.getStorageSync('college');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlbGVhc2VXYW50SGVscCIsImRhdGEiLCJzdGFydERhdGUiLCJlbmREYXRlIiwib3RoZXJSZXdhcmQiLCJmb3JtIiwicmV3YXJkVHlwZSIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIm1ldGhvZHMiLCJmb3JtVmFsdWVDaGFuZ2UiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYW1lIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJzd2l0Y2hUeXBlIiwidHlwZSIsInJld2FyZCIsInNlbGVjdEdlbmRlciIsInN3aXRjaFJld2FyZCIsInJlbGVhc2UiLCJwYXJhbXMiLCJjaGVjayIsIk1VU1RfVkFMSURBVEUiLCJjb2xsZWdlIiwiZ2V0U3RvcmFnZVN5bmMiLCIkaW52b2tlIiwidGl0bGUiLCJpY29uIiwid2FudEhlbHBPcmRlciIsImFkZCIsInRoZW4iLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJyZXNvbiIsIm1lc3NhZ2UiLCJkYXRlIiwiRGF0ZSIsImZvcm1hdCIsInRpbWUiLCJzZXRZZWFyIiwiZ2V0RnVsbFllYXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXLElBRE47QUFFTEMsZUFBUyxJQUZKO0FBR0xDLG1CQUFhLENBQ1gsTUFEVyxFQUNILEtBREcsRUFDSSxNQURKLEVBQ1ksTUFEWixFQUNvQixNQURwQixFQUM0QixNQUQ1QixDQUhSO0FBTUxDLFlBQU07QUFDSkMsb0JBQVk7QUFEUjtBQU5ELEssUUFVUEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUdiQyxPLEdBQVU7QUFDUkMsdUJBQWlCLHlCQUFTQyxDQUFULEVBQVk7QUFDM0IsYUFBS04sSUFBTCxDQUFVTSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3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RjJCLFdBQW5DO0FBSUQ7QUFDRjtBQTlETyxLOzs7Ozs2QkFnRUQ7QUFDUCxVQUFJUyxPQUFPLElBQUlDLElBQUosRUFBWDtBQUNBOzs7QUFHQSxXQUFLdkMsU0FBTCxHQUFpQjtBQUNmc0MsY0FBTUEsS0FBS0UsTUFBTCxDQUFZLFlBQVosQ0FEUztBQUVmQyxjQUFNSCxLQUFLRSxNQUFMLENBQVksT0FBWjtBQUVSOzs7QUFKaUIsT0FBakIsQ0FPQUYsS0FBS0ksT0FBTCxDQUFhSixLQUFLSyxXQUFMLEtBQXFCLENBQWxDO0FBQ0EsV0FBSzFDLE9BQUwsR0FBZTtBQUNicUMsY0FBTUEsS0FBS0UsTUFBTCxDQUFZLFlBQVo7QUFETyxPQUFmO0FBR0EsV0FBS3pCLE1BQUw7QUFDRDs7OztFQS9GMEMsZUFBSzZCLEk7O2tCQUE3QjlDLGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgcmVxdWVzdCwgVmFsaWRhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy90b29scydcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdG9hc3QvaW5kZXgnXHJcbmltcG9ydCB7IGFwaXMgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvYXBpJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlV2FudEhlbHAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBzdGFydERhdGU6IG51bGwsXHJcbiAgICBlbmREYXRlOiBudWxsLFxyXG4gICAgb3RoZXJSZXdhcmQ6IFtcclxuICAgICAgJ+ivt+S9oOWQg+mlrScsICfkvaDlvIDku7cnLCAn6Ieq5a6a5LmJMScsICfoh6rlrprkuYkyJywgJ+iHquWumuS5iTMnLCAn6Ieq5a6a5LmJNCdcclxuICAgIF0sXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIHJld2FyZFR5cGU6ICdtb25leScsXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICB0b2FzdDogVG9hc3RcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGZvcm1WYWx1ZUNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmZvcm1bZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZV0gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgc3dpdGNoVHlwZTogZnVuY3Rpb24odHlwZSkge1xyXG4gICAgICBkZWxldGUgdGhpcy5mb3JtLnJld2FyZFxyXG4gICAgICB0aGlzLmZvcm0ucmV3YXJkVHlwZSA9IHR5cGVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHNlbGVjdEdlbmRlcjogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgdGhpcy5mb3JtWydnZW5kZXJfY29uc3RyYWludCddID0gdmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHN3aXRjaFJld2FyZDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgdGhpcy5mb3JtWydyZXdhcmQnXSA9IHZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICByZWxlYXNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZm9ybVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHBhcmFtcyA9IFZhbGlkYXRlLmNoZWNrKHBhcmFtcywgW1xyXG4gICAgICAgICAgWyd0aXRsZScsICdyZXF1aXJlJywgJ+ivt+Whq+WGmeagh+mimCcsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWydhZGRyZXNzJywgJ3JlcXVpcmUnLCAn6K+35aGr5YaZ5Zyw5Z2AJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ2dlbmRlcl9jb25zdHJhaW50JywgJ3JlcXVpcmUnLCAn6K+36K6+572u5oCn5Yir57qm5p2fJywgVmFsaWRhdGUuTVVTVF9WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ2R1ZURhdGUnLCAncmVxdWlyZScsICfor7fpgInmi6nmiKroh7Pml6XmnJ8nLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsnZHVlVGltZScsICdyZXF1aXJlJywgJ+ivt+mAieaLqeaIquiHs+aXtumXtCcsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWydyZXdhcmQnLCAncmVxdWlyZScsICfor7floavlhpnphazlirMnLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsncGhvbmVOdW1iZXInLCAndGVsJywgJ+iBlOezu+eUteivneagvOW8j+S4jeato+ehricsIFZhbGlkYXRlLk1VU1RfVkFMSURBVEVdLFxyXG4gICAgICAgICAgWyd3ZWl4aW4nLCAncmVxdWlyZScsICflvq7kv6Hlj7fkuI3og73kuLrnqbonLCBWYWxpZGF0ZS5NVVNUX1ZBTElEQVRFXVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgbGV0IGNvbGxlZ2UgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdjb2xsZWdlJylcclxuICAgICAgICBwYXJhbXNbJ2RlYWRsaW5lJ10gPSBwYXJhbXNbJ2R1ZURhdGUnXSsnICcrcGFyYW1zWydkdWVUaW1lJ11cclxuICAgICAgICBwYXJhbXNbJ2NvbGxlZ2UnXSA9IGNvbGxlZ2VbJ2NvbGxlZ2VfaWQnXVxyXG4gICAgICAgIGRlbGV0ZSBwYXJhbXNbJ2R1ZURhdGUnXVxyXG4gICAgICAgIGRlbGV0ZSBwYXJhbXNbJ2R1ZVRpbWUnXVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6ICfliJvlu7rkuK0nLFxyXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXF1ZXN0KGFwaXMud2FudEhlbHBPcmRlci5hZGQsIHBhcmFtcykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WIm+W7uuaIkOWKnycsXHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgfSwgcmVzb24gPT4ge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiByZXNvbixcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KCkge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+aXtumXtFxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHtcclxuICAgICAgZGF0ZTogZGF0ZS5mb3JtYXQoJ3l5eXktTU0tZGQnKSxcclxuICAgICAgdGltZTogZGF0ZS5mb3JtYXQoJ2hoOm1tJylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2f5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIGRhdGUuc2V0WWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKVxyXG4gICAgdGhpcy5lbmREYXRlID0ge1xyXG4gICAgICBkYXRlOiBkYXRlLmZvcm1hdCgneXl5eS1NTS1kZCcpXHJcbiAgICB9XHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG59XHJcbiJdfQ==