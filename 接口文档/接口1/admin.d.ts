import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取管理组
 */
interface AdminGroupList extends Api {
    name: "/admins/groups",
    method: m.GET,
    params: {
        search?: String, //关键字 可以搜索 name id
        pageable?: 0,//是否需要分页 0不要
        page?: Number,//当前页   当pageable为true时page生效并返回page
        pageSize?: Number = 5,
        _d?: 0 | 1
    }
    return: {
        list: Array<{
            id: String,
            name: String,
            _c: Date,
            _d?: 0 | 1
        }>,
        pageSize: Number<1, 100>
        pageTotal?: Number
    }
}
/**
 * 添加管理组
 */
interface AdminGroupAdd extends Api {
    name: "/admins/groups",
    method: m.POST,
    params: {
        name: String
    },
    return: String
}
/**
 * 修改管理组
 */
interface AdminGroupUpdate extends Api {
    name: "/admins/groups",
    method: m.PUT,
    params: {
        id: String,
        name: String
    },
    return: Boolean
}
/**
 * 删除管理组
 */
interface AdminGroupDel extends Api {
    name: "/admins/groups",
    method: m.DELETE,
    params: {
        ids: Array<String>,
        real?: Boolean//是否真删除
    },
    return: Boolean
}

/**
 * 获取管理员列表
 */
interface AdminList extends Api {
    name: "/admins",
    method: m.GET,
    params: {
        search?: String,//关键字搜索 account name  groupName
        group: String,
        pageable?: Boolean,//是否需要分页
        page?: Number,//当前页   当pageable为true时page生效并返回page
        sort?: String,//排序字符串  _c desc,name desc,id esc
        _d?: 0 | 1
    },
    return: {
        list: Array<{
            id: String,
            account: String,
            name: String,
            group: String,
            groupName: String,
            _c: Date,
            _d?: 0 | 1
        }>,
        page?: {
            size: Number<1, 100>,
            total: Number
        }
    }
}
/**
 * 添加管理员
 */
interface AdminAdd extends Api {
    name: "/admins",
    method: m.POST,
    params: {
        name: String,
        group: String,
        account: String<16>,
        password: String<16>
    },
    return: String
}
/**
 * 修改管理员
 */
interface AdminUpdate extends Api {
    name: "/admins/:id",
    method: m.PUT,
    params: {
        id: String,
        name: String,
        group:String,
    },
    return: Boolean
}
/**
 * 删除管理员
 */
interface AdminDel extends Api {
    name: "/admins",
    method: m.DELETE,
    params: {
        ids: Array<String>
    },
    return: Boolean
}
/**
 * 修改管理员密码
 */
interface AdminPwdUpdate extends Api {
    name: "/admins/pwd/:id",
    method: m.PUT,
    params: {
        id: String,
        password: String<16>
    },
    return: Boolean
}