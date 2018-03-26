import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取管理组 2018年03月27日00:14:11
 */
interface AdminGroupList extends Api {
    name: "/admins/groups",
    method: m.GET,
    params: {
        search?: String, //关键字 可以搜索 name id
        _d?: 0 | 1,//获取是否删除的组
        pageable?: 0,//是否需要分页 0不要
        page?: Number,//当前页   当pageable为true时page生效并返回page
        pageSize?: Number = 5,
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
 * 添加管理组 2018年03月27日00:15:59
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
 * 修改管理组 2018年03月27日00:16:07
 */
interface AdminGroupUpdate extends Api {
    name: "/admins/groups/:id",
    method: m.PUT,
    params: {
        name: String
    },
    return: Boolean
}
/**
 * 删除管理组 2018年03月27日00:16:16
 */
interface AdminGroupDel extends Api {
    name: "/admins/groups",
    method: m.DELETE,
    params: {
        ids: Array<String>,
        real?: 0 | 1 = 0//是否真删除 0 假删除
    },
    return: Boolean
}

/**
 * 获取管理员列表 2018年03月27日00:18:33
 */
interface AdminList extends Api {
    name: "/admins",
    method: m.GET,
    params: {
        search?: String,//关键字搜索 account,name,groupName
        group: String,//指定分组的管理员
        _d?: 0 | 1,
        sort?: String,//排序字符串  _c desc,name desc,id esc
        pageable?: Boolean,//是否需要分页
        page?: Number,//当前页   当pageable为true时page生效并返回page
        pageSize?: Number
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
        pageSize: Number<1, 100>
        pageTotal?: Number
    }
}
/**
 * 添加管理员 2018年03月27日00:20:42
 */
interface AdminAdd extends Api {
    name: "/admins",
    method: m.POST,
    params: {
        name: String,
        group: String,
        account: String<5, 16>,
        password: String<16>
    },
    return: String
}
/**
 * 修改管理员基本信息 2018年03月27日00:20:45
 */
interface AdminUpdate extends Api {
    name: "/admins/:id",
    method: m.PUT,
    params: {
        id: String,
        name: String,
        group: String,
    },
    return: Boolean
}
/**
 * 删除管理员 2018年03月27日00:20:48
 */
interface AdminDel extends Api {
    name: "/admins",
    method: m.DELETE,
    params: {
        ids: Array<String>,
        real?: 0 | 1//是否真删除 0 假删除
    },
    return: Boolean
}
/**
 * 修改管理员密码 2018年03月27日00:20:50
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