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

var question = function (_wepy$page) {
  _inherits(question, _wepy$page);

  function question() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, question);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = question.__proto__ || Object.getPrototypeOf(question)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '问题'
    }, _this.data = {
      motto: '知乎--微信小程序版',
      userInfo: {}
    }, _this.methods = {
      bindItemTap: function bindItemTap() {
        wx.navigateTo({
          url: './answer'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(question, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      console.log('onLoad');
      this.$parent.getUserInfo(function (userInfo) {
        //更新数据
        _this2.userInfo = userInfo;
      });
    }
  }]);

  return question;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(question , 'pages/question'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwicXVlc3Rpb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1vdHRvIiwidXNlckluZm8iLCJtZXRob2RzIiwiYmluZEl0ZW1UYXAiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE9BQU9DLFFBQVEsa0JBQVIsQ0FBWDs7SUFDcUJDLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLFlBREY7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBSVBDLE8sR0FBUTtBQUNOQyxtQkFBYSx1QkFBVztBQUN0QkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0Q7QUFMSyxLOzs7Ozs2QkFPQztBQUFBOztBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFDVCxRQUFELEVBQVk7QUFDckM7QUFDQSxlQUFLQSxRQUFMLEdBQWNBLFFBQWQ7QUFDRCxPQUhDO0FBSUQ7Ozs7RUFyQm1DVSxlQUFLQyxJOztrQkFBdEJoQixRIiwiZmlsZSI6InF1ZXN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICB2YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWwuanMnKVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHF1ZXN0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mXrumimCdcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG1vdHRvOiAn55+l5LmOLS3lvq7kv6HlsI/nqIvluo/niYgnLFxyXG4gICAgICB1c2VySW5mbzoge31cclxuICAgIH1cclxuICAgIG1ldGhvZHM9e1xyXG4gICAgICBiaW5kSXRlbVRhcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuL2Fuc3dlcidcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKHVzZXJJbmZvKT0+e1xyXG4gICAgICAvL+abtOaWsOaVsOaNrlxyXG4gICAgICB0aGlzLnVzZXJJbmZvPXVzZXJJbmZvXHJcbiAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuIl19