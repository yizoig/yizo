//模型
module.exports = class TaskType extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("task_types");
    }
    /**
     * 获取任务类型
     */
    async list({ search, pageable, page, pageSize, use, del }) {
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push({
                type_name: ['like', `%${search}%`]
            }, "AND")
        }
        if (!this.isUndefined(use)) {
            _where.push({
                is_use: use
            }, "AND")
        }
        _where.push({
            is_del: del
        })
        let total = await this.where(_where).count();

        let list = await this.field('type_id as tid,type_name tname,_c as t_c,is_del,is_use').where(_where).page(page - 1, pageSize).select();

        return {
            list,
            pagination: {
                pageSize, total
            }

        }
    }
    /**
     * 添加任务类型
     */
    async add({ name, parent }) {

        let { insertId } = await this.data({
            type_name: name,
            parent
        }).insert();
        return insertId;
    }
    /**
     * 修改任务类型信息
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
    * 删除任务类型
    */
    async del(ids, is_del) {
        let { affectedRows = 0 } = await this.where({
            type_id: ['in', ids]
        }).data({
            is_del
        }).update();
        return affectedRows > 0;
    }
    /**
     * 禁用任务类型
     */
    async use(ids, is_use) {
        let { affectedRows = 0 } = await this.where({
            type_id: ['in', ids]
        }).data({
            is_use
        }).update();
        return affectedRows > 0;
    }
}