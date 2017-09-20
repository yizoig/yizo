const app = getApp()
export function getUserInfo() {
  return wx.getStorageSync("userinfo");
}

export function setUserInfo(data) {

  let userInfo = wx.getStorageSync("userInfo");
  let remember = wx.getStorageSync("remember");
  if (userinfo) {
    userinfo = replace(userinfo, data);
    wx.setStorage({
      key: "userInfo",
      data: userInfo
    });
  }
  if (remember) {
    remember = replace(remember, data);
    wx.setStorage({
      key: "remember",
      data: remember
    });
  }
}
export function saveUserInfo(data,currentPage) {
  wx.setStorage({
    key: "userInfo",
    data
  });
  console.log(currentPage.$parent)
  currentPage.$parent.globalData['userInfo'] = data;
}
export function signOut() {
  //移除token
  wx.removeStorage({ key: 'access-token' });
  wx.removeStorage({ key: 'remember' });
  wx.removeStorage({ key: 'userinfo' });
}

function replace(source, target) {

  for (let item in target) {

    if (item in source) {
      source[item] = target[item];
    }
  }
  return source;
}
export function isUserInfoFull() {

  let userinfo = getUserInfo();
  if (!userinfo['college'] || userinfo['gender'] == null) {
    return false;
  }
  return true;
}