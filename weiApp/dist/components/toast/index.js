'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../spin/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_wepy$component) {
  _inherits(Toast, _wepy$component);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      title: '',
      icon: '',
      mask: false,
      show: true,
      time: 1000
    }, _this.$props = { "spin": {} }, _this.$events = {}, _this.components = {
      spin: _index2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
    key: 'showToast',
    value: function showToast(opt) {
      var _this2 = this;

      for (var key in opt) {
        if (this.hasOwnProperty(key)) {
          this[key] = opt[key];
        }
      }
      this['show'] = true;
      this.$apply();
      if (this['icon'] !== 'loading') {
        setTimeout(function () {
          _this2.hiddenToast();
          console.log('消失');
        }, this.time);
      }
      console.log(opt);
    }
  }, {
    key: 'hiddenToast',
    value: function hiddenToast() {
      this['show'] = false;
      this.$apply();
    }
  }]);

  return Toast;
}(_wepy2.default.component);

exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiZGF0YSIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJzaG93IiwidGltZSIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic3BpbiIsIm9wdCIsImtleSIsImhhc093blByb3BlcnR5IiwiJGFwcGx5Iiwic2V0VGltZW91dCIsImhpZGRlblRvYXN0IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLFlBQU0sS0FIRDtBQUlMQyxZQUFNLElBSkQ7QUFLTEMsWUFBTTtBQUxELEssUUFPUkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFSLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSzs7Ozs7OEJBR0ZDLEcsRUFBSztBQUFBOztBQUNiLFdBQUssSUFBSUMsR0FBVCxJQUFnQkQsR0FBaEIsRUFBcUI7QUFDbkIsWUFBSSxLQUFLRSxjQUFMLENBQW9CRCxHQUFwQixDQUFKLEVBQThCO0FBQzVCLGVBQUtBLEdBQUwsSUFBWUQsSUFBSUMsR0FBSixDQUFaO0FBQ0Q7QUFDRjtBQUNELFdBQUssTUFBTCxJQUFlLElBQWY7QUFDQSxXQUFLRSxNQUFMO0FBQ0EsVUFBSSxLQUFLLE1BQUwsTUFBaUIsU0FBckIsRUFBZ0M7QUFDOUJDLG1CQUFXLFlBQU07QUFDZixpQkFBS0MsV0FBTDtBQUNBQyxrQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDRCxTQUhELEVBR0csS0FBS1osSUFIUjtBQUlEO0FBQ0RXLGNBQVFDLEdBQVIsQ0FBWVAsR0FBWjtBQUNEOzs7a0NBQ2E7QUFDWixXQUFLLE1BQUwsSUFBZSxLQUFmO0FBQ0EsV0FBS0csTUFBTDtBQUNEOzs7O0VBaENnQyxlQUFLSyxTOztrQkFBbkJuQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBTcGluIGZyb20gJy4uL3NwaW4vaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBpY29uOiAnJyxcclxuICAgIG1hc2s6IGZhbHNlLFxyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIHRpbWU6IDEwMDBcclxuICB9XHJcbiAkcHJvcHMgPSB7XCJzcGluXCI6e319O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgc3BpbjogU3BpblxyXG4gIH1cclxuICBzaG93VG9hc3Qob3B0KSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gb3B0KSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzW2tleV0gPSBvcHRba2V5XVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzWydzaG93J10gPSB0cnVlXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgICBpZiAodGhpc1snaWNvbiddICE9PSAnbG9hZGluZycpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5Ub2FzdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+a2iOWksScpXHJcbiAgICAgIH0sIHRoaXMudGltZSlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG9wdClcclxuICB9XHJcbiAgaGlkZGVuVG9hc3QoKSB7XHJcbiAgICB0aGlzWydzaG93J10gPSBmYWxzZVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxufVxyXG4iXX0=