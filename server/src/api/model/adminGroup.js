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
    async groupList({ search, page, pageSize, _d }) {
        let total;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push({
                group_name: ['like', `%${search}%`]
            }, "AND")
        }
        if (!this.isUndefined(_d)) {
            _where.push({ _d })
        }
        total = await this.where(_where).count();
        let list = await this.field('group_id as gid,group_name as gname,_c as g_c,_d as g_d').page(page - 1, pageSize).where(_where).select();
        return {
            list,
            pagination:{
                total, pageSize
            }
        }

    }
    /**
     * 添加管理员组
     */
    async groupAdd({ name }) {

        let info = await this.where({ group_name: name }).find();
        if (info) {
            this.fail(this.codes.ADMIN_GROUP_NAME_USED)
        }
        let { insertId = false } = await this.data({ group_name: name }).insert() || {};
        return insertId
    }
    /**
     * 用户组更新
     * @param {} id 
     * @param {*} data 
     */
    async groupUpdate(id, data) {

        if (!(await this.groupInfo(id))) {
            this.fail(this.codes.ADMIN_GROUP_NOT_EXISTS)
        }
        //过滤字段
        data = this.filter_handle(data, ['group_name']);
        if (Object.keys(data).length == 0) {
            return 0;
        }
        if ('group_name' in data) {
            let info = await this.where({ group_name: ['LIKE', `%${data['group_name']}%`] }).find();
            if (info) {
                this.fail(this.codes.ADMIN_GROUP_NAME_USED)
            }
        }
        let { affectedRows = 0 } = await this.data(data).where({ group_id: id }).update();
        return affectedRows > 0;
    }
    /**
     * 删除用户组
     */
    async groupDel(ids) {
        let { affectedRows = 0 } = await this.where({
            group_id: ['in', ids]
        }).delete();
        return affectedRows > 0;
    }
    /**
     * 禁用用户组
     */
    async groupDisable(ids) {
        let { affectedRows = 0 } = await this.where({
            group_id: ['in', ids]
        }).data({ _d: 1 }).update();
        return affectedRows > 0;
    }
}