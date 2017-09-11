let { Model, BaseError, Code } = jike;
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
module.exports = class MultiRunOrderModel extends Model {

    async add({ order_id, content, gender_constraint, college, max_number }, reqUser) {


        //开启事务
        await this.startTrans();
        //1.先创建订单表
        let { affectedRows: affectedRow1 } = await this.query(sqls.order.addOrder, order_id, reqUser.id, college);

        let { affectedRows: affectedRow2 } = await this.query(sqls.orderRun.addMultiRunOrder, {
            order_id, content, gender_constraint, max_number
        });
        console.log(affectedRow1, affectedRow2)
        if (affectedRow1 > 0 && affectedRow2 > 0) {
            await this.commit();
            return order_id;
        }
        //回滚
        await this.rollback();
        return false;
    }
    //取消订单
    async cancel(id, reqUser) {


        //判断是否可以取消订单 获取创建人 订单状态订单是否已被抢
        let [data = null] = await this.query(sqls.orderRun.getMultiCreateAndUser, id);
        if (!data) {
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        if (data['status'] !== 0) {
            return false;
        }
        switch (reqUser['type']) {
            case "user": {
                //判断是不是本人操作
                if (data['creater'] != reqUser.id) {
                    throw new BaseError(Code.UNAUTH);
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
    }
    //需要带货
    async grab({ id: order_id, content, contact, number, money, demands }, reqUser) {
        //判断是否可以取消订单 获取创建人 订单状态订单是否已被抢
        let [data = null] = await this.query(sqls.orderRun.getMultiCreateAndUser, order_id);
        if (!data) {
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        let users = data.users || '';
        users = users.split(',');

        console.log(users, users.indexOf(reqUser['id']))
        if (data['status'] !== 0 || users.indexOf(reqUser['id'] + '') != -1) {
            return false;
        }

        //抢单
        let { affectedRows } = await this.query(sqls.orderRun.addMultiOrderDetail, {
            order_id, content, contact, contact_number: number, money, demands, user: reqUser['id'], status: 1
        })
        return affectedRows > 0;
    }

    //放弃跑跑拼单
    async quit(id, reqUser) {

        let [data = null] = await this.query(sqls.orderRun.getMultiCreateAndUser, order_id);
        if (!data) {
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        let users = data.users || '';
        users = users.split(',');
        //订单状态必须是接受状态
        if (data['status'] !== 0 ) {
            return false;
        }
        //必须是已有用户
        if(users.indexOf(reqUser['id'] + '') != -1){
            throw new BaseError(Code.UNAUTH);
        }
        //放弃跑跑拼单
        let { affectedRows } = await this.query(sqls.orderRun.updateMutilOrderDetail, { status: -2 }, reqUser.id, id)

        return affectedRows > 0;
    }
    //配送
    async deliver(id, reqUser) {


        let [data = null] = await this.query(sqls.orderRun.getMultiCreateAndUser, order_id);
        if (!data) {
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        //订单状态必须是接受状态
        if (data['status'] < 0 || data['status']>=2) {
            return false;
        }
        //必须是已有用户
        if(data['creater']==(reqUser['id']+'')){
            throw new BaseError(Code.UNAUTH);
        }
        //设置订单集为配送状态
        let { affectedRows } = await this.query(sqls.order.setStatus, 2, id)
        return affectedRows > 0;
    }
    //完成
    async finally({ id, user }, reqUser) {

        let [data = null] = await this.query(sqls.orderRun.getMultiCreateAndUser, order_id);
        if (!data) {
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        //订单状态必须是接受状态
        if (data['status'] <0 ||  data['status']<=3 ) {
            return false;
        }
        //必须是已有用户
        if(data['creater']==(reqUser['id']+'')){
            throw new BaseError(Code.UNAUTH);
        }
        //完成
        let { affectedRows } = await this.query(sqls.orderRun.updateMutilOrderDetail, { status: 3 }, user, id)
        return affectedRows > 0;
    }
    //结束
    async end({ id, user }, reqUser) {

        let [data = null] = await this.query(sqls.orderRun.getMultiCreateAndUser, order_id);
        if (!data) {
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        let users = data.users || '';
        users = users.split(',');
        //订单状态必须是接受状态
        if (data['status'] < 0 || data['status']>=4 ) {
            return false;
        }
        //必须是已有用户
        if(users.indexOf(reqUser['id'] + '') != -1){
            throw new BaseError(Code.UNAUTH);
        }

        //开启事务
        await this.startTrans();
        //结束多用户的单一订单
        let { affectedRows: affectedRows1 } = await this.query(sqls.orderRun.updateMutilOrderDetail, { status: 4 }, user, id)

        //判断如果  全部订单都结束  就设置总订单集结束
        let { affectedRows: affectedRows2 } = await this.query(sqls.orderRun.setOrderEnd, id, id);
        if (affectedRows1 > 0 && affectedRows2 > 0) {
            await this.commit();
            return true;
        }
        await this.rollback();
        return false;
    }
}