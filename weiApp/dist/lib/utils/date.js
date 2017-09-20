"use strict";

Date.prototype.getDateDiff = function (dateTimeStamp) {

  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date().getTime();
  var diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  var result = "";
  if (monthC >= 1) {
    result = "" + parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前";
  } else result = "刚刚";
  return result;
};

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUuanMiXSwibmFtZXMiOlsiRGF0ZSIsInByb3RvdHlwZSIsImdldERhdGVEaWZmIiwiZGF0ZVRpbWVTdGFtcCIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJoYWxmYW1vbnRoIiwibW9udGgiLCJub3ciLCJnZXRUaW1lIiwiZGlmZlZhbHVlIiwibW9udGhDIiwid2Vla0MiLCJkYXlDIiwiaG91ckMiLCJtaW5DIiwicmVzdWx0IiwicGFyc2VJbnQiLCJmb3JtYXQiLCJmbXQiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImdldE1pbGxpc2Vjb25kcyIsInRlc3QiLCJyZXBsYWNlIiwiUmVnRXhwIiwiJDEiLCJnZXRGdWxsWWVhciIsInN1YnN0ciIsImxlbmd0aCIsImsiXSwibWFwcGluZ3MiOiI7O0FBQUFBLEtBQUtDLFNBQUwsQ0FBZUMsV0FBZixHQUE2QixVQUFTQyxhQUFULEVBQXdCOztBQUVuRCxNQUFJQyxTQUFTLE9BQU8sRUFBcEI7QUFDQSxNQUFJQyxPQUFPRCxTQUFTLEVBQXBCO0FBQ0EsTUFBSUUsTUFBTUQsT0FBTyxFQUFqQjtBQUNBLE1BQUlFLGFBQWFELE1BQU0sRUFBdkI7QUFDQSxNQUFJRSxRQUFRRixNQUFNLEVBQWxCO0FBQ0EsTUFBSUcsTUFBTSxJQUFJVCxJQUFKLEdBQVdVLE9BQVgsRUFBVjtBQUNBLE1BQUlDLFlBQVlGLE1BQU1OLGFBQXRCO0FBQ0EsTUFBSVEsWUFBWSxDQUFoQixFQUFtQjtBQUFFO0FBQVM7QUFDOUIsTUFBSUMsU0FBU0QsWUFBWUgsS0FBekI7QUFDQSxNQUFJSyxRQUFRRixhQUFhLElBQUlMLEdBQWpCLENBQVo7QUFDQSxNQUFJUSxPQUFPSCxZQUFZTCxHQUF2QjtBQUNBLE1BQUlTLFFBQVFKLFlBQVlOLElBQXhCO0FBQ0EsTUFBSVcsT0FBT0wsWUFBWVAsTUFBdkI7QUFDQSxNQUFJYSxTQUFTLEVBQWI7QUFDQSxNQUFJTCxVQUFVLENBQWQsRUFBaUI7QUFDZkssYUFBUyxLQUFLQyxTQUFTTixNQUFULENBQUwsR0FBd0IsSUFBakM7QUFDRCxHQUZELE1BR0ssSUFBSUMsU0FBUyxDQUFiLEVBQWdCO0FBQ25CSSxhQUFTLEtBQUtDLFNBQVNMLEtBQVQsQ0FBTCxHQUF1QixJQUFoQztBQUNELEdBRkksTUFHQSxJQUFJQyxRQUFRLENBQVosRUFBZTtBQUNsQkcsYUFBUyxLQUFLQyxTQUFTSixJQUFULENBQUwsR0FBc0IsSUFBL0I7QUFDRCxHQUZJLE1BR0EsSUFBSUMsU0FBUyxDQUFiLEVBQWdCO0FBQ25CRSxhQUFTLEtBQUtDLFNBQVNILEtBQVQsQ0FBTCxHQUF1QixLQUFoQztBQUNELEdBRkksTUFHQSxJQUFJQyxRQUFRLENBQVosRUFBZTtBQUNsQkMsYUFBUyxLQUFLQyxTQUFTRixJQUFULENBQUwsR0FBc0IsS0FBL0I7QUFDRCxHQUZJLE1BR0hDLFNBQVMsSUFBVDtBQUNGLFNBQU9BLE1BQVA7QUFDRCxDQWpDRDs7QUFtQ0FqQixLQUFLQyxTQUFMLENBQWVrQixNQUFmLEdBQXdCLFVBQVVDLEdBQVYsRUFBZTtBQUNyQyxNQUFJQyxJQUFJO0FBQ04sVUFBTSxLQUFLQyxRQUFMLEtBQWtCLENBRGxCLEVBQ3FCO0FBQzNCLFVBQU0sS0FBS0MsT0FBTCxFQUZBLEVBRWdCO0FBQ3RCLFVBQU0sS0FBS0MsUUFBTCxFQUhBLEVBR2lCO0FBQ3ZCLFVBQU0sS0FBS0MsVUFBTCxFQUpBLEVBSW1CO0FBQ3pCLFVBQU0sS0FBS0MsVUFBTCxFQUxBLEVBS21CO0FBQ3pCLFVBQU1DLEtBQUtDLEtBQUwsQ0FBVyxDQUFDLEtBQUtOLFFBQUwsS0FBa0IsQ0FBbkIsSUFBd0IsQ0FBbkMsQ0FOQSxFQU11QztBQUM3QyxTQUFLLEtBQUtPLGVBQUwsRUFQQyxDQU9zQjtBQVB0QixHQUFSO0FBU0EsTUFBSSxPQUFPQyxJQUFQLENBQVlWLEdBQVosQ0FBSixFQUFzQjtBQUNwQkEsVUFBTUEsSUFBSVcsT0FBSixDQUFZQyxPQUFPQyxFQUFuQixFQUF1QixDQUFDLEtBQUtDLFdBQUwsS0FBcUIsRUFBdEIsRUFBMEJDLE1BQTFCLENBQWlDLElBQUlILE9BQU9DLEVBQVAsQ0FBVUcsTUFBL0MsQ0FBdkIsQ0FBTjtBQUNEO0FBQ0QsT0FBSyxJQUFJQyxDQUFULElBQWNoQixDQUFkLEVBQWlCO0FBQ2YsUUFBSSxJQUFJVyxNQUFKLENBQVcsTUFBTUssQ0FBTixHQUFVLEdBQXJCLEVBQTBCUCxJQUExQixDQUErQlYsR0FBL0IsQ0FBSixFQUF5QztBQUN2Q0EsWUFBTUEsSUFBSVcsT0FBSixDQUFZQyxPQUFPQyxFQUFuQixFQUF3QkQsT0FBT0MsRUFBUCxDQUFVRyxNQUFWLElBQW9CLENBQXJCLEdBQTJCZixFQUFFZ0IsQ0FBRixDQUEzQixHQUFvQyxDQUFDLE9BQU9oQixFQUFFZ0IsQ0FBRixDQUFSLEVBQWNGLE1BQWQsQ0FBcUIsQ0FBQyxLQUFLZCxFQUFFZ0IsQ0FBRixDQUFOLEVBQVlELE1BQWpDLENBQTNELENBQU47QUFDRDtBQUNGO0FBQ0QsU0FBT2hCLEdBQVA7QUFDRCxDQW5CRCIsImZpbGUiOiJkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiRGF0ZS5wcm90b3R5cGUuZ2V0RGF0ZURpZmYgPSBmdW5jdGlvbihkYXRlVGltZVN0YW1wKSB7XHJcbiAgXHJcbiAgbGV0IG1pbnV0ZSA9IDEwMDAgKiA2MDtcclxuICBsZXQgaG91ciA9IG1pbnV0ZSAqIDYwO1xyXG4gIGxldCBkYXkgPSBob3VyICogMjQ7XHJcbiAgbGV0IGhhbGZhbW9udGggPSBkYXkgKiAxNTtcclxuICBsZXQgbW9udGggPSBkYXkgKiAzMDtcclxuICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgbGV0IGRpZmZWYWx1ZSA9IG5vdyAtIGRhdGVUaW1lU3RhbXA7XHJcbiAgaWYgKGRpZmZWYWx1ZSA8IDApIHsgcmV0dXJuOyB9XHJcbiAgbGV0IG1vbnRoQyA9IGRpZmZWYWx1ZSAvIG1vbnRoO1xyXG4gIGxldCB3ZWVrQyA9IGRpZmZWYWx1ZSAvICg3ICogZGF5KTtcclxuICBsZXQgZGF5QyA9IGRpZmZWYWx1ZSAvIGRheTtcclxuICBsZXQgaG91ckMgPSBkaWZmVmFsdWUgLyBob3VyO1xyXG4gIGxldCBtaW5DID0gZGlmZlZhbHVlIC8gbWludXRlO1xyXG4gIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gIGlmIChtb250aEMgPj0gMSkge1xyXG4gICAgcmVzdWx0ID0gXCJcIiArIHBhcnNlSW50KG1vbnRoQykgKyBcIuaciOWJjVwiO1xyXG4gIH1cclxuICBlbHNlIGlmICh3ZWVrQyA+PSAxKSB7XHJcbiAgICByZXN1bHQgPSBcIlwiICsgcGFyc2VJbnQod2Vla0MpICsgXCLlkajliY1cIjtcclxuICB9XHJcbiAgZWxzZSBpZiAoZGF5QyA+PSAxKSB7XHJcbiAgICByZXN1bHQgPSBcIlwiICsgcGFyc2VJbnQoZGF5QykgKyBcIuWkqeWJjVwiO1xyXG4gIH1cclxuICBlbHNlIGlmIChob3VyQyA+PSAxKSB7XHJcbiAgICByZXN1bHQgPSBcIlwiICsgcGFyc2VJbnQoaG91ckMpICsgXCLlsI/ml7bliY1cIjtcclxuICB9XHJcbiAgZWxzZSBpZiAobWluQyA+PSAxKSB7XHJcbiAgICByZXN1bHQgPSBcIlwiICsgcGFyc2VJbnQobWluQykgKyBcIuWIhumSn+WJjVwiO1xyXG4gIH0gZWxzZVxyXG4gICAgcmVzdWx0ID0gXCLliJrliJpcIjtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5EYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZm10KSB7XHJcbiAgbGV0IG8gPSB7XHJcbiAgICBcIk0rXCI6IHRoaXMuZ2V0TW9udGgoKSArIDEsIC8v5pyI5Lu9IFxyXG4gICAgXCJkK1wiOiB0aGlzLmdldERhdGUoKSwgLy/ml6UgXHJcbiAgICBcImgrXCI6IHRoaXMuZ2V0SG91cnMoKSwgLy/lsI/ml7YgXHJcbiAgICBcIm0rXCI6IHRoaXMuZ2V0TWludXRlcygpLCAvL+WIhiBcclxuICAgIFwicytcIjogdGhpcy5nZXRTZWNvbmRzKCksIC8v56eSIFxyXG4gICAgXCJxK1wiOiBNYXRoLmZsb29yKCh0aGlzLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6piBcclxuICAgIFwiU1wiOiB0aGlzLmdldE1pbGxpc2Vjb25kcygpIC8v5q+r56eSIFxyXG4gIH07XHJcbiAgaWYgKC8oeSspLy50ZXN0KGZtdCkpIHtcclxuICAgIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKHRoaXMuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xyXG4gIH1cclxuICBmb3IgKGxldCBrIGluIG8pIHtcclxuICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZtdCkpIHtcclxuICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZm10O1xyXG59Il19