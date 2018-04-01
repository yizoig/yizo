let { md5 } = require('../common/crypto')
//模型
module.exports = class Admin extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("admins");

        this._map = {
            id: 'admin_id',
            name: 'admin_name',
            account: 'admin_account',
            password: 'admin_pwds',
        }
    }

    async signIn({ account, password }) {

        let info = await this
            .field('admin_id as aid,admin_name as aname,admin_account as account,admins.group as gid,admin_groups.group_name as gname,admins._c as a_c,admins._d as a_d,admin_groups._d as g_d')
            .join('left join admin_groups on admin_groups.group_id=admins.group')
            .where({
                admin_account: account,
                admin_pwd: md5(password)
            }).find();
        if (!info) {
            this.fail(this.codes.ACCOUNT_OR_PWD_ERR)
        }
        if (this.isNull(info['g_d'])) {
            this.fail(this.codes.ADMIN_MUST_GROUP)
        }
        if (info['g_d'] == 1) {
            this.fail(this.codes.ADMIN_GROUP_DISABLED)
        }
        if (info['_d'] == 1) {
            this.fail(this.codes.ADMIN_DISABLED);
        }
        return info;
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
        let total;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push([
                {
                    admin_account: ['like', `%${search}%`],
                    admin_name: ['like', `%${search}%`],
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
            _where.push({
                'admins._d': _d
            })
        }
        total = await this.where(_where).join("inner join admin_groups on admin_groups.group_id=admins.group").count();
        // if (sort) {
        //     let sortObj = {};
        //     sort.split(',').forEach(item => {
        //         let [key, type = 'ASC'] = item.split(',');
        //         if (['_c', 'name', 'id'].indexOf(key) != -1) {
        //             sortObj[key] = type;
        //         }
        //     });
        //     sortObj = this.map_handle(sortObj);
        //     this.order(sortObj);
        // }
        let list = await this
            .field('admin_id as aid,admin_name as aname,admin_account as aaccount,group as gid,group_name as gname,admins._c as a_c,admins._d as a_d')
            .join("inner join admin_groups on admin_groups.group_id=admins.group")
            .page(page - 1, pageSize)
            .where(_where).select();
        return {
            list,
            pagination:{
                total, pageSize
            }
        }

    }
    /**
     * 添加管理员
     */
    async add({ name, group, account, password }) {

        if(await this.where({admin_account: account }).find()){
            this.fail(this.codes.ACCOUNT_EXISTS);
        }
        let { insertId = false } = await this.data({ admin_name: name, group, admin_account: account, admin_pwd: md5(password) }).insert() || {};
        return insertId;
    }
    /**
     * 修改用户基本信息
     */
    async updateInfo(id, data) {

        if (!(await this.info(id))) {
            this.fail(this.codes.ACCOUNT_NOT_EXISTS);
        }
        //过滤字段
        data = this.filter_handle(data, ['admin_name', 'group']);
        if (Object.keys(data).length == 0) {
            return 0;
        }
        console.log(data)
        let { affectedRows = 0 } = await this.data(data).where({admin_id:id}).update();
        return affectedRows > 0;
    }
    /**
     * 删除管理员
     */
    async del(ids) {
        let { affectedRows = 0 } = await this.where({ admin_id: ['in', ids] }).delete();
        return affectedRows > 0;
    }
    /**
     * 禁用管理员
     */
    async disabled(ids) {
        console.log(ids)
        let { affectedRows = 0 } = await this.where({ admin_id: ['in', ids] }).data({ _d: 1 }).update();
        return affectedRows > 0;
    }
}