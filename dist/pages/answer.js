'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('./../utils/util.js');

var answer = function (_wepy$page) {
  _inherits(answer, _wepy$page);

  function answer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, answer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = answer.__proto__ || Object.getPrototypeOf(answer)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '回答'
    }, _this.data = {
      motto: '知乎--微信小程序版',
      userInfo: {}
    }, _this.methods = {
      toQuestion: function toQuestion() {
        wx.navigateTo({
          url: './question'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(answer, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      console.log('onLoad');
      //调用应用实例的方法获取全局数据
      app.getUserInfo(function (userInfo) {
        //更新数据
        _this2.userInfo = userInfo;
      });
    }
  }]);

  return answer;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(answer , 'pages/answer'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuc3dlci5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsImFuc3dlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibW90dG8iLCJ1c2VySW5mbyIsIm1ldGhvZHMiLCJ0b1F1ZXN0aW9uIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29uc29sZSIsImxvZyIsImFwcCIsImdldFVzZXJJbmZvIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE9BQU9DLFFBQVEsa0JBQVIsQ0FBWDs7SUFFcUJDLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLFlBREY7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBWVBDLE8sR0FBUTtBQUNMQyxrQkFBWSxzQkFBVztBQUNwQkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0Q7QUFMRyxLOzs7Ozs2QkFSQztBQUFBOztBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBO0FBQ0FDLFVBQUlDLFdBQUosQ0FBZ0IsVUFBQ1QsUUFBRCxFQUFjO0FBQzVCO0FBQ0EsZUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRCxPQUhEO0FBSUQ7Ozs7RUFmaUNVLGVBQUtDLEk7O2tCQUFwQmhCLE0iLCJmaWxlIjoiYW5zd2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICB2YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWwuanMnKVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhbnN3ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zue562UJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbW90dG86ICfnn6XkuY4tLeW+ruS/oeWwj+eoi+W6j+eJiCcsXHJcbiAgICAgIHVzZXJJbmZvOiB7fVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcclxuICAgICAgLy/osIPnlKjlupTnlKjlrp7kvovnmoTmlrnms5Xojrflj5blhajlsYDmlbDmja5cclxuICAgICAgYXBwLmdldFVzZXJJbmZvKCh1c2VySW5mbykgPT4ge1xyXG4gICAgICAgIC8v5pu05paw5pWw5o2uXHJcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJJbmZvXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBtZXRob2RzPXtcclxuICAgICAgIHRvUXVlc3Rpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy4vcXVlc3Rpb24nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==