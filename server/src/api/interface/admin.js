const { Dvm } = JikeJs;
const {adminCheck} = require("../config/middleware")
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
            middle: [adminCheck],
            rules: {
                search: Dvm.string(),
                pageable: Dvm.number().in([0, 1], "参数必须是0或1").default(0),
                page: Dvm.number().min(1).default(1),
                pageSize: Dvm.number().default(5),
                _d: Dvm.number().in([0, 1])
            },
        },
        /**
         * 添加管理组
         */
        {
            path: '/groups',
            method: 'post',
            action: 'groupAdd',
            middle: [adminCheck],
            rules: {
                name: Dvm.string().require()
            },
        },
        /**
         * 修改管理组
         */
        {
            path: '/groups/:id',
            method: 'put',
            action: 'groupUpdate',
            middle: [adminCheck],
            rules: {
                name: Dvm.string()
            }
        },
        /**
         * 删除管理组
         */
        {
            path: '/groups/',
            method: 'delete',
            action: 'groupDel',
            middle: [adminCheck],
            rules: {
                ids: Dvm.array().require(),
                real: Dvm.number().in([0, 1])
            }
        },
        /**
         * 获取管理员列表
         */
        {
            path: '/',
            method: 'get',
            action: 'list',
            middle: [adminCheck],
            rules: {
                search: Dvm.string(),
                group: Dvm.string(),
                page: Dvm.number().min(1).default(1),
                pageSize: Dvm.number().default(5),
                // sort: Dvm.object().keys({
                //     name:Dvm.string().in(['ASC','DESC']),
                //     _c:Dvm.string().in(['ASC','DESC']),
                //     id:Dvm.string().in(['ASC','DESC'])
                // }),
                _d: Dvm.number().in([0, 1])
            }
        },
        /**
         * 添加管理员
         */
        {
            path: '/',
            method: 'post',
            action: 'add',
            middle: [adminCheck],
            rules: {
                name: Dvm.string().require(),
                group: Dvm.string().require(),
                account: Dvm.string().require(),
                password: Dvm.string().require()
            }
        },
        /**
         * 修改管理员基本信息
         */
        {
            path: '/:id',
            method: 'put',
            action: 'update',
            middle: [adminCheck],
            rules: {
                name: Dvm.string(),
                group: Dvm.string()
            }
        },
        /**
         * 删除管理员
         */
        {
            path: '/',
            method: 'delete',
            action: 'del',
            middle: [adminCheck],
            rules: {
                ids: Dvm.array().require(),
                real: Dvm.number().in([0, 1])
            }
        },
        /**
         * 修改管理员密码
         */
        {
            path: '/pwd/:id',
            method: 'put',
            action: 'del',
            middle: [adminCheck],
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
