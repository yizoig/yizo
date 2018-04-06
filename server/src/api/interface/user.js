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
            middle: [],
            rules: {
                search: Dvm.string(),
                college: Dvm.string(),
                gender: Dvm.number().in([0, 1]),
                page: Dvm.number().min(1, true).default(1),
                pageSize: Dvm.number().default(5),
                use: Dvm.number().in([0, 1]),
                del: Dvm.number().in([0, 1]).default(0)
            },
        },
        /**
         * 获取用户头像
         */
        {
            path: "/avatar/:id.ava",
            method: "get",
            action: "avatar",
            rules: {
            }
        },
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
        {
            path: "/wxSignIn",
            method: "post",
            action: "wxSignIn",
            rules: {
                code: Dvm.string().require(),
                rawData: Dvm.string().require(),
                signature: Dvm.string().require(),
                encryptedData: Dvm.string().require(),
                iv: Dvm.string().require()
            }
        },
        /**
        * 禁用用户
        */
        {
            path: '/use',
            method: 'put',
            action: 'use',
            middle: [],
            rules: {
                ids: Dvm.array().require(),
                use: Dvm.number().in([0, 1]).default(1)
            }
        },
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
                del: Dvm.number().in([0, 1]).default(0)
            }
        }
    ]
}
