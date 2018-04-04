import Apis from '../utils/fetch';
import { host } from '../../config/api';
export default {
  listType: Apis.get(host + '/posts/types'),
}