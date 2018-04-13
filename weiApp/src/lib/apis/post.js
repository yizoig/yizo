import Apis from '../utils/fetch';
import { host } from '../../config/api';
export default {
  listType: Apis.get(host + '/posts/types'),

  //获取评论
  list: Apis.get(host + '/posts/comment/'),
  add: Apis.post(host + '/posts/comment/')
}