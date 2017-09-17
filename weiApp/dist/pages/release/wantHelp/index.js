'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import request from '../../utils/api'
// import { host } from '../../config/api'
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
        rewardType: 'money',
        otherReward: '请你吃饭'
      }
    }, _this.methods = {
      formValueChange: function formValueChange(e) {
        this.form[e.currentTarget.dataset.name] = e.detail.value;
        this.$apply();
      },
      switchType: function switchType(type) {
        this.form.rewardType = type;
        this.$apply();
      },
      selectGender: function selectGender(value) {
        this.form['gender_contrainer'] = value;
        this.$apply();
      },
      switchReward: function switchReward(value) {
        this.form['otherReward'] = value;
        this.$apply();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlbGVhc2VXYW50SGVscCIsImRhdGEiLCJzdGFydERhdGUiLCJlbmREYXRlIiwib3RoZXJSZXdhcmQiLCJmb3JtIiwicmV3YXJkVHlwZSIsIm1ldGhvZHMiLCJmb3JtVmFsdWVDaGFuZ2UiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYW1lIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJzd2l0Y2hUeXBlIiwidHlwZSIsInNlbGVjdEdlbmRlciIsInN3aXRjaFJld2FyZCIsImRhdGUiLCJEYXRlIiwiZm9ybWF0IiwidGltZSIsInNldFllYXIiLCJnZXRGdWxsWWVhciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0lBQ3FCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLEksR0FBTztBQUNMQyxpQkFBVyxJQUROO0FBRUxDLGVBQVMsSUFGSjtBQUdMQyxtQkFBYSxDQUNYLE1BRFcsRUFDSCxLQURHLEVBQ0ksTUFESixFQUNZLE1BRFosRUFDb0IsTUFEcEIsRUFDNEIsTUFENUIsQ0FIUjtBQU1MQyxZQUFNO0FBQ0pDLG9CQUFZLE9BRFI7QUFFSkYscUJBQWE7QUFGVDtBQU5ELEssUUFXUEcsTyxHQUFVO0FBQ1JDLHVCQUFpQix5QkFBU0MsQ0FBVCxFQUFZO0FBQzNCLGFBQUtKLElBQUwsQ0FBVUksRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQWxDLElBQTBDSCxFQUFFSSxNQUFGLENBQVNDLEtBQW5EO0FBQ0EsYUFBS0MsTUFBTDtBQUNELE9BSk87QUFLUkMsa0JBQVksb0JBQVNDLElBQVQsRUFBZTtBQUN6QixhQUFLWixJQUFMLENBQVVDLFVBQVYsR0FBdUJXLElBQXZCO0FBQ0EsYUFBS0YsTUFBTDtBQUNELE9BUk87QUFTUkcsb0JBQWMsc0JBQVNKLEtBQVQsRUFBZ0I7QUFDNUIsYUFBS1QsSUFBTCxDQUFVLG1CQUFWLElBQWlDUyxLQUFqQztBQUNBLGFBQUtDLE1BQUw7QUFDRCxPQVpPO0FBYVJJLG9CQUFjLHNCQUFTTCxLQUFULEVBQWdCO0FBQzVCLGFBQUtULElBQUwsQ0FBVSxhQUFWLElBQTJCUyxLQUEzQjtBQUNBLGFBQUtDLE1BQUw7QUFDRDtBQWhCTyxLOzs7Ozs2QkFrQkQ7QUFDUCxVQUFJSyxPQUFPLElBQUlDLElBQUosRUFBWDtBQUNBOzs7QUFHQSxXQUFLbkIsU0FBTCxHQUFpQjtBQUNma0IsY0FBTUEsS0FBS0UsTUFBTCxDQUFZLFlBQVosQ0FEUztBQUVmQyxjQUFNSCxLQUFLRSxNQUFMLENBQVksT0FBWjtBQUVSOzs7QUFKaUIsT0FBakIsQ0FPQUYsS0FBS0ksT0FBTCxDQUFhSixLQUFLSyxXQUFMLEtBQXFCLENBQWxDO0FBQ0EsV0FBS3RCLE9BQUwsR0FBZTtBQUNiaUIsY0FBTUEsS0FBS0UsTUFBTCxDQUFZLFlBQVo7QUFETyxPQUFmO0FBR0EsV0FBS1AsTUFBTDtBQUNEOzs7O0VBL0MwQyxlQUFLVyxJOztrQkFBN0IxQixlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuLy8gaW1wb3J0IHsgaG9zdCB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VXYW50SGVscCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YSA9IHtcclxuICAgIHN0YXJ0RGF0ZTogbnVsbCxcclxuICAgIGVuZERhdGU6IG51bGwsXHJcbiAgICBvdGhlclJld2FyZDogW1xyXG4gICAgICAn6K+35L2g5ZCD6aWtJywgJ+S9oOW8gOS7tycsICfoh6rlrprkuYkxJywgJ+iHquWumuS5iTInLCAn6Ieq5a6a5LmJMycsICfoh6rlrprkuYk0J1xyXG4gICAgXSxcclxuICAgIGZvcm06IHtcclxuICAgICAgcmV3YXJkVHlwZTogJ21vbmV5JyxcclxuICAgICAgb3RoZXJSZXdhcmQ6ICfor7fkvaDlkIPppa0nXHJcbiAgICB9XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtVmFsdWVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5mb3JtW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHN3aXRjaFR5cGU6IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgICAgdGhpcy5mb3JtLnJld2FyZFR5cGUgPSB0eXBlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBzZWxlY3RHZW5kZXI6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybVsnZ2VuZGVyX2NvbnRyYWluZXInXSA9IHZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hSZXdhcmQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybVsnb3RoZXJSZXdhcmQnXSA9IHZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KCkge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+aXtumXtFxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHtcclxuICAgICAgZGF0ZTogZGF0ZS5mb3JtYXQoJ3l5eXktTU0tZGQnKSxcclxuICAgICAgdGltZTogZGF0ZS5mb3JtYXQoJ2hoOm1tJylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2f5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIGRhdGUuc2V0WWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKVxyXG4gICAgdGhpcy5lbmREYXRlID0ge1xyXG4gICAgICBkYXRlOiBkYXRlLmZvcm1hdCgneXl5eS1NTS1kZCcpXHJcbiAgICB9XHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG59XHJcbiJdfQ==