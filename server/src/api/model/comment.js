//模型
module.exports = class GoodType extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("post_comments");
    }
    /**
     * 获取评论列表
     */
    async list({ search, creater, partner, postId, pageable, page, pageSize, _d }) {

        let total;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push({
                content: ['like', `%${search}%`]
            }, "AND")
        }
        if (!this.isUndefined(creater)) {
            _where.push({
                user: creater
            })
        }
        if (!this.isUndefined(postId)) {
            _where.push({
                post_id: postId
            })
        }
        if (!this.isUndefined(_d)) {
            _where.push({
                _d
            })
        }
        total = await this.where(_where).join("join users on post_comments.user=users.user_id").count();
        let list = await this
            .field("comment_id as cid,user as uid,users.nick_name uname,content,post_id as pid,post_comments._c")
            .join("join users on post_comments.user=users.user_id")
            .where(_where).page(page - 1, pageSize).select();
        return {
            list,
            pagination: {
                total, pageSize
            }
        }
    }
    /**
     * 添加评论
     */
    async add(post_id, { content }, user) {

        let { insertId } = await this.data({
            content,
            post_id,
            user
        }).insert();
        return insertId;
    }
    /**
     * 修改评论
     */
    async updateInfo({ id, cid, content }) {

        let { affectedRows = 0 } = await this.data({
            content
        }).where({
            post_id: id,
            comment_id: cid,
            content
        }).update();
        return affectedRows > 0;
    }
    /**
     * 删除评论
     */
    async del(id, cids) {
        let { affectedRows = 0 } = await this.where({
            comment_id: ['in', cids],
            post_id: id
        }).delete();
        return affectedRows > 0;
    }
}
