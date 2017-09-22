'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = require('./../utils/fetch.js');

var _fetch2 = _interopRequireDefault(_fetch);

var _api = require('./../../config/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderCommentApi = {
  //获取评论
  list: _fetch2.default.get(_api.host + '/order/comment/')
};
exports.default = OrderCommentApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJPcmRlckNvbW1lbnRBcGkiLCJsaXN0IiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0EsSUFBTUEsa0JBQWtCO0FBQ3RCO0FBQ0FDLFFBQUssZ0JBQUtDLEdBQUwsQ0FBUyxZQUFLLGlCQUFkO0FBRmlCLENBQXhCO2tCQUllRixlIiwiZmlsZSI6Im9yZGVyQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcGlzIGZyb20gJy4uL3V0aWxzL2ZldGNoJztcclxuaW1wb3J0IHtob3N0fSBmcm9tICcuLi8uLi9jb25maWcvYXBpJztcclxuY29uc3QgT3JkZXJDb21tZW50QXBpID0ge1xyXG4gIC8v6I635Y+W6K+E6K66XHJcbiAgbGlzdDpBcGlzLmdldChob3N0Kycvb3JkZXIvY29tbWVudC8nKSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckNvbW1lbnRBcGk7Il19