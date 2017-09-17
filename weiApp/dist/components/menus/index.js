'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menus = function (_wepy$component) {
  _inherits(Menus, _wepy$component);

  function Menus() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menus);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menus.__proto__ || Object.getPrototypeOf(Menus)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      current: 0,
      menus: [{
        key: 'help',
        name: '帮帮忙',
        subMenus: [{ key: 'help', name: '求助' }, { key: 'supper', name: '帮忙' }],
        current: 0
      }, {
        key: 'inactivity',
        name: '闲置',
        subMenus: [{ key: 'male', name: '男装' }, { key: 'female', name: '女装' }],
        current: 0
      }]
    }, _this.methods = {
      onSwitch: function onSwitch(e) {
        var _e$currentTarget$data = e.currentTarget.dataset,
            index = _e$currentTarget$data.index,
            type = _e$currentTarget$data.type;

        switch (type) {
          case 'menu':
            {
              this.current = index;
              break;
            }
          case 'sub':
            {
              this.menus[this.current]['current'] = index;
              break;
            }
          default:
            {
              return;
            }
        }
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menus, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Menus;
}(_wepy2.default.component);

exports.default = Menus;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1lbnVzIiwiZGF0YSIsImN1cnJlbnQiLCJtZW51cyIsImtleSIsIm5hbWUiLCJzdWJNZW51cyIsIm1ldGhvZHMiLCJvblN3aXRjaCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwidHlwZSIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMsZUFBUyxDQURKO0FBRUxDLGFBQU8sQ0FDTDtBQUNFQyxhQUFLLE1BRFA7QUFFRUMsY0FBTSxLQUZSO0FBR0VDLGtCQUFVLENBQ1IsRUFBRUYsS0FBSyxNQUFQLEVBQWVDLE1BQU0sSUFBckIsRUFEUSxFQUVSLEVBQUVELEtBQUssUUFBUCxFQUFpQkMsTUFBTSxJQUF2QixFQUZRLENBSFo7QUFPRUgsaUJBQVM7QUFQWCxPQURLLEVBVUw7QUFDRUUsYUFBSyxZQURQO0FBRUVDLGNBQU0sSUFGUjtBQUdFQyxrQkFBVSxDQUNSLEVBQUVGLEtBQUssTUFBUCxFQUFlQyxNQUFNLElBQXJCLEVBRFEsRUFFUixFQUFFRCxLQUFLLFFBQVAsRUFBaUJDLE1BQU0sSUFBdkIsRUFGUSxDQUhaO0FBT0VILGlCQUFTO0FBUFgsT0FWSztBQUZGLEssUUF3QlBLLE8sR0FBVTtBQUNSQyxnQkFBVSxrQkFBU0MsQ0FBVCxFQUFZO0FBQUEsb0NBQ0VBLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BRGxCO0FBQUEsWUFDZEMsS0FEYyx5QkFDZEEsS0FEYztBQUFBLFlBQ1BDLElBRE8seUJBQ1BBLElBRE87O0FBRXBCLGdCQUFRQSxJQUFSO0FBQ0UsZUFBSyxNQUFMO0FBQWE7QUFDWCxtQkFBS1gsT0FBTCxHQUFlVSxLQUFmO0FBQ0E7QUFDRDtBQUNELGVBQUssS0FBTDtBQUFZO0FBQ1YsbUJBQUtULEtBQUwsQ0FBVyxLQUFLRCxPQUFoQixFQUF5QixTQUF6QixJQUFzQ1UsS0FBdEM7QUFDQTtBQUNEO0FBQ0Q7QUFBUztBQUNQO0FBQ0Q7QUFYSDtBQWFBLGFBQUtFLE1BQUw7QUFDRDtBQWpCTyxLOzs7Ozs2QkFtQkQsQ0FDUjs7OztFQTdDZ0MsZUFBS0MsUzs7a0JBQW5CZixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51cyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBkYXRhID0ge1xyXG4gICAgY3VycmVudDogMCxcclxuICAgIG1lbnVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdoZWxwJyxcclxuICAgICAgICBuYW1lOiAn5biu5biu5b+ZJyxcclxuICAgICAgICBzdWJNZW51czogW1xyXG4gICAgICAgICAgeyBrZXk6ICdoZWxwJywgbmFtZTogJ+axguWKqScgfSxcclxuICAgICAgICAgIHsga2V5OiAnc3VwcGVyJywgbmFtZTogJ+W4ruW/mScgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY3VycmVudDogMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnaW5hY3Rpdml0eScsXHJcbiAgICAgICAgbmFtZTogJ+mXsue9ricsXHJcbiAgICAgICAgc3ViTWVudXM6IFtcclxuICAgICAgICAgIHsga2V5OiAnbWFsZScsIG5hbWU6ICfnlLfoo4UnIH0sXHJcbiAgICAgICAgICB7IGtleTogJ2ZlbWFsZScsIG5hbWU6ICflpbPoo4UnIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGN1cnJlbnQ6IDBcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uU3dpdGNoOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGxldCB7IGluZGV4LCB0eXBlIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtZW51Jzoge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50ID0gaW5kZXhcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ3N1Yic6IHtcclxuICAgICAgICAgIHRoaXMubWVudXNbdGhpcy5jdXJyZW50XVsnY3VycmVudCddID0gaW5kZXhcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uTG9hZCgpIHtcclxuICB9XHJcbn1cclxuIl19