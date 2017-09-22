'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../../../npm/wepy-async-function/index.js');

var _wantHelpOrder = require('./../../../../lib/apis/wantHelpOrder.js');

var _wantHelpOrder2 = _interopRequireDefault(_wantHelpOrder);

var _index = require('./../../../../components/users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../../components/toast/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./../../../../components/order/comment/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WantHelp = function (_wepy$page) {
  _inherits(WantHelp, _wepy$page);

  function WantHelp() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, WantHelp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WantHelp.__proto__ || Object.getPrototypeOf(WantHelp)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'enablePullDownRefresh': true,
      'backgroundColor': '#3385ff'
    }, _this.data = {
      orderId: null,
      userInfo: {},
      creater: null,
      runner: null,
      detail: {}
    }, _this.methods = {
      callphone: function callphone(phone) {
        _wepy2.default.makePhoneCall({
          phoneNumber: phone + ''

        });
      },
      gohome: function gohome() {
        _wepy2.default.switchTab({
          url: '/pages/home/index'
        });
      },
      /**
       * 编辑订单
       */
      editOrder: function editOrder(params) {},
      /**
       * 抢单
       */
      grabOrder: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _ref3, data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _wantHelpOrder2.default.grab({ id: this.detail['order_id'] });

                case 3:
                  _ref3 = _context.sent;
                  data = _ref3.data;

                  if (data) {
                    _wepy2.default.navigateTo({
                      url: '/pages/order/result/index?type=grab'
                    });
                  } else {
                    this.$invoke('toast', 'showToast', {
                      title: '抢单失败',
                      icon: 'error',
                      mask: true
                    });
                  }
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);

                  this.$invoke('toast', 'showToast', {
                    title: _context.t0.message,
                    icon: 'error',
                    mask: true
                  });

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        function grabOrder() {
          return _ref2.apply(this, arguments);
        }

        return grabOrder;
      }(),
      /**
       * 放弃订单
       */
      quitOrder: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
          var _ref5, data;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _wantHelpOrder2.default.quit({ id: _this.detail['order_id'] });

                case 3:
                  _ref5 = _context2.sent;
                  data = _ref5.data;

                  if (data) {
                    _wepy2.default.navigateTo({
                      url: '/pages/order/result/index?type=grab'
                    });
                  } else {
                    _this.$invoke('toast', 'showToast', {
                      title: '操作失败',
                      icon: 'error',
                      mask: true
                    });
                  }
                  _context2.next = 11;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2['catch'](0);

                  _this.$invoke('toast', 'showToast', {
                    title: _context2.t0.message,
                    icon: 'error',
                    mask: true
                  });

                case 11:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 8]]);
        }));

        return function quitOrder(_x) {
          return _ref4.apply(this, arguments);
        };
      }(),
      /**
       * 取消订单
       */
      cancelOrder: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
          var _ref7, data;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return _wantHelpOrder2.default.cancel({ id: _this.detail['order_id'] });

                case 3:
                  _ref7 = _context3.sent;
                  data = _ref7.data;

                  if (data) {
                    _wepy2.default.navigateTo({
                      url: '/pages/order/result/index?type=grab'
                    });
                  } else {
                    _this.$invoke('toast', 'showToast', {
                      title: '操作失败',
                      icon: 'error',
                      mask: true
                    });
                  }
                  _context3.next = 11;
                  break;

                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3['catch'](0);

                  _this.$invoke('toast', 'showToast', {
                    title: _context3.t0.message,
                    icon: 'error',
                    mask: true
                  });

                case 11:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2, [[0, 8]]);
        }));

        return function cancelOrder(_x2) {
          return _ref6.apply(this, arguments);
        };
      }(),
      /**
       * 配送
       */
      deliverOrder: function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
          var _ref9, data;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return _wantHelpOrder2.default.deliver({ id: _this.detail['order_id'] });

                case 3:
                  _ref9 = _context4.sent;
                  data = _ref9.data;

                  if (data) {
                    _wepy2.default.navigateTo({
                      url: '/pages/order/result/index?type=grab'
                    });
                  } else {
                    _this.$invoke('toast', 'showToast', {
                      title: '抢单失败',
                      icon: 'error',
                      mask: true
                    });
                  }
                  _context4.next = 11;
                  break;

                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4['catch'](0);

                  _this.$invoke('toast', 'showToast', {
                    title: _context4.t0.message,
                    icon: 'error',
                    mask: true
                  });

                case 11:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this2, [[0, 8]]);
        }));

        return function deliverOrder(_x3) {
          return _ref8.apply(this, arguments);
        };
      }(),
      /**
       * 到货
       */
      finallyOrder: function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
          var _ref11, data;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return _wantHelpOrder2.default.finally({ id: _this.detail['order_id'] });

                case 3:
                  _ref11 = _context5.sent;
                  data = _ref11.data;

                  if (data) {
                    _wepy2.default.navigateTo({
                      url: '/pages/order/result/index?type=grab'
                    });
                  } else {
                    _this.$invoke('toast', 'showToast', {
                      title: '操作失败',
                      icon: 'error',
                      mask: true
                    });
                  }
                  _context5.next = 11;
                  break;

                case 8:
                  _context5.prev = 8;
                  _context5.t0 = _context5['catch'](0);

                  _this.$invoke('toast', 'showToast', {
                    title: _context5.t0.message,
                    icon: 'error',
                    mask: true
                  });

                case 11:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this2, [[0, 8]]);
        }));

        return function finallyOrder(_x4) {
          return _ref10.apply(this, arguments);
        };
      }(),
      /**
       * 结单
       */
      endOrder: function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params) {
          var _ref13, data;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return _wantHelpOrder2.default.end({ id: _this.detail['order_id'] });

                case 3:
                  _ref13 = _context6.sent;
                  data = _ref13.data;

                  if (data) {
                    _wepy2.default.navigateTo({
                      url: '/pages/order/result/index?type=grab'
                    });
                  } else {
                    _this.$invoke('toast', 'showToast', {
                      title: '操作失败',
                      icon: 'error',
                      mask: true
                    });
                  }
                  _context6.next = 11;
                  break;

                case 8:
                  _context6.prev = 8;
                  _context6.t0 = _context6['catch'](0);

                  _this.$invoke('toast', 'showToast', {
                    title: _context6.t0.message,
                    icon: 'error',
                    mask: true
                  });

                case 11:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this2, [[0, 8]]);
        }));

        return function endOrder(_x5) {
          return _ref12.apply(this, arguments);
        };
      }()
    }, _this.$props = { "avatar": { "v-bind:id.sync": "creater", "v-bind:id.once": "id" }, "comment": { "v-bind:detail.sync": "detail" } }, _this.$events = {}, _this.components = {
      avatar: _index2.default,
      toast: _index4.default,
      comment: _index6.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WantHelp, [{
    key: 'onLoad',
    value: function onLoad(opt) {
      this.id = opt.id || null;
      this.userInfo = this.$parent.globalData['userInfo'];
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.loadData();

              case 2:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onShow() {
        return _ref14.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.loadData();

              case 2:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function onPullDownRefresh() {
        return _ref15.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var _ref17, data, time;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _wantHelpOrder2.default.info({ id: this.id });

              case 3:
                _ref17 = _context9.sent;
                data = _ref17.data;

                this.detail = data.info;
                time = new Date(this.detail['_c']);

                this.orderId = this.detail['order_id'];
                this.detail['_c'] = time.getDateDiff(time);
                this.creater = data.info['creater'];
                this.runner = data.info['runner'];
                this.$apply();
                _wepy2.default.stopPullDownRefresh();
                _context9.next = 18;
                break;

              case 15:
                _context9.prev = 15;
                _context9.t0 = _context9['catch'](0);

                console.log(_context9.t0);

              case 18:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 15]]);
      }));

      function loadData() {
        return _ref16.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return WantHelp;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(WantHelp , 'pages/order/details/wantHelp/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwIiwiY29uZmlnIiwiZGF0YSIsIm9yZGVySWQiLCJ1c2VySW5mbyIsImNyZWF0ZXIiLCJydW5uZXIiLCJkZXRhaWwiLCJtZXRob2RzIiwiY2FsbHBob25lIiwicGhvbmUiLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJnb2hvbWUiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJlZGl0T3JkZXIiLCJwYXJhbXMiLCJncmFiT3JkZXIiLCJncmFiIiwiaWQiLCJuYXZpZ2F0ZVRvIiwiJGludm9rZSIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJtZXNzYWdlIiwicXVpdE9yZGVyIiwicXVpdCIsImNhbmNlbE9yZGVyIiwiY2FuY2VsIiwiZGVsaXZlck9yZGVyIiwiZGVsaXZlciIsImZpbmFsbHlPcmRlciIsImZpbmFsbHkiLCJlbmRPcmRlciIsImVuZCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYXZhdGFyIiwidG9hc3QiLCJjb21tZW50Iiwib3B0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCIkYXBwbHkiLCJsb2FkRGF0YSIsImluZm8iLCJ0aW1lIiwiRGF0ZSIsImdldERhdGVEaWZmIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1AsK0JBQXlCLElBRGxCO0FBRVAseUJBQW1CO0FBRlosSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBUyxJQURKO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsZUFBUyxJQUhKO0FBSUxDLGNBQVEsSUFKSDtBQUtMQyxjQUFRO0FBTEgsSyxRQU9QQyxPLEdBQVU7QUFDUkMsaUJBQVcsbUJBQUNDLEtBQUQsRUFBVztBQUNw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QUwsQ0FBVSxTQUFWLENBQWY7QUFDQSxxQkFBSzFDLE1BQUwsR0FBY0osS0FBSzhDLElBQUwsQ0FBVSxRQUFWLENBQWQ7QUFDQSxxQkFBS0YsTUFBTDtBQUNBLCtCQUFLTSxtQkFBTDs7Ozs7Ozs7QUFFQUMsd0JBQVFDLEdBQVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0TmdDLGVBQUtDLEk7O2tCQUF0QnZELFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgV2FuSGVscE9yZGVyQXBpIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9hcGlzL3dhbnRIZWxwT3JkZXInXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91c2Vycy9hdmF0YXIvaW5kZXgnXHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3RvYXN0L2luZGV4J1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL29yZGVyL2NvbW1lbnQvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbnRIZWxwIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICAnZW5hYmxlUHVsbERvd25SZWZyZXNoJzogdHJ1ZSxcclxuICAgICdiYWNrZ3JvdW5kQ29sb3InOiAnIzMzODVmZidcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIG9yZGVySWQ6IG51bGwsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBjcmVhdGVyOiBudWxsLFxyXG4gICAgcnVubmVyOiBudWxsLFxyXG4gICAgZGV0YWlsOiB7fVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2FsbHBob25lOiAocGhvbmUpID0+IHtcclxuICAgICAgd2VweS5tYWtlUGhvbmVDYWxsKHtcclxuICAgICAgICBwaG9uZU51bWJlcjogcGhvbmUgKyAnJ1xyXG5cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnb2hvbWU6ICgpID0+IHtcclxuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9ob21lL2luZGV4J1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog57yW6L6R6K6i5Y2VXHJcbiAgICAgKi9cclxuICAgIGVkaXRPcmRlcjogKHBhcmFtcykgPT4ge1xyXG5cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOaKouWNlVxyXG4gICAgICovXHJcbiAgICBncmFiT3JkZXI6IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFdhbkhlbHBPcmRlckFwaS5ncmFiKHsgaWQ6IHRoaXMuZGV0YWlsWydvcmRlcl9pZCddIH0pXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9vcmRlci9yZXN1bHQvaW5kZXg/dHlwZT1ncmFiJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5oqi5Y2V5aSx6LSlJyxcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgIHRpdGxlOiBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOaUvuW8g+iuouWNlVxyXG4gICAgICovXHJcbiAgICBxdWl0T3JkZXI6IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBXYW5IZWxwT3JkZXJBcGkucXVpdCh7IGlkOiB0aGlzLmRldGFpbFsnb3JkZXJfaWQnXSB9KVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvcmVzdWx0L2luZGV4P3R5cGU9Z3JhYidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aTjeS9nOWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5bmtojorqLljZVcclxuICAgICAqL1xyXG4gICAgY2FuY2VsT3JkZXI6IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBXYW5IZWxwT3JkZXJBcGkuY2FuY2VsKHsgaWQ6IHRoaXMuZGV0YWlsWydvcmRlcl9pZCddIH0pXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9vcmRlci9yZXN1bHQvaW5kZXg/dHlwZT1ncmFiJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5pON5L2c5aSx6LSlJyxcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgIHRpdGxlOiBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOmFjemAgVxyXG4gICAgICovXHJcbiAgICBkZWxpdmVyT3JkZXI6IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBXYW5IZWxwT3JkZXJBcGkuZGVsaXZlcih7IGlkOiB0aGlzLmRldGFpbFsnb3JkZXJfaWQnXSB9KVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvcmVzdWx0L2luZGV4P3R5cGU9Z3JhYidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aKouWNleWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDliLDotKdcclxuICAgICAqL1xyXG4gICAgZmluYWxseU9yZGVyOiBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmZpbmFsbHkoeyBpZDogdGhpcy5kZXRhaWxbJ29yZGVyX2lkJ10gfSlcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleD90eXBlPWdyYWInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmk43kvZzlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog57uT5Y2VXHJcbiAgICAgKi9cclxuICAgIGVuZE9yZGVyOiBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmVuZCh7IGlkOiB0aGlzLmRldGFpbFsnb3JkZXJfaWQnXSB9KVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvcmVzdWx0L2luZGV4P3R5cGU9Z3JhYidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aTjeS9nOWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gJHByb3BzID0ge1wiYXZhdGFyXCI6e1widi1iaW5kOmlkLnN5bmNcIjpcImNyZWF0ZXJcIixcInYtYmluZDppZC5vbmNlXCI6XCJpZFwifSxcImNvbW1lbnRcIjp7XCJ2LWJpbmQ6ZGV0YWlsLnN5bmNcIjpcImRldGFpbFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBhdmF0YXI6IEF2YXRhcixcclxuICAgIHRvYXN0OiBUb2FzdCxcclxuICAgIGNvbW1lbnQ6IENvbW1lbnRcclxuICB9XHJcbiAgb25Mb2FkKG9wdCkge1xyXG4gICAgdGhpcy5pZCA9IG9wdC5pZCB8fCBudWxsXHJcbiAgICB0aGlzLnVzZXJJbmZvID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGFbJ3VzZXJJbmZvJ11cclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbiAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXHJcbiAgfVxyXG4gIGFzeW5jIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuI7mjIflrprnmoTnu4Tku7bpgJrkv6FcclxuICAgICAqL1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXHJcbiAgfVxyXG4gIGFzeW5jIGxvYWREYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmluZm8oeyBpZDogdGhpcy5pZCB9KVxyXG4gICAgICB0aGlzLmRldGFpbCA9IGRhdGEuaW5mb1xyXG4gICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKHRoaXMuZGV0YWlsWydfYyddKVxyXG4gICAgICB0aGlzLm9yZGVySWQgPSB0aGlzLmRldGFpbFsnb3JkZXJfaWQnXVxyXG4gICAgICB0aGlzLmRldGFpbFsnX2MnXSA9IHRpbWUuZ2V0RGF0ZURpZmYodGltZSlcclxuICAgICAgdGhpcy5jcmVhdGVyID0gZGF0YS5pbmZvWydjcmVhdGVyJ11cclxuICAgICAgdGhpcy5ydW5uZXIgPSBkYXRhLmluZm9bJ3J1bm5lciddXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19