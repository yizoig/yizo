import { Api, method as m, String, Number, md5 } from './interface';

/**
 * 任务类型列表 2018年03月27日00:43:05
 */
interface TaskTypeList extends Api {
    name: "/tasks",
    method: m.GET,
    params: {
        search?: String,//typename
        _d?: 0 | 1,
        pageable?: 0 | 1,
        page?: Number,
        pageSize?: Number,
    },
    return: {
        list: {
            id: String,
            name: String,
            _d?: 0 | 1
        },
        pageSize: Number<1, 100>,
        pageTotal?: Number
    }
}
/**
 * 添加任务类型 2018年03月27日00:43:08
 */
interface TaskTypeAdd extends Api {
    name: "/tasks",
    method: m.POST,
    params: {
        name: String
    },
    return: String
}
/**
 * 修改类型 2018年03月27日00:43:11
 */
interface TaskTypeUpdate extends Api {
    name: "/tasks/:id",
    method: m.PUT,
    params: {
        name?: String
    },
    return: Boolean
}
/**
 * 删除类型 2018年03月27日00:43:45
 */
interface TaskTypeDel extends Api {
    name: "/tasks",
    method: m.DELETE,
    params: {
        ids: Array<String>,
        real: 0 | 1
    },
    return: Boolean
}
/**
 * 获取所有任务 2018年03月27日00:43:49
 */
interface TaskList extends Api {
    name: "/tasks",
    method: m.GET,
    params: {
        search?: String,//task_type_name user_nickname college_name title contact
        creater?: String,//谁发布的
        partner?: String,//参与者
        college?: String,//指定学校
        type?: String,//商品类型
        _d?: 0 | 1,
        pageable?: 0 | 1,
        page?: Number,
        pageSize?: Number
    },
    return: {
        list: Array<{
            id: String,
            title: String,//标题
            content: String,//内容
            college: String,//学校
            gender: 0 | 1,
            contact: String,//联系方式
            type: String,//商品类型
            rewardtype: 0 | 1,//酬劳类型
            money?: Number,//酬劳
            number: String,//人数
            reward?: Number,//酬劳描述
            state: String//状态
        }>,
        pageSize: Number<1, 100>,
        pageTotal?: Number
    }
}
/**
 * 获取任务基本信息 2018年03月27日00:44:05
 */
interface TaskInfo extends Api {
    name: "/tasks/:id",
    method: m.GET,
    return: {
        id: String,
        title: String,//标题
        content: String,//内容
        college: String,//学校
        gender: 0 | 1,
        contact: String,//联系方式
        type: String,//商品类型
        rewardtype: 0 | 1,//酬劳类型
        money?: Number,//酬劳
        number: String,//人数
        reward?: Number,//酬劳描述
        state: String//状态
        records: Array<{
            id: String,
            user: String,
            _c: String,
            _d: String
        }>
    }
}
/**
 * 发布任务 2018年03月27日00:44:15
 */

interface TaskPublish extends Api {
    name: "/tasks",
    method: m.POST,
    params: {
        title: String,
        content: String,
        gender: 0 | 1,
        college: String,
        concat: String,
        concat_tel: String,
        type: String,//商品类型
        rewardtype: 0 | 1,//酬劳类型 0 number存在 1reward存在
        money?: Number,//酬劳
        number: String,//人数
        reward?: Number,//酬劳描述
    }
    return: String
}
/**
 * 接受（分配）任务 2018年03月27日00:45:16
 */
interface TaskJoin extends Api {
    name: "/tasks/join/:id",
    method: m.PUT,
    return: Boolean
}
/**
 * 放弃（解除）任务 2018年03月27日00:45:19
 */
interface TaskQuit extends Api {
    name: "/tasks/quit/:id",
    method: m.PUT,
    params: {
    },
    return: Boolean
}
/**
 * 录用 2018年03月27日00:45:23
 */
interface TaskEmploy extends Api {
    name: "/tasks/employ/:id",
    method: m.PUT,
    return: Boolean
}
/**
 * 结束任务 2018年03月27日00:45:25
 */

interface TaskEnd extends Api {
    name: "/tasks/end/:id",
    method: m.PUT,
    return: Boolean
}
/**
 * 修改任务基本信息 2018年03月27日00:45:28
 */

interface TaskUpdate extends Api {
    name: "/tasks",
    method: m.POST,
    params: {
        title: String,
        content: String,
        gender: 0 | 1,
        concat: String,
        concat_tel: String,
        type: String,//商品类型
        rewardtype: 0 | 1,//酬劳类型 0 number存在 1reward存在
        money?: Number,//酬劳
        number: String,//人数
        reward?: Number,//酬劳描述
    }
    return: Boolean
}
/**
 * 删除任务 2018年03月27日00:45:31
 */

interface TaskDel extends Api {
    name: "/tasks/:id",
    method: m.DELETE,
    params: {
        ids: Array<String>,
        real?: 0 | 1
    }
    return: Boolean
}
