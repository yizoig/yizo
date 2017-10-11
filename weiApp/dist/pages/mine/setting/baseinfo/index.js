'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../../../npm/wepy-async-function/index.js');

var _user = require('./../../../../lib/apis/user.js');

var _user2 = _interopRequireDefault(_user);

var _index = require('./../../../../components/users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../../components/toast/index.js');

var _index4 = _interopRequireDefault(_index3);

var _user3 = require('./../../../../lib/services/user.js');

var _user4 = _interopRequireDefault(_user3);

var _index5 = require('./../../../../lib/utils/index.js');

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
      userInfo: null,
      cache: {},
      edit: false
    }, _this.components = {
      avatar: _index2.default,
      toast: _index4.default
    }, _this.methods = {
      edit: function edit(e) {
        /**
         * 检查值是否修改
         */
        if (this.userInfo[e.currentTarget.dataset.name] != e.detail.value) {
          this.cache[e.currentTarget.dataset.name] = e.detail.value;
        } else {
          delete this.cache[e.currentTarget.dataset.name];
        }
        if (Object.keys(this.cache).length > 1) {
          this.edit = true;
        } else {
          this.edit = false;
        }
        this.$apply();
      },
      submit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var params, _ref3, data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  params = _index5.Validate.check(this.data.cache, [['nickname', 'require', '姓名不能为空', _index5.Validate.EXISTS_VALIDATE], ['gender', ['0', '1'], '性别错误', _index5.Validate.EXISTS_VALIDATE, 'in']]);

                  console.log(this.data.cache);
                  console.log(params);
                  this.$invoke('toast', 'showToast', {
                    title: '加载中',
                    icon: 'loading',
                    mask: true
                  });
                  _context.next = 7;
                  return _user2.default.updateInfo(params);

                case 7:
                  _ref3 = _context.sent;
                  data = _ref3.data;

                  if (data) {
                    console.log(_user4.default);
                    _user4.default.setUserInfo(this.data.cache);
                    this.$invoke('toast', 'showToast', {
                      title: '修改成功',
                      icon: 'success',
                      mask: true
                    });
                    setTimeout(function () {
                      this.$back();
                    }.bind(this), 1000);
                  } else {
                    this.$invoke('toast', 'showToast', {
                      title: '修改失败',
                      icon: 'error',
                      mask: true
                    });
                  }
                  _context.next = 15;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](0);

                  this.$invoke('toast', 'showToast', {
                    title: _context.t0.message,
                    icon: 'error',
                    mask: true
                  });

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 12]]);
        }));

        function submit() {
          return _ref2.apply(this, arguments);
        }

        return submit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseInfoSettting, [{
    key: 'onShow',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var userInfo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userInfo = _wepy2.default.getStorageSync('userInfo');

                this.cache['id'] = userInfo['id'];
                this.userInfo = userInfo;
                this.$apply();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return BaseInfoSettting;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(BaseInfoSettting , 'pages/mine/setting/baseinfo/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJhc2VJbmZvU2V0dHRpbmciLCJkYXRhIiwidXNlckluZm8iLCJjYWNoZSIsImVkaXQiLCJjb21wb25lbnRzIiwiYXZhdGFyIiwidG9hc3QiLCJtZXRob2RzIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmFtZSIsImRldGFpbCIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIiRhcHBseSIsInN1Ym1pdCIsInBhcmFtcyIsImNoZWNrIiwiRVhJU1RTX1ZBTElEQVRFIiwiY29uc29sZSIsImxvZyIsIiRpbnZva2UiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwidXBkYXRlSW5mbyIsInNldFVzZXJJbmZvIiwic2V0VGltZW91dCIsIiRiYWNrIiwiYmluZCIsIm1lc3NhZ2UiLCJnZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxnQjs7Ozs7Ozs7Ozs7Ozs7ME1BQ25CQyxJLEdBQU87QUFDTEMsZ0JBQVUsSUFETDtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsWUFBTTtBQUhELEssUUFLUEMsVSxHQUFhO0FBQ1hDLDZCQURXO0FBRVhDO0FBRlcsSyxRQUliQyxPLEdBQVU7QUFDUkosWUFBTSxjQUFTSyxDQUFULEVBQVk7QUFDaEI7OztBQUdBLFlBQUksS0FBS1AsUUFBTCxDQUFjTyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBdEMsS0FBK0NILEVBQUVJLE1BQUYsQ0FBU0MsS0FBNUQsRUFBbUU7QUFDakUsZUFBS1gsS0FBTCxDQUFXTSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBbkMsSUFBMkNILEVBQUVJLE1BQUYsQ0FBU0MsS0FBcEQ7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxLQUFLWCxLQUFMLENBQVdNLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUFuQyxDQUFQO0FBQ0Q7QUFDRCxZQUFJRyxPQUFPQyxJQUFQLENBQVksS0FBS2IsS0FBakIsRUFBd0JjLE1BQXhCLEdBQWlDLENBQXJDLEVBQXdDO0FBQ3RDLGVBQUtiLElBQUwsR0FBWSxJQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBS0EsSUFBTCxHQUFZLEtBQVo7QUFDRDtBQUNELGFBQUtjLE1BQUw7QUFDRCxPQWhCTztBQWlCUkM7QUFBQSw0RUFBUTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUMsd0JBRkEsR0FFUyxpQkFBU0MsS0FBVCxDQUFlLEtBQUtwQixJQUFMLENBQVVFLEtBQXpCLEVBQWdDLENBQzNDLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsUUFBeEIsRUFBa0MsaUJBQVNtQixlQUEzQyxDQUQyQyxFQUUzQyxDQUFDLFFBQUQsRUFBVyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQVgsRUFBdUIsTUFBdkIsRUFBK0IsaUJBQVNBLGVBQXhDLEVBQXlELElBQXpELENBRjJDLENBQWhDLENBRlQ7O0FBTUpDLDBCQUFRQyxHQUFSLENBQVksS0FBS3ZCLElBQUwsQ0FBVUUsS0FBdEI7QUFDQW9CLDBCQUFRQyxHQUFSLENBQVlKLE1BQVo7QUFDQSx1QkFBS0ssT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLDJCQUFPLEtBRDBCO0FBRWpDQywwQkFBTSxTQUYyQjtBQUdqQ0MsMEJBQU07QUFIMkIsbUJBQW5DO0FBUkk7QUFBQSx5QkFhaUIsZUFBUUMsVUFBUixDQUFtQlQsTUFBbkIsQ0FiakI7O0FBQUE7QUFBQTtBQWFFbkIsc0JBYkYsU0FhRUEsSUFiRjs7QUFjSixzQkFBSUEsSUFBSixFQUFVO0FBQ1JzQiw0QkFBUUMsR0FBUjtBQUNBLG1DQUFLTSxXQUFMLENBQWlCLEtBQUs3QixJQUFMLENBQVVFLEtBQTNCO0FBQ0EseUJBQUtzQixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsNkJBQU8sTUFEMEI7QUFFakNDLDRCQUFNLFNBRjJCO0FBR2pDQyw0QkFBTTtBQUgyQixxQkFBbkM7QUFLQUcsK0JBQVcsWUFBVztBQUNwQiwyQkFBS0MsS0FBTDtBQUNELHFCQUZVLENBRVRDLElBRlMsQ0FFSixJQUZJLENBQVgsRUFFYyxJQUZkO0FBR0QsbUJBWEQsTUFXTztBQUNMLHlCQUFLUixPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsNkJBQU8sTUFEMEI7QUFFakNDLDRCQUFNLE9BRjJCO0FBR2pDQyw0QkFBTTtBQUgyQixxQkFBbkM7QUFLRDtBQS9CRztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFpQ0osdUJBQUtILE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQywyQkFBTyxZQUFFUSxPQUR3QjtBQUVqQ1AsMEJBQU0sT0FGMkI7QUFHakNDLDBCQUFNO0FBSDJCLG1CQUFuQzs7QUFqQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWpCUSxLOzs7Ozs7Ozs7Ozs7QUEyREoxQix3QixHQUFXLGVBQUtpQyxjQUFMLENBQW9CLFVBQXBCLEM7O0FBQ2YscUJBQUtoQyxLQUFMLENBQVcsSUFBWCxJQUFtQkQsU0FBUyxJQUFULENBQW5CO0FBQ0EscUJBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUtnQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEUwQyxlQUFLa0IsSTs7a0JBQTlCcEMsZ0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgVXNlckFwaSBmcm9tICcuLi8uLi8uLi8uLi9saWIvYXBpcy91c2VyJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvYXZhdGFyL2luZGV4J1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdC9pbmRleCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vLi4vbGliL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCB7IFZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3V0aWxzL2luZGV4J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSW5mb1NldHR0aW5nIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICBjYWNoZToge30sXHJcbiAgICBlZGl0OiBmYWxzZVxyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgYXZhdGFyOiBBdmF0YXIsXHJcbiAgICB0b2FzdDogVG9hc3RcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGVkaXQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOajgOafpeWAvOaYr+WQpuS/ruaUuVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKHRoaXMudXNlckluZm9bZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZV0gIT0gZS5kZXRhaWwudmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNhY2hlW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jYWNoZVtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmNhY2hlKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0ID0gdHJ1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWRpdCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdDogYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFZhbGlkYXRlLmNoZWNrKHRoaXMuZGF0YS5jYWNoZSwgW1xyXG4gICAgICAgICAgWyduaWNrbmFtZScsICdyZXF1aXJlJywgJ+Wnk+WQjeS4jeiDveS4uuepuicsIFZhbGlkYXRlLkVYSVNUU19WQUxJREFURV0sXHJcbiAgICAgICAgICBbJ2dlbmRlcicsIFsnMCcsICcxJ10sICfmgKfliKvplJnor68nLCBWYWxpZGF0ZS5FWElTVFNfVkFMSURBVEUsICdpbiddXHJcbiAgICAgICAgXSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuY2FjaGUpXHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgVXNlckFwaS51cGRhdGVJbmZvKHBhcmFtcylcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coVXNlcilcclxuICAgICAgICAgIFVzZXIuc2V0VXNlckluZm8odGhpcy5kYXRhLmNhY2hlKVxyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5L+u5pS55oiQ5YqfJyxcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy4kYmFjaygpXHJcbiAgICAgICAgICB9LmJpbmQodGhpcyksIDEwMDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+S/ruaUueWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIG9uU2hvdygpIHtcclxuICAgIGxldCB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJylcclxuICAgIHRoaXMuY2FjaGVbJ2lkJ10gPSB1c2VySW5mb1snaWQnXVxyXG4gICAgdGhpcy51c2VySW5mbyA9IHVzZXJJbmZvXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG59XHJcbiJdfQ==