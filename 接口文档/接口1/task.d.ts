import { Api, method as m, String, Number, md5 } from './interface';

/**
 * 任务类型列表
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
        id: String,
        name: String,
        _d?: 0 | 1
    }
}
/**
 * 添加任务类型
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
 * 修改类型
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
 * 删除类型
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
 * 获取所有任务
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
        pageable?: 0 | 1,
        page?: Number,
        pageSize?: Number
        _d?: 0 | 1,
    },
    return: Array<{
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
    }>
}
/**
 * 获取任务基本信息
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
 * 发布任务
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
        contact_wx: String,
        type: String,//商品类型
        rewardtype: 0 | 1,//酬劳类型 0 number存在 1reward存在
        money?: Number,//酬劳
        number: String,//人数
        reward?: Number,//酬劳描述
    }
    return: String
}
/**
 * 接受（分配）任务
 */
interface TaskJoin extends Api {
    name: "/tasks/join/:id",
    method: m.PUT,
    return: Boolean
}
/**
 * 放弃（解除）任务
 */
interface TaskQuit extends Api {
    name: "/tasks/quit/:id",
    method: m.PUT,
    params: {
    },
    return: Boolean
}
/**
 * 录用
 */
interface TaskEmploy extends Api {
    name: "/tasks/employ/:id",
    method: m.PUT,
    return: Boolean
}
/**
 * 结束任务
 */

interface TaskEnd extends Api {
    name: "/tasks/end/:id",
    method: m.PUT,
    return: Boolean
}
/**
 * 修改任务基本信息
 */

interface TaskUpdate extends Api {
    name: "/tasks",
    method: m.POST,
    params: {
        title: String,
        content: String,
        gender: 0 | 1,
        concat: String,
        contact_wx: String,
        type: String,//商品类型
        rewardtype: 0 | 1,//酬劳类型 0 number存在 1reward存在
        money?: Number,//酬劳
        number: String,//人数
        reward?: Number,//酬劳描述
    }
    return: Boolean
}
/**
 * 删除任务
 */

interface TaskDel extends Api {
    name: "/tasks/:id",
    method: m.DELETE,
    params: {
        ids: Array<String>,
        real: 0 | 1
    }
    return: Boolean
}
