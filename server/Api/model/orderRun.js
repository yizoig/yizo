let {BaseError,Code,crypto:{md5}} = jike;
/**
 * -4 系统取消订单 
 * -3 管理员取消订单
 * -2 取消订单
 * -1 取消抢单
 * 0 创建
 * 1 抢单
 * 2 配送
 * 3 完成
 * 4 结单
 */
module.exports = class OrderRunModel extends jike.Model {

    async add({id,content, college, address, gender_constraint, demands, contact, number, money,deadline=null},reqUser){
        //第一步  在订单表中创建数据
        await this.startTrans();
        let {affectedRow:affectedRow1} = await this.query(sqls.addOrder,id,reqUser.id||1,college);
        //第二步 创建跑跑订单
        let {affectedRow:affectedRow2} = await this.query(sqls.addOrderRun,{
            order_id:id,
            content,
            gender_constraint,
            money,contact,
            contact_number:number,
            address,demands,deadline
        })
        if(affectedRow2<=0 || affectedRow1<=0){
            await this.rollback();
            return false
        }
        await this.commit();
        return true;
    }
    /**
     * 取消订单
     * @param {*} id 
     * @param {*} reqUser 
     */
    async cancel(id,reqUser){

        let [data=null] = await this.query(sqls.gerInfoToOrderRun,id);
        //如果为空  表示没有这个订单
        if(!data){
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        if(data['status'] !== 0){
            return false;
        }
        switch(reqUser['type']){
            case "user":{
                if(reqUser['id']!=data['creater']){
                    throw new BaseError(Code.NOT_OWN_ERR);
                }
                //往admin执行
            }
            case "admin":{
                //取消订单
                let  {affectedRows} = await this.query(sqls.setStatus,-2,id);
                return affectedRows>0;
            }
        }
       return false;
    }
    /**
     * 抢单
     */
    async grab(id,reqUser){

        let [data=null] = await this.query(sqls.gerInfoToOrderRun,id);
        //如果为空  表示没有这个订单
        if(!data){
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        //存在跑跑
        if(data['status']!=0){
            return false;
        }
        //开启事务
        await this.startTrans();
        let {affectedRow:affectedRow1} = await this.query(sqls.setStatus,1,id)
        let  {affectedRows:affectedRow2} = await this.query(sqls.updateOrderRun,{
            runner:reqUser['id']
        },id);
        if(affectedRow1<=0 || affectedRow2<=0){
            await this.rollback();
            return false;
        }
        await this.commit();
        return true;
    }
    /**
     * 放弃跑跑
     */
    async quit(id,reqUser){

        let [data=null] = await this.query(sqls.gerInfoToOrderRun,id);
        //如果为空  表示没有这个订单
        if(!data){
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        if(reqUser['id']!=data['runner']){
            throw new BaseError(Code.NOT_OWN_ERR);
        }
        //开启事务
        await this.startTrans();
        let {affectedRow:affectedRow1} = await this.query(sqls.setStatus,0,id)
        let  {affectedRows:affectedRow2} = await this.query(sqls.updateOrderRun,{
            runner:null
        },id);
        if(affectedRow1<=0 || affectedRow2<=0){
            await this.rollback();
            return false;
        }
        await this.commit();
        return true;
    }
    /**
     * 配送中
     */
    async deliver(id,reqUser){
        let [data=null] = await this.query(sqls.gerInfoToOrderRun,id);
        //如果为空  表示没有这个订单
        if(!data){
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        if(reqUser['id']!=data['runner']){
            throw new BaseError(Code.NOT_OWN_ERR);
        }
        if(reqUser['status']!=1){
            return false;
        }
        let {affectedRow} = await this.query(sqls.setStatus,2,id);

        return affectedRow>0;
    }
     /**
     * 配送中
     */
    async finally(id,reqUser){
        let [data=null] = await this.query(sqls.gerInfoToOrderRun,id);
        //如果为空  表示没有这个订单
        if(!data){
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        if(reqUser['id']!=data['runner']){
            throw new BaseError(Code.NOT_OWN_ERR);
        }
        if(reqUser['status']!=2){
            return false;
        }
        let {affectedRow} = await this.query(sqls.setStatus,3,id);

        return affectedRow>0;
    }
     /**
     * 配送中
     */
    async end(id,reqUser){
        let [data=null] = await this.query(sqls.gerInfoToOrderRun,id);
        //如果为空  表示没有这个订单
        if(!data){
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
        if(reqUser['id']!=data['creater']){
            throw new BaseError(Code.NOT_OWN_ERR);
        }
        if(reqUser['status']!=3){
            return false;
        }
        let {affectedRow} = await this.query(sqls.setStatus,4,id);

        return affectedRow>0;
    }
}