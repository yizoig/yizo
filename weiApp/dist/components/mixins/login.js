'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../interface/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var login = function (_wepy$mixin) {
    _inherits(login, _wepy$mixin);

    function login() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = login.__proto__ || Object.getPrototypeOf(login)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            userId: ''
        }, _this.methods = {
            tap: function tap() {
                this.mixin = 'mixin data was changed';
                console.log('mixin method tap');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(login, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _index2.default.getUserInfo();

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return login;
}(_wepy2.default.mixin);

exports.default = login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwiZGF0YSIsInVzZXJJZCIsIm1ldGhvZHMiLCJ0YXAiLCJtaXhpbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VySW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLG9CQUFRO0FBREwsUyxRQUdQQyxPLEdBQVU7QUFDTkMsZUFETSxpQkFDQTtBQUNGLHFCQUFLQyxLQUFMLEdBQWEsd0JBQWI7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNIO0FBSkssUzs7Ozs7Ozs7Ozs7O3VDQU9BLGdCQUFXQyxXQUFYLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFYcUIsZUFBS0gsSzs7a0JBQW5CTCxLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGludGVyZmFjZXMgZnJvbSAnLi4vLi4vaW50ZXJmYWNlL2luZGV4J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb2dpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICB1c2VySWQ6ICcnXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHRhcCgpIHtcclxuICAgICAgICAgICAgdGhpcy5taXhpbiA9ICdtaXhpbiBkYXRhIHdhcyBjaGFuZ2VkJ1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWl4aW4gbWV0aG9kIHRhcCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGF3YWl0IGludGVyZmFjZXMuZ2V0VXNlckluZm8oKVxyXG4gICAgfVxyXG59Il19