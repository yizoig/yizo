
const { Dvm } = JikeJs;
const { tokenVerify, userCheck } = require("../config/middleware")
//定义路由
module.exports = {
    controller: 'good',//默认controller
    path: '/goods',
    routers: [
        /**
         * 获取商品列表
         */
        {
            path: '/',
            method: 'get',
            action: 'list',
            middle: [tokenVerify],
            rules: {
                search: Dvm.string(),
                creater: Dvm.string(),
                partner: Dvm.string(),
                college: Dvm.string(),
                type: Dvm.string(),
                state: Dvm.number().in([0, 1, 2, 3]),
                page: Dvm.number().min(1, true).default(1),
                pageSize: Dvm.number().default(5),
                _d: Dvm.number().in([0, 1])
            }
        },
        /**
       * 上传图片
       */
        {
            path: '/images',
            method: 'post',
            action: 'uploadImage',
            middle: [tokenVerify, userCheck],
            rules: {
                images: Dvm.array().require()
            }
        },
        /**
       * 上传图片
       */
        {
            path: '/images/:name.png',
            method: 'get',
            action: 'image',
            rules: {
            }
        },
        /**
         * 发布商品
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
                images: Dvm.array(),
                college: Dvm.string().require(),
                type: Dvm.string().require(),
                price: Dvm.number().require(),
                oprice: Dvm.number().require(),
                number: Dvm.number().require()
            }
        },

        /**
         * 获取商品信息
         */
        {
            path: '/:id',
            method: 'get',
            action: 'info',
            middle: [tokenVerify],
            rules: {
            }
        },
        /**
         * 修改商品基本信息
         */
        {
            path: '/:id',
            method: 'put',
            action: 'update',
            middle: [tokenVerify],
            rules: {
                title: Dvm.string(),
                content: Dvm.string(),
                contact: Dvm.string(),
                contact_tel: Dvm.string(),
                images: Dvm.string(),
                type: Dvm.string(),
                price: Dvm.number(),
                oprice: Dvm.number(),
                number: Dvm.number()
            }
        },
        /**
         * 删除商品
         */
        {
            path: '/',
            method: 'delete',
            action: 'del',
            middle: [tokenVerify],
            rules: {
                ids: Dvm.object(),
                real: Dvm.number().in([0, 1])
            }
        },
        /**
         * 购买商品
         */
        {
            path: '/buy/:id',
            method: 'put',
            action: 'buy',
            middle: [tokenVerify, userCheck],
            rules: {
                number: Dvm.number()
            }
        }
    ]
}
