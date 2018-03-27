//模型
module.exports = class College extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("colleges");
    }
    async info(id) {
        return await this.where({ college_id: id }).find();
    }
    /**
     * 获取学校列表
     */
    async list({ search, pageable, page, pageSize, _d }) {

        let pageTotal;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push({
                college_name: ['like', `%${search}%`]
            })
        }
        //是否需要分页
        if (pageable === 1) {
            pageTotal = await this.where(_where).count();
            this.page(page - 1, pageSize);
        }

        let list = await this.where(_where).select();
        return {
            list,
            ...(pageable == 1 ? { pageTotal, pageSize } : {})
        }
    }
    /**
     * 修改学校基本信息
     */
    async updateInfo(id, data) {
        //获取id 的基本信息
        let info = await this.info(id);
        if (!info) {
            throw new Error("学校不存在");
        }
        //过滤字段
        data = this.filter_handle(data, ['college_name']);

        let { affectedRows = 0 } = await this.data(data).update();
        return affectedRows > 0;
    }
    /**
     * 删除学校
     */
    async del(ids) {

        let { affectedRows = 0 } = await this.where({
            college_id: ['in', ids]
        }).delete();
        return affectedRows > 0;
    }
    /**
     * 禁用学校
     */
    async del(ids) {

        let { affectedRows = 0 } = await this.where({
            college_id: ['in', ids]
        }).data({
            _d: 1
        }).update();
        return affectedRows > 0;
    }
}