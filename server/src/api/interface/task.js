
const { Dvm } = JikeJs;
//定义路由
module.exports = {
    controller: 'task',//默认controller
    path: '/tasks',
    routers: [
        /**
         * 任务列表
         */
        {
            path: "/",
            method: "get",
            action: "list",
            middle: [],
            rule: {
                search: Dvm.string(),
                page: Dvm.number().min(1, true).default(1),
                pageSize: Dvm.number().default(5),
                use: Dvm.number().in([0, 1]),
                del: Dvm.number().in([0, 1]).default(0)
            }
        },
        /**
         * 发布任务
         */
        {
            path: '/',
            method: 'post',
            action: 'add',
            middle: [],
            rules: {
                title: Dvm.string().require(),
                content: Dvm.string().require(),
                concat: Dvm.string().require(),
                tel: Dvm.string().require(),
                college: Dvm.string().require(),
                type: Dvm.string().require(),
                startTime: Dvm.string().require(),
                endTime: Dvm.string().require(),
                //默认金钱酬劳
                rewardType: Dvm.number().in([0, 1]).default(0),
                reward: Dvm.string(),
                money: Dvm.number().min(1, true),
                number: Dvm.number().min(1, true)
            }
        },
        /**
         * 删除
         */
        {
            path: '/',
            method: 'delete',
            action: 'del',
            middle: [],
            rules: {
                ids: Dvm.array().require(),
                del: Dvm.number().in([0, 1]).default(0),
            }
        },
        /**
         * 修改任务信息
         */
        {
            path: '/:id',
            method: 'put',
            action: 'updateInfo',
            middle: [],
            rules: {
                title: Dvm.string(),
                content: Dvm.string(),
                concat: Dvm.string(),
                tel: Dvm.string(),
                college: Dvm.string(),
                type: Dvm.string(),
                startTime: Dvm.string(),
                endTime: Dvm.string(),
                //默认金钱酬劳
                rewardType: Dvm.number().in([0, 1]),
                reward: Dvm.string(),
                money: Dvm.number().min(1, true),
                number: Dvm.number().min(1, true),
            }
        },
        /**
         * 获取任务基本信息
         */
        {
            path: '/:id',
            method: 'get',
            action: 'info',
            middle: [],
            rule: []
        },
        /**
         * 报名
         */
        {
            path: '/join/:id',
            method: 'put',
            action: 'join',
            middle: [],
            rules: {
                //0表示报名 1表示取消报名
                type: Dvm.number().in([0, 1]).default(0)
            }
        },
        /**
         * 完成任务 结束任务
         */
        {
            path: '/state/:id',
            method: 'putState',
            action: 'join',
            middle: [],
            rules: {
                //-1表示结束 1完成
                type: Dvm.number().in([-1, 1]).require()
            }
        },
        /**
         * 查看任务详情
         */
        {
            path: '/record/:id',
            method: 'get',
            action: 'recordList',
            middle: [],
            rules: {
            }
        },
    ]
}
