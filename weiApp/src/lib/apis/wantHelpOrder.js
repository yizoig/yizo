import Apis from '../utils/fetch';
import {host} from '../../config/api';
const WanHelpOrderApi = {
  //获取求助信息
  list:Apis.get(host+'/order/help/want'),
  //获取求助基本信息
  info:Apis.get(host+'/order/help/want/info/:id'),
  //添加求助
  add:Apis.post(host+'/order/help/want'),
  //取消求助
  cancel:Apis.delete(host+'/order/help/want/cancel'),
  //帮助 抢单
  grab:Apis.post(host+'/order/help/want/grab'),
  //放弃跑单
  quit:Apis.delete(host+'/order/help/want/quit'),
  //发货
  deliver:Apis.put(host+'/order/help/want/deliver'),
  //完成
  finally:Apis.put(host+'/order/help/want/finally'),
  //结束
  end:Apis.put(host+'/order/help/want/end'),
}
export default WanHelpOrderApi;