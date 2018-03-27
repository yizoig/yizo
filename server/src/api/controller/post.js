let CommentModel = require("../model/comment")
//控制器
module.exports = class Post extends JikeJs.Controller {

    async commentList({ search, creater, postID, pageable, page, pageSize, _d }) {

        let model = new CommentModel();
        return await model.list({ search, creater, postID, pageable, page, pageSize, _d });
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