'use strict';

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

module.exports = {
  formatTime: formatTime
};

var index = require('./../data/data_index.js');
var index_next = require('./../data/data_index_next.js');
var discovery = require('./../data/data_discovery.js');
var discovery_next = require('./../data/data_discovery_next.js');

function getData(url) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function success(res) {
        console.log("success");
        resolve(res);
      },
      fail: function fail(res) {
        reject(res);
        console.log("failed");
      }
    });
  });
}

function getData2() {
  return index.index;
}

function getNext() {
  return index_next.next;
}

function getDiscovery() {
  return discovery.discovery;
}

function discoveryNext() {
  return discovery_next.next;
}

module.exports.getData = getData;
module.exports.getData2 = getData2;
module.exports.getNext = getNext;
module.exports.getDiscovery = getDiscovery;
module.exports.discoveryNext = discoveryNext;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiZm9ybWF0VGltZSIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWFwIiwiZm9ybWF0TnVtYmVyIiwiam9pbiIsIm4iLCJ0b1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbmRleCIsInJlcXVpcmUiLCJpbmRleF9uZXh0IiwiZGlzY292ZXJ5IiwiZGlzY292ZXJ5X25leHQiLCJnZXREYXRhIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eCIsInJlcXVlc3QiLCJkYXRhIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwiZ2V0RGF0YTIiLCJnZXROZXh0IiwibmV4dCIsImdldERpc2NvdmVyeSIsImRpc2NvdmVyeU5leHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDeEIsTUFBSUMsT0FBT0QsS0FBS0UsV0FBTCxFQUFYO0FBQ0EsTUFBSUMsUUFBUUgsS0FBS0ksUUFBTCxLQUFrQixDQUE5QjtBQUNBLE1BQUlDLE1BQU1MLEtBQUtNLE9BQUwsRUFBVjs7QUFFQSxNQUFJQyxPQUFPUCxLQUFLUSxRQUFMLEVBQVg7QUFDQSxNQUFJQyxTQUFTVCxLQUFLVSxVQUFMLEVBQWI7QUFDQSxNQUFJQyxTQUFTWCxLQUFLWSxVQUFMLEVBQWI7O0FBR0EsU0FBTyxDQUFDWCxJQUFELEVBQU9FLEtBQVAsRUFBY0UsR0FBZCxFQUFtQlEsR0FBbkIsQ0FBdUJDLFlBQXZCLEVBQXFDQyxJQUFyQyxDQUEwQyxHQUExQyxJQUFpRCxHQUFqRCxHQUF1RCxDQUFDUixJQUFELEVBQU9FLE1BQVAsRUFBZUUsTUFBZixFQUF1QkUsR0FBdkIsQ0FBMkJDLFlBQTNCLEVBQXlDQyxJQUF6QyxDQUE4QyxHQUE5QyxDQUE5RDtBQUNEOztBQUVELFNBQVNELFlBQVQsQ0FBc0JFLENBQXRCLEVBQXlCO0FBQ3ZCQSxNQUFJQSxFQUFFQyxRQUFGLEVBQUo7QUFDQSxTQUFPRCxFQUFFLENBQUYsSUFBT0EsQ0FBUCxHQUFXLE1BQU1BLENBQXhCO0FBQ0Q7O0FBRURFLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnBCLGNBQVlBO0FBREcsQ0FBakI7O0FBSUEsSUFBSXFCLFFBQVFDLFFBQVEsdUJBQVIsQ0FBWjtBQUNBLElBQUlDLGFBQWFELFFBQVEsNEJBQVIsQ0FBakI7QUFDQSxJQUFJRSxZQUFZRixRQUFRLDJCQUFSLENBQWhCO0FBQ0EsSUFBSUcsaUJBQWlCSCxRQUFRLGdDQUFSLENBQXJCOztBQUVBLFNBQVNJLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXFCO0FBQ25CLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQXlCO0FBQzFDQyxPQUFHQyxPQUFILENBQVc7QUFDVEwsV0FBS0EsR0FESTtBQUVUTSxZQUFNLEVBRkc7QUFHVEMsY0FBUTtBQUNOO0FBRE0sT0FIQztBQU1UQyxlQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJDLGdCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBVCxnQkFBUU8sR0FBUjtBQUNELE9BVFE7QUFVVEcsWUFBTSxjQUFVSCxHQUFWLEVBQWU7QUFDbkJOLGVBQU9NLEdBQVA7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFiUSxLQUFYO0FBZUQsR0FoQk0sQ0FBUDtBQWlCRDs7QUFFRCxTQUFTRSxRQUFULEdBQW1CO0FBQ2pCLFNBQU9uQixNQUFNQSxLQUFiO0FBQ0Q7O0FBRUQsU0FBU29CLE9BQVQsR0FBa0I7QUFDaEIsU0FBT2xCLFdBQVdtQixJQUFsQjtBQUNEOztBQUVELFNBQVNDLFlBQVQsR0FBdUI7QUFDckIsU0FBT25CLFVBQVVBLFNBQWpCO0FBQ0Q7O0FBRUQsU0FBU29CLGFBQVQsR0FBd0I7QUFDdEIsU0FBT25CLGVBQWVpQixJQUF0QjtBQUNEOztBQUlEdkIsT0FBT0MsT0FBUCxDQUFlTSxPQUFmLEdBQXlCQSxPQUF6QjtBQUNBUCxPQUFPQyxPQUFQLENBQWVvQixRQUFmLEdBQTBCQSxRQUExQjtBQUNBckIsT0FBT0MsT0FBUCxDQUFlcUIsT0FBZixHQUF5QkEsT0FBekI7QUFDQXRCLE9BQU9DLE9BQVAsQ0FBZXVCLFlBQWYsR0FBOEJBLFlBQTlCO0FBQ0F4QixPQUFPQyxPQUFQLENBQWV3QixhQUFmLEdBQStCQSxhQUEvQiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZm9ybWF0VGltZShkYXRlKSB7XHJcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpXHJcblxyXG4gIHZhciBob3VyID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgdmFyIG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpXHJcbiAgdmFyIHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcblxyXG5cclxuICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy8nKSArICcgJyArIFtob3VyLCBtaW51dGUsIHNlY29uZF0ubWFwKGZvcm1hdE51bWJlcikuam9pbignOicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihuKSB7XHJcbiAgbiA9IG4udG9TdHJpbmcoKVxyXG4gIHJldHVybiBuWzFdID8gbiA6ICcwJyArIG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZm9ybWF0VGltZTogZm9ybWF0VGltZVxyXG59O1xyXG5cclxudmFyIGluZGV4ID0gcmVxdWlyZSgnLi4vZGF0YS9kYXRhX2luZGV4LmpzJylcclxudmFyIGluZGV4X25leHQgPSByZXF1aXJlKCcuLi9kYXRhL2RhdGFfaW5kZXhfbmV4dC5qcycpXHJcbnZhciBkaXNjb3ZlcnkgPSByZXF1aXJlKCcuLi9kYXRhL2RhdGFfZGlzY292ZXJ5LmpzJylcclxudmFyIGRpc2NvdmVyeV9uZXh0ID0gcmVxdWlyZSgnLi4vZGF0YS9kYXRhX2Rpc2NvdmVyeV9uZXh0LmpzJylcclxuXHJcbmZ1bmN0aW9uIGdldERhdGEodXJsKXtcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIC8vJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIilcclxuICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIHJlamVjdChyZXMpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWRcIilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhMigpe1xyXG4gIHJldHVybiBpbmRleC5pbmRleDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dCgpe1xyXG4gIHJldHVybiBpbmRleF9uZXh0Lm5leHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERpc2NvdmVyeSgpe1xyXG4gIHJldHVybiBkaXNjb3ZlcnkuZGlzY292ZXJ5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNjb3ZlcnlOZXh0KCl7XHJcbiAgcmV0dXJuIGRpc2NvdmVyeV9uZXh0Lm5leHQ7XHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuZ2V0RGF0YSA9IGdldERhdGE7XHJcbm1vZHVsZS5leHBvcnRzLmdldERhdGEyID0gZ2V0RGF0YTI7XHJcbm1vZHVsZS5leHBvcnRzLmdldE5leHQgPSBnZXROZXh0O1xyXG5tb2R1bGUuZXhwb3J0cy5nZXREaXNjb3ZlcnkgPSBnZXREaXNjb3Zlcnk7XHJcbm1vZHVsZS5leHBvcnRzLmRpc2NvdmVyeU5leHQgPSBkaXNjb3ZlcnlOZXh0O1xyXG5cclxuXHJcblxyXG5cclxuIl19