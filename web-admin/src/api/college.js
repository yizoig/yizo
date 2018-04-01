import { Api } from '../lib/api'
export default {
  list: Api.get('/colleges'),
  add: Api.post("/colleges"),
  update: Api.put("/colleges/:id"),
}