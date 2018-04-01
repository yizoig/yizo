
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
                _d: Dvm.number().in([0, 1])
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
                real: Dvm.number().in([0, 1])
            }
        },
    ]
}
