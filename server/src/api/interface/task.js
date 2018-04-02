
const { Dvm } = JikeJs;
//定义路由
module.exports = {
    controller: 'task',//默认controller
    path: '/tasks',
    routers: [
        /**
         *  获取任务类型
         */
        {
            path: '/types',
            method: 'get',
            action: 'typeList',
            middle: [],
            rules: {
                search: Dvm.string(),
                page: Dvm.number().min(1,true).default(1),
                pageSize: Dvm.number().default(5),
                use: Dvm.number().in([0, 1]),
                del: Dvm.number().in([0, 1]).default(0)
            },
        },
        /**
         * 添加任务类型
         */
        {
            path: '/types',
            method: 'post',
            action: 'typeAdd',
            middle: [],
            rules: {
                name: Dvm.string().require(),
            },
        },
         /**
         * 禁用任务类型
         */
        {
            path: '/types/use',
            method: 'delete',
            action: 'typeUse',
            middle: [],
            rules: {
                ids: Dvm.array().require(),
                use: Dvm.number().in([0, 1]).default(1)
            }
        },
        /**
         * 修改任务类型
         */
        {
            path: '/types/:id',
            method: 'put',
            action: 'typeUpdate',
            middle: [],
            rules: {
                name: Dvm.string(),
            }
        },
        /**
         * 删除任务类型
         */
        {
            path: '/types',
            method: 'delete',
            action: 'typeDel',
            middle: [],
            rules: {
                ids: Dvm.array().require(),
                del: Dvm.number().in([0, 1]).default(0)
            }
        },
    ]
}
