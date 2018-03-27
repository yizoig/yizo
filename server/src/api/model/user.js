//模型
module.exports = class Admin extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("users");
    }
    async info(id) {
        return await this.where({ user_id: id }).find();
    }
    /**
     * 获取用户列表
     */
    async list({ search, college, gender, pageable, page, pageSize, _d }) {

        let pageTotal;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push([{
                nick_name: ['like', `%${search}%`]
            }, "OR", {
                college_name: ['like', `%${search}%`]
            }])
        }
        if (!this.isUndefined(college)) {
            _where.push("AND", {
                college
            })
        }
        if (!this.isUndefined(gender)) {
            _where.push("AND", {
                user_gender: gender
            })
        }
        //是否需要分页
        if (pageable === 1) {
            pageTotal = await this.where(_where).join('inner join colleges on colleges.college_id=users.college').count();
            this.page(page - 1, pageSize);
        }

        let list = await this.where(_where).join('inner join colleges on colleges.college_id=users.college').select();
        return {
            list,
            ...(pageable == 1 ? { pageTotal, pageSize } : {})
        }
    }
    /**
     * 修改用户基本信息
     */
    async updateInfo(id, data) {
        //获取id 的基本信息
        let info = await this.info(id);
        if (!info) {
            throw new Error("用户不存在");
        }
        //过滤字段
        data = this.filter_handle(data, ['user_gender', 'nick_name']);

        let { affectedRows = 0 } = await this.data(data).update();
        return affectedRows > 0;
    }
    /**
     * 删除用户
     */
    async del(ids) {

        let { affectedRows = 0 } = await this.where({
            user_id: ['in', ids]
        }).delete();
        return affectedRows > 0;
    }
    /**
     * 禁用用户
     */
    async del(ids) {

        let { affectedRows = 0 } = await this.where({
            user_id: ['in', ids]
        }).data({
            _d: 1
        }).update();
        return affectedRows > 0;
    }
}