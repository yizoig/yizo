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

        let total;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push({
                college_name: ['like', `%${search}%`]
            })
        }

        total = await this.where(_where).count();
        let list = await this.field('college_id as cid,college_name as cname,_c as c_c,_d as c_d').page(page - 1, pageSize).where(_where).select();
        return {
            list,
            pagination: {
                total, pageSize
            }
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

        let { affectedRows = 0 } = await this.data(data).where({ college_id: id }).update();
        return affectedRows > 0;
    }
    async add({ name }) {
        if (await this.where({ college_name: name }).find()) {
            this.fail(this.codes.COLLEGE_NAME_USED);
        }
        let { insertId = false } = await this.data({ college_name:name}).insert() || {};
        return insertId;
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
    async disabled(ids) {

        let { affectedRows = 0 } = await this.where({
            college_id: ['in', ids]
        }).data({
            _d: 1
        }).update();
        return affectedRows > 0;
    }
}