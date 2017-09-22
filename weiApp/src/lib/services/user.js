import wepy from 'wepy'
import Api from '../utils/fetch'
import UserApi from '../apis/user';
function replace(source, target) {

  for (let item in target) {

    if (item in source) {
      source[item] = target[item];
    }
  }
  return source;
}
const User = {
  autoSignIn: async () => {
    try {
      let { code } = await wepy.login();
      let { rawData, signature, encryptedData, iv } = await wepy.getUserInfo();
      let { data: result, header } = await UserApi.weixinSignin({ rawData, signature, encryptedData, iv, code })
    } catch (e) {
      console.log(e)
    }
  },
  setUserinfo: () => {
    let userInfo = wepy.getStorageSync("userInfo");
    let remember = wepy.getStorageSync("remember");
    if (userinfo) {
      userinfo = replace(userinfo, data);
      wepy.setStorage({
        key: "userInfo",
        data: userInfo
      });
    }
    if (remember) {
      remember = replace(remember, data);
      wepy.setStorage({
        key: "remember",
        data: remember
      });
    }
  },
  signOut: () => {
    //移除token
    wepy.removeStorage({ key: 'access-token' });
    wepy.removeStorage({ key: 'remember' });
    wepy.removeStorage({ key: 'userinfo' });
  },
  syncWxInfo:async ()=>{
    let { rawData } = await wepy.getUserInfo();
    let { data } = await UserApi.syncWxInfo({ rawData })
    return data;
  }
}
export default User;