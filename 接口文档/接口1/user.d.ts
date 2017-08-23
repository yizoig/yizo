import { Api, method as m, String, Number } from './interface';

/**
 * 获取所有的用户
 */
interface UserList extends Api {

    name: "/users",
    method: m.GET,
    params: {
        current: Number,
        pageSize: Number
    },
    needToken: false
}
/**
 * 添加用户
 */
interface UserAdd extends Api {

    name: "/users",
    method: m.POST,
    params: {
        account: Number<11>,//手机号
        password: String<6, 12>,//密码
    }
    needToken: true
}



/**
 * 用户注册
 */
interface UserSignUp extends Api {

    name: "/users/signUp",
    method: m.POST,
    params: {
        tel: Number<11>,//手机号
        password: String<6, 12>,//密码
        code: Number<6>
    }
    needToken: false
}
/**
 * 删除用户
 */

interface UserDEL extends Api {

    name: "/users",
    method: m.DELETE,
    params: {
        ids: any,
        mode: -1 | 0 | 1//-1彻底删除 0 恢复 1禁用
    }
    needToken: true
}
/**
 * 获取用户信息
 */
interface UserInfo extends Api {

    name: "/users/info/:id",
    method: m.GET,
    needToken: false
}

interface changeCollege extends Api{
    name: "/users/college/:id",
    method: m.PUT,
    params:{
        college:any
    }
    needToken: true
}