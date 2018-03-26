import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取所有学校 2018年03月27日00:23:41
 */
interface CollegeList extends Api {
    name: '/colleges',
    method: m.GET,
    params: {
        search?: String,//name
        _d?: 0 | 1,
        pageable?: 0 | 1,
        page?: Number = 1,
        pageSize?: Number = 5,
    }
    return: {
        list: Array<{
            id: String,
            name: String,
            _d: 0 | 1,
            _c: Date
        }>,
        pageSize: Number<1, 100>
        pageTotal?: Number
    }
}

/**
 * 添加学校 2018年03月27日00:23:46
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
 * 修改学校基本信息 2018年03月27日00:23:48
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
 * 删除学校 2018年03月27日00:23:49
 */
interface CollegeDel extends Api {
    name: '/colleges',
    method: m.DELETE,
    params: {
        ids: Array<String>,
        real?: 0 | 1 = 0//0 假删除
    },
    return: Boolean
}