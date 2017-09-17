"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDateDiff;
function getDateDiff(dateTimeStamp) {
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
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUuanMiXSwibmFtZXMiOlsiZ2V0RGF0ZURpZmYiLCJkYXRlVGltZVN0YW1wIiwibWludXRlIiwiaG91ciIsImRheSIsImhhbGZhbW9udGgiLCJtb250aCIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiZGlmZlZhbHVlIiwibW9udGhDIiwid2Vla0MiLCJkYXlDIiwiaG91ckMiLCJtaW5DIiwicmVzdWx0IiwicGFyc2VJbnQiLCJwcm90b3R5cGUiLCJmb3JtYXQiLCJmbXQiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImdldE1pbGxpc2Vjb25kcyIsInRlc3QiLCJyZXBsYWNlIiwiUmVnRXhwIiwiJDEiLCJnZXRGdWxsWWVhciIsInN1YnN0ciIsImxlbmd0aCIsImsiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsVztBQUFULFNBQVNBLFdBQVQsQ0FBcUJDLGFBQXJCLEVBQW9DO0FBQ2pELE1BQUlDLFNBQVMsT0FBTyxFQUFwQjtBQUNBLE1BQUlDLE9BQU9ELFNBQVMsRUFBcEI7QUFDQSxNQUFJRSxNQUFNRCxPQUFPLEVBQWpCO0FBQ0EsTUFBSUUsYUFBYUQsTUFBTSxFQUF2QjtBQUNBLE1BQUlFLFFBQVFGLE1BQU0sRUFBbEI7QUFDQSxNQUFJRyxNQUFNLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFWO0FBQ0EsTUFBSUMsWUFBWUgsTUFBTU4sYUFBdEI7QUFDQSxNQUFJUyxZQUFZLENBQWhCLEVBQW1CO0FBQUU7QUFBUztBQUM5QixNQUFJQyxTQUFTRCxZQUFZSixLQUF6QjtBQUNBLE1BQUlNLFFBQVFGLGFBQWEsSUFBSU4sR0FBakIsQ0FBWjtBQUNBLE1BQUlTLE9BQU9ILFlBQVlOLEdBQXZCO0FBQ0EsTUFBSVUsUUFBUUosWUFBWVAsSUFBeEI7QUFDQSxNQUFJWSxPQUFPTCxZQUFZUixNQUF2QjtBQUNBLE1BQUljLFNBQVMsRUFBYjtBQUNBLE1BQUlMLFVBQVUsQ0FBZCxFQUFpQjtBQUNmSyxhQUFTLEtBQUtDLFNBQVNOLE1BQVQsQ0FBTCxHQUF3QixJQUFqQztBQUNELEdBRkQsTUFHSyxJQUFJQyxTQUFTLENBQWIsRUFBZ0I7QUFDbkJJLGFBQVMsS0FBS0MsU0FBU0wsS0FBVCxDQUFMLEdBQXVCLElBQWhDO0FBQ0QsR0FGSSxNQUdBLElBQUlDLFFBQVEsQ0FBWixFQUFlO0FBQ2xCRyxhQUFTLEtBQUtDLFNBQVNKLElBQVQsQ0FBTCxHQUFzQixJQUEvQjtBQUNELEdBRkksTUFHQSxJQUFJQyxTQUFTLENBQWIsRUFBZ0I7QUFDbkJFLGFBQVMsS0FBS0MsU0FBU0gsS0FBVCxDQUFMLEdBQXVCLEtBQWhDO0FBQ0QsR0FGSSxNQUdBLElBQUlDLFFBQVEsQ0FBWixFQUFlO0FBQ2xCQyxhQUFTLEtBQUtDLFNBQVNGLElBQVQsQ0FBTCxHQUFzQixLQUEvQjtBQUNELEdBRkksTUFHSEMsU0FBUyxJQUFUO0FBQ0YsU0FBT0EsTUFBUDtBQUNEOztBQUVEUixLQUFLVSxTQUFMLENBQWVDLE1BQWYsR0FBd0IsVUFBVUMsR0FBVixFQUFlO0FBQ3JDLE1BQUlDLElBQUk7QUFDTixVQUFNLEtBQUtDLFFBQUwsS0FBa0IsQ0FEbEIsRUFDcUI7QUFDM0IsVUFBTSxLQUFLQyxPQUFMLEVBRkEsRUFFZ0I7QUFDdEIsVUFBTSxLQUFLQyxRQUFMLEVBSEEsRUFHaUI7QUFDdkIsVUFBTSxLQUFLQyxVQUFMLEVBSkEsRUFJbUI7QUFDekIsVUFBTSxLQUFLQyxVQUFMLEVBTEEsRUFLbUI7QUFDekIsVUFBTUMsS0FBS0MsS0FBTCxDQUFXLENBQUMsS0FBS04sUUFBTCxLQUFrQixDQUFuQixJQUF3QixDQUFuQyxDQU5BLEVBTXVDO0FBQzdDLFNBQUssS0FBS08sZUFBTCxFQVBDLENBT3NCO0FBUHRCLEdBQVI7QUFTQSxNQUFJLE9BQU9DLElBQVAsQ0FBWVYsR0FBWixDQUFKLEVBQXNCO0FBQ3BCQSxVQUFNQSxJQUFJVyxPQUFKLENBQVlDLE9BQU9DLEVBQW5CLEVBQXVCLENBQUMsS0FBS0MsV0FBTCxLQUFxQixFQUF0QixFQUEwQkMsTUFBMUIsQ0FBaUMsSUFBSUgsT0FBT0MsRUFBUCxDQUFVRyxNQUEvQyxDQUF2QixDQUFOO0FBQ0Q7QUFDRCxPQUFLLElBQUlDLENBQVQsSUFBY2hCLENBQWQsRUFBaUI7QUFDZixRQUFJLElBQUlXLE1BQUosQ0FBVyxNQUFNSyxDQUFOLEdBQVUsR0FBckIsRUFBMEJQLElBQTFCLENBQStCVixHQUEvQixDQUFKLEVBQXlDO0FBQ3ZDQSxZQUFNQSxJQUFJVyxPQUFKLENBQVlDLE9BQU9DLEVBQW5CLEVBQXdCRCxPQUFPQyxFQUFQLENBQVVHLE1BQVYsSUFBb0IsQ0FBckIsR0FBMkJmLEVBQUVnQixDQUFGLENBQTNCLEdBQW9DLENBQUMsT0FBT2hCLEVBQUVnQixDQUFGLENBQVIsRUFBY0YsTUFBZCxDQUFxQixDQUFDLEtBQUtkLEVBQUVnQixDQUFGLENBQU4sRUFBWUQsTUFBakMsQ0FBM0QsQ0FBTjtBQUNEO0FBQ0Y7QUFDRCxTQUFPaEIsR0FBUDtBQUNELENBbkJEIiwiZmlsZSI6ImRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRlRGlmZihkYXRlVGltZVN0YW1wKSB7XHJcbiAgbGV0IG1pbnV0ZSA9IDEwMDAgKiA2MDtcclxuICBsZXQgaG91ciA9IG1pbnV0ZSAqIDYwO1xyXG4gIGxldCBkYXkgPSBob3VyICogMjQ7XHJcbiAgbGV0IGhhbGZhbW9udGggPSBkYXkgKiAxNTtcclxuICBsZXQgbW9udGggPSBkYXkgKiAzMDtcclxuICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgbGV0IGRpZmZWYWx1ZSA9IG5vdyAtIGRhdGVUaW1lU3RhbXA7XHJcbiAgaWYgKGRpZmZWYWx1ZSA8IDApIHsgcmV0dXJuOyB9XHJcbiAgbGV0IG1vbnRoQyA9IGRpZmZWYWx1ZSAvIG1vbnRoO1xyXG4gIGxldCB3ZWVrQyA9IGRpZmZWYWx1ZSAvICg3ICogZGF5KTtcclxuICBsZXQgZGF5QyA9IGRpZmZWYWx1ZSAvIGRheTtcclxuICBsZXQgaG91ckMgPSBkaWZmVmFsdWUgLyBob3VyO1xyXG4gIGxldCBtaW5DID0gZGlmZlZhbHVlIC8gbWludXRlO1xyXG4gIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gIGlmIChtb250aEMgPj0gMSkge1xyXG4gICAgcmVzdWx0ID0gXCJcIiArIHBhcnNlSW50KG1vbnRoQykgKyBcIuaciOWJjVwiO1xyXG4gIH1cclxuICBlbHNlIGlmICh3ZWVrQyA+PSAxKSB7XHJcbiAgICByZXN1bHQgPSBcIlwiICsgcGFyc2VJbnQod2Vla0MpICsgXCLlkajliY1cIjtcclxuICB9XHJcbiAgZWxzZSBpZiAoZGF5QyA+PSAxKSB7XHJcbiAgICByZXN1bHQgPSBcIlwiICsgcGFyc2VJbnQoZGF5QykgKyBcIuWkqeWJjVwiO1xyXG4gIH1cclxuICBlbHNlIGlmIChob3VyQyA+PSAxKSB7XHJcbiAgICByZXN1bHQgPSBcIlwiICsgcGFyc2VJbnQoaG91ckMpICsgXCLlsI/ml7bliY1cIjtcclxuICB9XHJcbiAgZWxzZSBpZiAobWluQyA+PSAxKSB7XHJcbiAgICByZXN1bHQgPSBcIlwiICsgcGFyc2VJbnQobWluQykgKyBcIuWIhumSn+WJjVwiO1xyXG4gIH0gZWxzZVxyXG4gICAgcmVzdWx0ID0gXCLliJrliJpcIjtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5EYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZm10KSB7XHJcbiAgbGV0IG8gPSB7XHJcbiAgICBcIk0rXCI6IHRoaXMuZ2V0TW9udGgoKSArIDEsIC8v5pyI5Lu9IFxyXG4gICAgXCJkK1wiOiB0aGlzLmdldERhdGUoKSwgLy/ml6UgXHJcbiAgICBcImgrXCI6IHRoaXMuZ2V0SG91cnMoKSwgLy/lsI/ml7YgXHJcbiAgICBcIm0rXCI6IHRoaXMuZ2V0TWludXRlcygpLCAvL+WIhiBcclxuICAgIFwicytcIjogdGhpcy5nZXRTZWNvbmRzKCksIC8v56eSIFxyXG4gICAgXCJxK1wiOiBNYXRoLmZsb29yKCh0aGlzLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6piBcclxuICAgIFwiU1wiOiB0aGlzLmdldE1pbGxpc2Vjb25kcygpIC8v5q+r56eSIFxyXG4gIH07XHJcbiAgaWYgKC8oeSspLy50ZXN0KGZtdCkpIHtcclxuICAgIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKHRoaXMuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xyXG4gIH1cclxuICBmb3IgKGxldCBrIGluIG8pIHtcclxuICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZtdCkpIHtcclxuICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZm10O1xyXG59Il19