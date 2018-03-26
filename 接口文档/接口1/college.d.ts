import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取所有学校
 */
interface CollegeList extends Api {
    name: '/colleges',
    method: m.GET,
    params: {
        search?: String,
        _d?: 0 | 1,
        pageable?: 0 | 1,
        page?: Number = 1,
        pageSize?: Number = 5,
    }
    return: {
        id: String,
        name: String,
        joinTime: Date,
        _d: 0 | 1,
        _c: Date
    }
}

/**
 * 添加学校
 */
interface CollegeAdd extends Api {
    name: '/colleges',
    method: m.POST
    params: {
        name: String
    },
    return: String//id
}
/**
 * 修改学校基本信息
 */
interface CollegeUpdate extends Api {
    name: '/colleges',
    method: m.PUT,
    params: {
        name: String
    },
    return: Boolean
}
/**
 * 删除学校
 */
interface CollegeDel extends Api {
    name: '/colleges',
    method: m.DELETE,
    params: {
        ids: any
    },
    return: Boolean
}