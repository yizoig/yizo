'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tools = require('./../../../../utils/tools.js');

var _api = require('./../../../../config/api.js');

var _user = require('./../../../../utils/user.js');

require('./../../../../npm/wepy-async-function/index.js');

var _index = require('./../../../../components/users/avatar/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../../components/toast/index.js');

var _index4 = _interopRequireDefault(_index3);

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
      userinfo: null,
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
        if (this.userinfo[e.currentTarget.dataset.name] != e.detail.value) {
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
      submit: function submit() {
        var _this2 = this;

        try {
          var params = _tools.Validate.check(this.data.cache, [['nickname', 'require', '姓名不能为空', _tools.Validate.EXISTS_VALIDATE], ['gender', ['0', '1'], '性别错误', _tools.Validate.EXISTS_VALIDATE, 'in']]);
          console.log(this.data.cache);
          console.log(params);
          this.$invoke('toast', 'showToast', {
            title: '加载中',
            icon: 'loading',
            mask: true
          });
          (0, _tools.request)(_api.apis.account.updateInfo, params).then(function (data) {
            (0, _user.setUserInfo)(_this2.data.cache);
            _this2.$invoke('toast', 'showToast', {
              title: '加载成功',
              icon: 'success',
              mask: true
            });
            setTimeout(function () {
              this.$back();
            }.bind(_this2), 1000);
          }, function (reason) {
            _this2.$invoke('toast', 'showToast', {
              title: reason,
              icon: 'error',
              mask: true
            });
          });
        } catch (e) {
          this.$invoke('toast', 'showToast', {
            title: e.message,
            icon: 'error',
            mask: true
          });
        }
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

                this.cache['id'] = userinfo['id'];
                this.userinfo = userinfo;
                this.$apply();

              case 7:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJhc2VJbmZvU2V0dHRpbmciLCJkYXRhIiwidXNlcmluZm8iLCJjYWNoZSIsImVkaXQiLCJjb21wb25lbnRzIiwiYXZhdGFyIiwidG9hc3QiLCJtZXRob2RzIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmFtZSIsImRldGFpbCIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIiRhcHBseSIsInN1Ym1pdCIsInBhcmFtcyIsImNoZWNrIiwiRVhJU1RTX1ZBTElEQVRFIiwiY29uc29sZSIsImxvZyIsIiRpbnZva2UiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwiYWNjb3VudCIsInVwZGF0ZUluZm8iLCJ0aGVuIiwic2V0VGltZW91dCIsIiRiYWNrIiwiYmluZCIsInJlYXNvbiIsIm1lc3NhZ2UiLCJnZXRTdG9yYWdlIiwia2V5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNuQkMsSSxHQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLFlBQU07QUFIRCxLLFFBS1BDLFUsR0FBYTtBQUNYQyw2QkFEVztBQUVYQztBQUZXLEssUUFJYkMsTyxHQUFVO0FBQ1JKLFlBQU0sY0FBU0ssQ0FBVCxFQUFZO0FBQ2hCOzs7QUFHQSxZQUFJLEtBQUtQLFFBQUwsQ0FBY08sRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXRDLEtBQStDSCxFQUFFSSxNQUFGLENBQVNDLEtBQTVELEVBQW1FO0FBQ2pFLGVBQUtYLEtBQUwsQ0FBV00sRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQW5DLElBQTJDSCxFQUFFSSxNQUFGLENBQVNDLEtBQXBEO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sS0FBS1gsS0FBTCxDQUFXTSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBbkMsQ0FBUDtBQUNEO0FBQ0QsWUFBSUcsT0FBT0MsSUFBUCxDQUFZLEtBQUtiLEtBQWpCLEVBQXdCYyxNQUF4QixHQUFpQyxDQUFyQyxFQUF3QztBQUN0QyxlQUFLYixJQUFMLEdBQVksSUFBWjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLElBQUwsR0FBWSxLQUFaO0FBQ0Q7QUFDRCxhQUFLYyxNQUFMO0FBQ0QsT0FoQk87QUFpQlJDLGNBQVEsa0JBQVc7QUFBQTs7QUFDakIsWUFBSTtBQUNGLGNBQUlDLFNBQVMsZ0JBQVNDLEtBQVQsQ0FBZSxLQUFLcEIsSUFBTCxDQUFVRSxLQUF6QixFQUFnQyxDQUMzQyxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFFBQXhCLEVBQWtDLGdCQUFTbUIsZUFBM0MsQ0FEMkMsRUFFM0MsQ0FBQyxRQUFELEVBQVcsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFYLEVBQXVCLE1BQXZCLEVBQStCLGdCQUFTQSxlQUF4QyxFQUF5RCxJQUF6RCxDQUYyQyxDQUFoQyxDQUFiO0FBSUFDLGtCQUFRQyxHQUFSLENBQVksS0FBS3ZCLElBQUwsQ0FBVUUsS0FBdEI7QUFDQW9CLGtCQUFRQyxHQUFSLENBQVlKLE1BQVo7QUFDQSxlQUFLSyxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MsbUJBQU8sS0FEMEI7QUFFakNDLGtCQUFNLFNBRjJCO0FBR2pDQyxrQkFBTTtBQUgyQixXQUFuQztBQUtBLDhCQUFRLFVBQUtDLE9BQUwsQ0FBYUMsVUFBckIsRUFBaUNWLE1BQWpDLEVBQXlDVyxJQUF6QyxDQUE4QyxnQkFBUTtBQUNwRCxtQ0FBWSxPQUFLOUIsSUFBTCxDQUFVRSxLQUF0QjtBQUNBLG1CQUFLc0IsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUM7QUFDakNDLHFCQUFPLE1BRDBCO0FBRWpDQyxvQkFBTSxTQUYyQjtBQUdqQ0Msb0JBQU07QUFIMkIsYUFBbkM7QUFLQUksdUJBQVcsWUFBVztBQUNwQixtQkFBS0MsS0FBTDtBQUNELGFBRlUsQ0FFVEMsSUFGUyxRQUFYLEVBRWMsSUFGZDtBQUdELFdBVkQsRUFVRyxrQkFBVTtBQUNYLG1CQUFLVCxPQUFMLENBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUNqQ0MscUJBQU9TLE1BRDBCO0FBRWpDUixvQkFBTSxPQUYyQjtBQUdqQ0Msb0JBQU07QUFIMkIsYUFBbkM7QUFLRCxXQWhCRDtBQWlCRCxTQTdCRCxDQTZCRSxPQUFPbkIsQ0FBUCxFQUFVO0FBQ1YsZUFBS2dCLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCLEVBQW1DO0FBQ2pDQyxtQkFBT2pCLEVBQUUyQixPQUR3QjtBQUVqQ1Qsa0JBQU0sT0FGMkI7QUFHakNDLGtCQUFNO0FBSDJCLFdBQW5DO0FBS0Q7QUFDRjtBQXRETyxLOzs7Ozs7Ozs7Ozs7Ozt1QkF5RHVCLGVBQUtTLFVBQUwsQ0FBZ0I7QUFDN0NDLHVCQUFLO0FBRHdDLGlCQUFoQixDOzs7O0FBQW5CcEMsd0IsU0FBTkQsSTs7QUFHTixxQkFBS0UsS0FBTCxDQUFXLElBQVgsSUFBbUJELFNBQVMsSUFBVCxDQUFuQjtBQUNBLHFCQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLHFCQUFLZ0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhFMEMsZUFBS3FCLEk7O2tCQUE5QnZDLGdCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IHJlcXVlc3QsIFZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvdG9vbHMnXHJcbmltcG9ydCB7IGFwaXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcvYXBpJ1xyXG5pbXBvcnQgeyBzZXRVc2VySW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3VzZXInXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzL2F2YXRhci9pbmRleCdcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdG9hc3QvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VJbmZvU2V0dHRpbmcgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICB1c2VyaW5mbzogbnVsbCxcclxuICAgIGNhY2hlOiB7fSxcclxuICAgIGVkaXQ6IGZhbHNlXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBhdmF0YXI6IEF2YXRhcixcclxuICAgIHRvYXN0OiBUb2FzdFxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgZWRpdDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAvKipcclxuICAgICAgICog5qOA5p+l5YC85piv5ZCm5L+u5pS5XHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAodGhpcy51c2VyaW5mb1tlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lXSAhPSBlLmRldGFpbC52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2FjaGVbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZV0gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhY2hlW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY2FjaGUpLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmVkaXQgPSB0cnVlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lZGl0ID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgc3VibWl0OiBmdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcGFyYW1zID0gVmFsaWRhdGUuY2hlY2sodGhpcy5kYXRhLmNhY2hlLCBbXHJcbiAgICAgICAgICBbJ25pY2tuYW1lJywgJ3JlcXVpcmUnLCAn5aeT5ZCN5LiN6IO95Li656m6JywgVmFsaWRhdGUuRVhJU1RTX1ZBTElEQVRFXSxcclxuICAgICAgICAgIFsnZ2VuZGVyJywgWycwJywgJzEnXSwgJ+aAp+WIq+mUmeivrycsIFZhbGlkYXRlLkVYSVNUU19WQUxJREFURSwgJ2luJ11cclxuICAgICAgICBdKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5jYWNoZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpXHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICAgICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXF1ZXN0KGFwaXMuYWNjb3VudC51cGRhdGVJbmZvLCBwYXJhbXMpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBzZXRVc2VySW5mbyh0aGlzLmRhdGEuY2FjaGUpXHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3dUb2FzdCcsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfliqDovb3miJDlip8nLFxyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRiYWNrKClcclxuICAgICAgICAgIH0uYmluZCh0aGlzKSwgMTAwMClcclxuICAgICAgICB9LCByZWFzb24gPT4ge1xyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93VG9hc3QnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiByZWFzb24sXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvd1RvYXN0Jywge1xyXG4gICAgICAgICAgdGl0bGU6IGUubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBvblNob3coKSB7XHJcbiAgICBsZXQgeyBkYXRhOiB1c2VyaW5mbyB9ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndXNlcmluZm8nXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jYWNoZVsnaWQnXSA9IHVzZXJpbmZvWydpZCddXHJcbiAgICB0aGlzLnVzZXJpbmZvID0gdXNlcmluZm9cclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbn1cclxuIl19