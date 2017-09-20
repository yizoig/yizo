import Apis from '../utils/fetch';
import {host} from '../../config/api';
const UserApi = {

  avatar:host+'/account/avatar/',
  //普通账号登录
  signIn:Apis.post(host+'/account/signIn'),
  //微信快捷登录
  weixinSignin:Apis.post(host+'/account/signIn/weixin'),
  //修改基本信息
  updateInfo:Apis.put(host+'/account/:id'),
  //修改密码
  changePwd:Apis.put(host+'/account/pwd/:id'),
  //修改手机号
  changeTel:Apis.put(host+'/account/tel')
}
export default UserApi;