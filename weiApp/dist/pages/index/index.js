'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _api3 = require('./../../config/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      collegelogo: _api3.host + '/college/logo/',
      colleges: []
    }, _this.methods = {
      onSelect: function onSelect(e) {
        var _e$currentTarget$data = e.currentTarget.dataset.id,
            id = _e$currentTarget$data === undefined ? null : _e$currentTarget$data;

        var college = this.getCollege(id);

        console.log(college);
        _wepy2.default.setStorageSync('college', college);
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
    key: 'onLoad',
    value: function onLoad() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      (0, _api2.default)('collegelist', {}).then(function (_ref2) {
        var data = _ref2.data;
        var colleges = data.list;

        for (var i = 0; i < colleges.length; i++) {
          colleges[i]['logo'] = _this2.collegelogo + colleges[i]['college_id'] + '.png';
        }
        console.log(colleges);
        _this2.colleges = colleges || [];
        _this2.$apply();
      }, function (reason) {
        console.log(reason);
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNvbGxlZ2Vsb2dvIiwiY29sbGVnZXMiLCJtZXRob2RzIiwib25TZWxlY3QiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsImNvbGxlZ2UiLCJnZXRDb2xsZWdlIiwiY29uc29sZSIsImxvZyIsInNldFN0b3JhZ2VTeW5jIiwic3dpdGNoVGFiIiwidXJsIiwiaSIsImxlbmd0aCIsImxvYWREYXRhIiwidGhlbiIsImxpc3QiLCIkYXBwbHkiLCJyZWFzb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0xDLG1CQUFhLGFBQU8sZ0JBRGY7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBS1BDLE8sR0FBVTtBQUNSQyxnQkFBVSxrQkFBU0MsQ0FBVCxFQUFZO0FBQUEsb0NBQ0FBLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BRGhCLENBQ2RDLEVBRGM7QUFBQSxZQUNkQSxFQURjLHlDQUNULElBRFM7O0FBRXBCLFlBQUlDLFVBQVUsS0FBS0MsVUFBTCxDQUFnQkYsRUFBaEIsQ0FBZDs7QUFFQUcsZ0JBQVFDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBLHVCQUFLSSxjQUFMLENBQW9CLFNBQXBCLEVBQStCSixPQUEvQjtBQUNBLHVCQUFLSyxTQUFMLENBQWU7QUFDYkM7QUFEYSxTQUFmO0FBR0Q7QUFWTyxLOzs7OzsrQkFZQ1AsRSxFQUFJO0FBQ2IsV0FBSyxJQUFJUSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2QsUUFBTCxDQUFjZSxNQUFsQyxFQUEwQ0QsR0FBMUMsRUFBK0M7QUFDN0MsWUFBSSxLQUFLZCxRQUFMLENBQWNjLENBQWQsRUFBaUIsWUFBakIsTUFBbUNSLEVBQXZDLEVBQTJDO0FBQ3pDLGlCQUFPLEtBQUtOLFFBQUwsQ0FBY2MsQ0FBZCxDQUFQO0FBQ0Q7QUFDRjtBQUNELGFBQU8sSUFBUDtBQUNEOzs7NkJBQ1E7QUFDUCxXQUFLRSxRQUFMO0FBQ0Q7OzsrQkFDVTtBQUFBOztBQUNULHlCQUFRLGFBQVIsRUFBdUIsRUFBdkIsRUFBMkJDLElBQTNCLENBQWdDLGlCQUFjO0FBQUEsWUFBWG5CLElBQVcsU0FBWEEsSUFBVztBQUFBLFlBQ2hDRSxRQURnQyxHQUNuQkYsSUFEbUIsQ0FDdENvQixJQURzQzs7QUFFNUMsYUFBSyxJQUFJSixJQUFJLENBQWIsRUFBZ0JBLElBQUlkLFNBQVNlLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN4Q2QsbUJBQVNjLENBQVQsRUFBWSxNQUFaLElBQXNCLE9BQUtmLFdBQUwsR0FBbUJDLFNBQVNjLENBQVQsRUFBWSxZQUFaLENBQW5CLEdBQStDLE1BQXJFO0FBQ0Q7QUFDREwsZ0JBQVFDLEdBQVIsQ0FBWVYsUUFBWjtBQUNBLGVBQUtBLFFBQUwsR0FBZ0JBLFlBQVksRUFBNUI7QUFDQSxlQUFLbUIsTUFBTDtBQUNELE9BUkQsRUFRRyxrQkFBVTtBQUNYVixnQkFBUUMsR0FBUixDQUFZVSxNQUFaO0FBQ0QsT0FWRDtBQVdEOzs7O0VBekNnQyxlQUFLQyxJOztrQkFBbkJ4QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xuaW1wb3J0IHsgaG9zdCB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcGknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgY29sbGVnZWxvZ286IGhvc3QgKyAnL2NvbGxlZ2UvbG9nby8nLFxuICAgIGNvbGxlZ2VzOiBbXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBvblNlbGVjdDogZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHsgaWQgPSBudWxsIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgbGV0IGNvbGxlZ2UgPSB0aGlzLmdldENvbGxlZ2UoaWQpXG5cbiAgICAgIGNvbnNvbGUubG9nKGNvbGxlZ2UpXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdjb2xsZWdlJywgY29sbGVnZSlcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWUvaW5kZXhgXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBnZXRDb2xsZWdlKGlkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbGxlZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jb2xsZWdlc1tpXVsnY29sbGVnZV9pZCddID09PSBpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWdlc1tpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmxvYWREYXRhKClcbiAgfVxuICBsb2FkRGF0YSgpIHtcbiAgICByZXF1ZXN0KCdjb2xsZWdlbGlzdCcsIHt9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgbGV0IHsgbGlzdDogY29sbGVnZXMgfSA9IGRhdGFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVnZXNbaV1bJ2xvZ28nXSA9IHRoaXMuY29sbGVnZWxvZ28gKyBjb2xsZWdlc1tpXVsnY29sbGVnZV9pZCddICsgJy5wbmcnXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhjb2xsZWdlcylcbiAgICAgIHRoaXMuY29sbGVnZXMgPSBjb2xsZWdlcyB8fCBbXVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sIHJlYXNvbiA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZWFzb24pXG4gICAgfSlcbiAgfVxufVxuIl19