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

                console.log(data);
                this.detail = data.info;
                time = new Date(this.detail['_c']);

                this.orderId = this.detail['order_id'];
                this.detail['_c'] = time.getDateDiff(time);
                this.creater = data.info['creater'];
                this.runner = data.info['runner'];
                this.$apply();
                _wepy2.default.stopPullDownRefresh();
                _context9.next = 19;
                break;

              case 16:
                _context9.prev = 16;
                _context9.t0 = _context9['catch'](0);

                console.log(_context9.t0);

              case 19:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 16]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwIiwiY29uZmlnIiwiZGF0YSIsIm9yZGVySWQiLCJ1c2VySW5mbyIsImNyZWF0ZXIiLCJydW5uZXIiLCJkZXRhaWwiLCJtZXRob2RzIiwiY2FsbHBob25lIiwicGhvbmUiLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJnb2hvbWUiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJlZGl0T3JkZXIiLCJwYXJhbXMiLCJncmFiT3JkZXIiLCJncmFiIiwiaWQiLCJuYXZpZ2F0ZVRvIiwiJGludm9rZSIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJtZXNzYWdlIiwicXVpdE9yZGVyIiwicXVpdCIsImNhbmNlbE9yZGVyIiwiY2FuY2VsIiwiZGVsaXZlck9yZGVyIiwiZGVsaXZlciIsImZpbmFsbHlPcmRlciIsImZpbmFsbHkiLCJlbmRPcmRlciIsImVuZCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYXZhdGFyIiwidG9hc3QiLCJjb21tZW50Iiwib3B0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCIkYXBwbHkiLCJsb2FkRGF0YSIsImluZm8iLCJjb25zb2xlIiwibG9nIiwidGltZSIsIkRhdGUiLCJnZXREYXRlRGlmZiIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1AsK0JBQXlCLElBRGxCO0FBRVAseUJBQW1CO0FBRlosSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBUyxJQURKO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsZUFBUyxJQUhKO0FBSUxDLGNBQVEsSUFKSDtBQUtMQyxjQUFRO0FBTEgsSyxRQU9QQyxPLEdBQVU7QUFDUkMsaUJBQVcsbUJBQUNDLEtBQUQsRUFBVztBQUNw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Q0EscUJBQUs5QyxPQUFMLEdBQWVILEtBQUs4QyxJQUFMLENBQVUsU0FBVixDQUFmO0FBQ0EscUJBQUsxQyxNQUFMLEdBQWNKLEtBQUs4QyxJQUFMLENBQVUsUUFBVixDQUFkO0FBQ0EscUJBQUtGLE1BQUw7QUFDQSwrQkFBS1EsbUJBQUw7Ozs7Ozs7O0FBRUFMLHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdk5nQyxlQUFLSyxJOztrQkFBdEJ2RCxRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IFdhbkhlbHBPcmRlckFwaSBmcm9tICcuLi8uLi8uLi8uLi9saWIvYXBpcy93YW50SGVscE9yZGVyJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvYXZhdGFyL2luZGV4J1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdC9pbmRleCdcclxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcmRlci9jb21tZW50L2luZGV4J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYW50SGVscCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgJ2VuYWJsZVB1bGxEb3duUmVmcmVzaCc6IHRydWUsXHJcbiAgICAnYmFja2dyb3VuZENvbG9yJzogJyMzMzg1ZmYnXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBvcmRlcklkOiBudWxsLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgY3JlYXRlcjogbnVsbCxcclxuICAgIHJ1bm5lcjogbnVsbCxcclxuICAgIGRldGFpbDoge31cclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGNhbGxwaG9uZTogKHBob25lKSA9PiB7XHJcbiAgICAgIHdlcHkubWFrZVBob25lQ2FsbCh7XHJcbiAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lICsgJydcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZ29ob21lOiAoKSA9PiB7XHJcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvaG9tZS9pbmRleCdcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOe8lui+keiuouWNlVxyXG4gICAgICovXHJcbiAgICBlZGl0T3JkZXI6IChwYXJhbXMpID0+IHtcclxuXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDmiqLljZVcclxuICAgICAqL1xyXG4gICAgZ3JhYk9yZGVyOiBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBXYW5IZWxwT3JkZXJBcGkuZ3JhYih7IGlkOiB0aGlzLmRldGFpbFsnb3JkZXJfaWQnXSB9KVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvcmVzdWx0L2luZGV4P3R5cGU9Z3JhYidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aKouWNleWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDmlL7lvIPorqLljZVcclxuICAgICAqL1xyXG4gICAgcXVpdE9yZGVyOiBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLnF1aXQoeyBpZDogdGhpcy5kZXRhaWxbJ29yZGVyX2lkJ10gfSlcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleD90eXBlPWdyYWInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmk43kvZzlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5Y+W5raI6K6i5Y2VXHJcbiAgICAgKi9cclxuICAgIGNhbmNlbE9yZGVyOiBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmNhbmNlbCh7IGlkOiB0aGlzLmRldGFpbFsnb3JkZXJfaWQnXSB9KVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvcmVzdWx0L2luZGV4P3R5cGU9Z3JhYidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aTjeS9nOWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDphY3pgIFcclxuICAgICAqL1xyXG4gICAgZGVsaXZlck9yZGVyOiBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmRlbGl2ZXIoeyBpZDogdGhpcy5kZXRhaWxbJ29yZGVyX2lkJ10gfSlcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleD90eXBlPWdyYWInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmiqLljZXlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5Yiw6LSnXHJcbiAgICAgKi9cclxuICAgIGZpbmFsbHlPcmRlcjogYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFdhbkhlbHBPcmRlckFwaS5maW5hbGx5KHsgaWQ6IHRoaXMuZGV0YWlsWydvcmRlcl9pZCddIH0pXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9vcmRlci9yZXN1bHQvaW5kZXg/dHlwZT1ncmFiJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5pON5L2c5aSx6LSlJyxcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgIHRpdGxlOiBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOe7k+WNlVxyXG4gICAgICovXHJcbiAgICBlbmRPcmRlcjogYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFdhbkhlbHBPcmRlckFwaS5lbmQoeyBpZDogdGhpcy5kZXRhaWxbJ29yZGVyX2lkJ10gfSlcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleD90eXBlPWdyYWInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmk43kvZzlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICRwcm9wcyA9IHtcImF2YXRhclwiOntcInYtYmluZDppZC5zeW5jXCI6XCJjcmVhdGVyXCIsXCJ2LWJpbmQ6aWQub25jZVwiOlwiaWRcIn0sXCJjb21tZW50XCI6e1widi1iaW5kOmRldGFpbC5zeW5jXCI6XCJkZXRhaWxcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgYXZhdGFyOiBBdmF0YXIsXHJcbiAgICB0b2FzdDogVG9hc3QsXHJcbiAgICBjb21tZW50OiBDb21tZW50XHJcbiAgfVxyXG4gIG9uTG9hZChvcHQpIHtcclxuICAgIHRoaXMuaWQgPSBvcHQuaWQgfHwgbnVsbFxyXG4gICAgdGhpcy51c2VySW5mbyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhWyd1c2VySW5mbyddXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG4gIGFzeW5jIG9uU2hvdygpIHtcclxuICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxyXG4gIH1cclxuICBhc3luYyBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIC8qKlxyXG4gICAgICog5LiO5oyH5a6a55qE57uE5Lu26YCa5L+hXHJcbiAgICAgKi9cclxuICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxyXG4gIH1cclxuICBhc3luYyBsb2FkRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFdhbkhlbHBPcmRlckFwaS5pbmZvKHsgaWQ6IHRoaXMuaWQgfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuZGV0YWlsID0gZGF0YS5pbmZvXHJcbiAgICAgIGxldCB0aW1lID0gbmV3IERhdGUodGhpcy5kZXRhaWxbJ19jJ10pXHJcbiAgICAgIHRoaXMub3JkZXJJZCA9IHRoaXMuZGV0YWlsWydvcmRlcl9pZCddXHJcbiAgICAgIHRoaXMuZGV0YWlsWydfYyddID0gdGltZS5nZXREYXRlRGlmZih0aW1lKVxyXG4gICAgICB0aGlzLmNyZWF0ZXIgPSBkYXRhLmluZm9bJ2NyZWF0ZXInXVxyXG4gICAgICB0aGlzLnJ1bm5lciA9IGRhdGEuaW5mb1sncnVubmVyJ11cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=