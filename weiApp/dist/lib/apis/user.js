'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = require('./../utils/fetch.js');

var _fetch2 = _interopRequireDefault(_fetch);

var _api = require('./../../config/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserApi = {

  avatar: _api.host + '/account/avatar/',
  //普通账号登录
  signIn: _fetch2.default.post(_api.host + '/account/signIn'),
  //微信快捷登录
  weixinSignin: _fetch2.default.post(_api.host + '/account/signIn/weixin'),
  //修改基本信息
  updateInfo: _fetch2.default.put(_api.host + '/account/:id'),
  //修改密码
  changePwd: _fetch2.default.put(_api.host + '/account/pwd/:id'),
  //修改手机号
  changeTel: _fetch2.default.put(_api.host + '/account/tel'),
  //同步微信信息
  syncWxInfo: null
};
exports.default = UserApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlckFwaSIsImF2YXRhciIsInNpZ25JbiIsInBvc3QiLCJ3ZWl4aW5TaWduaW4iLCJ1cGRhdGVJbmZvIiwicHV0IiwiY2hhbmdlUHdkIiwiY2hhbmdlVGVsIiwic3luY1d4SW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBLElBQU1BLFVBQVU7O0FBRWRDLFVBQU8sWUFBSyxrQkFGRTtBQUdkO0FBQ0FDLFVBQU8sZ0JBQUtDLElBQUwsQ0FBVSxZQUFLLGlCQUFmLENBSk87QUFLZDtBQUNBQyxnQkFBYSxnQkFBS0QsSUFBTCxDQUFVLFlBQUssd0JBQWYsQ0FOQztBQU9kO0FBQ0FFLGNBQVcsZ0JBQUtDLEdBQUwsQ0FBUyxZQUFLLGNBQWQsQ0FSRztBQVNkO0FBQ0FDLGFBQVUsZ0JBQUtELEdBQUwsQ0FBUyxZQUFLLGtCQUFkLENBVkk7QUFXZDtBQUNBRSxhQUFVLGdCQUFLRixHQUFMLENBQVMsWUFBSyxjQUFkLENBWkk7QUFhZDtBQUNBRyxjQUFXO0FBZEcsQ0FBaEI7a0JBZ0JlVCxPIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBpcyBmcm9tICcuLi91dGlscy9mZXRjaCc7XHJcbmltcG9ydCB7aG9zdH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwaSc7XHJcbmNvbnN0IFVzZXJBcGkgPSB7XHJcblxyXG4gIGF2YXRhcjpob3N0KycvYWNjb3VudC9hdmF0YXIvJyxcclxuICAvL+aZrumAmui0puWPt+eZu+W9lVxyXG4gIHNpZ25JbjpBcGlzLnBvc3QoaG9zdCsnL2FjY291bnQvc2lnbkluJyksXHJcbiAgLy/lvq7kv6Hlv6vmjbfnmbvlvZVcclxuICB3ZWl4aW5TaWduaW46QXBpcy5wb3N0KGhvc3QrJy9hY2NvdW50L3NpZ25Jbi93ZWl4aW4nKSxcclxuICAvL+S/ruaUueWfuuacrOS/oeaBr1xyXG4gIHVwZGF0ZUluZm86QXBpcy5wdXQoaG9zdCsnL2FjY291bnQvOmlkJyksXHJcbiAgLy/kv67mlLnlr4bnoIFcclxuICBjaGFuZ2VQd2Q6QXBpcy5wdXQoaG9zdCsnL2FjY291bnQvcHdkLzppZCcpLFxyXG4gIC8v5L+u5pS55omL5py65Y+3XHJcbiAgY2hhbmdlVGVsOkFwaXMucHV0KGhvc3QrJy9hY2NvdW50L3RlbCcpLFxyXG4gIC8v5ZCM5q2l5b6u5L+h5L+h5oGvXHJcbiAgc3luY1d4SW5mbzpudWxsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlckFwaTsiXX0=