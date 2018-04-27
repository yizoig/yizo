import { Api } from '../lib/api'
import config from '../config/api';
export default {
  list: Api.get('/users'),
  update: Api.put("/users/:id"),
  use: Api.put("/users/use"),
  avatar: (id) => config.host + `/users/avatar/${id}.ava`
}