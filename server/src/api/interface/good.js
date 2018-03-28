
const { Dvm } = JikeJs;
//定义路由
module.exports = {
    controller: 'good',//默认controller
    path: '/goods',
    routers: [
        /**
         *  获取商品类型
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
         * 添加商品类型
         */
        {
            path: '/types',
            method: 'post',
            action: 'typeAdd',
            middle: ['public'],
            rules: {
                name: Dvm.string().require(),
                parent: Dvm.string(),
            },
        },
        /**
         * 修改商品类型
         */
        {
            path: '/types/:id',
            method: 'put',
            action: 'typeUpdate',
            middle: ['public'],
            rules: {
                name: Dvm.string(),
                parent: Dvm.string(),
            }
        },
        /**
         * 删除商品类型
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
        /**
         * 获取商品列表
         */
        {
            path: '/',
            method: 'get',
            action: 'list',
            middle: ['public'],
            rules: {
                search: Dvm.string(),
                creater: Dvm.string(),
                partner: Dvm.string(),
                college: Dvm.string(),
                type: Dvm.string(),
                state: Dvm.number().in([0, 1, 2, 3]),
                pageable: Dvm.number().in([0, 1], "参数必须是0或1").default(0),
                page: Dvm.number().min(1).default(1),
                pageSize: Dvm.number().default(5),
                _d: Dvm.number().in([0, 1])
            }
        },
        /**
         * 添加商品
         */
        {
            path: '/',
            method: 'post',
            action: 'add',
            middle: ['public'],
            rules: {
                title: Dvm.string().require(),
                content: Dvm.string().require(),
                concat: Dvm.string().require(),
                concat_tel: Dvm.string().require(),
                images: Dvm.string().require(),
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
            middle: ['public'],
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
            middle: ['public'],
            rules: {
                title: Dvm.string(),
                content: Dvm.string(),
                concat: Dvm.string(),
                concat_tel: Dvm.string(),
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
            middle: ['public'],
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
            action: 'del',
            middle: ['public'],
            rules: {
                number: Dvm.number()
            }
        }
    ]
}