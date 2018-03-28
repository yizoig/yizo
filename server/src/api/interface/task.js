
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
         * 添加任务类型
         */
        {
            path: '/types',
            method: 'post',
            action: 'typeAdd',
            middle: ['public'],
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
            middle: ['public'],
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
            middle: ['public'],
            rules: {
                ids: Dvm.array().require(),
                real: Dvm.number().in([0, 1])
            }
        },
    ]
}
