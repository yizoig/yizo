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
}
export default GoodApi;