let {DataBaseError,Status,crypto:{md5}} = jike;
let codes = {};
module.exports = class RunOrderModel extends jike.Model {


    //获取所有的订单
    async list({current=1,pageSize=10,where,order}){

        let orders = await this.table("run_orders")
            .field(`
                run_orders.run_order_id,
                run_order_title,
                run_order_content,
                college,
                college_name,
                gender_constraint,
                address,
                status,
                money,
                creater,
                user_id,
                runner,
                demands,
                contact,
                contact_number
            `)
            .join("run_order_details ON run_orders.run_order_id =run_order_details.run_order_id")
            .join("colleges ON colleges.college_id=run_orders.college")
            .limit((current - 1) * pageSize, current * pageSize)
            .select();
            //处理数据
            for(let i=0;i<orders.length;i++){
                //代跑腿
                if(orders[i]['run_order_id'].indexOf("G")==0){
                    delete orders[i]['money'];
                    delete orders[i]['demands'];
                    delete orders[i]['status'];
                }else{
                    delete orders[i]['user_id'];
                }
            }
            return orders;
    }
    //创建订单
    async add({id:run_order_id,content,title,college,address,gender,demands,contact,number,money,type}){
        try{
                //开启事务
            await this.startTrans();
            //创建跑单表
            let {affectedRows:affectedRows1} = await this.query(sqls.createRunOrder,{
                run_order_id,
                run_order_content:content,
                run_order_title:title,
                college,
                gender_constraint:gender,
                creater:reqUser.id
            });
            //创建详情单
            let {affectedRows:affectedRows2} = await this.query(sqls.createRunOrderDetail,{
                run_order_id,
                address,
                contact,
                contact_number:number,
                ...(type=="F"?{
                    user_id:reqUser.id,
                    money:JSON.stringify(money),
                    demands:JSON.stringify(demands),
                }:{runner:reqUser.id})
                
            });
            await this.commit();
            return run_order_id;
        }catch(e){
            await this.rollback();
            return false;
        }
    }
}