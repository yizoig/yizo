import { Api, method as m, String, Number, md5 } from './interface';

/**
 * 寻找跑腿
 */
interface findRunOrder extends Api {
    name: "/runOrder/find",
    method: m.POST,
    params: {
        content:String,
        title:String,
        college:String,
        gender:"0"|"1",
        address:String,
        money:["本金","佣金"],
        demand:["附加需求"],
        contact:String,
        number:String,
    }
    return: {
        id:String
    }
}
/**
 * 我要跑腿
 */

 interface giveRunOrder extends Api{
    name: "/runOrder/give",
    method: m.POST,
    params: {
        title:String,
        content:String,
        gender:"0"|"1",
        college:String,        
    }
    return: {
        id:String
    }
 }