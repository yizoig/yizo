
const { Dvm } = JikeJs;
const { userCheck, tokenVerify, adminCheck } = require("../config/middleware")

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
            middle: [tokenVerify],
            rules: {
                search: Dvm.string(),
                page: Dvm.number().min(1, true).default(1),
                pageSize: Dvm.number().default(5),
                creater: Dvm.string(),
                partner: Dvm.string(),
                college: Dvm.string(),
                type: Dvm.string(),
                state: Dvm.number().in([0, 1, 2, 3]),
            }
        },
        /**
         * 发布任务
         */
        {
            path: '/',
            method: 'post',
            action: 'add',
            middle: [tokenVerify, userCheck],
            rules: {
                title: Dvm.string().require(),
                content: Dvm.string().require(),
                contact: Dvm.string().require(),
                tel: Dvm.string().require(),
                college: Dvm.string().require(),
                type: Dvm.string().require(),
                number: Dvm.number().require(),
                dueDate: Dvm.string().require(),
                //默认金钱酬劳
                rewardType: Dvm.number().in([0, 1]).default(0),
                reward: Dvm.string().require(),
                //-1 不限制 0女 1男
                gender: Dvm.number().in([-1, 0, 1]).require()
            }
        },
        /**
         * 删除
         */
        {
            path: '/',
            method: 'delete',
            action: 'del',
            middle: [tokenVerify],
            rules: {
                ids: Dvm.array().require(),
                del: Dvm.number().in([0, 1]).default(0)
            }
        },
        /**
         * 修改任务信息
         */
        {
            path: '/:id',
            method: 'put',
            action: 'updateInfo',
            middle: [tokenVerify, userCheck],
            rules: {
                title: Dvm.string(),
                content: Dvm.string(),
                contact: Dvm.string(),
                tel: Dvm.string(),
                college: Dvm.string(),
                type: Dvm.string(),
                dueDate: Dvm.string(),
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
            middle: [tokenVerify],
            rules: []
        },
        /**
         * 报名
         */
        {
            path: '/join/:id',
            method: 'put',
            action: 'joinTask',
            middle: [tokenVerify, userCheck],
            rules: {
                contact: Dvm.string().require(),
                tel: Dvm.string().require(),
            }
        },
        /**
         * 取消报名
         */
        {
            path: '/quit/:id',
            method: 'put',
            action: 'quitTask',
            middle: [tokenVerify, userCheck],
            rules: {
            }
        },
        /**
         * 完成任务
         */
        {
            path: '/finally/:id',
            method: 'put',
            action: 'finallyTask',
            middle: [tokenVerify, userCheck],
            rules: {
                user: Dvm.string().require(),
            }
        },
        /**
         * 结束任务 关闭任务
         */
        {
            path: '/state/:id',
            method: 'put',
            action: 'putState',
            middle: [tokenVerify, userCheck],
            rules: {
                //-1表示结束 1完成
                type: Dvm.number().in([-1, 1]).require()
            }
        },
    ]
}