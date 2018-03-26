//模型
module.exports = class Admin extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("admins");

        this._map = {
            id: 'admin_id',
            name: 'admin_id',
            account: 'admin_account',
            password: 'admin_pwds',
        }
    }
    /**
     * 获取管理员信息
     */
    async  info(id) {
        return await this.where({ admin_id: id }).find();
    }
    /**
     * 获取管理员列表
     */
    async list({ search, group, pageable, page, pageSize, _d, sort }) {
        let pageTotal;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push([
                {
                    admin_account: ['like', `%${search}%`],
                    admin_account: ['like', `%${search}%`],
                    _logic: "OR",
                },
                "OR", {
                    group_name: ['like', `%${search}%`]
                }
            ], "AND")
        }
        if (!this.isUndefined(group)) {
            _where.push({ group })
        }
        if (!this.isUndefined(_d)) {
            _where.push({ _d })
        }
        //pageable==1 表示需要分页
        if (pageable == 1) {
            pageTotal = await this.where(_where).count();
            this.page(page - 1, pageSize);
        }
        if (sort) {
            let sortObj = {};
            sort.split(',').forEach(item => {
                let [key, type = 'ASC'] = item.split(',');
                if (['_c', 'name', 'id'].indexOf(key) != -1) {
                    sortObj[key] = type;
                }
            });
            sortObj = this.map_handle(sortObj);
            this.order(sortObj);
        }
        let list = await this.field('admin_id as id,admin_name as name,admin_account as account,group,_c,_d').where(_where).select();
        return {
            list,
            ...(pageable == 1 ? { pageTotal, pageSize } : {})
        }

    }
    /**
     * 添加管理员
     */
    async add({ name }) {
        let { insertId = false } = await this.data({ admin_name: name }).where({ admin_name: ['LIKE', `%${name}%`] }).insert() || {};
        return insertId
    }
    /**
     * 修改用户基本信息
     */
    async update(id, data) {

        if (!(await this.groupInfo(id))) {
            throw new Error("管理员不存在")
        }
        //过滤字段
        data = this.filter_handle(data, ['admin_name', 'group']);
        if (Object.keys(data) == 0) {
            return 0;
        }
        let { affectedRows = 0 } = await this.data(data).update();
        return affectedRows > 0;
    }
    /**
     * 删除管理员
     */
    async del(ids) {
        let { affectedRows = 0 } = await this.where({ ids: ['in', ids] }).delete();
        return affectedRows > 0;
    }
    /**
     * 禁用管理员
     */
    async disabled(ids) {
        let { affectedRows = 0 } = await this.where({ ids: ['in', ids] }).delete();
        return affectedRows > 0;
    }
}