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
    }, _this.$props = { "avatar": { "v-bind:id.sync": "creater", "v-bind:id.once": "id" } }, _this.$events = {}, _this.components = {
      avatar: _index2.default,
      toast: _index4.default
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

                this.detail['_c'] = time.getDateDiff(time);
                this.creater = data.info['creater'];
                this.runner = data.info['runner'];
                this.$apply();
                _wepy2.default.stopPullDownRefresh();
                _context9.next = 17;
                break;

              case 14:
                _context9.prev = 14;
                _context9.t0 = _context9['catch'](0);

                console.log(_context9.t0);

              case 17:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 14]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIldhbnRIZWxwIiwiY29uZmlnIiwiZGF0YSIsInVzZXJJbmZvIiwiY3JlYXRlciIsInJ1bm5lciIsImRldGFpbCIsIm1ldGhvZHMiLCJjYWxscGhvbmUiLCJwaG9uZSIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImdvaG9tZSIsInN3aXRjaFRhYiIsInVybCIsImVkaXRPcmRlciIsInBhcmFtcyIsImdyYWJPcmRlciIsImdyYWIiLCJpZCIsIm5hdmlnYXRlVG8iLCIkaW52b2tlIiwidGl0bGUiLCJpY29uIiwibWFzayIsIm1lc3NhZ2UiLCJxdWl0T3JkZXIiLCJxdWl0IiwiY2FuY2VsT3JkZXIiLCJjYW5jZWwiLCJkZWxpdmVyT3JkZXIiLCJkZWxpdmVyIiwiZmluYWxseU9yZGVyIiwiZmluYWxseSIsImVuZE9yZGVyIiwiZW5kIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJhdmF0YXIiLCJ0b2FzdCIsIm9wdCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiJGFwcGx5IiwibG9hZERhdGEiLCJpbmZvIiwidGltZSIsIkRhdGUiLCJnZXREYXRlRGlmZiIsInN0b3BQdWxsRG93blJlZnJlc2giLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUCwrQkFBeUIsSUFEbEI7QUFFUCx5QkFBbUI7QUFGWixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGVBQVMsSUFGSjtBQUdMQyxjQUFRLElBSEg7QUFJTEMsY0FBUTtBQUpILEssUUFNUEMsTyxHQUFVO0FBQ1JDLGlCQUFXLG1CQUFDQyxLQUFELEVBQVc7QUFDcEIsdUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLHVCQUFhRixRQUFROztBQURKLFNBQW5CO0FBSUQsT0FOTztBQU9SRyxjQUFRLGtCQUFNO0FBQ1osdUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxlQUFLO0FBRFEsU0FBZjtBQUdELE9BWE87QUFZUjs7O0FBR0FDLGlCQUFXLG1CQUFDQyxNQUFELEVBQVksQ0FFdEIsQ0FqQk87QUFrQlI7OztBQUdBQztBQUFBLDRFQUFXO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRWMsd0JBQWdCQyxJQUFoQixDQUFxQixFQUFFQyxJQUFJLEtBQUtiLE1BQUwsQ0FBWSxVQUFaLENBQU4sRUFBckIsQ0FGZDs7QUFBQTtBQUFBO0FBRURKLHNCQUZDLFNBRURBLElBRkM7O0FBR1Asc0JBQUlBLElBQUosRUFBVTtBQUNSLG1DQUFLa0IsVUFBTCxDQUFnQjtBQUNkTiwyQkFBSztBQURTLHFCQUFoQjtBQUdELG1CQUpELE1BSU87QUFDTCx5QkFBS08sT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDZCQUFPLE1BRDBCO0FBRWpDQyw0QkFBTSxPQUYyQjtBQUdqQ0MsNEJBQU07QUFIMkIscUJBQW5DO0FBS0Q7QUFiTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFlUCx1QkFBS0gsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDJCQUFPLFlBQUVHLE9BRHdCO0FBRWpDRiwwQkFBTSxPQUYyQjtBQUdqQ0MsMEJBQU07QUFIMkIsbUJBQW5DOztBQWZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVg7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsU0FyQlE7QUEyQ1I7OztBQUdBRTtBQUFBLDRFQUFXLGtCQUFPVixNQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRWMsd0JBQWdCVyxJQUFoQixDQUFxQixFQUFFUixJQUFJLE1BQUtiLE1BQUwsQ0FBWSxVQUFaLENBQU4sRUFBckIsQ0FGZDs7QUFBQTtBQUFBO0FBRURKLHNCQUZDLFNBRURBLElBRkM7O0FBR1Asc0JBQUlBLElBQUosRUFBVTtBQUNSLG1DQUFLa0IsVUFBTCxDQUFnQjtBQUNkTiwyQkFBSztBQURTLHFCQUFoQjtBQUdELG1CQUpELE1BSU87QUFDTCwwQkFBS08sT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDZCQUFPLE1BRDBCO0FBRWpDQyw0QkFBTSxPQUYyQjtBQUdqQ0MsNEJBQU07QUFIMkIscUJBQW5DO0FBS0Q7QUFiTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFlUCx3QkFBS0gsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDJCQUFPLGFBQUVHLE9BRHdCO0FBRWpDRiwwQkFBTSxPQUYyQjtBQUdqQ0MsMEJBQU07QUFIMkIsbUJBQW5DOztBQWZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E5Q1E7QUFvRVI7OztBQUdBSTtBQUFBLDRFQUFhLGtCQUFPWixNQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRVksd0JBQWdCYSxNQUFoQixDQUF1QixFQUFFVixJQUFJLE1BQUtiLE1BQUwsQ0FBWSxVQUFaLENBQU4sRUFBdkIsQ0FGWjs7QUFBQTtBQUFBO0FBRUhKLHNCQUZHLFNBRUhBLElBRkc7O0FBR1Qsc0JBQUlBLElBQUosRUFBVTtBQUNSLG1DQUFLa0IsVUFBTCxDQUFnQjtBQUNkTiwyQkFBSztBQURTLHFCQUFoQjtBQUdELG1CQUpELE1BSU87QUFDTCwwQkFBS08sT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDZCQUFPLE1BRDBCO0FBRWpDQyw0QkFBTSxPQUYyQjtBQUdqQ0MsNEJBQU07QUFIMkIscUJBQW5DO0FBS0Q7QUFiUTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFlVCx3QkFBS0gsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDJCQUFPLGFBQUVHLE9BRHdCO0FBRWpDRiwwQkFBTSxPQUYyQjtBQUdqQ0MsMEJBQU07QUFIMkIsbUJBQW5DOztBQWZTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F2RVE7QUE4RlI7OztBQUdBTTtBQUFBLDRFQUFjLGtCQUFPZCxNQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRVcsd0JBQWdCZSxPQUFoQixDQUF3QixFQUFFWixJQUFJLE1BQUtiLE1BQUwsQ0FBWSxVQUFaLENBQU4sRUFBeEIsQ0FGWDs7QUFBQTtBQUFBO0FBRUpKLHNCQUZJLFNBRUpBLElBRkk7O0FBR1Ysc0JBQUlBLElBQUosRUFBVTtBQUNSLG1DQUFLa0IsVUFBTCxDQUFnQjtBQUNkTiwyQkFBSztBQURTLHFCQUFoQjtBQUdELG1CQUpELE1BSU87QUFDTCwwQkFBS08sT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDZCQUFPLE1BRDBCO0FBRWpDQyw0QkFBTSxPQUYyQjtBQUdqQ0MsNEJBQU07QUFIMkIscUJBQW5DO0FBS0Q7QUFiUztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFlVix3QkFBS0gsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDJCQUFPLGFBQUVHLE9BRHdCO0FBRWpDRiwwQkFBTSxPQUYyQjtBQUdqQ0MsMEJBQU07QUFIMkIsbUJBQW5DOztBQWZVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FqR1E7QUF1SFI7OztBQUdBUTtBQUFBLDZFQUFjLGtCQUFPaEIsTUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVXLHdCQUFnQmlCLE9BQWhCLENBQXdCLEVBQUVkLElBQUksTUFBS2IsTUFBTCxDQUFZLFVBQVosQ0FBTixFQUF4QixDQUZYOztBQUFBO0FBQUE7QUFFSkosc0JBRkksVUFFSkEsSUFGSTs7QUFHVixzQkFBSUEsSUFBSixFQUFVO0FBQ1IsbUNBQUtrQixVQUFMLENBQWdCO0FBQ2ROLDJCQUFLO0FBRFMscUJBQWhCO0FBR0QsbUJBSkQsTUFJTztBQUNMLDBCQUFLTyxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsNkJBQU8sTUFEMEI7QUFFakNDLDRCQUFNLE9BRjJCO0FBR2pDQyw0QkFBTTtBQUgyQixxQkFBbkM7QUFLRDtBQWJTO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWVWLHdCQUFLSCxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsMkJBQU8sYUFBRUcsT0FEd0I7QUFFakNGLDBCQUFNLE9BRjJCO0FBR2pDQywwQkFBTTtBQUgyQixtQkFBbkM7O0FBZlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTFIUTtBQWdKUjs7O0FBR0FVO0FBQUEsNkVBQVUsa0JBQU9sQixNQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRWUsd0JBQWdCbUIsR0FBaEIsQ0FBb0IsRUFBRWhCLElBQUksTUFBS2IsTUFBTCxDQUFZLFVBQVosQ0FBTixFQUFwQixDQUZmOztBQUFBO0FBQUE7QUFFQUosc0JBRkEsVUFFQUEsSUFGQTs7QUFHTixzQkFBSUEsSUFBSixFQUFVO0FBQ1IsbUNBQUtrQixVQUFMLENBQWdCO0FBQ2ROLDJCQUFLO0FBRFMscUJBQWhCO0FBR0QsbUJBSkQsTUFJTztBQUNMLDBCQUFLTyxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsNkJBQU8sTUFEMEI7QUFFakNDLDRCQUFNLE9BRjJCO0FBR2pDQyw0QkFBTTtBQUgyQixxQkFBbkM7QUFLRDtBQWJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWVOLHdCQUFLSCxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsMkJBQU8sYUFBRUcsT0FEd0I7QUFFakNGLDBCQUFNLE9BRjJCO0FBR2pDQywwQkFBTTtBQUgyQixtQkFBbkM7O0FBZk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5KUSxLLFFBMEtYWSxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsa0JBQWlCLFNBQWxCLEVBQTRCLGtCQUFpQixJQUE3QyxFQUFWLEUsUUFDVkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLDZCQURVO0FBRVZDO0FBRlUsSzs7Ozs7MkJBSUxDLEcsRUFBSztBQUNWLFdBQUt0QixFQUFMLEdBQVVzQixJQUFJdEIsRUFBSixJQUFVLElBQXBCO0FBQ0EsV0FBS2hCLFFBQUwsR0FBZ0IsS0FBS3VDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QixVQUF4QixDQUFoQjtBQUNBLFdBQUtDLE1BQUw7QUFFRDs7Ozs7Ozs7Ozt1QkFFTyxLQUFLQyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBTUEsS0FBS0EsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlpQix3QkFBZ0JDLElBQWhCLENBQXFCLEVBQUUzQixJQUFJLEtBQUtBLEVBQVgsRUFBckIsQzs7OztBQUFmakIsb0IsVUFBQUEsSTs7QUFDTixxQkFBS0ksTUFBTCxHQUFjSixLQUFLNEMsSUFBbkI7QUFDSUMsb0IsR0FBTyxJQUFJQyxJQUFKLENBQVMsS0FBSzFDLE1BQUwsQ0FBWSxJQUFaLENBQVQsQzs7QUFDWCxxQkFBS0EsTUFBTCxDQUFZLElBQVosSUFBb0J5QyxLQUFLRSxXQUFMLENBQWlCRixJQUFqQixDQUFwQjtBQUNBLHFCQUFLM0MsT0FBTCxHQUFlRixLQUFLNEMsSUFBTCxDQUFVLFNBQVYsQ0FBZjtBQUNBLHFCQUFLekMsTUFBTCxHQUFjSCxLQUFLNEMsSUFBTCxDQUFVLFFBQVYsQ0FBZDtBQUNBLHFCQUFLRixNQUFMO0FBQ0EsK0JBQUtNLG1CQUFMOzs7Ozs7OztBQUVBQyx3QkFBUUMsR0FBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJOZ0MsZUFBS0MsSTs7a0JBQXRCckQsUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCBXYW5IZWxwT3JkZXJBcGkgZnJvbSAnLi4vLi4vLi4vLi4vbGliL2FwaXMvd2FudEhlbHBPcmRlcidcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzL2F2YXRhci9pbmRleCdcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdG9hc3QvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbnRIZWxwIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICAnZW5hYmxlUHVsbERvd25SZWZyZXNoJzogdHJ1ZSxcclxuICAgICdiYWNrZ3JvdW5kQ29sb3InOiAnIzMzODVmZidcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGNyZWF0ZXI6IG51bGwsXHJcbiAgICBydW5uZXI6IG51bGwsXHJcbiAgICBkZXRhaWw6IHt9XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjYWxscGhvbmU6IChwaG9uZSkgPT4ge1xyXG4gICAgICB3ZXB5Lm1ha2VQaG9uZUNhbGwoe1xyXG4gICAgICAgIHBob25lTnVtYmVyOiBwaG9uZSArICcnXHJcblxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGdvaG9tZTogKCkgPT4ge1xyXG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2hvbWUvaW5kZXgnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDnvJbovpHorqLljZVcclxuICAgICAqL1xyXG4gICAgZWRpdE9yZGVyOiAocGFyYW1zKSA9PiB7XHJcblxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5oqi5Y2VXHJcbiAgICAgKi9cclxuICAgIGdyYWJPcmRlcjogYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmdyYWIoeyBpZDogdGhpcy5kZXRhaWxbJ29yZGVyX2lkJ10gfSlcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleD90eXBlPWdyYWInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmiqLljZXlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5pS+5byD6K6i5Y2VXHJcbiAgICAgKi9cclxuICAgIHF1aXRPcmRlcjogYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFdhbkhlbHBPcmRlckFwaS5xdWl0KHsgaWQ6IHRoaXMuZGV0YWlsWydvcmRlcl9pZCddIH0pXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9vcmRlci9yZXN1bHQvaW5kZXg/dHlwZT1ncmFiJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5pON5L2c5aSx6LSlJyxcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgIHRpdGxlOiBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWPlua2iOiuouWNlVxyXG4gICAgICovXHJcbiAgICBjYW5jZWxPcmRlcjogYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFdhbkhlbHBPcmRlckFwaS5jYW5jZWwoeyBpZDogdGhpcy5kZXRhaWxbJ29yZGVyX2lkJ10gfSlcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleD90eXBlPWdyYWInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmk43kvZzlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOmFjemAgVxyXG4gICAgICovXHJcbiAgICBkZWxpdmVyT3JkZXI6IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBXYW5IZWxwT3JkZXJBcGkuZGVsaXZlcih7IGlkOiB0aGlzLmRldGFpbFsnb3JkZXJfaWQnXSB9KVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvcmVzdWx0L2luZGV4P3R5cGU9Z3JhYidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aKouWNleWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDliLDotKdcclxuICAgICAqL1xyXG4gICAgZmluYWxseU9yZGVyOiBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmZpbmFsbHkoeyBpZDogdGhpcy5kZXRhaWxbJ29yZGVyX2lkJ10gfSlcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL3Jlc3VsdC9pbmRleD90eXBlPWdyYWInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmk43kvZzlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog57uT5Y2VXHJcbiAgICAgKi9cclxuICAgIGVuZE9yZGVyOiBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmVuZCh7IGlkOiB0aGlzLmRldGFpbFsnb3JkZXJfaWQnXSB9KVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvcmVzdWx0L2luZGV4P3R5cGU9Z3JhYidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aTjeS9nOWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gJHByb3BzID0ge1wiYXZhdGFyXCI6e1widi1iaW5kOmlkLnN5bmNcIjpcImNyZWF0ZXJcIixcInYtYmluZDppZC5vbmNlXCI6XCJpZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBhdmF0YXI6IEF2YXRhcixcclxuICAgIHRvYXN0OiBUb2FzdFxyXG4gIH1cclxuICBvbkxvYWQob3B0KSB7XHJcbiAgICB0aGlzLmlkID0gb3B0LmlkIHx8IG51bGxcclxuICAgIHRoaXMudXNlckluZm8gPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YVsndXNlckluZm8nXVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG5cclxuICB9XHJcbiAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXHJcbiAgfVxyXG4gIGFzeW5jIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuI7mjIflrprnmoTnu4Tku7bpgJrkv6FcclxuICAgICAqL1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXHJcbiAgfVxyXG4gIGFzeW5jIGxvYWREYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgV2FuSGVscE9yZGVyQXBpLmluZm8oeyBpZDogdGhpcy5pZCB9KTtcclxuICAgICAgdGhpcy5kZXRhaWwgPSBkYXRhLmluZm9cclxuICAgICAgbGV0IHRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRldGFpbFsnX2MnXSlcclxuICAgICAgdGhpcy5kZXRhaWxbJ19jJ10gPSB0aW1lLmdldERhdGVEaWZmKHRpbWUpXHJcbiAgICAgIHRoaXMuY3JlYXRlciA9IGRhdGEuaW5mb1snY3JlYXRlciddXHJcbiAgICAgIHRoaXMucnVubmVyID0gZGF0YS5pbmZvWydydW5uZXInXVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==