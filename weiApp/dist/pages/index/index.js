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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsImNvbGxlZ2Vsb2dvIiwibG9nbyIsImNvbGxlZ2VzIiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJjb2xsZWdlIiwiZ2V0Q29sbGVnZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic3dpdGNoVGFiIiwidXJsIiwiaSIsImxlbmd0aCIsImxvYWREYXRhIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1AsK0JBQXlCLElBRGxCO0FBRVAseUJBQW1CO0FBRlosSyxRQUlUQyxJLEdBQU87QUFDTEMsbUJBQWEsa0JBQVdDLElBRG5CO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUlQQyxPLEdBQVU7QUFDUkMsZ0JBQVUsa0JBQVNDLENBQVQsRUFBWTtBQUFBLG9DQUNBQSxFQUFFQyxhQUFGLENBQWdCQyxPQURoQixDQUNkQyxFQURjO0FBQUEsWUFDZEEsRUFEYyx5Q0FDVCxJQURTOztBQUVwQixZQUFJQyxVQUFVLEtBQUtDLFVBQUwsQ0FBZ0JGLEVBQWhCLENBQWQ7QUFDQSxhQUFLRyxPQUFMLENBQWFDLFVBQWIsQ0FBd0IsU0FBeEIsSUFBcUNILE9BQXJDO0FBQ0EsdUJBQUtJLFNBQUwsQ0FBZTtBQUNiQztBQURhLFNBQWY7QUFHRDtBQVJPLEs7Ozs7OytCQVVDTixFLEVBQUk7QUFDYixXQUFLLElBQUlPLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLYixRQUFMLENBQWNjLE1BQWxDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3QyxZQUFJLEtBQUtiLFFBQUwsQ0FBY2EsQ0FBZCxFQUFpQixZQUFqQixNQUFtQ1AsRUFBdkMsRUFBMkM7QUFDekMsaUJBQU8sS0FBS04sUUFBTCxDQUFjYSxDQUFkLENBQVA7QUFDRDtBQUNGO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozt3Q0FDbUI7QUFDbEIsV0FBS0UsUUFBTDtBQUNBLHFCQUFLQyxtQkFBTDtBQUNEOzs7NkJBQ1E7QUFDUCxXQUFLRCxRQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7dUJBR3dCLGtCQUFXRSxJQUFYLEU7Ozs7QUFBZnBCLG9CLFNBQUFBLEk7QUFDTUcsd0IsR0FBYUgsSSxDQUFuQm9CLEk7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVl0QixJQUFaO0FBQ0EscUJBQVNnQixDQUFULEdBQWEsQ0FBYixFQUFnQkEsSUFBSWIsU0FBU2MsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3hDYiwyQkFBU2EsQ0FBVCxFQUFZLE1BQVosSUFBc0IsS0FBS2YsV0FBTCxHQUFtQkUsU0FBU2EsQ0FBVCxFQUFZLFlBQVosQ0FBbkIsR0FBK0MsTUFBckU7QUFDRDtBQUNELHFCQUFLYixRQUFMLEdBQWdCQSxZQUFZLEVBQTVCO0FBQ0EscUJBQUtvQixNQUFMOzs7Ozs7OztBQUVBRix3QkFBUUMsR0FBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdDNkIsZUFBS0UsSTs7a0JBQW5CMUIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb2xsZWdlQXBpIGZyb20gJy4uLy4uL2xpYi9hcGlzL2NvbGxlZ2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgJ2VuYWJsZVB1bGxEb3duUmVmcmVzaCc6IHRydWUsXG4gICAgJ2JhY2tncm91bmRDb2xvcic6ICcjMzM4NWZmJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgY29sbGVnZWxvZ286IGNvbGxlZ2VBcGkubG9nbyxcbiAgICBjb2xsZWdlczogW11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG9uU2VsZWN0OiBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgeyBpZCA9IG51bGwgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XG4gICAgICBsZXQgY29sbGVnZSA9IHRoaXMuZ2V0Q29sbGVnZShpZClcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhWydjb2xsZWdlJ10gPSBjb2xsZWdlXG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogYC9wYWdlcy9ob21lL2luZGV4YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZ2V0Q29sbGVnZShpZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xsZWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuY29sbGVnZXNbaV1bJ2NvbGxlZ2VfaWQnXSA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVnZXNbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB0aGlzLmxvYWREYXRhKClcbiAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmxvYWREYXRhKClcbiAgfVxuICBhc3luYyBsb2FkRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgY29sbGVnZUFwaS5saXN0KClcbiAgICAgIGxldCB7IGxpc3Q6IGNvbGxlZ2VzIH0gPSBkYXRhXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsZWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb2xsZWdlc1tpXVsnbG9nbyddID0gdGhpcy5jb2xsZWdlbG9nbyArIGNvbGxlZ2VzW2ldWydjb2xsZWdlX2lkJ10gKyAnLnBuZydcbiAgICAgIH1cbiAgICAgIHRoaXMuY29sbGVnZXMgPSBjb2xsZWdlcyB8fCBbXVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxuICB9XG59XG4iXX0=