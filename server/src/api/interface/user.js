const { Dvm } = JikeJs;
//定义路由
module.exports = {
    controller: 'user',//默认controller
    path: '/users',
    routers: [
        /**
         *  获取用户列表
         */
        {
            path: '/',
            method: 'get',
            action: 'list',
            middle: ['public'],
            rules: {
                search: Dvm.string(),
                college: Dvm.string(),
                gender: Dvm.number().in([0,1]),
                pageable: Dvm.number().in([0, 1], "参数必须是0或1").default(0),
                page: Dvm.number().min(1).default(1),
                pageSize: Dvm.number().default(5),
                _d: Dvm.number().in([0, 1])
            },
        },
        //添加用户
        // {
        //     path: "/",
        //     method: "post",
        //     action: "add",
        //     rules: {
        //         tel: Dvm.string().require(),
        //         gender: Dvm.string(),
        //         nickname: Dvm.string()
        //     }
        // },
        //修改用户基本信息
        {
            path: "/:id",
            method: "put",
            action: "updateInfo",
            rules: {
                gender: Dvm.string(),
                nickname: Dvm.string()
            }
        },
        /**
         * 微信自动登录
         */
        // {
        //     path: "/",
        //     method: "post",
        //     action: "weixinSignIn",
        //     rules: {
        //         code: Dvm.string().require(),
        //         rawData: Dvm.string(),
        //         signature: Dvm.string(),
        //         encryptedData: Dvm.string(),
        //         iv: Dvm.string()
        //     }
        // },
        /**
         * 获取用户基本信息
         */
        {
            path: "/:id",
            method: "get",
            action: "getInfo"
        },
        /**
         * 删除用户
         */
        {
            path: "/",
            method: "delete",
            action: "del",
            rules: {
                ids: Dvm.array().require(),
                real:Dvm.number().in([0,1])
            }
        }
    ]
}
