import { Api } from '../lib/api'
export default {
  typeList: Api.get('/posts/types'),
  addType: Api.post("/posts/types"),
  updateType: Api.put("/posts/types/:id"),
  delType: Api.delete("/posts/types"),
  useType: Api.put("/posts/types/use"),
  commentList: Api.get('/posts/comments/:id')
}