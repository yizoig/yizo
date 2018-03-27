//模型
module.exports = class GoodType extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("post_comments");
    }
    /**
     * 获取评论类型
     */
    async list({ search, creater, partner, postId, pageable, page, pageSize, _d }) {

        let pageTotal;
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
        //需要分页
        if (pageable == 1) {
            pageTotal = await this.where(_where).count();
            this.page(page - 1, pageSize);
        }

        let list = await this.field('comment_id as id,user,_d,parent,_c,postId').where(_where).select();

        return {
            list,
            ...(pageable == 1 ? { pageTotal, pageSize } : {})

        }
    }
    /**
     * 添加评论
     */
    async add({ content }) {

        let { insertId } = await this.data({
            content: name,
            parent
        }).insert();
        return insertId;
    }
    /**
     * 修改评论
     */
    async updateInfo(cid, { id, content }) {

        let { affectedRows = 0 } = await this.data({
            content
        }).where({
            post_id: id,
            comment_id: cid,
        }).update();
        return affectedRows > 0;
    }
    /**
     * 删除评论
     */
    async del(id,cids) {
        let { affectedRows = 0 } = await this.where({
            comment_id: ['in', cids],
            post_id:id
        }).delete();
        return affectedRows > 0;
    }
    /**
     * 禁用商品类型
     */
    async disabled(id,cids) {
        let { affectedRows = 0 } = await this.where({
            comment_id: ['in', cids],
            post_id:id
        }).data({
            _d: 1
        }).update();
        return affectedRows > 0;
    }
}
