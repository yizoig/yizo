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
        // subMenus: [
        //   { key: 'help', name: '求助' },
        //   { key: 'supper', name: '帮忙' }
        // ],
        current: 0
      }, {
        key: 'inactivity',
        name: '闲置',
        // subMenus: [
        //   { key: 'male', name: '男装' },
        //   { key: 'female', name: '女装' }
        // ],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1lbnVzIiwiZGF0YSIsImN1cnJlbnQiLCJtZW51cyIsImtleSIsIm5hbWUiLCJtZXRob2RzIiwib25Td2l0Y2giLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsInR5cGUiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FESjtBQUVMQyxhQUFPLENBQ0w7QUFDRUMsYUFBSyxNQURQO0FBRUVDLGNBQU0sS0FGUjtBQUdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0FILGlCQUFTO0FBUFgsT0FESyxFQVVMO0FBQ0VFLGFBQUssWUFEUDtBQUVFQyxjQUFNLElBRlI7QUFHRTtBQUNBO0FBQ0E7QUFDQTtBQUNBSCxpQkFBUztBQVBYLE9BVks7QUFGRixLLFFBd0JQSSxPLEdBQVU7QUFDUkMsZ0JBQVUsa0JBQVNDLENBQVQsRUFBWTtBQUFBLG9DQUNFQSxFQUFFQyxhQUFGLENBQWdCQyxPQURsQjtBQUFBLFlBQ2RDLEtBRGMseUJBQ2RBLEtBRGM7QUFBQSxZQUNQQyxJQURPLHlCQUNQQSxJQURPOztBQUVwQixnQkFBUUEsSUFBUjtBQUNFLGVBQUssTUFBTDtBQUFhO0FBQ1gsbUJBQUtWLE9BQUwsR0FBZVMsS0FBZjtBQUNBO0FBQ0Q7QUFDRCxlQUFLLEtBQUw7QUFBWTtBQUNWLG1CQUFLUixLQUFMLENBQVcsS0FBS0QsT0FBaEIsRUFBeUIsU0FBekIsSUFBc0NTLEtBQXRDO0FBQ0E7QUFDRDtBQUNEO0FBQVM7QUFDUDtBQUNEO0FBWEg7QUFhQSxhQUFLRSxNQUFMO0FBQ0Q7QUFqQk8sSzs7Ozs7NkJBbUJELENBQ1I7Ozs7RUE3Q2dDLGVBQUtDLFM7O2tCQUFuQmQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudXMgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgZGF0YSA9IHtcclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBtZW51czogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnaGVscCcsXHJcbiAgICAgICAgbmFtZTogJ+W4ruW4ruW/mScsXHJcbiAgICAgICAgLy8gc3ViTWVudXM6IFtcclxuICAgICAgICAvLyAgIHsga2V5OiAnaGVscCcsIG5hbWU6ICfmsYLliqknIH0sXHJcbiAgICAgICAgLy8gICB7IGtleTogJ3N1cHBlcicsIG5hbWU6ICfluK7lv5knIH1cclxuICAgICAgICAvLyBdLFxyXG4gICAgICAgIGN1cnJlbnQ6IDBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2luYWN0aXZpdHknLFxyXG4gICAgICAgIG5hbWU6ICfpl7Lnva4nLFxyXG4gICAgICAgIC8vIHN1Yk1lbnVzOiBbXHJcbiAgICAgICAgLy8gICB7IGtleTogJ21hbGUnLCBuYW1lOiAn55S36KOFJyB9LFxyXG4gICAgICAgIC8vICAgeyBrZXk6ICdmZW1hbGUnLCBuYW1lOiAn5aWz6KOFJyB9XHJcbiAgICAgICAgLy8gXSxcclxuICAgICAgICBjdXJyZW50OiAwXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBvblN3aXRjaDogZnVuY3Rpb24oZSkge1xyXG4gICAgICBsZXQgeyBpbmRleCwgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbWVudSc6IHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudCA9IGluZGV4XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdzdWInOiB7XHJcbiAgICAgICAgICB0aGlzLm1lbnVzW3RoaXMuY3VycmVudF1bJ2N1cnJlbnQnXSA9IGluZGV4XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuICBvbkxvYWQoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==