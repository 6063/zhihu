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

var more = function (_wepy$page) {
  _inherits(more, _wepy$page);

  function more() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, more);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = more.__proto__ || Object.getPrototypeOf(more)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人主页'
    }, _this.data = {
      motto: 'Hello World',
      userInfo: {}
    }, _this.methods = {
      bindViewTap: function bindViewTap() {
        wx.navigateTo({
          url: ''
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(more, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      wx.getUserInfo({
        withCredentials: 'false',
        lang: 'zh_CN',
        success: function success(res) {
          _this2.userInfo = res.userInfo;
        }
      });
    }
  }]);

  return more;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(more , 'pages/more'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vcmUuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJtb3JlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJtb3R0byIsInVzZXJJbmZvIiwibWV0aG9kcyIsImJpbmRWaWV3VGFwIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0VXNlckluZm8iLCJ3aXRoQ3JlZGVudGlhbHMiLCJsYW5nIiwic3VjY2VzcyIsInJlcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPQyxRQUFRLGtCQUFSLENBQVg7O0lBQ3FCQyxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQWFUQyxJLEdBQUs7QUFDSEMsYUFBTyxhQURKO0FBRUhDLGdCQUFVO0FBRlAsSyxRQUlMQyxPLEdBQVE7QUFDSkMsbUJBQWEsdUJBQVc7QUFDdEJDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdEO0FBTEcsSzs7Ozs7NkJBZEM7QUFBQTs7QUFDUEYsU0FBR0csV0FBSCxDQUFlO0FBQ2JDLHlCQUFpQixPQURKO0FBRWJDLGNBQU0sT0FGTztBQUdiQyxpQkFBUyxzQkFBTztBQUNkLGlCQUFLVCxRQUFMLEdBQWdCVSxJQUFJVixRQUFwQjtBQUNEO0FBTFksT0FBZjtBQVFEOzs7O0VBYitCVyxlQUFLQyxJOztrQkFBbEJqQixJIiwiZmlsZSI6Im1vcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIHZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbC5qcycpXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW9yZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuLvpobUnXHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6ICdmYWxzZScsXHJcbiAgICAgICAgbGFuZzogJ3poX0NOJyxcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBkYXRhPXtcclxuICAgICAgbW90dG86ICdIZWxsbyBXb3JsZCcsXHJcbiAgICAgIHVzZXJJbmZvOiB7fVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcz17XHJcbiAgICAgICAgYmluZFZpZXdUYXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG4iXX0=