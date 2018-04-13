import Apis from '../utils/fetch';
import {host} from '../../config/api';
const taskApi = {
  //获取求助信息
  list:Apis.get(host+'/tasks'),
  //获取求助基本信息
  info:Apis.get(host+'/tasks/:id'),
  //添加求助
  add:Apis.post(host+'/tasks'),
}
export default taskApi;