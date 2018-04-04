import { Api } from '../lib/api'
export default {
  typeList: Api.get('/posts/types'),
  addType: Api.post("/posts/types"),
  updateType: Api.put("/posts/types/:id"),
  delType: Api.delete("/posts/types"),
  useType: Api.delete("/posts/types/use")
}