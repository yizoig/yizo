'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _college = require('./../../lib/apis/college.js');

var _college2 = _interopRequireDefault(_college);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'enablePullDownRefresh': true,
      'backgroundColor': '#3385ff'
    }, _this.data = {
      collegelogo: _college2.default.logo,
      colleges: []
    }, _this.methods = {
      onSelect: function onSelect(e) {
        var _e$currentTarget$data = e.currentTarget.dataset.id,
            id = _e$currentTarget$data === undefined ? null : _e$currentTarget$data;

        var college = this.getCollege(id);
        this.$parent.globalData['college'] = college;

        console.log(college, 'index');
        _wepy2.default.switchTab({
          url: '/pages/home/index'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getCollege',
    value: function getCollege(id) {
      for (var i = 0; i < this.colleges.length; i++) {
        if (this.colleges[i]['college_id'] === id) {
          return this.colleges[i];
        }
      }
      return null;
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.loadData();
      _wepy2.default.stopPullDownRefresh();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref3, data, colleges, i;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _college2.default.list();

              case 3:
                _ref3 = _context.sent;
                data = _ref3.data;
                colleges = data.list;

                console.log(data);
                for (i = 0; i < colleges.length; i++) {
                  colleges[i]['logo'] = this.collegelogo + colleges[i]['college_id'] + '.png';
                }
                this.colleges = colleges || [];
                this.$apply();
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function loadData() {
        return _ref2.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsImNvbGxlZ2Vsb2dvIiwibG9nbyIsImNvbGxlZ2VzIiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJjb2xsZWdlIiwiZ2V0Q29sbGVnZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInN3aXRjaFRhYiIsInVybCIsImkiLCJsZW5ndGgiLCJsb2FkRGF0YSIsInN0b3BQdWxsRG93blJlZnJlc2giLCJsaXN0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1AsK0JBQXlCLElBRGxCO0FBRVAseUJBQW1CO0FBRlosSyxRQUlUQyxJLEdBQU87QUFDTEMsbUJBQWEsa0JBQVdDLElBRG5CO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUlQQyxPLEdBQVU7QUFDUkMsZ0JBQVUsa0JBQVNDLENBQVQsRUFBWTtBQUFBLG9DQUNBQSxFQUFFQyxhQUFGLENBQWdCQyxPQURoQixDQUNkQyxFQURjO0FBQUEsWUFDZEEsRUFEYyx5Q0FDVCxJQURTOztBQUVwQixZQUFJQyxVQUFVLEtBQUtDLFVBQUwsQ0FBZ0JGLEVBQWhCLENBQWQ7QUFDQSxhQUFLRyxPQUFMLENBQWFDLFVBQWIsQ0FBd0IsU0FBeEIsSUFBcUNILE9BQXJDOztBQUVBSSxnQkFBUUMsR0FBUixDQUFZTCxPQUFaLEVBQW9CLE9BQXBCO0FBQ0EsdUJBQUtNLFNBQUwsQ0FBZTtBQUNiQztBQURhLFNBQWY7QUFHRDtBQVZPLEs7Ozs7OytCQVlDUixFLEVBQUk7QUFDYixXQUFLLElBQUlTLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLZixRQUFMLENBQWNnQixNQUFsQyxFQUEwQ0QsR0FBMUMsRUFBK0M7QUFDN0MsWUFBSSxLQUFLZixRQUFMLENBQWNlLENBQWQsRUFBaUIsWUFBakIsTUFBbUNULEVBQXZDLEVBQTJDO0FBQ3pDLGlCQUFPLEtBQUtOLFFBQUwsQ0FBY2UsQ0FBZCxDQUFQO0FBQ0Q7QUFDRjtBQUNELGFBQU8sSUFBUDtBQUNEOzs7d0NBQ21CO0FBQ2xCLFdBQUtFLFFBQUw7QUFDQSxxQkFBS0MsbUJBQUw7QUFDRDs7OzZCQUNRO0FBQ1AsV0FBS0QsUUFBTDtBQUNEOzs7Ozs7Ozs7Ozs7O3VCQUd3QixrQkFBV0UsSUFBWCxFOzs7O0FBQWZ0QixvQixTQUFBQSxJO0FBQ01HLHdCLEdBQWFILEksQ0FBbkJzQixJOztBQUNOUix3QkFBUUMsR0FBUixDQUFZZixJQUFaO0FBQ0EscUJBQVNrQixDQUFULEdBQWEsQ0FBYixFQUFnQkEsSUFBSWYsU0FBU2dCLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN4Q2YsMkJBQVNlLENBQVQsRUFBWSxNQUFaLElBQXNCLEtBQUtqQixXQUFMLEdBQW1CRSxTQUFTZSxDQUFULEVBQVksWUFBWixDQUFuQixHQUErQyxNQUFyRTtBQUNEO0FBQ0QscUJBQUtmLFFBQUwsR0FBZ0JBLFlBQVksRUFBNUI7QUFDQSxxQkFBS29CLE1BQUw7Ozs7Ozs7O0FBRUFULHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0M2QixlQUFLUyxJOztrQkFBbkIxQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbGxlZ2VBcGkgZnJvbSAnLi4vLi4vbGliL2FwaXMvY29sbGVnZSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgICdlbmFibGVQdWxsRG93blJlZnJlc2gnOiB0cnVlLFxuICAgICdiYWNrZ3JvdW5kQ29sb3InOiAnIzMzODVmZidcbiAgfVxuICBkYXRhID0ge1xuICAgIGNvbGxlZ2Vsb2dvOiBjb2xsZWdlQXBpLmxvZ28sXG4gICAgY29sbGVnZXM6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBvblNlbGVjdDogZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHsgaWQgPSBudWxsIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgbGV0IGNvbGxlZ2UgPSB0aGlzLmdldENvbGxlZ2UoaWQpXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YVsnY29sbGVnZSddID0gY29sbGVnZVxuXG4gICAgICBjb25zb2xlLmxvZyhjb2xsZWdlLCdpbmRleCcpO1xuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZS9pbmRleGBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGdldENvbGxlZ2UoaWQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sbGVnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmNvbGxlZ2VzW2ldWydjb2xsZWdlX2lkJ10gPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlZ2VzW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgdGhpcy5sb2FkRGF0YSgpXG4gICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5sb2FkRGF0YSgpXG4gIH1cbiAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IGNvbGxlZ2VBcGkubGlzdCgpXG4gICAgICBsZXQgeyBsaXN0OiBjb2xsZWdlcyB9ID0gZGF0YVxuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVnZXNbaV1bJ2xvZ28nXSA9IHRoaXMuY29sbGVnZWxvZ28gKyBjb2xsZWdlc1tpXVsnY29sbGVnZV9pZCddICsgJy5wbmcnXG4gICAgICB9XG4gICAgICB0aGlzLmNvbGxlZ2VzID0gY29sbGVnZXMgfHwgW11cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cbiAgfVxufVxuIl19