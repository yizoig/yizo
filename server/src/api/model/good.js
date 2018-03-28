//模型
module.exports = class Good extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("goods");
    }
    /**
     * 获取商品列表
     */
    async list({ search, creater, partner, college, type, state, pageable, pageSize, page, _d }) {

        let pageTotal;
        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push({ title: ['like', `%${search}%`] }, "AND")
        }
        if (!this.isUndefined(creater)) {
            _where.push([
                { create_by: creater }
            ])
        }
        if (!this.isUndefined(partner)) {
            _where.push([
                { user_id: partner }
            ])
        }
        if (!this.isUndefined(partner)) {
            _where.push([
                { college: college }
            ])
        }
        if (!this.isUndefined(type)) {
            _where.push([
                { type_id: type }
            ])
        }
        if (!this.isUndefined(state)) {
            _where.push([
                { state: state }
            ])
        }
        if (pageable == 1) {

            pageTotal = await this
                .join('inner join posts on goods.post_id=posts.post_id')
                .join('inner join users on users.user_id=posts.creater_by')
                .join('inner join good_buy_records on good_buy_records.good_id=goods.good_id')
                .join('inner join user on users.user_id=good_buy_records.user_id')
                .join('inner join good_types on good_types.type_id=goods.type_id')
                .where(_where)
                .count();
            this.page(page - 1, pageSize);
        }
        let list = await this
            .join('inner join posts on goods.post_id=posts.post_id')
            .join('inner join users on users.user_id=posts.creater_by')
            .join('inner join good_buy_records on good_buy_records.good_id=goods.good_id')
            .join('inner join user on users.user_id=good_buy_records.user_id')
            .join('inner join good_types on good_types.type_id=goods.type_id')
            .where(_where)
            .select();
        return {
            list,
            ...(pageable == 1 ? { pageSize, pageTotal } : {})
        }
    }
    /**
     * 添加商品
     */
    async add({ title, content, concat, concat_tel, images, type, price, oprice, number }) {


        let { insertId } = await this.data({
            title, content, concat, concat_tel, images, type, price, oprice, number
        }).insert();
        return insertId;
    }

    async updateInfo(id, data) {

        let { affectedRows = 0 } = await this.data(data).update();
        return affectedRows > 0;
    }

    /**
     * 删除
     */
    async del(ids) {
        let { affectedRows = 0 } = await this.where({
            type_id: ['in', ids]
        }).delete();
        return affectedRows > 0;
    }
    /**
     * 禁用
     */
    async disabled(ids) {
        let { affectedRows = 0 } = await this.where({
            type_id: ['in', ids]
        }).data({
            _d: 1
        }).update();
        return affectedRows > 0;
    }
    /**
     * 购买
     */
    async buy(id, { number, user }) {

        let { insertId } = await this.data({
            number,
            user_id: user
        }).insert();
        return insertId;
    }
    async info(id) {
        let list = await this
            .field('goods.good_id as id,title,content,concat,concat_tel,creater_by as creater,nickname as createrName,user_gender as createrGender,images,types.type_id as type,types.type_name typeName,state,good_price as price,original_price as oprice,good_number as number,_d')
            .join('inner join posts on goods.post_id=posts.post_id')
            .join('inner join users on users.user_id=posts.creater_by')
            .join('inner join good_types on good_types.type_id=goods.type_id')
            .find();

        let record = await this
            .field('record_id as id,user_id as user,buy_num as num')
            .join('inner join posts on goods.post_id=posts.post_id')
            .where({
                post_id: id
            }).select()
        return {
            ...list,
            record
        }
    }
}