'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../../../npm/wepy-async-function/index.js');

var _index = require('./../../../../components/users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseInfoSettting = function (_wepy$page) {
  _inherits(BaseInfoSettting, _wepy$page);

  function BaseInfoSettting() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseInfoSettting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseInfoSettting.__proto__ || Object.getPrototypeOf(BaseInfoSettting)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      id: '1',
      userinfo: null
    }, _this.components = {
      avatar: _index2.default
    }, _this.methods = {
      edit: function edit(e) {
        var editor = this.data.editor;

        editor[e.currentTarget.dataset.type] = true;
        this.setData({
          editor: editor
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseInfoSettting, [{
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref3, userinfo;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.getStorage({
                  key: 'userinfo'
                });

              case 2:
                _ref3 = _context.sent;
                userinfo = _ref3.data;

                this.userinfo = userinfo;
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return BaseInfoSettting;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(BaseInfoSettting , 'pages/mine/setting/baseinfo/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJhc2VJbmZvU2V0dHRpbmciLCJkYXRhIiwiaWQiLCJ1c2VyaW5mbyIsImNvbXBvbmVudHMiLCJhdmF0YXIiLCJtZXRob2RzIiwiZWRpdCIsImUiLCJlZGl0b3IiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInR5cGUiLCJzZXREYXRhIiwiZ2V0U3RvcmFnZSIsImtleSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxnQjs7Ozs7Ozs7Ozs7Ozs7ME1BQ25CQyxJLEdBQU87QUFDTEMsVUFBSSxHQURDO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUlQQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBR2JDLE8sR0FBVTtBQUNSQyxZQUFNLGNBQVNDLENBQVQsRUFBWTtBQUFBLFlBQ1ZDLE1BRFUsR0FDQyxLQUFLUixJQUROLENBQ1ZRLE1BRFU7O0FBRWhCQSxlQUFPRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBL0IsSUFBdUMsSUFBdkM7QUFDQSxhQUFLQyxPQUFMLENBQWE7QUFDWEo7QUFEVyxTQUFiO0FBR0Q7QUFQTyxLOzs7Ozs7Ozs7Ozs7Ozt1QkFVdUIsZUFBS0ssVUFBTCxDQUFnQjtBQUM3Q0MsdUJBQUs7QUFEd0MsaUJBQWhCLEM7Ozs7QUFBbkJaLHdCLFNBQU5GLEk7O0FBR04scUJBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUthLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0QjBDLGVBQUtDLEk7O2tCQUE5QmpCLGdCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzL2F2YXRhci9pbmRleCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUluZm9TZXR0dGluZyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YSA9IHtcclxuICAgIGlkOiAnMScsXHJcbiAgICB1c2VyaW5mbzogbnVsbFxyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgYXZhdGFyOiBBdmF0YXJcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGVkaXQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0IHsgZWRpdG9yIH0gPSB0aGlzLmRhdGFcclxuICAgICAgZWRpdG9yW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGVdID0gdHJ1ZVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGVkaXRvclxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBvblNob3coKSB7XHJcbiAgICBsZXQgeyBkYXRhOiB1c2VyaW5mbyB9ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndXNlcmluZm8nXHJcbiAgICB9KVxyXG4gICAgdGhpcy51c2VyaW5mbyA9IHVzZXJpbmZvXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG59XHJcbiJdfQ==