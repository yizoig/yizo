import { Api } from '../lib/api'
export default {
  typeList:Api.get('/goods/types'),
  addType:Api.post("/goods/types"),
  updateType:Api.put("/goods/types/:id"),
  delType:Api.delete("/goods/types")
}