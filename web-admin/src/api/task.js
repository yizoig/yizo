import { Api } from '../lib/api'
export default {
  typeList: Api.get('/tasks/types'),
  addType: Api.post("/tasks/types"),
  updateType: Api.put("/tasks/types/:id"),
  delType: Api.delete("/tasks/types"),
  useType: Api.delete("/tasks/types/use")
}