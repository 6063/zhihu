"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ["pages/index", "pages/discovery", "pages/notify", "pages/chat", "pages/more", "pages/answer", "pages/question"],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#0068C4',
        navigationBarTitleText: '知乎',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        color: "#626567",
        selectedColor: "#2A8CE5",
        backgroundColor: "#FBFBFB",
        borderStyle: "white",
        list: [{
          pagePath: "pages/index",
          text: "首页",
          iconPath: "images/index.png",
          selectedIconPath: "images/index_focus.png"
        }, {
          pagePath: "pages/discovery",
          text: "发现",
          iconPath: "images/discovery.png",
          selectedIconPath: "images/discovery_focus.png"
        }, {
          pagePath: "pages/notify",
          text: "通知",
          iconPath: "images/ring.png",
          selectedIconPath: "images/ring_focus.png"
        }, {
          pagePath: "pages/chat",
          text: "聊天",
          iconPath: "images/chat.png",
          selectedIconPath: "images/chat_focus.png"
        }, {
          pagePath: "pages/more",
          text: "我的",
          iconPath: "images/burger.png",
          selectedIconPath: "images/burger_focus.png"
        }]
      }
    }, _this.getUserInfo = function (cb) {
      if (_this.globalData.userInfo) {
        typeof cb == "function" && cb(_this.$parent.userInfo);
      } else {
        //调用登录接口

        wx.login({
          success: function success(res) {
            wx.getUserInfo({
              success: function success(res) {
                _this.$parent.userInfo = res.userInfo;
                typeof cb == "function" && cb(_this.$parent.userInfo);
              }
            });
          }
        });
      }
    }, _this.globalData = {
      userInfo: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: "onLaunch",
    value: function onLaunch() {
      //调用API从本地缓存中获取数据
      var logs = wx.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      wx.setStorageSync('logs', logs);
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnZXRVc2VySW5mbyIsImNiIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiJHBhcmVudCIsInd4IiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwibG9ncyIsImdldFN0b3JhZ2VTeW5jIiwidW5zaGlmdCIsIkRhdGUiLCJub3ciLCJzZXRTdG9yYWdlU3luYyIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxpQkFGSyxFQUdMLGNBSEssRUFJTCxZQUpLLEVBS0wsWUFMSyxFQU1MLGNBTkssRUFPTCxnQkFQSyxDQURBO0FBVVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixJQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FWRDtBQWdCUEMsY0FBUTtBQUNSQyxlQUFPLFNBREM7QUFFUkMsdUJBQWUsU0FGUDtBQUdSQyx5QkFBaUIsU0FIVDtBQUlSQyxxQkFBYSxPQUpMO0FBS1JDLGNBQU0sQ0FBQztBQUNMQyxvQkFBVSxhQURMO0FBRUxDLGdCQUFNLElBRkQ7QUFHTEMsb0JBQVUsa0JBSEw7QUFJTEMsNEJBQWtCO0FBSmIsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLGlCQURUO0FBRURDLGdCQUFNLElBRkw7QUFHREMsb0JBQVUsc0JBSFQ7QUFJREMsNEJBQWtCO0FBSmpCLFNBTEcsRUFVSDtBQUNESCxvQkFBVSxjQURUO0FBRURDLGdCQUFNLElBRkw7QUFHREMsb0JBQVUsaUJBSFQ7QUFJREMsNEJBQWtCO0FBSmpCLFNBVkcsRUFlSDtBQUNESCxvQkFBVSxZQURUO0FBRURDLGdCQUFNLElBRkw7QUFHREMsb0JBQVUsaUJBSFQ7QUFJREMsNEJBQWtCO0FBSmpCLFNBZkcsRUFvQkg7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyxnQkFBTSxJQUZMO0FBR0RDLG9CQUFVLG1CQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQXBCRztBQUxFO0FBaEJELEssUUEwRFRDLFcsR0FBYyxVQUFDQyxFQUFELEVBQU87QUFDbkIsVUFBRyxNQUFLQyxVQUFMLENBQWdCQyxRQUFuQixFQUE0QjtBQUMxQixlQUFPRixFQUFQLElBQWEsVUFBYixJQUEyQkEsR0FBRyxNQUFLRyxPQUFMLENBQWFELFFBQWhCLENBQTNCO0FBQ0QsT0FGRCxNQUVLO0FBQ0g7O0FBRUFFLFdBQUdDLEtBQUgsQ0FBUztBQUNQQyxtQkFBUyxzQkFBTztBQUNkRixlQUFHTCxXQUFILENBQWU7QUFDYk8sdUJBQVMsc0JBQVE7QUFDZixzQkFBS0gsT0FBTCxDQUFhRCxRQUFiLEdBQXdCSyxJQUFJTCxRQUE1QjtBQUNBLHVCQUFPRixFQUFQLElBQWEsVUFBYixJQUEyQkEsR0FBRyxNQUFLRyxPQUFMLENBQWFELFFBQWhCLENBQTNCO0FBQ0Q7QUFKWSxhQUFmO0FBTUQ7QUFSTSxTQUFUO0FBVUQ7QUFDRixLLFFBQ0RELFUsR0FBYTtBQUNYQyxnQkFBUztBQURFLEs7Ozs7OytCQXhCRjtBQUNUO0FBQ0EsVUFBSU0sT0FBT0osR0FBR0ssY0FBSCxDQUFrQixNQUFsQixLQUE2QixFQUF4QztBQUNBRCxXQUFLRSxPQUFMLENBQWFDLEtBQUtDLEdBQUwsRUFBYjtBQUNBUixTQUFHUyxjQUFILENBQWtCLE1BQWxCLEVBQTBCTCxJQUExQjtBQUNEOzs7O0VBMUQwQk0sZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgIFwicGFnZXMvaW5kZXhcIixcbiAgICAgIFwicGFnZXMvZGlzY292ZXJ5XCIsXG4gICAgICBcInBhZ2VzL25vdGlmeVwiLFxuICAgICAgXCJwYWdlcy9jaGF0XCIsXG4gICAgICBcInBhZ2VzL21vcmVcIixcbiAgICAgIFwicGFnZXMvYW5zd2VyXCIsXG4gICAgICBcInBhZ2VzL3F1ZXN0aW9uXCJcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMDA2OEM0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnn6XkuY4nLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgY29sb3I6IFwiIzYyNjU2N1wiLFxuICAgIHNlbGVjdGVkQ29sb3I6IFwiIzJBOENFNVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkJGQkZCXCIsXG4gICAgYm9yZGVyU3R5bGU6IFwid2hpdGVcIixcbiAgICBsaXN0OiBbe1xuICAgICAgcGFnZVBhdGg6IFwicGFnZXMvaW5kZXhcIixcbiAgICAgIHRleHQ6IFwi6aaW6aG1XCIsXG4gICAgICBpY29uUGF0aDogXCJpbWFnZXMvaW5kZXgucG5nXCIsXG4gICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9pbmRleF9mb2N1cy5wbmdcIlxuICAgIH0sIHtcbiAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2Rpc2NvdmVyeVwiLFxuICAgICAgdGV4dDogXCLlj5HnjrBcIixcbiAgICAgIGljb25QYXRoOiBcImltYWdlcy9kaXNjb3ZlcnkucG5nXCIsXG4gICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9kaXNjb3ZlcnlfZm9jdXMucG5nXCJcbiAgICB9LCB7XG4gICAgICBwYWdlUGF0aDogXCJwYWdlcy9ub3RpZnlcIixcbiAgICAgIHRleHQ6IFwi6YCa55+lXCIsXG4gICAgICBpY29uUGF0aDogXCJpbWFnZXMvcmluZy5wbmdcIixcbiAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL3JpbmdfZm9jdXMucG5nXCJcbiAgICB9LCB7XG4gICAgICBwYWdlUGF0aDogXCJwYWdlcy9jaGF0XCIsXG4gICAgICB0ZXh0OiBcIuiBiuWkqVwiLFxuICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL2NoYXQucG5nXCIsXG4gICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9jaGF0X2ZvY3VzLnBuZ1wiXG4gICAgfSwge1xuICAgICAgcGFnZVBhdGg6IFwicGFnZXMvbW9yZVwiLFxuICAgICAgdGV4dDogXCLmiJHnmoRcIixcbiAgICAgIGljb25QYXRoOiBcImltYWdlcy9idXJnZXIucG5nXCIsXG4gICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9idXJnZXJfZm9jdXMucG5nXCJcbiAgICB9XVxuICB9XG4gIH1cblxuICBcblxuICBvbkxhdW5jaCgpIHtcbiAgICAvL+iwg+eUqEFQSeS7juacrOWcsOe8k+WtmOS4reiOt+WPluaVsOaNrlxuICAgIHZhciBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcbiAgfVxuICBnZXRVc2VySW5mbyA9IChjYikgPT57ICAgIFxuICAgIGlmKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyl7XG4gICAgICB0eXBlb2YgY2IgPT0gXCJmdW5jdGlvblwiICYmIGNiKHRoaXMuJHBhcmVudC51c2VySW5mbylcbiAgICB9ZWxzZXtcbiAgICAgIC8v6LCD55So55m75b2V5o6l5Y+jXG4gICAgIFxuICAgICAgd3gubG9naW4oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4geyAgICAgICAgICBcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4gIHtcbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgIHR5cGVvZiBjYiA9PSBcImZ1bmN0aW9uXCIgJiYgY2IodGhpcy4kcGFyZW50LnVzZXJJbmZvKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86bnVsbFxuICB9XG4gXG59XG4iXX0=