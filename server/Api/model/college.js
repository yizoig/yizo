let { DataBaseError, Status } = jike;

module.exports = class CollegeModel extends jike.Model {


    constructor() {
        super();
        this._map = {
            id: "college_id",
            name: "college_name"
        }
    }
    /**
     * 获取学校列表
     */
    async list({ current, pageSize, search }) {

        let colleges = await this.table('colleges')
            .where({college_name: search && ['like', `%${search+''}%`]})
            .limit((current - 1) * pageSize, current * pageSize)
            .select();

        return colleges;
    }
    /**
     * 添加学校
     */
    async add(name) {
        let { insertId = null } = await this.query(sqls.addcollege, name);
        return insertId;
    }
    /**
     * 删除学校
     */
    async delete(ids) {

        //学校不存在约束才删除
        let [colleges] = await this.query(sqls.usersInCollege, ids);
        //获取被应用的学校
        colleges = colleges["colleges"].toString("utf-8").split(",") || [];
        //筛选出没有被约束的记录再删除
        ids = ids.filter(value => !colleges.includes(value + ''))

        //删除没有被约束的数据
        let { affectedRows } = await this.query(sqls.delColleges, ids);
        return affectedRows > 0;
    }
    /**
     * 修改学校信息
     */
    async update({ id,name }) {
        //删除没有被约束的数据
        let { affectedRows } = await this.query(sqls.updateCollege, name,id);
        return affectedRows > 0;
    }
}
