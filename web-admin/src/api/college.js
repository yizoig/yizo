import { Api } from '../lib/api'
import api from '../config/api'
export default {
  list: Api.get('/colleges'),
  add: Api.post("/colleges"),
  update: Api.put("/colleges/:id"),
  del: Api.delete("/colleges"),
  use: Api.put("/colleges/use"),
  logo:(id)=>api.host+`/colleges/logo/${id}.png`
}