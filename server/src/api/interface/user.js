const { Dvm } = JikeJs;
const { tokenVerify, adminCheck } = require("../config/middleware")
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
            middle: [tokenVerify],
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
            middle: [tokenVerify],
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
            middle: [tokenVerify, adminCheck],
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
            middle: [tokenVerify],
            action: "getInfo"
        },
        /**
         * 删除用户
         */
        {
            path: "/",
            method: "delete",
            action: "del",
            middle: [tokenVerify, adminCheck],
            rules: {
                ids: Dvm.array().require(),
                del: Dvm.number().in([0, 1]).default(0)
            }
        }
    ]
}
