const { Dvm } = JikeJs;
const { tokenVerify, adminCheck } = require("../config/middleware")

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
            rules: {
                search: Dvm.string(),
                page: Dvm.number().min(1, true).default(1),
                pageSize: Dvm.number().default(5),
                ids:Dvm.array(),
                use: Dvm.number().in([0, 1]),
                del: Dvm.number().in([0, 1]).default(0)
            },
        },
        // 添加学校
        {
            path: "/",
            method: "post",
            action: "add",
            middle: [tokenVerify, adminCheck],
            rules: {
                name: Dvm.string().require(),
                logo: Dvm.file().require()
            }
        },
        // 学校logo
        {
            path: "/logo/:id.png",
            method: "get",
            action: "logo",
            rules: {
            }
        },
        /**
       * 删除/恢复
       */
        {
            path: '/',
            method: 'delete',
            action: 'del',
            middle: [tokenVerify, adminCheck],
            rules: {
                ids: Dvm.array().require(),
                del: Dvm.number().in([0, 1]).default(0)
            }
        },
        /**
        * 禁用/启用
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
        //修改学校基本信息
        {
            path: "/:id",
            method: "put",
            action: "updateInfo",
            middle: [tokenVerify, adminCheck],
            rules: {
                name: Dvm.string()
            }
        }
    ]
}
