const { Dvm } = JikeJs;
//定义路由
module.exports = {
    controller: 'college',//默认controller
    path: '/colleges',
    routers: [
        /**
         *  获取学校列表
         */
        {
            path: '/',
            method: 'get',
            action: 'list',
            middle: [],
            rules: {
                search: Dvm.string(),
                page: Dvm.number().min(1, true).default(1),
                pageSize: Dvm.number().default(5),
                _d: Dvm.number().in([0, 1])
            },
        },
        // 添加学校
        {
            path: "/",
            method: "post",
            action: "add",
            rules: {
                name: Dvm.string().require()
            }
        },
        //修改学校基本信息
        {
            path: "/:id",
            method: "put",
            action: "updateInfo",
            rules: {
                name: Dvm.string()
            }
        },
        /**
         * 删除学校
         */
        {
            path: "/",
            method: "delete",
            action: "del",
            rules: {
                ids: Dvm.array().require(),
                real: Dvm.number().in([0, 1])
            }
        }
    ]
}
