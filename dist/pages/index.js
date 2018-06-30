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
      navigationBarTitleText: '知乎'
    }, _this.data = {
      feed: [],
      feed_length: 0
    }, _this.methods = {
      //事件处理函数
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
        console.log('upper');
        setTimeout(function () {
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
        }, 2000);
      },
      lower: function lower(e) {
        wx.showNavigationBarLoading();
        var that = this;
        setTimeout(function () {
          wx.hideNavigationBarLoading();
          that.nextLoad();
        }, 1000);
        console.log('lower');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
      this.getData();
    }

    //网络请求数据, 实现首页刷新

  }, {
    key: 'refresh0',
    value: function refresh0() {
      var index_api = '';
      util.getData(index_api).then(function (data) {
        console.log(data);
      });
    }

    //使用本地 fake 数据实现刷新效果

  }, {
    key: 'getData',
    value: function getData() {
      var feed = util.getData2();
      console.log('loaddata');
      var feed_data = feed.data;
      this.feed = feed_data;
      this.feed_length = feed_data.length;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      wx.showToast({
        title: '刷新中',
        icon: 'loading',
        duration: 3000
      });
      setTimeout(function () {
        wx.showToast({
          title: '刷新成功',
          icon: 'success',
          duration: 2000
        });
      }, 3000);
      var feed = util.getData2();
      console.log('loaddata');
      var feed_data = feed.data;
      this.feed = feed_data;
      this.feed_length = feed_data.length;
    }
    //使用本地 fake 数据实现继续加载效果

  }, {
    key: 'nextLoad',
    value: function nextLoad() {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 4000
      });
      setTimeout(function () {
        wx.showToast({
          title: '加载成功',
          icon: 'success',
          duration: 2000
        });
      }, 3000);
      var next = util.getNext();
      console.log('continueload');
      var next_data = next.data;
      this.feed = this.feed.concat(next_data);
      this.feed_length = this.feed_length + next_data.length;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImZlZWQiLCJmZWVkX2xlbmd0aCIsIm1ldGhvZHMiLCJiaW5kSXRlbVRhcCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImJpbmRRdWVUYXAiLCJ1cHBlciIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInJlZnJlc2giLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJsb3dlciIsImUiLCJ0aGF0IiwibmV4dExvYWQiLCJnZXREYXRhIiwiaW5kZXhfYXBpIiwidGhlbiIsImdldERhdGEyIiwiZmVlZF9kYXRhIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJuZXh0IiwiZ2V0TmV4dCIsIm5leHRfZGF0YSIsImNvbmNhdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPQyxRQUFRLGtCQUFSLENBQVg7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLG1CQUFhO0FBRlIsSyxRQUlQQyxPLEdBQVU7QUFDTjtBQUNKQyxpQkFGVSx5QkFFSTtBQUNaQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQU5TO0FBT1ZDLGdCQVBVLHdCQU9HO0FBQ1hILFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdELE9BWFM7QUFZVkUsV0FaVSxtQkFZRjtBQUNOSixXQUFHSyx3QkFBSDtBQUNBLGFBQUtDLE9BQUw7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FDLG1CQUFXLFlBQVc7QUFDcEJULGFBQUdVLHdCQUFIO0FBQ0FWLGFBQUdXLG1CQUFIO0FBQ0QsU0FIRCxFQUdHLElBSEg7QUFJRCxPQXBCUztBQXFCVkMsV0FyQlUsaUJBcUJKQyxDQXJCSSxFQXFCRDtBQUNQYixXQUFHSyx3QkFBSDtBQUNBLFlBQUlTLE9BQU8sSUFBWDtBQUNBTCxtQkFBVyxZQUFXO0FBQ3BCVCxhQUFHVSx3QkFBSDtBQUNBSSxlQUFLQyxRQUFMO0FBQ0QsU0FIRCxFQUdHLElBSEg7QUFJQVIsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7QUE3QlMsSzs7Ozs7NkJBK0JEO0FBQ1BELGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsV0FBS1EsT0FBTDtBQUNEOztBQUtEOzs7OytCQUNXO0FBQ1QsVUFBSUMsWUFBWSxFQUFoQjtBQUNBM0IsV0FBSzBCLE9BQUwsQ0FBYUMsU0FBYixFQUF3QkMsSUFBeEIsQ0FBNkIsVUFBU3ZCLElBQVQsRUFBZTtBQUMxQ1ksZ0JBQVFDLEdBQVIsQ0FBWWIsSUFBWjtBQUNELE9BRkQ7QUFHRDs7QUFFRDs7Ozs4QkFDVTtBQUNSLFVBQUlDLE9BQU9OLEtBQUs2QixRQUFMLEVBQVg7QUFDQVosY0FBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSxVQUFJWSxZQUFZeEIsS0FBS0QsSUFBckI7QUFDQSxXQUFLQyxJQUFMLEdBQVV3QixTQUFWO0FBQ0EsV0FBS3ZCLFdBQUwsR0FBaUJ1QixVQUFVQyxNQUEzQjtBQUNEOzs7OEJBQ1M7QUFDUnJCLFNBQUdzQixTQUFILENBQWE7QUFDWEMsZUFBTyxLQURJO0FBRVhDLGNBQU0sU0FGSztBQUdYQyxrQkFBVTtBQUhDLE9BQWI7QUFLQWhCLGlCQUFXLFlBQVc7QUFDcEJULFdBQUdzQixTQUFILENBQWE7QUFDWEMsaUJBQU8sTUFESTtBQUVYQyxnQkFBTSxTQUZLO0FBR1hDLG9CQUFVO0FBSEMsU0FBYjtBQUtELE9BTkQsRUFNRyxJQU5IO0FBT0EsVUFBSTdCLE9BQU9OLEtBQUs2QixRQUFMLEVBQVg7QUFDQVosY0FBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSxVQUFJWSxZQUFZeEIsS0FBS0QsSUFBckI7QUFDQSxXQUFLQyxJQUFMLEdBQVV3QixTQUFWO0FBQ0EsV0FBS3ZCLFdBQUwsR0FBaUJ1QixVQUFVQyxNQUEzQjtBQUNEO0FBQ0Q7Ozs7K0JBQ1c7QUFDVHJCLFNBQUdzQixTQUFILENBQWE7QUFDWEMsZUFBTyxLQURJO0FBRVhDLGNBQU0sU0FGSztBQUdYQyxrQkFBVTtBQUhDLE9BQWI7QUFLQWhCLGlCQUFXLFlBQVc7QUFDcEJULFdBQUdzQixTQUFILENBQWE7QUFDWEMsaUJBQU8sTUFESTtBQUVYQyxnQkFBTSxTQUZLO0FBR1hDLG9CQUFVO0FBSEMsU0FBYjtBQUtELE9BTkQsRUFNRyxJQU5IO0FBT0EsVUFBSUMsT0FBT3BDLEtBQUtxQyxPQUFMLEVBQVg7QUFDQXBCLGNBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsVUFBSW9CLFlBQVlGLEtBQUsvQixJQUFyQjtBQUNBLFdBQUtDLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVpQyxNQUFWLENBQWlCRCxTQUFqQixDQUFaO0FBQ0EsV0FBSy9CLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxHQUFtQitCLFVBQVVQLE1BQWhEO0FBQ0Q7Ozs7RUFyR2dDUyxlQUFLQyxJOztrQkFBbkJ2QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbC5qcycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55+l5LmOJ1xuICB9O1xuICBkYXRhID0ge1xuICAgIGZlZWQ6IFtdLFxuICAgIGZlZWRfbGVuZ3RoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAgIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRJdGVtVGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi9hbnN3ZXInXG4gICAgfSlcbiAgfSxcbiAgYmluZFF1ZVRhcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4vcXVlc3Rpb24nXG4gICAgfSlcbiAgfSxcbiAgdXBwZXIoKSB7XG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgY29uc29sZS5sb2coJ3VwcGVyJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xuICAgIH0sIDIwMDApO1xuICB9LFxuICBsb3dlcihlKSB7XG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTtcbiAgICAgIHRoYXQubmV4dExvYWQoKTtcbiAgICB9LCAxMDAwKTtcbiAgICBjb25zb2xlLmxvZygnbG93ZXInKTtcbiAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnb25Mb2FkJyk7XG4gICAgdGhpcy5nZXREYXRhKClcbiAgfVxuXG5cblxuXG4gIC8v572R57uc6K+35rGC5pWw5o2uLCDlrp7njrDpppbpobXliLfmlrBcbiAgcmVmcmVzaDAoKSB7XG4gICAgdmFyIGluZGV4X2FwaSA9ICcnO1xuICAgIHV0aWwuZ2V0RGF0YShpbmRleF9hcGkpLnRoZW4oZnVuY3Rpb24oZGF0YSkgeyAgICAgIFxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICAvL+S9v+eUqOacrOWcsCBmYWtlIOaVsOaNruWunueOsOWIt+aWsOaViOaenFxuICBnZXREYXRhKCkge1xuICAgIHZhciBmZWVkID0gdXRpbC5nZXREYXRhMigpO1xuICAgIGNvbnNvbGUubG9nKCdsb2FkZGF0YScpO1xuICAgIHZhciBmZWVkX2RhdGEgPSBmZWVkLmRhdGE7XG4gICAgdGhpcy5mZWVkPWZlZWRfZGF0YVxuICAgIHRoaXMuZmVlZF9sZW5ndGg9ZmVlZF9kYXRhLmxlbmd0aFxuICB9XG4gIHJlZnJlc2goKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yi35paw5LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgfSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Yi35paw5oiQ5YqfJyxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgfSk7XG4gICAgfSwgMzAwMCk7XG4gICAgdmFyIGZlZWQgPSB1dGlsLmdldERhdGEyKCk7XG4gICAgY29uc29sZS5sb2coJ2xvYWRkYXRhJyk7XG4gICAgdmFyIGZlZWRfZGF0YSA9IGZlZWQuZGF0YTtcbiAgICB0aGlzLmZlZWQ9ZmVlZF9kYXRhXG4gICAgdGhpcy5mZWVkX2xlbmd0aD1mZWVkX2RhdGEubGVuZ3RoXG4gIH1cbiAgLy/kvb/nlKjmnKzlnLAgZmFrZSDmlbDmja7lrp7njrDnu6fnu63liqDovb3mlYjmnpxcbiAgbmV4dExvYWQoKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiA0MDAwXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDovb3miJDlip8nLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICB9KTtcbiAgICB9LCAzMDAwKVxuICAgIHZhciBuZXh0ID0gdXRpbC5nZXROZXh0KCk7XG4gICAgY29uc29sZS5sb2coJ2NvbnRpbnVlbG9hZCcpO1xuICAgIHZhciBuZXh0X2RhdGEgPSBuZXh0LmRhdGE7XG4gICAgdGhpcy5mZWVkID0gdGhpcy5mZWVkLmNvbmNhdChuZXh0X2RhdGEpXG4gICAgdGhpcy5mZWVkX2xlbmd0aCA9IHRoaXMuZmVlZF9sZW5ndGggKyBuZXh0X2RhdGEubGVuZ3RoXG4gIH1cbn1cbiJdfQ==