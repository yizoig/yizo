let {DataBaseError,Status,crypto:{md5}} = jike;
let codes = {};
module.exports = class RunOrderModel extends jike.Model {



    constructor(){
        super();
        this._table ="run_orders";
        this._map = {
            "_c":"`run_orders`.`@create`"
        }
    }
    //获取所有的订单
    async list({current=1,pageSize=10,where,order={'`run_orders`.`@create`':'desc'}}){


        where = this.filter_handle(where,['creater','runner']);

        //获取总条数
        let count  = await this
            .join("run_order_details ON run_orders.run_order_id =run_order_details.run_order_id")
            .join("colleges ON colleges.college_id=run_orders.college")
            .join("accounts ON accounts.id=run_orders.creater")
            .where({
                'creater':where['creater'],
                'run_order_details.user_id':where['runner'],
            })
            .count();

        let orders = await this.field(`
                run_orders.run_order_id as order_id,
                run_order_title as title,
                run_order_content as content,
                college,
                college_name,
                gender_constraint,
                address,
                status,
                money,
                creater as creater_id,
                accounts.nickname as creater_name,
                accounts.gender as creater_gender,
                run_order_details.user_id,
                demands,
                contact,
                contact_number as number,
                run_orders.\`@create\` as _c
            `)
            .join("run_order_details ON run_orders.run_order_id =run_order_details.run_order_id")
            .join("colleges ON colleges.college_id=run_orders.college")
            .join("accounts ON accounts.id=run_orders.creater")
            .order(order)
            .where({
                'creater':where['creater'],
                'run_order_details.user_id':where['runner'],
            })
            .limit((current - 1) * pageSize, pageSize)
            .select();
            //处理数据
            for(let i=0;i<orders.length;i++){
                //代跑腿
                if(orders[i]['order_id'].indexOf("G")==0){
                    delete orders[i]['money'];
                    delete orders[i]['demands'];
                }else{
                    delete orders[i]['user_id'];
                }
            }
            return {orders,count};
    }
    //创建订单
    async add({id:run_order_id,content,title,college,address,gd_constraint,demands,contact,number,money,type}){
        try{
                //开启事务
            await this.startTrans();
            //创建跑单表
            let {affectedRows:affectedRows1} = await this.query(sqls.createRunOrder,{
                run_order_id,
                run_order_content:content,
                run_order_title:title,
                college,
                gender_constraint:gd_constraint,
                creater:reqUser.id
            });
            //创建详情单
            let {affectedRows:affectedRows2} = await this.query(sqls.createRunOrderDetail,{
                run_order_id,
                address,
                contact,
                contact_number:number,
                ...(type=="F"?{
                    money:JSON.stringify(money),
                    demands:JSON.stringify(demands),
                }:{})
                
            });
            await this.commit();
            return run_order_id;
        }catch(e){
            await this.rollback();
            return false;
        }
    }
}