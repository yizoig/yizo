import Apis from '../utils/fetch';
import { host } from '../../config/api';
const taskApi = {
  //获取任务列表信息
  list: Apis.get(host + '/tasks'),
  //获取任务基本信息
  info: Apis.get(host + '/tasks/:id'),
  //添加任务
  add: Apis.post(host + '/tasks'),
  update: Apis.put(host + '/tasks/:pid'),
  //报名
  join: Apis.put(host + '/tasks/join/:id'),
  //退出
  quit: Apis.put(host + '/tasks/quit/:id'),
  //完成
  finally: Apis.put(host + '/tasks/finally/:id'),
  //状态
  putstate: Apis.put(host + '/tasks/state/:pid')
}
export default taskApi;