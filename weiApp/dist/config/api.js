'use strict';

//环境
var env = 'production'; //'development' or 'production'
var version = 2.0;

var hosts = {
  development: 'https://192.168.1.128:3000',
  production: 'https://api.yizo.zhiyuan95.cn'
};

var weixin = {
  appid: 'wx5460044ed4be3f57',
  secret: 'a1c0ad02b8d77887d56177a2fc71318a'
};
module.exports = {
  env: env,
  version: version,
  weixin: weixin,
  host: hosts[env]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJlbnYiLCJ2ZXJzaW9uIiwiaG9zdHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJ3ZWl4aW4iLCJhcHBpZCIsInNlY3JldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJob3N0Il0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0EsSUFBTUEsTUFBTSxhQUFaLEMsQ0FBMEI7QUFDMUIsSUFBTUMsVUFBVSxHQUFoQjs7QUFFQSxJQUFNQyxRQUFRO0FBQ1pDLGVBQWEsNEJBREQ7QUFFWkMsY0FBWTtBQUZBLENBQWQ7O0FBS0EsSUFBTUMsU0FBUztBQUNiQyxTQUFNLG9CQURPO0FBRWJDLFVBQU87QUFGTSxDQUFmO0FBSUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZlQsVUFEZTtBQUVmQyxrQkFGZTtBQUdmSSxnQkFIZTtBQUlmSyxRQUFNUixNQUFNRixHQUFOO0FBSlMsQ0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v546v5aKDXHJcbmNvbnN0IGVudiA9ICdkZXZlbG9wbWVudCc7Ly8nZGV2ZWxvcG1lbnQnIG9yICdwcm9kdWN0aW9uJ1xyXG5jb25zdCB2ZXJzaW9uID0gMi4wXHJcblxyXG5jb25zdCBob3N0cyA9IHtcclxuICBkZXZlbG9wbWVudDogJ2h0dHBzOi8vMTkyLjE2OC4xLjEyODozMDAwJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly9hcGkueWl6by56aGl5dWFuOTUuY24nXHJcbn1cclxuXHJcbmNvbnN0IHdlaXhpbiA9IHtcclxuICBhcHBpZDond3g1NDYwMDQ0ZWQ0YmUzZjU3JyxcclxuICBzZWNyZXQ6J2ExYzBhZDAyYjhkNzc4ODdkNTYxNzdhMmZjNzEzMThhJ1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGVudixcclxuICB2ZXJzaW9uLFxyXG4gIHdlaXhpbixcclxuICBob3N0OiBob3N0c1tlbnZdXHJcbn0iXX0=