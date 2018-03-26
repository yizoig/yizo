import { Api, method as m, String, Number, md5, Date } from './interface';

/**
 * 获取评论列表
 */

interface CommentList extends Api {
    name: "/posts/comments",
    method: m.GET,
    params: {
        search?: String,//typename
        creater?: String,//创建人
        join?: String,//参与者
        postId: String,
        _d?: 0 | 1,
        pageable?: 0 | 1,
        page?: Number,
        pageSize?: Number,
    },
    return: {
        id: String,
        user: String,
        content: String,
        _c: Date,
        _d: 0 | 1
    }
}

//添加留言
interface CommentAdd extends Api {
    name: "/posts/comments",
    method: m.POST,
    params: {
        content: String
    },
    return: String
}
//编辑留言
interface CommentUpdate extends Api {
    name: "/posts/comments",
    method: m.PUT,
    params: {
        content?: String
    },
    return: Boolean
}
//删除留言
interface CommentDel extends Api {
    name: "/posts/comments",
    method: m.DELETE,
    params: {
        ids: Array<String>,
        real?: 0 | 1
    },
    return: Boolean
}
