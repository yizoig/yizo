
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
            .where(_where).select();

        return {
            list,
            pagination: {
                total, pageSize
            }
        }
    }

    async add({ title, content, contact, tel, college, type, dueDate, rewardType, reward, money, number, gender }) {

        //开启事务
        await this.startTrans();
        let { insertId: pid = null } = await this.table("posts").data({
            post_title: title,
            post_content: content,
            create_by: 1,
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
        if (!(pid && tid)) {
            await this.rollback();
            return false;
        }
        await this.commit();
        return pid;
    }
    async del(ids) {

        try {
            await this.startTrans();
            let { affectedRows: affectedRows1 } = this.table("task_records").join("inner join tasks on tasks.task_id = task_records.task_id").where({ post_id: ['in', ids] }).delete();
            let { affectedRows: affectedRows2 } = this.table("tasks").where({ post_id: ['in', ids] }).delete();
            let { affectedRows: affectedRows3 } = this.table("posts").where({ post_id: ['in', ids] }).delete();
            await this.commit();
            return affectedRows3 > 0;
        } catch (e) {
            await this.rollback();
            throw e;
        }
    }

    async updateInfo(id, { title, content, contact, tel, college, type, dueDate, rewardType, reward, money, number }) {
        try {
            await this.startTrans();
            let { affectedRows: affectedRows1 } = this.table("posts").where({ post_id: id }).data({
                post_title: title,
                post_content: content,
                contact,
                contact_tel: tel,
                college,
                type
            }).update();
            let { affectedRows: affectedRows2 } = this.table("tasks").where({ post_id: id }).data({
                due_time: dueDate,
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
            contact_tel,
            create_by as createId,users.nick_name as createName,users.user_gender as createGender,
            posts.type as tid,types.type_name as tName,
            posts.college as cid,colleges.college_name as cname,
            reward_type,
            if(reward_type=0,money,reward) as reward,
            start_time as startTime,
            end_time as endTime,
            number,
            state,gender,_c`)
            .join("join posts on posts.post_id= tasks.post_id")
            .where({ "posts.post_id": id }).select();

        info['record'] = await this.field("record_id as rid,user as uid,state,_c").table("task_records").select() || [];
        return info;
    }
    async joinTask(id, type) {

        let { affectedRows } = await this.where({ post_id: id }).data({
            state: type
        }).update();
        return affectedRows > 0;
    }
    async putState(id, type) {
        let { affectedRows } = await this.where({ post_id: id }).data({
            state: type
        }).update();
        return affectedRows > 0;
    }
    async recordList(id) {
        return await this.field("record_id as rid,user as uid,state,_c").table("task_records").select() || [];
    }
}