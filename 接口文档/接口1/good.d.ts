import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取所有商品类型
 */

interface GoodTypeList extends Api {
    name: "/goods/types",
    method: m.GET,
    params: {
        search?: String,//typename
        _d?: 0 | 1,
        pageable?: 0 | 1,
        page?: Number = 1,
        pageSize?: Number = 5,
    },
    return: {
        id: String,
        name: String,
        parent: String,
        _d?: 0 | 1
    }
}
/**
 * 添加商品类型
 */
interface GoodTypeAdd extends Api {
    name: "/goods/types",
    method: m.POST,
    params: {
        name: String,
        parent?: String,
    },
    return: String
}
/**
 * 修改商品类型
 */
interface GoodTypeUpdate extends Api {
    name: "/goods/types",
    method: m.PUT,
    params: {
        name: String,
        parent?: String,
    },
    return: Boolean
}
/**
 * 删除类型
 */
interface GoodTypeDel extends Api {
    name: "/goods/types",
    method: m.DELETE,
    parmas: {
        ids: Array<String>,
        real: 0 | 1
    },
    return: Boolean
}


/**
 * 获取所有商品
 */

interface GoodList extends Api {
    name: "/goods",
    method: m.GET,
    params: {
        search?: String,//typename
        creater?: String,//谁发布的
        partner?: String,//参与者
        college?: String,//指定学校
        type?: String,//商品类型
        _d?: 0 | 1,
        pageable?: 0 | 1,
        page?: Number = 1,
        pageSize?: Number = 5,
    },
    return: {
        id: String,
        title: String,
        content: String,
        concat: String,
        contact_wx: String,
        creater: String,
        images: String,
        type: String,
        typeName: String,
        state: 0 | 1,
        price: Number,//现价
        oprice: Number,//原价
        number: Number,
        tags: String,
        _d?: 0 | 1
    }
}
/**
 * 获取任务基本信息
 */
interface GoodInfo extends Api {
    name: "/tasks/:id",
    method: m.GET,
    return: {
        id: String,
        title: String,
        content: String,
        concat: String,
        contact_wx: String,
        creater: String,
        images: String,
        type: String,
        typeName: String,
        state: 0 | 1,
        price: Number,//现价
        oprice: Number,//原价
        number: Number,
        tags: String,
        _d?: 0 | 1,
        records: Array<{
            id: String,
            user: String,
            num:String,
            total:String,
            _c: String,
            _d: String
        }>
    }
}
/**
 * 发布商品
 */
interface GoodPublish extends Api {
    name: "/goods",
    method: m.POST,
    params: {
        title: String,
        content: String,
        concat: String,
        contact_wx: String,
        images: String,
        type: String,
        price: Number,//现价
        oprice: Number,//原价
        number: Number,
        tags: String
    },
    return: String
}
/**
 * 修改商品信息
 */
interface GoodUpdate extends Api {
    name: "/goods/:id",
    method: m.PUT,
    params: {
        title?: String,
        content?: String,
        concat?: String,
        contact_wx?: String,
        images?: String,
        type?: String,
        price?: Number,//现价
        oprice?: Number,//原价
        number?: Number,
        tags?: String
    },
    return: Boolean
}
/**
 * 删除商品
 */
interface GoodDel extends Api {
    name: "/goods",
    method: m.DELETE,
    parmas: {
        ids: Array<String>,
        real: 0 | 1
    },
    return: Boolean
}
/**
 * 购买商品
 */
interface GoodBuy extends Api {
    name: "/goods/:id",
    method: "post",
    params: {
        Number: Number,
    },
    return: Boolean
}