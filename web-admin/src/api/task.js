import { Api } from '../lib/api'
import config from '../config/api';
export default {
  list:Api.get('/tasks'),
}