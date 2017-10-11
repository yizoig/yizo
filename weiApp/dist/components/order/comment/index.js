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

var _index3 = require('./../../alert/index.js');

var _index4 = _interopRequireDefault(_index3);

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
      avatar: _index2.default,
      alert: _index4.default
    }, _this.watch = {
      detail: function detail(newValue, oldValue) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!newValue) {
                    _context.next = 5;
                    break;
                  }

                  _this2.detail = newValue;
                  _this2.$apply();
                  _context.next = 5;
                  return _this2.loadData();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _this.methods = {
      addComment: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent) {
          var _this3 = this;

          var _ref3, userInfo;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _wepy2.default.getStorage({
                    key: 'userInfo'
                  });

                case 2:
                  _ref3 = _context3.sent;
                  userInfo = _ref3.data;

                  this.$invoke('alert', 'showAlert', {
                    title: '写评论',
                    placeholder: '请输入你想说的话',
                    okText: '评论',
                    onOK: function () {
                      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(content) {
                        var result;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                console.log(parent);
                                _context2.next = 3;
                                return _orderComment2.default.add({ order_id: _this3.detail['order_id'], content: content, user_id: userInfo['id'], parent: parent });

                              case 3:
                                result = _context2.sent;

                              case 4:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, _this3);
                      }));

                      return function onOK(_x2) {
                        return _ref4.apply(this, arguments);
                      };
                    }()
                  });

                case 5:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function addComment(_x) {
          return _ref2.apply(this, arguments);
        }

        return addComment;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comment, [{
    key: 'loadData',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var detail, _ref6, data, time, k;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                detail = this.detail;
                _context4.next = 3;
                return _orderComment2.default.list({ order_id: detail['order_id'], want: 'tree' });

              case 3:
                _ref6 = _context4.sent;
                data = _ref6.data;
                time = new Date();

                for (k in data.list) {
                  data.list[k]['_c'] = time.getDateDiff(data.list[k]['_c']);
                }
                this.list = data.list;
                this.$apply();

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadData() {
        return _ref5.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Comment;
}(_wepy2.default.component);

exports.default = Comment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJkYXRhIiwiZGV0YWlsIiwibGlzdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYXZhdGFyIiwiYWxlcnQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCIkYXBwbHkiLCJsb2FkRGF0YSIsIm1ldGhvZHMiLCJhZGRDb21tZW50IiwicGFyZW50IiwiZ2V0U3RvcmFnZSIsImtleSIsInVzZXJJbmZvIiwiJGludm9rZSIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJva1RleHQiLCJvbk9LIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJvcmRlcl9pZCIsInVzZXJfaWQiLCJyZXN1bHQiLCJ3YW50IiwidGltZSIsIkRhdGUiLCJrIiwiZ2V0RGF0ZURpZmYiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxJQURIO0FBRUxDLFlBQU07QUFGRCxLLFFBSVJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxrQkFBaUIsRUFBQyxPQUFNLE1BQVAsRUFBYyxRQUFPLGFBQXJCLEVBQW1DLFNBQVEsT0FBM0MsRUFBbUQsT0FBTSxLQUF6RCxFQUErRCxTQUFRLHFCQUF2RSxFQUFsQixFQUFWLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLDZCQURVO0FBRVZDO0FBRlUsSyxRQUlaQyxLLEdBQVE7QUFDQVAsWUFEQSxrQkFDT1EsUUFEUCxFQUNpQkMsUUFEakIsRUFDMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQzNCRCxRQUQyQjtBQUFBO0FBQUE7QUFBQTs7QUFFN0IseUJBQUtSLE1BQUwsR0FBY1EsUUFBZDtBQUNBLHlCQUFLRSxNQUFMO0FBSDZCO0FBQUEseUJBSXZCLE9BQUtDLFFBQUwsRUFKdUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNaEM7QUFQSyxLLFFBU1JDLE8sR0FBVTtBQUNSQztBQUFBLDRFQUFXLGtCQUFlQyxNQUFmO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNzQixlQUFLQyxVQUFMLENBQWdCO0FBQzdDQyx5QkFBSztBQUR3QyxtQkFBaEIsQ0FEdEI7O0FBQUE7QUFBQTtBQUNHQywwQkFESCxTQUNIbEIsSUFERzs7QUFJVCx1QkFBS21CLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQywyQkFBTyxLQUQwQjtBQUVqQ0MsaUNBQWEsVUFGb0I7QUFHakNDLDRCQUFRLElBSHlCO0FBSWpDQztBQUFBLDBGQUFNLGtCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNKQyx3Q0FBUUMsR0FBUixDQUFZWCxNQUFaO0FBREk7QUFBQSx1Q0FFZSx1QkFBZ0JZLEdBQWhCLENBQW9CLEVBQUVDLFVBQVUsT0FBSzNCLE1BQUwsQ0FBWSxVQUFaLENBQVosRUFBcUN1QixnQkFBckMsRUFBNkNLLFNBQVFYLFNBQVMsSUFBVCxDQUFyRCxFQUFvRUgsY0FBcEUsRUFBcEIsQ0FGZjs7QUFBQTtBQUVBZSxzQ0FGQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUppQyxtQkFBbkM7O0FBSlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURRLEs7Ozs7Ozs7Ozs7Ozs7QUFpQkY3QixzQixHQUFXLEksQ0FBWEEsTTs7dUJBQ2UsdUJBQWdCQyxJQUFoQixDQUFxQixFQUFFMEIsVUFBVTNCLE9BQU8sVUFBUCxDQUFaLEVBQWdDOEIsTUFBTSxNQUF0QyxFQUFyQixDOzs7O0FBQWYvQixvQixTQUFBQSxJO0FBQ0ZnQyxvQixHQUFPLElBQUlDLElBQUosRTs7QUFDWCxxQkFBU0MsQ0FBVCxJQUFjbEMsS0FBS0UsSUFBbkIsRUFBeUI7QUFDdkJGLHVCQUFLRSxJQUFMLENBQVVnQyxDQUFWLEVBQWEsSUFBYixJQUFxQkYsS0FBS0csV0FBTCxDQUFpQm5DLEtBQUtFLElBQUwsQ0FBVWdDLENBQVYsRUFBYSxJQUFiLENBQWpCLENBQXJCO0FBQ0Q7QUFDRCxxQkFBS2hDLElBQUwsR0FBWUYsS0FBS0UsSUFBakI7QUFDQSxxQkFBS1MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTVDaUMsZUFBS3lCLFM7O2tCQUFyQnJDLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi91c2Vycy9hdmF0YXIvaW5kZXgnXHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi8uLi9hbGVydC9pbmRleCdcclxuaW1wb3J0IE9yZGVyQ29tbWVudEFwaSBmcm9tICcuLi8uLi8uLi9saWIvYXBpcy9vcmRlckNvbW1lbnQnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgZGF0YSA9IHtcclxuICAgIGRldGFpbDogbnVsbCxcclxuICAgIGxpc3Q6IFtdXHJcbiAgfVxyXG4gJHByb3BzID0ge1wiYXZhdGFyXCI6e1widi1iaW5kOmlkLm9uY2VcIjp7XCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcImNvbW1lbnRJdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiY29tbWVudEl0ZW0uY3JlYXRlclwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgYXZhdGFyOiBBdmF0YXIsXHJcbiAgICBhbGVydDogQWxlcnRcclxuICB9XHJcbiAgd2F0Y2ggPSB7XHJcbiAgICBhc3luYyBkZXRhaWwobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGV0YWlsID0gbmV3VmFsdWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGFkZENvbW1lbnQ6YXN5bmMgZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgICAgIGxldCB7IGRhdGE6IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleTogJ3VzZXJJbmZvJ1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLiRpbnZva2UoJ2FsZXJ0JywgJ3Nob3dBbGVydCcsIHtcclxuICAgICAgICB0aXRsZTogJ+WGmeivhOiuuicsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXkvaDmg7Por7TnmoTor50nLFxyXG4gICAgICAgIG9rVGV4dDogJ+ivhOiuuicsXHJcbiAgICAgICAgb25PSzogYXN5bmMgKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmVudClcclxuICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBPcmRlckNvbW1lbnRBcGkuYWRkKHsgb3JkZXJfaWQ6IHRoaXMuZGV0YWlsWydvcmRlcl9pZCddLCBjb250ZW50LHVzZXJfaWQ6dXNlckluZm9bJ2lkJ10scGFyZW50fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBsb2FkRGF0YSgpIHtcclxuICAgIGxldCB7IGRldGFpbCB9ID0gdGhpc1xyXG4gICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgT3JkZXJDb21tZW50QXBpLmxpc3QoeyBvcmRlcl9pZDogZGV0YWlsWydvcmRlcl9pZCddLCB3YW50OiAndHJlZScgfSlcclxuICAgIGxldCB0aW1lID0gbmV3IERhdGUoKVxyXG4gICAgZm9yIChsZXQgayBpbiBkYXRhLmxpc3QpIHtcclxuICAgICAgZGF0YS5saXN0W2tdWydfYyddID0gdGltZS5nZXREYXRlRGlmZihkYXRhLmxpc3Rba11bJ19jJ10pXHJcbiAgICB9XHJcbiAgICB0aGlzLmxpc3QgPSBkYXRhLmxpc3RcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbn1cclxuIl19