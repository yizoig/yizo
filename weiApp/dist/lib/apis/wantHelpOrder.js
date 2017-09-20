'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = require('./../utils/fetch.js');

var _fetch2 = _interopRequireDefault(_fetch);

var _api = require('./../../config/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WanHelpOrderApi = {
  //获取求助信息
  list: _fetch2.default.get(_api.host + '/order/help/want'),
  //获取求助基本信息
  info: _fetch2.default.get(_api.host + '/order/help/want/info/:id'),
  //添加求助
  add: _fetch2.default.post(_api.host + '/order/help/want'),
  //取消求助
  cancel: _fetch2.default.delete(_api.host + '/order/help/want/cancel'),
  //帮助 抢单
  grab: _fetch2.default.post(_api.host + '/order/help/want/grab'),
  //放弃跑单
  quit: _fetch2.default.delete(_api.host + '/order/help/want/quit'),
  //发货
  deliver: _fetch2.default.put(_api.host + '/order/help/want/deliver'),
  //完成
  finally: _fetch2.default.put(_api.host + '/order/help/want/finally'),
  //结束
  end: _fetch2.default.put(_api.host + '/order/help/want/end')
};
exports.default = WanHelpOrderApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnRIZWxwT3JkZXIuanMiXSwibmFtZXMiOlsiV2FuSGVscE9yZGVyQXBpIiwibGlzdCIsImdldCIsImluZm8iLCJhZGQiLCJwb3N0IiwiY2FuY2VsIiwiZGVsZXRlIiwiZ3JhYiIsInF1aXQiLCJkZWxpdmVyIiwicHV0IiwiZmluYWxseSIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBLElBQU1BLGtCQUFrQjtBQUN0QjtBQUNBQyxRQUFLLGdCQUFLQyxHQUFMLENBQVMsWUFBSyxrQkFBZCxDQUZpQjtBQUd0QjtBQUNBQyxRQUFLLGdCQUFLRCxHQUFMLENBQVMsWUFBSywyQkFBZCxDQUppQjtBQUt0QjtBQUNBRSxPQUFJLGdCQUFLQyxJQUFMLENBQVUsWUFBSyxrQkFBZixDQU5rQjtBQU90QjtBQUNBQyxVQUFPLGdCQUFLQyxNQUFMLENBQVksWUFBSyx5QkFBakIsQ0FSZTtBQVN0QjtBQUNBQyxRQUFLLGdCQUFLSCxJQUFMLENBQVUsWUFBSyx1QkFBZixDQVZpQjtBQVd0QjtBQUNBSSxRQUFLLGdCQUFLRixNQUFMLENBQVksWUFBSyx1QkFBakIsQ0FaaUI7QUFhdEI7QUFDQUcsV0FBUSxnQkFBS0MsR0FBTCxDQUFTLFlBQUssMEJBQWQsQ0FkYztBQWV0QjtBQUNBQyxXQUFRLGdCQUFLRCxHQUFMLENBQVMsWUFBSywwQkFBZCxDQWhCYztBQWlCdEI7QUFDQUUsT0FBSSxnQkFBS0YsR0FBTCxDQUFTLFlBQUssc0JBQWQ7QUFsQmtCLENBQXhCO2tCQW9CZVgsZSIsImZpbGUiOiJ3YW50SGVscE9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaXMgZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xyXG5pbXBvcnQge2hvc3R9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknO1xyXG5jb25zdCBXYW5IZWxwT3JkZXJBcGkgPSB7XHJcbiAgLy/ojrflj5bmsYLliqnkv6Hmga9cclxuICBsaXN0OkFwaXMuZ2V0KGhvc3QrJy9vcmRlci9oZWxwL3dhbnQnKSxcclxuICAvL+iOt+WPluaxguWKqeWfuuacrOS/oeaBr1xyXG4gIGluZm86QXBpcy5nZXQoaG9zdCsnL29yZGVyL2hlbHAvd2FudC9pbmZvLzppZCcpLFxyXG4gIC8v5re75Yqg5rGC5YqpXHJcbiAgYWRkOkFwaXMucG9zdChob3N0Kycvb3JkZXIvaGVscC93YW50JyksXHJcbiAgLy/lj5bmtojmsYLliqlcclxuICBjYW5jZWw6QXBpcy5kZWxldGUoaG9zdCsnL29yZGVyL2hlbHAvd2FudC9jYW5jZWwnKSxcclxuICAvL+W4ruWKqSDmiqLljZVcclxuICBncmFiOkFwaXMucG9zdChob3N0Kycvb3JkZXIvaGVscC93YW50L2dyYWInKSxcclxuICAvL+aUvuW8g+i3keWNlVxyXG4gIHF1aXQ6QXBpcy5kZWxldGUoaG9zdCsnL29yZGVyL2hlbHAvd2FudC9xdWl0JyksXHJcbiAgLy/lj5HotKdcclxuICBkZWxpdmVyOkFwaXMucHV0KGhvc3QrJy9vcmRlci9oZWxwL3dhbnQvZGVsaXZlcicpLFxyXG4gIC8v5a6M5oiQXHJcbiAgZmluYWxseTpBcGlzLnB1dChob3N0Kycvb3JkZXIvaGVscC93YW50L2ZpbmFsbHknKSxcclxuICAvL+e7k+adn1xyXG4gIGVuZDpBcGlzLnB1dChob3N0Kycvb3JkZXIvaGVscC93YW50L2VuZCcpLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdhbkhlbHBPcmRlckFwaTsiXX0=