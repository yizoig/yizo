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
var Release = function (_wepy$page) {
  _inherits(Release, _wepy$page);

  function Release() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Release);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Release.__proto__ || Object.getPrototypeOf(Release)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      startDate: null,
      endDate: null,
      form: {
        rewardType: 'money',
        userLimit: 1
      }
    }, _this.methods = {
      formValueChange: function formValueChange(e) {
        this.form[e.currentTarget.dataset.name] = e.detail.value;
        this.$apply();
      },
      selectGender: function selectGender(value) {
        this.form['gender_contrainer'] = value;
        this.$apply();
      },
      changuserLimit: function changuserLimit(value) {
        console.log(value);
        if (value > 0 && value <= 10) {
          this.form['userLimit'] = value;
          this.$apply();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Release, [{
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

  return Release;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Release , 'pages/release/offerHelp/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlbGVhc2UiLCJkYXRhIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImZvcm0iLCJyZXdhcmRUeXBlIiwidXNlckxpbWl0IiwibWV0aG9kcyIsImZvcm1WYWx1ZUNoYW5nZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsInNlbGVjdEdlbmRlciIsImNoYW5ndXNlckxpbWl0IiwiY29uc29sZSIsImxvZyIsImRhdGUiLCJEYXRlIiwiZm9ybWF0IiwidGltZSIsInNldFllYXIiLCJnZXRGdWxsWWVhciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEksR0FBTztBQUNMQyxpQkFBVyxJQUROO0FBRUxDLGVBQVMsSUFGSjtBQUdMQyxZQUFNO0FBQ0pDLG9CQUFZLE9BRFI7QUFFSkMsbUJBQVc7QUFGUDtBQUhELEssUUFRUEMsTyxHQUFVO0FBQ1JDLHVCQUFpQix5QkFBU0MsQ0FBVCxFQUFZO0FBQzNCLGFBQUtMLElBQUwsQ0FBVUssRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQWxDLElBQTBDSCxFQUFFSSxNQUFGLENBQVNDLEtBQW5EO0FBQ0EsYUFBS0MsTUFBTDtBQUNELE9BSk87QUFLUkMsb0JBQWMsc0JBQVNGLEtBQVQsRUFBZ0I7QUFDNUIsYUFBS1YsSUFBTCxDQUFVLG1CQUFWLElBQWlDVSxLQUFqQztBQUNBLGFBQUtDLE1BQUw7QUFDRCxPQVJPO0FBU1JFLHNCQUFnQix3QkFBU0gsS0FBVCxFQUFnQjtBQUM5QkksZ0JBQVFDLEdBQVIsQ0FBWUwsS0FBWjtBQUNBLFlBQUlBLFFBQVEsQ0FBUixJQUFhQSxTQUFTLEVBQTFCLEVBQThCO0FBQzVCLGVBQUtWLElBQUwsQ0FBVSxXQUFWLElBQXlCVSxLQUF6QjtBQUNBLGVBQUtDLE1BQUw7QUFDRDtBQUNGO0FBZk8sSzs7Ozs7NkJBaUJEO0FBQ1AsVUFBSUssT0FBTyxJQUFJQyxJQUFKLEVBQVg7QUFDQTs7O0FBR0EsV0FBS25CLFNBQUwsR0FBaUI7QUFDZmtCLGNBQU1BLEtBQUtFLE1BQUwsQ0FBWSxZQUFaLENBRFM7QUFFZkMsY0FBTUgsS0FBS0UsTUFBTCxDQUFZLE9BQVo7QUFFUjs7O0FBSmlCLE9BQWpCLENBT0FGLEtBQUtJLE9BQUwsQ0FBYUosS0FBS0ssV0FBTCxLQUFxQixDQUFsQztBQUNBLFdBQUt0QixPQUFMLEdBQWU7QUFDYmlCLGNBQU1BLEtBQUtFLE1BQUwsQ0FBWSxZQUFaO0FBRE8sT0FBZjtBQUdBLFdBQUtQLE1BQUw7QUFDRDs7OztFQTNDa0MsZUFBS1csSTs7a0JBQXJCMUIsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyBpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9hcGknXHJcbi8vIGltcG9ydCB7IGhvc3QgfSBmcm9tICcuLi8uLi9jb25maWcvYXBpJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgc3RhcnREYXRlOiBudWxsLFxyXG4gICAgZW5kRGF0ZTogbnVsbCxcclxuICAgIGZvcm06IHtcclxuICAgICAgcmV3YXJkVHlwZTogJ21vbmV5JyxcclxuICAgICAgdXNlckxpbWl0OiAxXHJcbiAgICB9XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtVmFsdWVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5mb3JtW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHNlbGVjdEdlbmRlcjogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgdGhpcy5mb3JtWydnZW5kZXJfY29udHJhaW5lciddID0gdmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIGNoYW5ndXNlckxpbWl0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgaWYgKHZhbHVlID4gMCAmJiB2YWx1ZSA8PSAxMCkge1xyXG4gICAgICAgIHRoaXMuZm9ybVsndXNlckxpbWl0J10gPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBvblNob3coKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnREYXRlID0ge1xyXG4gICAgICBkYXRlOiBkYXRlLmZvcm1hdCgneXl5eS1NTS1kZCcpLFxyXG4gICAgICB0aW1lOiBkYXRlLmZvcm1hdCgnaGg6bW0nKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5PmnZ/ml7bpl7RcclxuICAgICAqL1xyXG4gICAgZGF0ZS5zZXRZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSArIDEpXHJcbiAgICB0aGlzLmVuZERhdGUgPSB7XHJcbiAgICAgIGRhdGU6IGRhdGUuZm9ybWF0KCd5eXl5LU1NLWRkJylcclxuICAgIH1cclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbn1cclxuIl19