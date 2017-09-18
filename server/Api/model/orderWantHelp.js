let { BaseError, Code, crypto: { md5 } } = jike;
/**
 * -4 系统取消订单 
 * -3 管理员取消订单
 * -2 创建人取消订单
 * -1 取消抢单
 * 0 创建
 * 1 抢单
 * 2 配送
 * 3 完成
 * 4 结单
 */
module.exports = class OrderWantHelpModel extends jike.Model {
  /**
   * 获取所有的订单
   */
  async list(page, data) {

    let whereArr = ['(status>=0)'];
    let limitStr;
    let result = {};
    //条件sql拼接
    for (let key in data) {
      console.log(key, data['key'], typeof data['key'])
      if (data[key] === null || typeof (data[key]) == "undefined") {
        continue;
      }
      switch (key) {
        case "search": {
          console.log(data[key])
          whereArr.push(`(order_want_helps.title LIKE ${this.escape('%' + data[key] + '%')} OR order_want_helps.content LIKE ${this.escape('%' + data[key] + '%')})`);
          break;
        }
        case "creater": {
          whereArr.push(`(creater=${this.escape(data[key])})`);
          break;
        }
        case "runner": {
          whereArr.push(`(runner=${this.escape(data[key])})`);
          break;
        }
        case "college": {
          whereArr.push(`(college=${this.escape(data[key])})`);
          break;
        }
      }
    }
    let [{ count = 0 }] = await this.query(sqls.orderWantHelp.count + (whereArr.length == 0 ? '' : ' WHERE ' + whereArr.join(" AND ")))
    if (page['needPage']) {
      result['count'] = count;
    }
    //limit拼接
    limitStr = ` LIMIT ${page['page']},${page['size']}`;
    //没有数据  或者页码超出范围 就返回空
    if (count == 0 || Math.ceil(count / page['size']) < (page['page'] + 1)) {
      result['orders'] = [];
      return result;
    }
    //获取跑跑的信息
    let runOrders = await this.query(sqls.orderWantHelp.list + (whereArr.length == 0 ? '' : ' WHERE ' + whereArr.join(" AND ")) +' ORDER BY status ,_c desc '+limitStr);
    result['orders'] = runOrders;
    return result;
  }
  /**
   * 获取基本信息
   */
  async getinfoById(id, reqUser) {

    //获取跑跑的信息
    let [info = null] = await this.query(sqls.orderWantHelp.info, id);
    return {
      info
    };
  }
  /**
   * 
   * @param {*添加} param0 
   * @param {*} reqUser 
   */
  async add({ id,title, content, college, address, gender_constraint, reward_type, reward, deadline, phone_number, weixin }, reqUser) {
    //第一步  在订单表中创建数据
    await this.startTrans();
    let { affectedRow: affectedRow1 } = await this.query(sqls.order.addOrder, id, reqUser.id, college);
    //第二步 创建跑跑订单
    let { affectedRow: affectedRow2 } = await this.query(sqls.orderWantHelp.add, {
      order_id: id,
      title,
      content,
      address,gender_constraint,reward_type,reward,deadline,phone_number,weixin
    })
    if (affectedRow2 <= 0 || affectedRow1 <= 0) {
      await this.rollback();
      return false
    }
    await this.commit();
    return id;
  }
  /**
   * 取消订单
   * @param {*} id 
   * @param {*} reqUser 
   */
  async cancel(id, reqUser) {

    let [data = null] = await this.query(sqls.orderRun.gerInfoToOrderRun, id);
    //如果为空  表示没有这个订单
    if (!data) {
      throw new BaseError(Code.ORDER_TYPE_ERR);
    }
    if (data['status'] !== 0) {
      return false;
    }
    switch (reqUser['type']) {
      case "user": {
        if (reqUser['id'] != data['creater']) {
          throw new BaseError(Code.NOT_OWN_ERR);
        }
        //取消订单
        let { affectedRows } = await this.query(sqls.order.setStatus, -2, id);
        return affectedRows > 0;
      }
      case "admin": {
        //取消订单
        let { affectedRows } = await this.query(sqls.order.setStatus, -3, id);
        return affectedRows > 0;
      }
    }
    return false;
  }
  /**
   * 抢单
   */
  async grab(id, reqUser) {

    let [data = null] = await this.query(sqls.orderRun.gerInfoToOrderRun, id);
    //如果为空  表示没有这个订单
    if (!data) {
      throw new BaseError(Code.ORDER_TYPE_ERR);
    }

    console.log(data);
    //存在跑跑
    if (data['status'] != 0 || data['creater'] == reqUser['id']) {
      return false;
    }
    //开启事务
    await this.startTrans();
    let { affectedRows: affectedRow1 = 0 } = await this.query(sqls.order.setStatus, 1, id)
    let { affectedRows: affectedRow2 = 0 } = await this.query(sqls.orderRun.updateOrderRun, {
      runner: reqUser['id']
    }, id);
    if (affectedRow1 <= 0 || affectedRow2 <= 0) {
      await this.rollback();
      return false;
    }
    await this.commit();
    return true;
  }
  /**
   * 放弃跑跑
   */
  async quit(id, reqUser) {

    let [data = null] = await this.query(sqls.orderRun.gerInfoToOrderRun, id);
    //如果为空  表示没有这个订单
    if (!data) {
      throw new BaseError(Code.ORDER_TYPE_ERR);
    }
    if (reqUser['id'] != data['runner']) {
      throw new BaseError(Code.NOT_OWN_ERR);
    }
    //开启事务
    await this.startTrans();
    let { affectedRow: affectedRow1 } = await this.query(sqls.order.setStatus, 0, id)
    let { affectedRows: affectedRow2 } = await this.query(sqls.orderRun.updateOrderRun, {
      runner: null
    }, id);
    if (affectedRow1 <= 0 || affectedRow2 <= 0) {
      await this.rollback();
      return false;
    }
    await this.commit();
    return true;
  }
  /**
   * 配送中
   */
  async deliver(id, reqUser) {
    let [data = null] = await this.query(sqls.orderRun.gerInfoToOrderRun, id);
    //如果为空  表示没有这个订单
    if (!data) {
      throw new BaseError(Code.ORDER_TYPE_ERR);
    }
    if (reqUser['id'] != data['runner']) {
      throw new BaseError(Code.NOT_OWN_ERR);
    }
    if (data['status'] != 1) {
      return false;
    }
    let { affectedRow } = await this.query(sqls.order.setStatus, 2, id);

    return affectedRow > 0;
  }
  /**
  * 完成
  */
  async finally(id, reqUser) {
    let [data = null] = await this.query(sqls.orderRun.gerInfoToOrderRun, id);
    //如果为空  表示没有这个订单
    if (!data) {
      throw new BaseError(Code.ORDER_TYPE_ERR);
    }
    if (reqUser['id'] != data['runner']) {
      throw new BaseError(Code.NOT_OWN_ERR);
    }
    if (data['status'] != 2) {
      return false;
    }
    let { affectedRow } = await this.query(sqls.order.setStatus, 3, id);

    return affectedRow > 0;
  }
  /**
  * 结束
  */
  async end(id, reqUser) {
    let [data = null] = await this.query(sqls.orderRun.gerInfoToOrderRun, id);
    //如果为空  表示没有这个订单
    if (!data) {
      throw new BaseError(Code.ORDER_TYPE_ERR);
    }
    if (reqUser['id'] != data['creater']) {
      throw new BaseError(Code.NOT_OWN_ERR);
    }
    if (data['status'] != 3) {
      return false;
    }
    let { affectedRow } = await this.query(sqls.order.setStatus, 4, id);

    return affectedRow > 0;
  }
}