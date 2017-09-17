'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var base64 = exports.base64 = function () {

  var object = typeof exports != 'undefined' ? exports : typeof self != 'undefined' ? self : // #8: web workers
  $.global; // #31: ExtendScript

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  function InvalidCharacterError(message) {
    this.message = message;
  }
  InvalidCharacterError.prototype = new Error();
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  object.btoa || (object.btoa = function (input) {
    var str = String(input);
    for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars, output = '';
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
      charCode = str.charCodeAt(idx += 3 / 4);
      if (charCode > 0xFF) {
        throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }
      block = block << 8 | charCode;
    }
    return output;
  });

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  object.atob || (object.atob = function (input) {
    var str = String(input).replace(/[=]+$/, ''); // #31: ExtendScript bad parse of /=
    if (str.length % 4 == 1) {
      throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
    // and if not first of each 4 characters,
    // convert the first 8 bits to one ascii character
    bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  });
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2U2NC5qcyJdLCJuYW1lcyI6WyJiYXNlNjQiLCJvYmplY3QiLCJleHBvcnRzIiwic2VsZiIsIiQiLCJnbG9iYWwiLCJjaGFycyIsIkludmFsaWRDaGFyYWN0ZXJFcnJvciIsIm1lc3NhZ2UiLCJwcm90b3R5cGUiLCJFcnJvciIsIm5hbWUiLCJidG9hIiwiaW5wdXQiLCJzdHIiLCJTdHJpbmciLCJibG9jayIsImNoYXJDb2RlIiwiaWR4IiwibWFwIiwib3V0cHV0IiwiY2hhckF0IiwiY2hhckNvZGVBdCIsImF0b2IiLCJyZXBsYWNlIiwibGVuZ3RoIiwiYmMiLCJicyIsImJ1ZmZlciIsImZyb21DaGFyQ29kZSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsMEJBQVUsWUFBWTs7QUFFL0IsTUFBSUMsU0FDRixPQUFPQyxPQUFQLElBQWtCLFdBQWxCLEdBQWdDQSxPQUFoQyxHQUNFLE9BQU9DLElBQVAsSUFBZSxXQUFmLEdBQTZCQSxJQUE3QixHQUFvQztBQUNsQ0MsSUFBRUMsTUFIUixDQUYrQixDQUtmOztBQUVoQixNQUFJQyxRQUFRLG1FQUFaOztBQUVBLFdBQVNDLHFCQUFULENBQStCQyxPQUEvQixFQUF3QztBQUN0QyxTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDtBQUNERCx3QkFBc0JFLFNBQXRCLEdBQWtDLElBQUlDLEtBQUosRUFBbEM7QUFDQUgsd0JBQXNCRSxTQUF0QixDQUFnQ0UsSUFBaEMsR0FBdUMsdUJBQXZDOztBQUVBO0FBQ0E7QUFDQVYsU0FBT1csSUFBUCxLQUNFWCxPQUFPVyxJQUFQLEdBQWMsVUFBVUMsS0FBVixFQUFpQjtBQUM3QixRQUFJQyxNQUFNQyxPQUFPRixLQUFQLENBQVY7QUFDQTtBQUNFO0FBQ0EsUUFBSUcsS0FBSixFQUFXQyxRQUFYLEVBQXFCQyxNQUFNLENBQTNCLEVBQThCQyxNQUFNYixLQUFwQyxFQUEyQ2MsU0FBUyxFQUZ0RDtBQUdFO0FBQ0E7QUFDQTtBQUNBTixRQUFJTyxNQUFKLENBQVdILE1BQU0sQ0FBakIsTUFBd0JDLE1BQU0sR0FBTixFQUFXRCxNQUFNLENBQXpDLENBTkY7QUFPRTtBQUNBRSxjQUFVRCxJQUFJRSxNQUFKLENBQVcsS0FBS0wsU0FBUyxJQUFJRSxNQUFNLENBQU4sR0FBVSxDQUF2QyxDQVJaLEVBU0U7QUFDQUQsaUJBQVdILElBQUlRLFVBQUosQ0FBZUosT0FBTyxJQUFJLENBQTFCLENBQVg7QUFDQSxVQUFJRCxXQUFXLElBQWYsRUFBcUI7QUFDbkIsY0FBTSxJQUFJVixxQkFBSixDQUEwQiwwRkFBMUIsQ0FBTjtBQUNEO0FBQ0RTLGNBQVFBLFNBQVMsQ0FBVCxHQUFhQyxRQUFyQjtBQUNEO0FBQ0QsV0FBT0csTUFBUDtBQUNELEdBcEJIOztBQXNCQTtBQUNBO0FBQ0FuQixTQUFPc0IsSUFBUCxLQUNFdEIsT0FBT3NCLElBQVAsR0FBYyxVQUFVVixLQUFWLEVBQWlCO0FBQzdCLFFBQUlDLE1BQU1DLE9BQU9GLEtBQVAsRUFBY1csT0FBZCxDQUFzQixPQUF0QixFQUErQixFQUEvQixDQUFWLENBRDZCLENBQ2lCO0FBQzlDLFFBQUlWLElBQUlXLE1BQUosR0FBYSxDQUFiLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLFlBQU0sSUFBSWxCLHFCQUFKLENBQTBCLG1FQUExQixDQUFOO0FBQ0Q7QUFDRDtBQUNFO0FBQ0EsUUFBSW1CLEtBQUssQ0FBVCxFQUFZQyxFQUFaLEVBQWdCQyxNQUFoQixFQUF3QlYsTUFBTSxDQUE5QixFQUFpQ0UsU0FBUyxFQUY1QztBQUdFO0FBQ0FRLGFBQVNkLElBQUlPLE1BQUosQ0FBV0gsS0FBWCxDQUpYO0FBS0U7QUFDQSxLQUFDVSxNQUFELEtBQVlELEtBQUtELEtBQUssQ0FBTCxHQUFTQyxLQUFLLEVBQUwsR0FBVUMsTUFBbkIsR0FBNEJBLE1BQWpDO0FBQ1Y7QUFDQTtBQUNBRixXQUFPLENBSFQsSUFHY04sVUFBVUwsT0FBT2MsWUFBUCxDQUFvQixNQUFNRixPQUFPLENBQUMsQ0FBRCxHQUFLRCxFQUFMLEdBQVUsQ0FBakIsQ0FBMUIsQ0FIeEIsR0FHeUUsQ0FUM0UsRUFVRTtBQUNBO0FBQ0FFLGVBQVN0QixNQUFNd0IsT0FBTixDQUFjRixNQUFkLENBQVQ7QUFDRDtBQUNELFdBQU9SLE1BQVA7QUFDRCxHQXJCSDtBQXVCRCxDQWhFb0IsRUFBZCIsImZpbGUiOiJiYXNlNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IGJhc2U2NCA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBvYmplY3QgPVxyXG4gICAgdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDpcclxuICAgICAgdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogLy8gIzg6IHdlYiB3b3JrZXJzXHJcbiAgICAgICAgJC5nbG9iYWw7IC8vICMzMTogRXh0ZW5kU2NyaXB0XHJcblxyXG4gIHZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XHJcblxyXG4gIGZ1bmN0aW9uIEludmFsaWRDaGFyYWN0ZXJFcnJvcihtZXNzYWdlKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gIH1cclxuICBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yO1xyXG4gIEludmFsaWRDaGFyYWN0ZXJFcnJvci5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xyXG5cclxuICAvLyBlbmNvZGVyXHJcbiAgLy8gW2h0dHBzOi8vZ2lzdC5naXRodWIuY29tLzk5OTE2Nl0gYnkgW2h0dHBzOi8vZ2l0aHViLmNvbS9uaWduYWddXHJcbiAgb2JqZWN0LmJ0b2EgfHwgKFxyXG4gICAgb2JqZWN0LmJ0b2EgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcclxuICAgICAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycywgb3V0cHV0ID0gJyc7XHJcbiAgICAgICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxyXG4gICAgICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXHJcbiAgICAgICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xyXG4gICAgICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XHJcbiAgICAgICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcclxuICAgICAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcclxuICAgICAgKSB7XHJcbiAgICAgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xyXG4gICAgICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IoXCInYnRvYScgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGVuY29kZWQgY29udGFpbnMgY2hhcmFjdGVycyBvdXRzaWRlIG9mIHRoZSBMYXRpbjEgcmFuZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfSk7XHJcblxyXG4gIC8vIGRlY29kZXJcclxuICAvLyBbaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTAyMDM5Nl0gYnkgW2h0dHBzOi8vZ2l0aHViLmNvbS9hdGtdXHJcbiAgb2JqZWN0LmF0b2IgfHwgKFxyXG4gICAgb2JqZWN0LmF0b2IgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvWz1dKyQvLCAnJyk7IC8vICMzMTogRXh0ZW5kU2NyaXB0IGJhZCBwYXJzZSBvZiAvPVxyXG4gICAgICBpZiAoc3RyLmxlbmd0aCAlIDQgPT0gMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IoXCInYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xyXG4gICAgICAgIHZhciBiYyA9IDAsIGJzLCBidWZmZXIsIGlkeCA9IDAsIG91dHB1dCA9ICcnO1xyXG4gICAgICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxyXG4gICAgICAgIGJ1ZmZlciA9IHN0ci5jaGFyQXQoaWR4KyspO1xyXG4gICAgICAgIC8vIGNoYXJhY3RlciBmb3VuZCBpbiB0YWJsZT8gaW5pdGlhbGl6ZSBiaXQgc3RvcmFnZSBhbmQgYWRkIGl0cyBhc2NpaSB2YWx1ZTtcclxuICAgICAgICB+YnVmZmVyICYmIChicyA9IGJjICUgNCA/IGJzICogNjQgKyBidWZmZXIgOiBidWZmZXIsXHJcbiAgICAgICAgICAvLyBhbmQgaWYgbm90IGZpcnN0IG9mIGVhY2ggNCBjaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgLy8gY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIG9uZSBhc2NpaSBjaGFyYWN0ZXJcclxuICAgICAgICAgIGJjKysgJSA0KSA/IG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIGJzID4+ICgtMiAqIGJjICYgNikpIDogMFxyXG4gICAgICApIHtcclxuICAgICAgICAvLyB0cnkgdG8gZmluZCBjaGFyYWN0ZXIgaW4gdGFibGUgKDAtNjMsIG5vdCBmb3VuZCA9PiAtMSlcclxuICAgICAgICBidWZmZXIgPSBjaGFycy5pbmRleE9mKGJ1ZmZlcik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH0pO1xyXG5cclxufSgpKTsiXX0=