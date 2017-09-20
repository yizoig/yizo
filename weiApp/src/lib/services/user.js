import wepy from 'wepy'
import Api from '../utils/fetch'
import UserApi from '../apis/user';
const User = {
  autoSignIn: async () => {
    try {
      let { code } = await wepy.login();
      let { rawData, signature, encryptedData, iv } = await wepy.getUserInfo();
      let {data:result,header} = await UserApi.weixinSignin({ rawData, signature, encryptedData, iv ,code})
    } catch (e) {
      console.log(e)
    }
  }
}
export default User;