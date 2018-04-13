let CommentModel = require("../model/comment")
let PostTypeModel = require("../model/postType");
//控制器
module.exports = class Post extends JikeJs.Controller {


    
    /**
     * 获取商品类型列表 
     */
    async typeList({ search, page, pageSize, use, del, type }) {

        let model = new PostTypeModel();
        return await model.list({ search, page, pageSize, use,type, del });
       
    }
    /**
     * 添加商品类型
     */
    async typeAdd({ name,parent }) {
        let model = new PostTypeModel();
        return await model.add({ name ,parent})
    }
    /**
     * 修改商品类型
     */
    async typeUpdate({ id, name,parent }) {
        let model = new PostTypeModel();
        return await model.updateInfo(id, { type_name: name,parent })
    }
    /**
     * 删除商品类型
     */
    async typeDel({ ids, del }) {
        let model = new PostTypeModel();
        return await model.del(ids, del)
    }
    /**
     * 删除商品类型
     */
    async typeUse({ ids, use }) {
        let model = new PostTypeModel();
        return await model.use(ids, use)
    }
    async commentList({ search, creater, postId, page, pageSize, _d }) {

        let model = new CommentModel();
        return await model.list({ search, creater, postId, page, pageSize, _d });
    }
    async commentAdd({ id, content }) {

        let model = new CommentModel();
        return await model.add(id, { content });
    }
    async commentUpdate({ content, id, cid }) {

        let model = new CommentModel();
        return await model.updateInfo(cid, { id, content });
    }
    async commentDel({ id, cids, real }) {

        let model = new CommentModel();
        if (real == 0) {
            return await model.del(id, cids);
        }
        return await model.disabled(id, cids);
    }
}