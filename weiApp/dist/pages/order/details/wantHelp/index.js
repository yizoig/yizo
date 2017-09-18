'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../../../npm/wepy-async-function/index.js');

var _api = require('./../../../../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _api3 = require('./../../../../config/api.js');

var _index = require('./../../../../components/users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WantHelp = function (_wepy$page) {
  _inherits(WantHelp, _wepy$page);

  function WantHelp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WantHelp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WantHelp.__proto__ || Object.getPrototypeOf(WantHelp)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'enablePullDownRefresh': true,
      'backgroundColor': '#3385ff'
    }, _this.data = {
      detail: {},
      uid: '1'
    }, _this.$props = { "avatar": { "v-bind:id.sync": "uid", "v-bind:id.once": "detail.runner  " } }, _this.$events = {}, _this.components = {
      avatar: _index2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WantHelp, [{
    key: 'onLoad',
    value: function onLoad(opt) {
      this.id = opt.id || null;
      this.loadData();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      /**
       * 与指定的组件通信
       */
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      try {
        (0, _api2.default)(_api3.apis.wantHelpOrder.info, { id: this.id }).then(function (_ref2) {
          var data = _ref2.data;

          _this2.detail = data.info;
          _this2.$apply();
          _wepy2.default.stopPullDownRefresh();
        }, function (reson) {
          console.log(reson);
        });
      } catch (e) {
        console.log(e);
      }
    }
  }]);

  return WantHelp;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(WantHelp , 'pages/order/details/wantHelp/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwIiwiY29uZmlnIiwiZGF0YSIsImRldGFpbCIsInVpZCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYXZhdGFyIiwib3B0IiwiaWQiLCJsb2FkRGF0YSIsIndhbnRIZWxwT3JkZXIiLCJpbmZvIiwidGhlbiIsIiRhcHBseSIsInN0b3BQdWxsRG93blJlZnJlc2giLCJjb25zb2xlIiwibG9nIiwicmVzb24iLCJlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1AsK0JBQXlCLElBRGxCO0FBRVAseUJBQW1CO0FBRlosSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLFdBQUs7QUFGQSxLLFFBSVJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxrQkFBaUIsS0FBbEIsRUFBd0Isa0JBQWlCLGlCQUF6QyxFQUFWLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSzs7Ozs7MkJBR0xDLEcsRUFBSztBQUNWLFdBQUtDLEVBQUwsR0FBVUQsSUFBSUMsRUFBSixJQUFVLElBQXBCO0FBQ0EsV0FBS0MsUUFBTDtBQUNEOzs7d0NBQ21CO0FBQ2xCOzs7QUFHQSxXQUFLQSxRQUFMO0FBQ0Q7OzsrQkFDVTtBQUFBOztBQUNULFVBQUk7QUFDRiwyQkFBUSxXQUFLQyxhQUFMLENBQW1CQyxJQUEzQixFQUFpQyxFQUFFSCxJQUFJLEtBQUtBLEVBQVgsRUFBakMsRUFBa0RJLElBQWxELENBQXVELGlCQUFjO0FBQUEsY0FBWFosSUFBVyxTQUFYQSxJQUFXOztBQUNuRSxpQkFBS0MsTUFBTCxHQUFjRCxLQUFLVyxJQUFuQjtBQUNBLGlCQUFLRSxNQUFMO0FBQ0EseUJBQUtDLG1CQUFMO0FBQ0QsU0FKRCxFQUlHLGlCQUFTO0FBQ1ZDLGtCQUFRQyxHQUFSLENBQVlDLEtBQVo7QUFDRCxTQU5EO0FBT0QsT0FSRCxDQVFFLE9BQU9DLENBQVAsRUFBVTtBQUNWSCxnQkFBUUMsR0FBUixDQUFZRSxDQUFaO0FBQ0Q7QUFDRjs7OztFQXBDbUMsZUFBS0MsSTs7a0JBQXRCckIsUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IHsgYXBpcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy9hcGknXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91c2Vycy9hdmF0YXIvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbnRIZWxwIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICAnZW5hYmxlUHVsbERvd25SZWZyZXNoJzogdHJ1ZSxcclxuICAgICdiYWNrZ3JvdW5kQ29sb3InOiAnIzMzODVmZidcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGRldGFpbDoge30sXHJcbiAgICB1aWQ6ICcxJ1xyXG4gIH1cclxuICRwcm9wcyA9IHtcImF2YXRhclwiOntcInYtYmluZDppZC5zeW5jXCI6XCJ1aWRcIixcInYtYmluZDppZC5vbmNlXCI6XCJkZXRhaWwucnVubmVyICBcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgYXZhdGFyOiBBdmF0YXJcclxuICB9XHJcbiAgb25Mb2FkKG9wdCkge1xyXG4gICAgdGhpcy5pZCA9IG9wdC5pZCB8fCBudWxsXHJcbiAgICB0aGlzLmxvYWREYXRhKClcclxuICB9XHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAvKipcclxuICAgICAqIOS4juaMh+WumueahOe7hOS7tumAmuS/oVxyXG4gICAgICovXHJcbiAgICB0aGlzLmxvYWREYXRhKClcclxuICB9XHJcbiAgbG9hZERhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXF1ZXN0KGFwaXMud2FudEhlbHBPcmRlci5pbmZvLCB7IGlkOiB0aGlzLmlkIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBkYXRhLmluZm9cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgICAgfSwgcmVzb24gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc29uKVxyXG4gICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=