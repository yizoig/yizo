let {DataBaseError,Code,crypto:{md5}} = jike;
module.exports = class OrderRunModel extends jike.Model {

    async add({id,content, college, address, gender_constraint, demands, contact, number, money},reqUser){

        //第一步  在订单表中创建数据

        let {affectedRow} = await this.query(sqls.addOrder,id,reqUser.id,college); 
    }
}