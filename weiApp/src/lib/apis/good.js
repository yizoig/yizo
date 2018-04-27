import Apis from '../utils/fetch';
import { host } from '../../config/api';
const GoodApi = {
    uploadImage: host + '/goods/images/',
    tempImage: host + '/tmp/',
    //获取物品列表信息
    list: Apis.get(host + '/goods'),
    //获取武平基本信息
    info: Apis.get(host + '/goods/:id'),
    //添加物品
    add: Apis.post(host + '/goods'),
    update: Apis.put(host + '/goods/:id'),
    //报名
    buy: Apis.put(host + '/goods/buy/:id'),
    //退出
    putstate: Apis.put(host + '/goods/state/:pid'),
    //完成
    cancel: Apis.put(host + '/goods/cancel/:id'),
    //状态
    putstate: Apis.put(host + '/goods/state/:pid')
}
export default GoodApi;