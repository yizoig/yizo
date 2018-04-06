import Apis from '../utils/fetch';
import {host} from '../../config/api';
const UserApi = {

  avatar:host+'/users/avatar/',
  //普通账号登录
  signIn:Apis.post(host+'/users/signIn'),
  //微信快捷登录
  weixinSignin:Apis.post(host+'/users/wxSignIn'),
  //修改基本信息
  updateInfo:Apis.put(host+'/users/:id'),
  //修改密码
  changePwd:Apis.put(host+'/users/pwd/:id'),
  //修改手机号
  changeTel:Apis.put(host+'/users/tel'),
  //同步微信信息
  syncWxInfo:Apis.post(host+'/users/weixin/syncinfo/:id'),
}
export default UserApi;