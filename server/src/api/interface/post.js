
const { Dvm } = JikeJs;
const { tokenVerify, adminCheck, userCheck } = require("../config/middleware")

//定义路由
module.exports = {
    controller: 'post',//默认controller
    path: '/posts',
    routers: [
        /**
        *  获取类型
        */
        {
            path: '/types',
            method: 'get',
            action: 'typeList',
            middle: [tokenVerify],
            rules: {
                search: Dvm.string(),
                page: Dvm.number().min(1, true).default(1),
                pageSize: Dvm.number().default(5),
                type: Dvm.string().in(["list", "tree"]).default("list"),
                use: Dvm.number().in([0, 1]),
                del: Dvm.number().in([0, 1]).default(0)
            },
        },
        /**
         * 添加类型
         */
        {
            path: '/types',
            method: 'post',
            action: 'typeAdd',
            middle: [tokenVerify, adminCheck],
            rules: {
                name: Dvm.string().require(),
            },
        },
        /**
        * 禁用类型
        */
        {
            path: '/types/use',
            method: 'put',
            action: 'typeUse',
            middle: [tokenVerify, adminCheck],
            rules: {
                ids: Dvm.array().require(),
                use: Dvm.number().in([0, 1]).default(1)
            }
        },
        /**
         * 修改类型
         */
        {
            path: '/types/:id',
            method: 'put',
            action: 'typeUpdate',
            middle: [tokenVerify, adminCheck],
            rules: {
                name: Dvm.string(),
            }
        },
        /**
         * 删除类型
         */
        {
            path: '/types',
            method: 'delete',
            action: 'typeDel',
            middle: [tokenVerify, adminCheck],
            rules: {
                ids: Dvm.array().require(),
                del: Dvm.number().in([0, 1]).default(0)
            }
        },
        /**
         *  获取评论列表
         */
        {
            path: '/comments/:id',
            method: 'get',
            action: 'commentList',
            middle: [tokenVerify],
            rules: {
                search: Dvm.string(),
                creater: Dvm.string(),
                postId: Dvm.string(),
                page: Dvm.number().min(1, true).default(1),
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
            middle: [tokenVerify, userCheck],
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
            middle: [tokenVerify, userCheck],
            rules: {
                content: Dvm.string(),
                cid: Dvm.string(),
            }
        },
        /**
         * 删除评论        
         */
        {
            path: '/comment/:id',
            method: 'delete',
            action: 'commentDel',
            middle: [tokenVerify],
            rules: {
                cids: Dvm.array().require(),
                real: Dvm.number().in([0, 1])
            }
        },

    ]
}
