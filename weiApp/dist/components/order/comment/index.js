'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

var _orderComment = require('./../../../lib/apis/orderComment.js');

var _orderComment2 = _interopRequireDefault(_orderComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_wepy$component) {
  _inherits(Comment, _wepy$component);

  function Comment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      detail: null,
      list: []
    }, _this.$props = { "avatar": { "v-bind:id.once": { "for": "list", "item": "commentItem", "index": "index", "key": "key", "value": "commentItem.creater" } } }, _this.$events = {}, _this.components = {
      avatar: _index2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comment, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loadData();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref4, data, time, k;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _orderComment2.default.list({ order_id: 'F20170921234252410', want: 'tree' });

              case 2:
                _ref4 = _context2.sent;
                data = _ref4.data;
                time = new Date();

                for (k in data.list) {
                  data.list[k]['_c'] = time.getDateDiff(data.list[k]['_c']);
                }
                this.list = data.list;
                this.$apply();

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _ref3.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Comment;
}(_wepy2.default.component);

exports.default = Comment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJkYXRhIiwiZGV0YWlsIiwibGlzdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYXZhdGFyIiwibG9hZERhdGEiLCJvcmRlcl9pZCIsIndhbnQiLCJ0aW1lIiwiRGF0ZSIsImsiLCJnZXREYXRlRGlmZiIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxJQURIO0FBRUxDLFlBQU07QUFGRCxLLFFBSVJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxrQkFBaUIsRUFBQyxPQUFNLE1BQVAsRUFBYyxRQUFPLGFBQXJCLEVBQW1DLFNBQVEsT0FBM0MsRUFBbUQsT0FBTSxLQUF6RCxFQUErRCxTQUFRLHFCQUF2RSxFQUFsQixFQUFWLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSzs7Ozs7Ozs7Ozs7O3VCQUlKLEtBQUtDLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdlLHVCQUFnQkwsSUFBaEIsQ0FBcUIsRUFBRU0sVUFBVSxvQkFBWixFQUFrQ0MsTUFBTSxNQUF4QyxFQUFyQixDOzs7O0FBQWZULG9CLFNBQUFBLEk7QUFDRlUsb0IsR0FBTyxJQUFJQyxJQUFKLEU7O0FBQ1gscUJBQVFDLENBQVIsSUFBYVosS0FBS0UsSUFBbEIsRUFBdUI7QUFDckJGLHVCQUFLRSxJQUFMLENBQVVVLENBQVYsRUFBYSxJQUFiLElBQXFCRixLQUFLRyxXQUFMLENBQWlCYixLQUFLRSxJQUFMLENBQVVVLENBQVYsRUFBYSxJQUFiLENBQWpCLENBQXJCO0FBQ0Q7QUFDRCxxQkFBS1YsSUFBTCxHQUFZRixLQUFLRSxJQUFqQjtBQUNBLHFCQUFLWSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcEJpQyxlQUFLQyxTOztrQkFBckJoQixPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vdXNlcnMvYXZhdGFyL2luZGV4J1xyXG5pbXBvcnQgT3JkZXJDb21tZW50QXBpIGZyb20gJy4uLy4uLy4uL2xpYi9hcGlzL29yZGVyQ29tbWVudCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBkYXRhID0ge1xyXG4gICAgZGV0YWlsOiBudWxsLFxyXG4gICAgbGlzdDogW11cclxuICB9XHJcbiAkcHJvcHMgPSB7XCJhdmF0YXJcIjp7XCJ2LWJpbmQ6aWQub25jZVwiOntcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiY29tbWVudEl0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJjb21tZW50SXRlbS5jcmVhdGVyXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBhdmF0YXI6IEF2YXRhclxyXG4gIH1cclxuICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcclxuICB9XHJcbiAgYXN5bmMgbG9hZERhdGEoKSB7XHJcbiAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBPcmRlckNvbW1lbnRBcGkubGlzdCh7IG9yZGVyX2lkOiAnRjIwMTcwOTIxMjM0MjUyNDEwJywgd2FudDogJ3RyZWUnIH0pXHJcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBmb3IobGV0IGsgaW4gZGF0YS5saXN0KXtcclxuICAgICAgZGF0YS5saXN0W2tdWydfYyddID0gdGltZS5nZXREYXRlRGlmZihkYXRhLmxpc3Rba11bJ19jJ10pXHJcbiAgICB9XHJcbiAgICB0aGlzLmxpc3QgPSBkYXRhLmxpc3RcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbn1cclxuIl19