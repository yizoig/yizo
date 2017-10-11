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
  list: _fetch2.default.get(_api.host + '/order/comment/'),
  add: _fetch2.default.post(_api.host + '/order/comment/')
};
exports.default = OrderCommentApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJPcmRlckNvbW1lbnRBcGkiLCJsaXN0IiwiZ2V0IiwiYWRkIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBLElBQU1BLGtCQUFrQjtBQUN0QjtBQUNBQyxRQUFLLGdCQUFLQyxHQUFMLENBQVMsWUFBSyxpQkFBZCxDQUZpQjtBQUd0QkMsT0FBSSxnQkFBS0MsSUFBTCxDQUFVLFlBQUssaUJBQWY7QUFIa0IsQ0FBeEI7a0JBS2VKLGUiLCJmaWxlIjoib3JkZXJDb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaXMgZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xyXG5pbXBvcnQge2hvc3R9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknO1xyXG5jb25zdCBPcmRlckNvbW1lbnRBcGkgPSB7XHJcbiAgLy/ojrflj5bor4TorrpcclxuICBsaXN0OkFwaXMuZ2V0KGhvc3QrJy9vcmRlci9jb21tZW50LycpLFxyXG4gIGFkZDpBcGlzLnBvc3QoaG9zdCsnL29yZGVyL2NvbW1lbnQvJylcclxufVxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckNvbW1lbnRBcGk7Il19