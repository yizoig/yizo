let {BaseError,Status,crypto:{md5}} = jike;
module.exports = class OrderModel extends jike.Model {

    async list(current=0,pageSize=10){

        //查询出id
            let orders = await this.query(`select
                    order_id,
                    creater,
                    nickname as creater_name,
                    gender as creater_gender,
                    college,
                    college_name,
                    status,
                    _c,
                    _d
                from orders
                LEFT JOIN accounts on creater = accounts.id
                left join colleges on college_id =college 
                ORDER BY _c DESC  limit ?,?;`,
            current*pageSize,pageSize);
        //将id组合数组
        let ids = [];
        for(let i=0;i<orders.length;i++){
            ids.push(orders[i]['order_id']);
        }
        //获取跑跑的信息
        let orderRuns = await this.query(`SELECT
                    order_id,
                    title,
                    content,
                    gender_constraint,
                    money,
                    runner,
                    nickname AS runner_name,
                    gender AS runner_gender,
                    contact,
                    contact_number,
                    address,
                    deadline
            FROM order_runs
                LEFT JOIN accounts ON order_runs.runner = accounts.id where order_id in (?)`,
            ids);
        let orderMultiRuns = await this.query(`
                SELECT order_id,title,content,max_number,deadline FROM order_multi_runs
                WHERE order_id IN (?)`,ids);
        for(let i=0;i<orders.length;i++){
            
            switch(orders[i]['order_id'].charAt()){
                case "F":{
                    for(let j=0;j<orderRuns.length;j++){
                        
                        if(orders[i]['order_id'] ==orderRuns[j]['order_id']){
        
                            orders[i] = Object.assign(orders[i],orderRuns[j]);
                            break;
                        }
                    }
                    break;
                }
                case "G":{
                    for(let k=0;k<orderMultiRuns.length;k++){
                        
                        if(orders[i]['order_id'] ==orderMultiRuns[k]['order_id']){
                            orders[i] = Object.assign(orders[i],orderMultiRuns[k]);
                            break;
                        }
                    }
                    break;
                }
            }
            
           
        }
        return orders;
    }
}