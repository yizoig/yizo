import Apis from '../utils/fetch';
import {host} from '../../config/api';
const taskApi = {
  //获取任务列表信息
  list:Apis.get(host+'/tasks'),
  //获取任务基本信息
  info:Apis.get(host+'/tasks/:id'),
  //添加任务
  add:Apis.post(host+'/tasks'),
  update:Apis.put(host+'/tasks/:pid'),
  putstate:Apis.put(host+'/tasks/state/:pid')
}
export default taskApi;