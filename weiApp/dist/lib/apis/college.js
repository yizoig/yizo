'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = require('./../utils/fetch.js');

var _fetch2 = _interopRequireDefault(_fetch);

var _api = require('./../../config/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollegeApi = {
  logo: _api.host + '/college/logo/',
  //获取学校列表
  list: _fetch2.default.get(_api.host + '/colleges')
};
exports.default = CollegeApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlZ2UuanMiXSwibmFtZXMiOlsiQ29sbGVnZUFwaSIsImxvZ28iLCJsaXN0IiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0EsSUFBTUEsYUFBYTtBQUNqQkMsUUFBSyxZQUFPLGdCQURLO0FBRWpCO0FBQ0FDLFFBQUssZ0JBQUtDLEdBQUwsQ0FBUyxZQUFLLFdBQWQ7QUFIWSxDQUFuQjtrQkFLZUgsVSIsImZpbGUiOiJjb2xsZWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaXMgZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xyXG5pbXBvcnQge2hvc3R9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknO1xyXG5jb25zdCBDb2xsZWdlQXBpID0ge1xyXG4gIGxvZ286aG9zdCArICcvY29sbGVnZS9sb2dvLycsXHJcbiAgLy/ojrflj5blrabmoKHliJfooahcclxuICBsaXN0OkFwaXMuZ2V0KGhvc3QrJy9jb2xsZWdlcycpLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbGxlZ2VBcGk7Il19