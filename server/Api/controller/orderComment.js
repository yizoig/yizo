let { BaseError, Code } = jike;
let OrderCommentModel = require("../model/orderComment");
module.exports = class OrderCommentController extends jike.Controller {


  async list({ order_id, page = 1, size = 10, needPage = false, creater, user, want = 'list' }) {

    let data;
    if (order_id) {
      data = await new OrderCommentModel().list({ page, size, needPage }, { order_id, want });
      return this.json(data);
    } else if (creater) {
      data = await new OrderCommentModel().ListBycreater({ page, size, needPage }, { creater });
    } else if (user) {
      data = await new OrderCommentModel().ListReplyByUser({ page, size, needPage }, { user });
    } else {
      throw new BaseError(Code.PARAMS_ERR);
    }
    this.json(data);
  }
  /**
   * 评论
   * @param {*} param0 
   */
  async add({ user_id, content, order_id, parent }) {

    let data = await new OrderCommentModel().add({ user_id, content, order_id, parent });

    this.json(data);
  }
}