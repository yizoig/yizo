import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取评论列表 2018年03月27日00:34:46 
 */

interface CommentList extends Api {
    name: "/posts/comments",
    method: m.GET,
    params: {
        search?: String,//typename
        creater?: String,//创建人
        postId:String,
        _d?: 0 | 1,
        pageable?: 0 | 1,
        page?: Number,
        pageSize?: Number,
    },
    return: {
        list: Array<{
            id: String,
            user: String,
            content: String,
            _c: Date,
            _d: 0 | 1
        }>,
        pageSize: Number<1, 100>,
        pageTotal?: Number
    }
}

/**
 * 添加留言 2018年03月27日00:42:27
 */
interface CommentAdd extends Api {
    name: "/posts/comments/:pid",
    method: m.POST,
    params: {
        content: String
    },
    return: String
}
/**
 * 编辑留言 2018年03月27日00:42:36
 */
interface CommentUpdate extends Api {
    name: "/posts/comments/:pid",
    method: m.PUT,
    params: {
        cid: String,//评论id
        content?: String
    },
    return: Boolean
}
/**
 * 删除留言 2018年03月27日00:42:48
 */
interface CommentDel extends Api {
    name: "/posts/comments/:id",
    method: m.DELETE,
    params: {
        cids: Array<String>,
        real?: 0 | 1
    },
    return: Boolean
}
