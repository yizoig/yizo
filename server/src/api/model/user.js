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
    async list({ search, college, gender, pageable, page, pageSize, use, del }) {

        let total;
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
        if (!this.isUndefined(use)) {
            _where.push({
                "users.is_use": use
            }, "AND")
        }
        _where.push({
            "users.is_del": del
        })
        total = await this
            .where(_where).join('inner join colleges on colleges.college_id=users.college').count();


        let list = await this
            .field('user_id as uid,wx_id as wxid,nick_name as nickname,user_tel as utel,user_gender as ugender,users.college as cid,college_name as cname,users._c as u_c,users.is_del as is_del,users.is_use as is_use')
            .where(_where).join('inner join colleges on colleges.college_id=users.college').page(page - 1, pageSize).select();
        return {
            list,
            pagination: {
                total, pageSize
            }
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
    async del(ids, is_del) {

        let { affectedRows = 0 } = await this.where({
            user_id: ['in', ids]
        }).data({
            is_del
        }).update();
        return affectedRows > 0;
    }
    /**
     * 禁用用户
     */
    async use(ids, is_use) {

        let { affectedRows = 0 } = await this.where({
            user_id: ['in', ids]
        }).data({
            is_use
        }).update();
        return affectedRows > 0;
    }
}