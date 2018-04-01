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
        let total = await this.where(_where).count();
        let list = await this.field('type_id as tid,type_name as tname,_d as t_d,_c as t_c').where(_where).page(page - 1, pageSize).select();

        return {
            list,
            pagination: {
                total, pageSize
            }
        }
    }
    /**
     * 添加商品类型
     */
    async add({ name, }) {

        let { insertId } = await this.data({
            type_name: name,
        }).insert();
        return insertId;
    }
    /**
     * 修改商品类型信息
     */
    async updateInfo(id, data) {

        //过滤字段
        data = this.filter_handle(data, ['type_name']);
        if (Object.keys(data).length == 0) {
            return 0;
        }
        let { affectedRows = 0 } = await this.data(data).where({
            type_id: id
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