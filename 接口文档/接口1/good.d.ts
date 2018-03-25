import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取所有商品类型
 */

interface GoodTypeList extends Api {
    name: "/good/types",
    method: m.GET,
    params: {
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
interface GoodTypeAdd extends Api{
    name:"/good/types",
    method:m.POST,
    params:{
        name:String,
        parent?:String,
    },
    return:String
}
/**
 * 修改商品类型
 */
interface GoodTypeUpdate extends Api{
    name:"/good/types",
    method:m.PUT,
    params:{
        name:String,
        parent?:String,
    },
    return:Boolean
}
/**
 * 删除类型
 */
interface GoodTypeDel extends Api{
    name:"/good/types",
    method:m.DELETE,
    parmas:{
        ids:Array<String>
    },
    return:Boolean
}