import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取所有用户
 */

interface UserList extends Api {
    name: "/users",
    method: m.GET,
    params: {
        search?: String,//nickname，tel,collegename
        college?: String,
        sex?: 0 | 1,
        _d?: 0 | 1,
        pageable?: 0 | 1 = 0,//是否需要分页
        page?: Number = 1,//当前页   当pageable为true时page生效并返回page
        pageSize?: Number = 5,
    },
    return: Array<{
        id: String,
        tel: String,
        sex: 0 | 1,
        college: String,
        nickname: String,
        _c: Date,
        _d?: 0 | 1
    }>
}
/**
 * 添加用户
 */
interface UserAdd extends Api {
    name: "/users",
    method: m.POST,
    params: {
        tel: String,
        // password: String,
        sex?: 0 | 1,
        nickname?: String,
    },
    return: String
}
/**
 * 修改用户基本信息
 */
interface UserUpdate extends Api {
    name: "/users",
    method: m.PUT,
    params: {
        nickname?: String,
        sex?: String
    },
    return: Boolean
}
/**
 * 获取用户基本信息
 */
interface UserInfo extends Api {
    name: "/users/:id(\\d+)",
    method: m.GET,
    return: {
        id: String,
        tel: String,
        sex: 0 | 1,
        college: String,
        nickname: String,
        _c: Date,
        _d?: 0 | 1
    }
}
/**
 * 删除用户
 */
interface UserDel extends Api {
    name: "/users",
    method: m.DELETE,
    parmas: {
        ids: Array<String>,
        real: 0 | 1
    },
    return: Boolean
}
/**
 * 用户微信登录 （不存在就自动注册）
 */
interface UserWeiSignIn extends Api {
    name: "/users/wxSignIn",
    method: m.POST,
    params: {
        code: String,
        rawData: Object<{

        }>,
        signature: String,
        encryptedData: String,
        iv: String,
    },
    return: {
        id: String,
        tel: String,
        sex: 0 | 1,
        college: String,
        nickname: String,
        _c: Date,
        _d?: 0 | 1
    },
    returnHeader: {
        token: String
    }
}