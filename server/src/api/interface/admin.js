const { Dvm } = JikeJs;
const { adminCheck, tokenVerify } = require("../config/middleware")
//定义路由
module.exports = {
    controller: 'admin',//默认controller
    path: '/admins',
    routers: [
        /**
         *  获取管理组
         */
        {
            path: '/groups',
            method: 'get',
            action: 'groupList',
            middle: [tokenVerify, adminCheck],
            rules: {
                search: Dvm.string(),
                page: Dvm.number().min(1, true).default(1),
                pageSize: Dvm.number().default(5),
                use: Dvm.number().in([0, 1]),
                del: Dvm.number().in([0, 1]).default(0)
            },
        },
        /**
         * 添加管理组
         */
        {
            path: '/groups',
            method: 'post',
            action: 'groupAdd',
            middle: [tokenVerify, adminCheck],
            rules: {
                name: Dvm.string().require()
            },
        },
        /**
         * 删除/恢复 管理组
         */
        {
            path: '/groups',
            method: 'delete',
            action: 'groupDel',
            middle: [tokenVerify, adminCheck],
            rules: {
                ids: Dvm.array().require(),
                del: Dvm.number().in([0, 1]).default(0)
            }
        },
        /**
         * 禁用/启用 管理组
         */
        {
            path: '/groups/use',
            method: 'put',
            action: 'groupUsed',
            middle: [tokenVerify, adminCheck],
            rules: {
                ids: Dvm.array().require(),
                use: Dvm.number().in([0, 1]).default(1)
            }
        },
        /**
         * 修改管理组
         */
        {
            path: '/groups/:id',
            method: 'put',
            action: 'groupUpdate',
            middle: [tokenVerify, adminCheck],
            rules: {
                name: Dvm.string()
            }
        },
        /**
         * 获取管理员列表
         */
        {
            path: '/',
            method: 'get',
            action: 'list',
            middle: [tokenVerify, adminCheck],
            rules: {
                search: Dvm.string(),
                group: Dvm.string(),
                page: Dvm.number().min(1, true).default(1),
                pageSize: Dvm.number().default(5),
                use: Dvm.number().in([0, 1]),
                del: Dvm.number().in([0, 1]).default(0)
            }
        },
        /**
         * 添加管理员
         */
        {
            path: '/',
            method: 'post',
            action: 'add',
            middle: [tokenVerify, adminCheck],
            rules: {
                name: Dvm.string().require(),
                group: Dvm.string().require(),
                account: Dvm.string().require(),
                password: Dvm.string().require()
            }
        },
        /**
        * 删除/禁用管理员
        */
        {
            path: '/',
            method: 'delete',
            action: 'del',
            middle: [tokenVerify, adminCheck],
            rules: {
                ids: Dvm.array().require(),
                del: Dvm.number().in([0, 1]).default(0)
            }
        },
        /**
        * 禁用/启用管理员
        */
        {
            path: '/use',
            method: 'put',
            action: 'use',
            middle: [tokenVerify, adminCheck],
            rules: {
                ids: Dvm.array().require(),
                use: Dvm.number().in([0, 1]).default(1)
            }
        },
        /**
         * 修改管理员基本信息
         */
        {
            path: '/:id',
            method: 'put',
            action: 'update',
            middle: [tokenVerify, adminCheck],
            rules: {
                name: Dvm.string(),
                group: Dvm.string()
            }
        },
        /**
         * 修改管理员密码
         */
        {
            path: '/pwd/:id',
            method: 'put',
            action: 'del',
            middle: [tokenVerify, adminCheck],
            rules: {
                password: Dvm.string()
            }
        },
        /**
         * 管理员登录
         */
        {
            path: '/signIn',
            method: 'post',
            action: 'signIn',
            middle: [],
            rules: {
                account: Dvm.string().require(),
                password: Dvm.string().require()
            }
        }
    ]
}
