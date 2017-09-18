let { DataBaseError, Status } = jike;

module.exports = class CollegeModel extends jike.Model {


  constructor() {
    super();

    this._table = "colleges";
    this._map = {
      id: "college_id",
      name: "college_name"
    }
  }
  /**
   * 获取学校列表
   */
  async list({ current, pageSize, search }) {
    let whereStr = search?` WHERE college_name LIKE %${this.escape(search)}% `:'';
    let limitStr = ` LIMIT ${current},${pageSize} `;
    let count = await this.query(sqls.college.count+whereStr);
    let colleges = await this.query(sqls.college.list+whereStr+limitStr)
    return { colleges, count };
  }
  /**
   * 添加学校
   */
  async add(name) {
    let { insertId = null } = await this.query(sqls.college.addcollege, name);
    return insertId;
  }
  /**
   * 删除学校
   */
  async delete(ids) {

    //学校不存在约束才删除
    let [colleges] = await this.query(sqls.college.usersInCollege, ids);
    //获取被应用的学校
    colleges = colleges["colleges"].toString("utf-8").split(",") || [];
    //筛选出没有被约束的记录再删除
    ids = ids.filter(value => !colleges.includes(value + ''))

    //删除没有被约束的数据
    let { affectedRows } = await this.query(sqls.college.delColleges, ids);
    return affectedRows > 0;
  }
  /**
   * 修改学校信息
   */
  async update({ id, name }) {
    //删除没有被约束的数据
    let { affectedRows } = await this.query(sqls.college.updateCollege, name, id);
    return affectedRows > 0;
  }
}
