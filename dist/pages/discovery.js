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

var discovery = function (_wepy$page) {
  _inherits(discovery, _wepy$page);

  function discovery() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, discovery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = discovery.__proto__ || Object.getPrototypeOf(discovery)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '知乎'
    }, _this.data = {
      navTab: ["推荐", "圆桌", "热门", "收藏"],
      currentNavtab: "0",
      imgUrls: ['../../images/24213.jpg', '../../images/24280.jpg', '../../images/1444983318907-_DSC1826.jpg'],
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      feed: [],
      feed_length: 0
    }, _this.methods = {
      switchTab: function switchTab(e) {
        this.currentNavtab = e.currentTarget.dataset.idx;
      },
      bindItemTap: function bindItemTap() {
        wx.navigateTo({
          url: './answer'
        });
      },
      bindQueTap: function bindQueTap() {
        wx.navigateTo({
          url: './question'
        });
      },
      upper: function upper() {
        wx.showNavigationBarLoading();
        this.refresh();
        console.log("upper");
        setTimeout(function () {
          wx.hideNavigationBarLoading();wx.stopPullDownRefresh();
        }, 2000);
      },
      lower: function lower(e) {
        wx.showNavigationBarLoading();
        setTimeout(function () {
          wx.hideNavigationBarLoading();this.nextLoad();
        }, 1000);
        console.log("lower");
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(discovery, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
      this.refresh();
    }
  }, {
    key: 'refresh0',


    //网络请求数据, 实现刷新
    value: function refresh0() {
      var index_api = '';
      util.getData(index_api);
    }

    //使用本地 fake 数据实现刷新效果

  }, {
    key: 'refresh',
    value: function refresh() {
      var feed = util.getDiscovery();
      console.log("loaddata");
      this.feed = feed.data;
      this.feed_length = feed_data.length;
    }

    //使用本地 fake 数据实现继续加载效果

  }, {
    key: 'nextLoad',
    value: function nextLoad() {
      var next = util.discoveryNext();
      console.log("continueload");
      var next_data = next.data;
      this.feed = this.feed.concat(next_data);
      this.feed_length = this.feed_length + next_data.length;
    }
  }]);

  return discovery;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(discovery , 'pages/discovery'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyeS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsImRpc2NvdmVyeSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmF2VGFiIiwiY3VycmVudE5hdnRhYiIsImltZ1VybHMiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiZmVlZCIsImZlZWRfbGVuZ3RoIiwibWV0aG9kcyIsInN3aXRjaFRhYiIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkeCIsImJpbmRJdGVtVGFwIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYmluZFF1ZVRhcCIsInVwcGVyIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwicmVmcmVzaCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImxvd2VyIiwibmV4dExvYWQiLCJpbmRleF9hcGkiLCJnZXREYXRhIiwiZ2V0RGlzY292ZXJ5IiwiZmVlZF9kYXRhIiwibGVuZ3RoIiwibmV4dCIsImRpc2NvdmVyeU5leHQiLCJuZXh0X2RhdGEiLCJjb25jYXQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsT0FBT0MsUUFBUSxrQkFBUixDQUFYOztJQUNxQkMsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFPVEMsSSxHQUFLO0FBQ0hDLGNBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FETDtBQUVIQyxxQkFBZSxHQUZaO0FBR0hDLGVBQVMsQ0FDUCx3QkFETyxFQUVQLHdCQUZPLEVBR1AseUNBSE8sQ0FITjtBQVFIQyxxQkFBZSxLQVJaO0FBU0hDLGdCQUFVLElBVFA7QUFVSEMsZ0JBQVUsSUFWUDtBQVdIQyxnQkFBVSxJQVhQO0FBWUhDLFlBQU0sRUFaSDtBQWFIQyxtQkFBYTtBQWJWLEssUUFlTEMsTyxHQUFRO0FBQ0pDLGlCQUFXLG1CQUFTQyxDQUFULEVBQVc7QUFDcEIsYUFBS1YsYUFBTCxHQUFxQlUsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEdBQTdDO0FBQ0QsT0FIRztBQUlKQyxpQkFKSSx5QkFJVTtBQUNaQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQVJHO0FBU0pDLGdCQVRJLHdCQVNTO0FBQ1hILFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdELE9BYkc7QUFjSkUsV0FkSSxtQkFjSTtBQUNOSixXQUFHSyx3QkFBSDtBQUNBLGFBQUtDLE9BQUw7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FDLG1CQUFXLFlBQVU7QUFBQ1QsYUFBR1Usd0JBQUgsR0FBOEJWLEdBQUdXLG1CQUFIO0FBQTBCLFNBQTlFLEVBQWdGLElBQWhGO0FBQ0QsT0FuQkc7QUFvQkpDLFdBcEJJLGlCQW9CRWpCLENBcEJGLEVBb0JLO0FBQ1BLLFdBQUdLLHdCQUFIO0FBQ0FJLG1CQUFXLFlBQVU7QUFBQ1QsYUFBR1Usd0JBQUgsR0FBOEIsS0FBS0csUUFBTDtBQUFpQixTQUFyRSxFQUF1RSxJQUF2RTtBQUNBTixnQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDRDtBQXhCRyxLOzs7Ozs2QkFuQkM7QUFDUEQsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxXQUFLRixPQUFMO0FBQ0Q7Ozs7O0FBNENBOytCQUNPO0FBQ1IsVUFBSVEsWUFBWSxFQUFoQjtBQUNBcEMsV0FBS3FDLE9BQUwsQ0FBYUQsU0FBYjtBQUNEOztBQUVEOzs7OzhCQUNTO0FBQ1AsVUFBSXZCLE9BQU9iLEtBQUtzQyxZQUFMLEVBQVg7QUFDQVQsY0FBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSxXQUFLakIsSUFBTCxHQUFZQSxLQUFLUixJQUFqQjtBQUNBLFdBQUtTLFdBQUwsR0FBa0J5QixVQUFVQyxNQUE1QjtBQUNEOztBQUVBOzs7OytCQUNTO0FBQ1IsVUFBSUMsT0FBT3pDLEtBQUswQyxhQUFMLEVBQVg7QUFDQWIsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDQSxVQUFJYSxZQUFZRixLQUFLcEMsSUFBckI7QUFDQSxXQUFLUSxJQUFMLEdBQVUsS0FBS0EsSUFBTCxDQUFVK0IsTUFBVixDQUFpQkQsU0FBakIsQ0FBVjtBQUNBLFdBQUs3QixXQUFMLEdBQWlCLEtBQUtBLFdBQUwsR0FBbUI2QixVQUFVSCxNQUE5QztBQUNEOzs7O0VBeEVzQ0ssZUFBS0MsSTs7a0JBQXZCNUMsUyIsImZpbGUiOiJkaXNjb3ZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIHZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbC5qcycpXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGlzY292ZXJ5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+efpeS5jidcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXHJcbiAgICAgIHRoaXMucmVmcmVzaCgpXHJcbiAgICB9XHJcbiAgICBkYXRhPXtcclxuICAgICAgbmF2VGFiOiBbXCLmjqjojZBcIiwgXCLlnIbmoYxcIiwgXCLng63pl6hcIiwgXCLmlLbol49cIl0sXHJcbiAgICAgIGN1cnJlbnROYXZ0YWI6IFwiMFwiLFxyXG4gICAgICBpbWdVcmxzOiBbXHJcbiAgICAgICAgJy4uLy4uL2ltYWdlcy8yNDIxMy5qcGcnLFxyXG4gICAgICAgICcuLi8uLi9pbWFnZXMvMjQyODAuanBnJyxcclxuICAgICAgICAnLi4vLi4vaW1hZ2VzLzE0NDQ5ODMzMTg5MDctX0RTQzE4MjYuanBnJ1xyXG4gICAgICBdLFxyXG4gICAgICBpbmRpY2F0b3JEb3RzOiBmYWxzZSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgZmVlZDogW10sXHJcbiAgICAgIGZlZWRfbGVuZ3RoOiAwXHJcbiAgICB9XHJcbiAgICBtZXRob2RzPXtcclxuICAgICAgICBzd2l0Y2hUYWI6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50TmF2dGFiID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kSXRlbVRhcCgpIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcuL2Fuc3dlcidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kUXVlVGFwKCkge1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy4vcXVlc3Rpb24nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBwZXIoKSB7XHJcbiAgICAgICAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVwcGVyXCIpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3d4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO3d4LnN0b3BQdWxsRG93blJlZnJlc2goKTt9LCAyMDAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvd2VyKGUpIHtcclxuICAgICAgICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3d4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO3RoaXMubmV4dExvYWQoKTt9LCAxMDAwKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwibG93ZXJcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICAvL+e9kee7nOivt+axguaVsOaNriwg5a6e546w5Yi35pawXHJcbiAgcmVmcmVzaDAoKXtcclxuICAgIHZhciBpbmRleF9hcGkgPSAnJztcclxuICAgIHV0aWwuZ2V0RGF0YShpbmRleF9hcGkpICAgICAgICBcclxuICB9XHJcblxyXG4gIC8v5L2/55So5pys5ZywIGZha2Ug5pWw5o2u5a6e546w5Yi35paw5pWI5p6cXHJcbiAgcmVmcmVzaCgpe1xyXG4gICAgdmFyIGZlZWQgPSB1dGlsLmdldERpc2NvdmVyeSgpO1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkZGF0YVwiKTtcclxuICAgIHRoaXMuZmVlZCA9IGZlZWQuZGF0YVxyXG4gICAgdGhpcy5mZWVkX2xlbmd0aD0gZmVlZF9kYXRhLmxlbmd0aFxyXG4gIH1cclxuXHJcbiAgIC8v5L2/55So5pys5ZywIGZha2Ug5pWw5o2u5a6e546w57un57ut5Yqg6L295pWI5p6cXHJcbiAgbmV4dExvYWQoKXtcclxuICAgIHZhciBuZXh0ID0gdXRpbC5kaXNjb3ZlcnlOZXh0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbnRpbnVlbG9hZFwiKTtcclxuICAgIHZhciBuZXh0X2RhdGEgPSBuZXh0LmRhdGE7XHJcbiAgICB0aGlzLmZlZWQ9dGhpcy5mZWVkLmNvbmNhdChuZXh0X2RhdGEpXHJcbiAgICB0aGlzLmZlZWRfbGVuZ3RoPXRoaXMuZmVlZF9sZW5ndGggKyBuZXh0X2RhdGEubGVuZ3RoICAgIFxyXG4gIH1cclxuXHJcblxyXG5cclxuICB9XHJcbiJdfQ==