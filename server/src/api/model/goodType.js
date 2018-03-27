//模型
module.exports = class GoodType extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("good_types");
    }
    /**
     * 获取商品类型
     */
    async list({ search, pageable, page, pageSize, _d }) {

        let pageTotal;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push({
                type_name: ['like', `%${search}%`]
            }, "AND")
        }
        if (!this.isUndefined(_d)) {
            _where.push({
                _d
            })
        }
        //需要分页
        if (pageable == 1) {
            pageTotal = await this.where(_where).count();
            this.page(page - 1, pageSize);
        }

        let list = await this.field('type_id as id,type_name name,_d,parent').where(_where).select();

        return {
            list,
            ...(pageable == 1 ? { pageTotal, pageSize } : {})

        }
    }
    /**
     * 添加商品类型
     */
    async add({ name, parent }) {

        let { insertId } = await this.data({
            type_name: name,
            parent
        }).insert();
        return insertId;
    }
    /**
     * 修改商品类型信息
     */
    async updateInfo(id, data) {

        //过滤字段
        data = this.filter_handle(data, ['type_name', 'parent']);
        if (Object.keys(data).length == 0) {
            return 0;
        }
        let { affectedRows = 0 } = await this.data(data).where({
            good_id: id
        }).update();
        return affectedRows > 0;
    }
    /**
     * 删除商品类型
     */
    async del(ids) {
        let { affectedRows = 0 } = await this.where({
            type_id: ['in', ids]
        }).delete();
        return affectedRows > 0;
    }
    /**
     * 禁用商品类型
     */
    async disabled(ids) {
        let { affectedRows = 0 } = await this.where({
            type_id: ['in', ids]
        }).data({
            _d: 1
        }).update();
        return affectedRows > 0;
    }
}