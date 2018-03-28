import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取所有商品类型 2018年03月27日00:23:54
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
        list: Array<{
            id: String,
            name: String,
            parent: String,
            _d?: 0 | 1
        }>,
        pageSize: Number<1, 100>
        pageTotal?: Number
    }
}
/**
 * 添加商品类型 2018年03月27日00:32:56
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
 * 修改商品类型 2018年03月27日00:32:59
 */
interface GoodTypeUpdate extends Api {
    name: "/goods/types/:id",
    method: m.PUT,
    params: {
        name: String,
        parent?: String,
    },
    return: Boolean
}
/**
 * 删除类型 2018年03月27日00:33:01
 */
interface GoodTypeDel extends Api {
    name: "/goods/types",
    method: m.DELETE,
    parmas: {
        ids: Array<String>,
        real: 0 | 1 = 0//0假删除
    },
    return: Boolean
}


/**
 * 获取所有商品 2018年03月27日00:33:03
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
        state: 0 | 1 | 2 | 3,
        _d?: 0 | 1,
        pageable?: 0 | 1,
        page?: Number = 1,
        pageSize?: Number = 5,
    },
    return: {
        list: Array<{
            id: String,
            title: String,//标题
            content: String,//内容
            creater: String,//创建人
            images: String,//图片集
            type: String,
            typeName: String,
            price: Number,//现价
            oprice: Number,//原价
            number: Number,//售卖数量
            state: 0 | 1 | 2 | 3 = 0,
            _d?: 0 | 1
        }>,
        pageSize: Number<1, 100>
        pageTotal?: Number
    }
}
/**
 * 获取任务基本信息 2018年03月27日00:33:06
 */
interface GoodInfo extends Api {
    name: "/tasks/:id",
    method: m.GET,
    return: {
        id: String,
        title: String,
        content: String,
        concat: String,
        concat_tel: String,
        creater: String,
        createrName:String,
        createrGender:0|1
        images: String,
        type: String,
        typeName: String,
        state: 0 | 1 | 2 | 3,
        price: Number,//现价
        oprice: Number,//原价
        number: Number,
        _d?: 0 | 1,
        //购买记录
        records: Array<{
            id: String,
            user: String,
            num: String,//购买数量
            total: String,
            _c: String,
            _d: String
        }>
    }
}
/**
 * 发布商品 2018年03月27日00:33:10
 */
interface GoodPublish extends Api {
    name: "/goods",
    method: m.POST,
    params: {
        title: String,
        content: String,
        concat: String,
        concat_tel: String,
        images: String,
        type: String,
        price: Number,//现价
        oprice: Number,//原价
        number: Number,
    },
    return: String
}
/**
 * 修改商品信息 2018年03月27日00:33:36
 */
interface GoodUpdate extends Api {
    name: "/goods/:id",
    method: m.PUT,
    params: {
        title?: String,
        content?: String,
        concat?: String,
        contact_tel?: String,
        images?: String,
        type?: String,
        price?: Number,//现价
        oprice?: Number,//原价
        number?: Number
    },
    return: Boolean
}
/**
 * 删除商品 2018年03月27日00:33:53
 */
interface GoodDel extends Api {
    name: "/goods",
    method: m.DELETE,
    parmas: {
        ids: Array<String>,
        real?: 0 | 1
    },
    return: Boolean
}
/**
 * 购买商品 2018年03月27日00:34:00
 */
interface GoodBuy extends Api {
    name: "/goods/buy/:id",
    method: m.POST,
    params: {
        number: Number
    },
    return: Boolean
}