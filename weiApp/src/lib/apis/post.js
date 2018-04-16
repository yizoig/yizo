import Apis from '../utils/fetch';
import { host } from '../../config/api';
export default {
  listType: Apis.get(host + '/posts/types'),

  //获取评论
  commentList: Apis.get(host + '/posts/comments/:id'),
  commentAdd: Apis.post(host + '/posts/comments/:id')
}