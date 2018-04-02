import { Api } from '../lib/api'
export default {
  list: Api.get('/colleges'),
  add: Api.post("/colleges"),
  update: Api.put("/colleges/:id"),
  del: Api.delete("/colleges"),
  use: Api.put("/colleges/use"),
}