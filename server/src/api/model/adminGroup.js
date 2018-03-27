//模型
module.exports = class AdminGroup extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("admin_groups");
    }
    /**
     * 获取用户组信息
     */
    async  groupInfo(id) {
        return await this.where({ group_id: id }).find();
    }
    /**
     * 获取分组
     */
    async groupList({ search, pageable, page, pageSize, _d }) {
        let pageTotal;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push({
                group_name: ['like', `%${search}%`]
            }, "AND")
        }
        if (!this.isUndefined(_d)) {
            _where.push({ _d })
        }
        //pageable==1 表示需要分页
        if (pageable == 1) {
            pageTotal = await this.where(_where).count();
            this.page(page - 1, pageSize);
        }
        let list = await this.field('group_id as id,group_name as name,_c,_d').where(_where).select();
        return {
            list,
            ...(pageable == 1 ? { pageTotal, pageSize } : {})
        }

    }
    /**
     * 添加管理员组
     */
    async groupAdd({ name }) {
        let { insertId = false } = await this.data({ group_name: name }).where({ group_name: ['LIKE', `%${name}%`] }).insert() || {};
        return insertId
    }
    /**
     * 用户组更新
     * @param {} id 
     * @param {*} data 
     */
    async groupUpdate(id, data) {

        if (!(await this.groupInfo(id))) {
            throw new Error("用户组不存在")
        }
        //过滤字段
        data = this.filter_handle(data, ['group_name']);
        if (Object.keys(data).length == 0) {
            return 0;
        }
        let { affectedRows = 0 } = await this.data(data).where({ group_id: id }).update();
        return affectedRows > 0;
    }
    /**
     * 删除用户组
     */
    async groupDel(ids) {
        let { affectedRows = 0 } = await this.where({
            ids: ['in', ids]
        }).del();
        return affectedRows > 0;
    }
    /**
     * 禁用用户组
     */
    async groupDisable(ids) {
        let { affectedRows = 0 } = await this.where({
            ids: ['in', ids]
        }).data({ _d: 1 }).update();
        return affectedRows > 0;
    }
}