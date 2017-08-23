let { DataBaseError, Status, crypto: { md5 } } = jike;

module.exports = class UserModel extends jike.Model {

    constructor() {
        super();
    }
    /**
     * 获取用户列表
     */
    async list({ current, pageSize, search }) {
        let user = await this.query(sqls.userList, (current - 1) * pageSize, current * pageSize);
        return user;
    }
    /**
     * 获取指定用户信息
     */
    async getUserInfo(id) {


        let [user = null] = await this.query(sqls.userInfo, id);
        if (!user) {
            throw new DataBaseError(Status.NOT_FOUND, "该用户不存在", "该用户不存在");
        }
        return user;
    }
    /**
     * 判断用户是否存在
     */
    async exists(account) {

        let [user = null] = await this.query(sqls.accountInfo, account);
        //如果登录表没有此账号  或者登录表中的user_id为空就表示没有用户存在
        return user && user['user_id'];
    }
    /**
     * 添加用户
     */
    async add({ account, password }) {


        let [user = null] = await this.query(sqls.accountInfo, account);
        //判断用户是否已经存在
        if (user && user['user_id']) {
            throw new DataBaseError(Status.INVALID_REQUEST, "请换个账号再试", "登录名已经被占用");
        }
        //开启事务
        await this.startTrans();
        //在用户表中添加用户基本信息
        let { insertId = null } = await this.query(sqls.addUser1);
        if (!insertId) {
            throw new DataBaseError(Status.SERVER_ERROR, "服务器异常");
        }


        console.log(insertId, 1212)
        //判断是否已经有登录账号
        if (user) {
            //存在登录账号 ，只需要在字段设置user_id
            let { affectedRows } = await this.query(sqls.updAccountsByAccount, { user_id: insertId }, account);
            if (affectedRows) {
                this.commit();
                return user['id'];
            }
        } else {
            //不存在登录账号，需要为用户添加一条登录账号记录
            let { insertId: insertAccountId } = await this.query(sqls.addAccount, { account, password: md5(password).toString(), user_id: insertId, nicename: '用户' + account });
            if (insertAccountId) {
                this.commit();
                return insertAccountId;
            }
        }
        this.rollback();
        throw new DataBaseError(Status.INVALID_REQUEST, "添加失败", "请重试");
    }

    /**
     * 删除用户
     * force=-1表示强制删除用户
     * force=0解除禁用
     * force=1禁用用户
     */
    async delete(ids, mode) {

        switch (mode) {
            case -1: {
                //删除用户
                let { affectedRows } = await this.query(sqls.delUser, ids);
                //删除没有引用的登录表
                await this.query(sqls.delnotReferAccount);
                return affectedRows > 0;
            }
            case 0: {
                //解除禁用
                let { affectedRows } = await this.query(sqls.disabledUser, 0, ids)
                return affectedRows > 0;
            }
            case 1: {
                //禁用用户
                let { affectedRows } = await this.query(sqls.disabledUser, 1, ids)
                return affectedRows > 0;
            }
        }
    }
    /**
     * 修改用户的学校
     */
    async changeCollege(id, college) {
        let { affectedRows } = await this.query(sqls.changeCollege, college, id)
        return affectedRows > 0;
    }
}