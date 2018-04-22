import { Api } from '../lib/api'
import api from '../config/api'
export default {
    list: Api.get('/goods'),
    info: Api.get('/goods/:id'),
    uploadImage: api.host + '/goods/images/',
}