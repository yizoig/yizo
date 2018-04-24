
module.exports = class TaskModel extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("tasks");
    }
    //获取列表
    async list({ search, page, pageSize, creater, partner, state, college, type }) {

        let _where = [];
        if (!this.isUndefined(search)) {
            _where.push({
                post_title: ['like', `%${search}%`],
                _logic: "OR",
                post_content: ['like', `%${search}%`]
            }, "AND")
        }
        if (!this.isUndefined(creater)) {
            _where.push({
                "posts.create_by": creater
            })
        }
        if (!this.isUndefined(partner)) {
            _where.push({
                "task_records.user": partner
            })
        }
        if (!this.isUndefined(college)) {
            _where.push({
                "posts.college": college
            })
        }
        if (!this.isUndefined(type)) {
            _where.push({
                "posts.type": type
            })
        }
        if (!this.isUndefined(state)) {
            _where.push({
                "posts.state": state
            })
        }
        //获取总条数
        let total = await this
            .join('inner join posts on posts.post_id=tasks.post_id')
            .join('inner join task_records on task_records.task_id=tasks.task_id')
            .where(_where).count();
        //获取列表
        let list = await this
            .field("posts.post_id as pid,post_title as title,post_content as content,create_by as createId,users.nick_name as createName,users.user_gender as createGender,posts.type as tid,post_types.type_name as tName,posts.college as cid,colleges.college_name as cName,reward_type AS rewardType,if(reward_type=0,money,reward) as reward,number,tasks.state,gender,tasks._c")
            .join('inner join posts on posts.post_id=tasks.post_id')
            .join('left join task_records on task_records.task_id=tasks.task_id')
            .join('inner join users on users.user_id=posts.create_by')
            .join('inner join post_types on posts.type=post_types.type_id')
            .join('inner join colleges on colleges.college_id=posts.college')
            .where(_where).page(page - 1, pageSize).select();

        return {
            list,
            pagination: {
                total, pageSize
            }
        }
    }

    async add(user_id, { title, content, contact, tel, college, type, dueDate, rewardType, reward, money, number, gender }) {
        try {
            //开启事务
            await this.startTrans();
            let { insertId: pid = null } = await this.table("posts").data({
                post_title: title,
                post_content: content,
                create_by: user_id,
                contact,
                contact_tel: tel,
                college,
                type
            }).insert();
            let { insertId: tid = null } = await this.table("tasks").data({
                post_id: pid,
                due_date: dueDate,
                reward_type: rewardType,
                reward,
                [rewardType == 0 ? 'money' : "reward"]: reward,
                state: 0,
                gender
            }).insert();
            this.query('update colleges set now_live = now_live+1,liveness=liveness+1 where college_id =' + college);
            if (!(pid && tid)) {
                await this.rollback();
                return false;
            }
            await this.commit();
            return pid;
        } catch (e) {
            await this.rollback();
            throw e;
        }
    }
    async del(ids, is_del) {

        try {
            //假删除或恢复   真删除系统执行
            let { affectedRows = 0 } = await this.table("tasks").where({
                post_id: ['in', ids]
            }).data({
                is_del
            }).update();
            return affectedRows > 0;

        } catch (e) {
            await this.rollback();
            throw e;
        }
    }

    async updateInfo(id, { title, content, contact, tel, college, type, dueDate, rewardType, reward, money, number }) {
        try {
            await this.startTrans();
            let { affectedRows: affectedRows1 } = await this.table("posts").where({ post_id: id }).data({
                post_title: title,
                post_content: content,
                contact,
                contact_tel: tel,
                college,
                type
            }).update();
            let { affectedRows: affectedRows2 } = await this.table("tasks").where({ post_id: id }).data({
                due_date: dueDate,
                reward_type: rewardType,
                reward, money,
                number
            }).update();
            await this.commit();
            return affectedRows1 > 0 || affectedRows2 > 0;
        } catch (e) {
            await this.rollback();
            throw e;
        }
    }
    async info(id) {

        let info = await this
            .field(`posts.post_id as pid,
            post_title as title,
            post_content as content,
            contact,
            contact_tel as contactTel,
            create_by as createId,users.nick_name as createName,users.user_gender as createGender,
            posts.type as tid,post_types.type_name as tName,
            posts.college as cid,colleges.college_name as cName,
            reward_type as rewardType,
            if(reward_type=0,money,reward) as reward,
            due_date as dueDate,
            number,
            state,gender,posts._c`)
            .join("join posts on posts.post_id= tasks.post_id")
            .join("join users on posts.create_by= users.user_id")
            .join("join colleges on colleges.college_id= posts.college")
            .join("join post_types on posts.type= post_types.type_id")
            .where({ "posts.post_id": id }).find();
        if (!info) {
            throw new Error("不存在任务")
        }
        info['records'] = await this
            .field("record_id as rid,user as uid,users.nick_name uname,task_records.state,task_records._c")
            .join("join users on task_records.user=users.user_id")
            .join("join tasks on tasks.task_id=task_records.task_id")
            .join("join posts on posts.post_id=tasks.post_id")
            .where({
                "posts.post_id": id
            })
            .table("task_records").select() || [];
        return info;
    }
    async joinTask(id, user) {

        let { task_id } = {} = await this.where({ post_id: id }).find();
        if (task_id) {
            throw new Error("不存在任务")
        }
        let { insertId } = await this.data({
            task_id,
            user,
        }).table("task_records").insert();
        return insertId;
    }
    async putState(id, type) {
        let { affectedRows } = await this.where({ post_id: id }).data({
            state: type
        }).update();
        return affectedRows > 0;
    }

}