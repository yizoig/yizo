import Apis from '../utils/fetch';
import { host } from '../../config/api';
const CollegeApi = {
  logo: (id) => host + `/colleges/logo/${id}.png`,
  //获取学校列表
  list: Apis.get(host + '/colleges'),
}
export default CollegeApi;