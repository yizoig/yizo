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
  changeTel: _fetch2.default.put(_api.host + '/account/tel')
};
exports.default = UserApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlckFwaSIsImF2YXRhciIsInNpZ25JbiIsInBvc3QiLCJ3ZWl4aW5TaWduaW4iLCJ1cGRhdGVJbmZvIiwicHV0IiwiY2hhbmdlUHdkIiwiY2hhbmdlVGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0EsSUFBTUEsVUFBVTs7QUFFZEMsVUFBTyxZQUFLLGtCQUZFO0FBR2Q7QUFDQUMsVUFBTyxnQkFBS0MsSUFBTCxDQUFVLFlBQUssaUJBQWYsQ0FKTztBQUtkO0FBQ0FDLGdCQUFhLGdCQUFLRCxJQUFMLENBQVUsWUFBSyx3QkFBZixDQU5DO0FBT2Q7QUFDQUUsY0FBVyxnQkFBS0MsR0FBTCxDQUFTLFlBQUssY0FBZCxDQVJHO0FBU2Q7QUFDQUMsYUFBVSxnQkFBS0QsR0FBTCxDQUFTLFlBQUssa0JBQWQsQ0FWSTtBQVdkO0FBQ0FFLGFBQVUsZ0JBQUtGLEdBQUwsQ0FBUyxZQUFLLGNBQWQ7QUFaSSxDQUFoQjtrQkFjZU4sTyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaXMgZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xyXG5pbXBvcnQge2hvc3R9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknO1xyXG5jb25zdCBVc2VyQXBpID0ge1xyXG5cclxuICBhdmF0YXI6aG9zdCsnL2FjY291bnQvYXZhdGFyLycsXHJcbiAgLy/mma7pgJrotKblj7fnmbvlvZVcclxuICBzaWduSW46QXBpcy5wb3N0KGhvc3QrJy9hY2NvdW50L3NpZ25JbicpLFxyXG4gIC8v5b6u5L+h5b+r5o2355m75b2VXHJcbiAgd2VpeGluU2lnbmluOkFwaXMucG9zdChob3N0KycvYWNjb3VudC9zaWduSW4vd2VpeGluJyksXHJcbiAgLy/kv67mlLnln7rmnKzkv6Hmga9cclxuICB1cGRhdGVJbmZvOkFwaXMucHV0KGhvc3QrJy9hY2NvdW50LzppZCcpLFxyXG4gIC8v5L+u5pS55a+G56CBXHJcbiAgY2hhbmdlUHdkOkFwaXMucHV0KGhvc3QrJy9hY2NvdW50L3B3ZC86aWQnKSxcclxuICAvL+S/ruaUueaJi+acuuWPt1xyXG4gIGNoYW5nZVRlbDpBcGlzLnB1dChob3N0KycvYWNjb3VudC90ZWwnKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJBcGk7Il19