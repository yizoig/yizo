
import { Api } from '../lib/api'
import cache from '../lib/cache';
import base64url from 'base64url';
import md5 from 'md5';
export default {
  signIn: async ({ account, password }) => {
    let data = await Api.post('/admins/signIn')({ account, password });
    cache.local.setJsonItem('signIn', { account, password });
    delete data['token'];
    cache.local.setJsonItem('userinfo', data);
    return data;
  },
  list: Api.get('/admins'),
  add: Api.post("/admins"),
  update: Api.put("/admins/:id"),
  del: Api.delete("/admins"),
  //分组
  groupList: Api.get('/admins/groups'),
  updateGroup: Api.put('/admins/groups/:id'),
  addGroup: Api.post("/admins/groups"),
  delGroup: Api.delete("/admins/groups")
}