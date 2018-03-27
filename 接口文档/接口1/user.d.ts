import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取所有用户 2018年03月27日00:46:03
 */

interface UserList extends Api {
    name: "/users",
    method: m.GET,
    params: {
        search?: String,//nickname，tel,collegename
        college?: String,
        gender?: 0 | 1,
        _d?: 0 | 1,
        pageable?: 0 | 1 = 0,//是否需要分页
        page?: Number = 1,//当前页   当pageable为true时page生效并返回page
        pageSize?: Number = 5,
    },
    return: {
        list: Array<{
            id: String,
            tel: String,
            gender: 0 | 1,
            college: String,
            nickname: String,
            _c: Date,
            _d?: 0 | 1
        }>,
        pageSize: Number<1, 100>,
        pageTotal?: Number
    }
}
// /**
//  * 添加用户 2018年03月27日00:47:26
//  */
// interface UserAdd extends Api {
//     name: "/users",
//     method: m.POST,
//     params: {
//         tel: String,
//         password: String = '123456',
//         gender?: 0 | 1,
//         nickname?: String,
//     },
//     return: String
// }
/**
 * 修改用户基本信息 2018年03月27日00:47:28
 */
interface UserUpdate extends Api {
    name: "/users",
    method: m.PUT,
    params: {
        nickname?: String,
        gender?: String
    },
    return: Boolean
}
/**
 * 获取用户基本信息 2018年03月27日00:47:31
 */
interface UserInfo extends Api {
    name: "/users/:id(\\d+)",
    method: m.GET,
    return: {
        id: String,
        tel: String,
        gender: 0 | 1,
        college: String,
        nickname: String,
        _c: Date,
        _d?: 0 | 1
    }
}
/**
 * 删除用户 2018年03月27日00:47:34
 */
interface UserDel extends Api {
    name: "/users",
    method: m.DELETE,
    parmas: {
        ids: Array<String>,
        real: 0 | 1 = 0
    },
    return: Boolean
}
/**
 * 用户微信登录 （不存在就自动注册）2018年03月27日00:50:33
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
        gender: 0 | 1,
        college: String,
        nickname: String,
        _c: Date,
        _d?: 0 | 1
    },
    returnHeader: {
        token: String
    }
}