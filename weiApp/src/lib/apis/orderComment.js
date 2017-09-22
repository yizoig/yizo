import Apis from '../utils/fetch';
import {host} from '../../config/api';
const OrderCommentApi = {
  //获取评论
  list:Apis.get(host+'/order/comment/'),
}
export default OrderCommentApi;