let { Model, BaseError, Code } = jike;

module.exports = class MultiRunOrderModel extends Model {

    async add({ order_id, content, gender_constraint, college }, reqUser) {


        //开启事务
        await this.startTrans();
        //1.先创建订单表
        let { affectedRow: affectedRow1 } = await this.query(sqls.order.addOrder, orderId, reqUser.id, college);

        let { affectedRow: affectedRow2 } = await this.query(sqls.orderRun.addMultiRunOrder, {
            order_id, content, gender_constraint
        });

        if(affectedRow1>0&&affectedRow2>0){
            this.commit();
            return order_id;
        }
        //回滚
        this.rollback();
        return false;
    }
    //取消订单
    async cancel(id,reqUser){


        //判断是否可以取消订单 获取创建人 订单状态订单是否已被抢
        let [data=null] = await this.query(sqls.orderRun.getMultiCreateAndUser,id);
        if(!data){
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
         if(data['status'] !== 0){
            return false;
        }
        switch(reqUser['type']){
            case "user":{
                //判断是不是本人操作
                if(data['creater']!=reqUser.id){
                    throw new BaseError(Code.UNTHAN);
                }
                 //取消订单
                let  {affectedRows} = await this.query(sqls.order.setStatus,-2,id);
                return affectedRows>0;
            }
            case "admin":{
                //取消订单
                let  {affectedRows} = await this.query(sqls.order.setStatus,-3,id);
                return affectedRows>0;
            }
        }
    }
    //需要带货
    async needRun({order_id,content,address,contact,number,money,demands},reqUser){
           //判断是否可以取消订单 获取创建人 订单状态订单是否已被抢
        let [data=null] = await this.query(sqls.orderRun.getMultiCreateAndUser,order_id);
        if(!data){
            throw new BaseError(Code.ORDER_TYPE_ERR);
        }
         if(data['status'] !== 0){
            return false;
        }
        //抢单
        let {affectedRow} = await this.query(sqls.orderRun.addMultiOrderDetail,{
            order_id,content,address,contact,contact_number:number,money,demands
        })
        return affectedRow>0;
    }

    //放弃跑跑拼单
    async giveUpOrder(id,reqUser){

        //抢单
        let {affectedRow} = await this.query(sqls.orderRun.updateMutilOrderDetail,{status:-2},reqUser.id,order_id)

        return affectedRow>0;
    }
    //配送
    async deliver(id,reqUser){

    }
    //完成
    async finally(){
    }
    //结束
    async end(){

    }
}