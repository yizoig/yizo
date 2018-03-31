
const { Dvm } = JikeJs;
//定义路由
module.exports = {
    controller: 'post',//默认controller
    path: '/post',
    routers: [
        /**
         *  获取评论列表
         */
        {
            path: '/comments/:id',
            method: 'get',
            action: 'commentList',
            middle: [],
            rules: {
                search: Dvm.string(),
                creater: Dvm.string(),
                postId: Dvm.string(),
                pageable: Dvm.number().in([0, 1], "参数必须是0或1").default(0),
                page: Dvm.number().min(1).default(1),
                pageSize: Dvm.number().default(5),
                _d: Dvm.number().in([0, 1])
            },
        },
        /**
         * 添加评论
         */
        {
            path: '/comments/:id',
            method: 'post',
            action: 'commentAdd',
            middle: [],
            rules: {
                content: Dvm.string().require()
            },
        },
        /**
         * 修改评论
         */
        {
            path: '/comments/:id',
            method: 'put',
            action: 'commentUpdate',
            middle: [],
            rules: {
                content: Dvm.string(),
                cid: Dvm.string(),
            }
        },
        /**
         * 删除评论         */
        {
            path: '/comment/:id',
            method: 'delete',
            action: 'commentDel',
            middle: [],
            rules: {
                cids: Dvm.array().require(),
                real: Dvm.number().in([0, 1])
            }
        },

    ]
}
