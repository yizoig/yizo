import { Api } from '../lib/api'
export default {
  typeList:Api.get('/goods/types')
}