import wepy from 'wepy'
const interfaces = {
  async getUserInfo() {
    const loginData = await wepy.login();
    console.log(await wepy.login())

    console.log("登录成功", loginData);
    const userInfo = await wepy.getUserInfo()
    console.log("获取用户信息", userInfo)
    userInfo.code = loginData.code
    wx.setStorage({
      key: "weiInfo",
      data: userInfo.userInfo
    })
    return userInfo
  }
}
export default interfaces