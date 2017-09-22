'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = require('./../utils/fetch.js');

var _fetch2 = _interopRequireDefault(_fetch);

var _api = require('./../../config/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SmsApi = {

  sendCode: _fetch2.default.get(_api.host + '/smsCode/:tel/:type'),
  //微信快捷登录
  weixinSignin: _fetch2.default.post(_api.host + '/account/signIn/weixin'),
  //修改基本信息
  updateInfo: _fetch2.default.put(_api.host + '/account/:id'),
  //修改密码
  changePwd: _fetch2.default.put(_api.host + '/account/pwd/:id'),
  //修改手机号
  changeTel: _fetch2.default.put(_api.host + '/account/tel')
};
exports.default = SmsApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtcy5qcyJdLCJuYW1lcyI6WyJTbXNBcGkiLCJzZW5kQ29kZSIsImdldCIsIndlaXhpblNpZ25pbiIsInBvc3QiLCJ1cGRhdGVJbmZvIiwicHV0IiwiY2hhbmdlUHdkIiwiY2hhbmdlVGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0EsSUFBTUEsU0FBUzs7QUFFYkMsWUFBUyxnQkFBS0MsR0FBTCxDQUFTLFlBQUsscUJBQWQsQ0FGSTtBQUdiO0FBQ0FDLGdCQUFhLGdCQUFLQyxJQUFMLENBQVUsWUFBSyx3QkFBZixDQUpBO0FBS2I7QUFDQUMsY0FBVyxnQkFBS0MsR0FBTCxDQUFTLFlBQUssY0FBZCxDQU5FO0FBT2I7QUFDQUMsYUFBVSxnQkFBS0QsR0FBTCxDQUFTLFlBQUssa0JBQWQsQ0FSRztBQVNiO0FBQ0FFLGFBQVUsZ0JBQUtGLEdBQUwsQ0FBUyxZQUFLLGNBQWQ7QUFWRyxDQUFmO2tCQVllTixNIiwiZmlsZSI6InNtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcGlzIGZyb20gJy4uL3V0aWxzL2ZldGNoJztcclxuaW1wb3J0IHtob3N0fSBmcm9tICcuLi8uLi9jb25maWcvYXBpJztcclxuY29uc3QgU21zQXBpID0ge1xyXG5cclxuICBzZW5kQ29kZTpBcGlzLmdldChob3N0Kycvc21zQ29kZS86dGVsLzp0eXBlJyksXHJcbiAgLy/lvq7kv6Hlv6vmjbfnmbvlvZVcclxuICB3ZWl4aW5TaWduaW46QXBpcy5wb3N0KGhvc3QrJy9hY2NvdW50L3NpZ25Jbi93ZWl4aW4nKSxcclxuICAvL+S/ruaUueWfuuacrOS/oeaBr1xyXG4gIHVwZGF0ZUluZm86QXBpcy5wdXQoaG9zdCsnL2FjY291bnQvOmlkJyksXHJcbiAgLy/kv67mlLnlr4bnoIFcclxuICBjaGFuZ2VQd2Q6QXBpcy5wdXQoaG9zdCsnL2FjY291bnQvcHdkLzppZCcpLFxyXG4gIC8v5L+u5pS55omL5py65Y+3XHJcbiAgY2hhbmdlVGVsOkFwaXMucHV0KGhvc3QrJy9hY2NvdW50L3RlbCcpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU21zQXBpOyJdfQ==