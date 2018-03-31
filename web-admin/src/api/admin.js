
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
  groupList:Api.get('/admins/groups'),
  list:Api.get('/admins')
}