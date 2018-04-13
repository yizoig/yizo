//模型
module.exports = class PostType extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("post_types");
    }
    listToTree(data, parent = 0) {
        let arr = [];
        for (let item of data) {
            if (item.parent == parent) {
                item.children = this.listToTree(data, item.tid)
                arr.push(item);
            }
        }
        return arr;
    }
    /**
     * 获取类型
     */
    async list({ search, pageable, page, pageSize, type, use, del }) {

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
        if (type == "list") {
            this.page(page - 1, pageSize);
        }
        let list = await this.field('type_id as tid,type_name as tname,_c as t_c,is_use,is_del,parent').where(_where).select();
        if (type == "list") {
            return {
                list,
                pagination: {
                    total, pageSize
                }
            }
        } else {
            return this.listToTree(list)
        }
    }
    /**
     * 添加类型
     */
    async add({ name, parent }) {

        let { insertId } = await this.data({
            type_name: name,
            parent
        }).insert();
        return insertId;
    }
    /**
     * 修改类型信息
     */
    async updateInfo(id, data) {

        //过滤字段
        data = this.filter_handle(data, ['type_name', 'parent']);
        if (Object.keys(data).length == 0) {
            return 0;
        }
        let { affectedRows = 0 } = await this.data(data).where({
            type_id: id
        }).update();
        return affectedRows > 0;
    }
    /**
     * 删除类型
     */
    async del(ids, is_del) {
        let { affectedRows = 0 } = await this.where({
            type_id: ['in', ids],
            parent: ['not in', ids]
        }).data({
            is_del
        }).update();
        return affectedRows > 0;
    }
    /**
     * 禁用类型
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