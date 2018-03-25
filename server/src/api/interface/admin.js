const { Dvm } = JikeJs;
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
            middle: ['public'],
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
            middle: ['public'],
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
            middle: ['public'],
            rules: {
                id: Dvm.string().require(),
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
            middle: ['public'],
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
            middle: ['public'],
            rules: {
                search: Dvm.string(),
                group: Dvm.string(),
                pageable: Dvm.number().in([0, 1], "参数必须是0或1").default(0),
                page: Dvm.number().min(1).default(1),
                pageSize: Dvm.number().default(5),
                sort: Dvm.string(),
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
            middle: ['public'],
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
            middle: ['public'],
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
            middle: ['public'],
            rules: {
                ids: Dvm.object(),
                real: Dvm.number().in([0, 1])
            }
        },
        /**
         * 修改管理员密码
         */
        {
            path: '/pwd/:id',
            method: 'delete',
            action: 'del',
            middle: ['public'],
            rules: {
                password: Dvm.string()
            }
        }
    ]
}
