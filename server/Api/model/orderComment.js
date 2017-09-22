let { BaseError, Status, crypto: { md5 } } = jike;
module.exports = class OrderOrderCommentModelModel extends jike.Model {

  /**获取所有订单 */
  async list({ page, size, needPage }, { order_id, want }) {
    let [{ count = 0 } = {}] = await this.query(sqls.orderComment.listCount, order_id);
    let data = await this.query(sqls.orderComment.list + `ORDER BY order_comments._c desc LIMIT ${(page - 1) * size},${size}`, order_id);
    if (want == 'tree') {
      for (let i = 0; i < data.length; i++) {
        if (data[i] && !data[i]['parent_id']) {
          data[i]['child'] = [];
          for (let j = 0; j < data.length; j++) {
            if (data[j] && data[j]['parent_id'] && data[i]['id'] == data[j]['parent_id']) {
              data[i]['child'].push(data[j]);
              data.remove(data[j])
            }
          }
        }

      }
    }
    return {
      ...needPage ? { count } : {},
      list: data
    };
  }

  async ListBycreater({ page, size, needPage }, { creater }) {

    let result = {};
    let limitStr = ` LIMIT ${(page - 1) * size},${size}`;
    //获取条数
    let [{ count = 0 } = {}] = await this.query(sqls.orderComment.getCreaterCommentCount, creater, creater);
    needPage && (result['count'] = count);
    result['list'] = await this.query(sqls.orderComment.getCreaterComment + limitStr, creater, creater);
    return result;
  }
  async ListReplyByUser({ page, size, needPage }, { user }) {

    let result = {};
    let limitStr = ` LIMIT ${(page - 1) * size},${size}`;
    //获取条数
    let [{ count = 0 } = {}] = await this.query(sqls.orderComment.getReplyCount, user);
    needPage && (result['count'] = count);
    result['list'] = await this.query(sqls.orderComment.getReply + limitStr, user);
    return result;
  }
  /**
   * 添加评论
   * @param {*} param0 
   */
  async add({ user, content, order_id, parent = null }) {
    let { affectedRow } = await this.query(sqls.orderComment.add, {
      order_id,
      content,
      user,
      parent
    });
    return affectedRows > 0;
  }
}