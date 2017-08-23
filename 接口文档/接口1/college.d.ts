import { Api, method as m, String, Number, md5 } from './interface';

//获取所有学校
interface CollegeList extends Api{
    name:'/colleges',
    method:m.GET
}

/**
 * 添加学校
 */
//获取所有学校
interface CollegeAdd extends Api{
    name:'/colleges',
    method:m.POST
    params:{
        name:any
    }
}
/**
 * 删除学校
 */
interface CollegeDel extends Api{
    name:'/colleges',
    method:m.DELETE
    params:{
        ids:any
    }
}