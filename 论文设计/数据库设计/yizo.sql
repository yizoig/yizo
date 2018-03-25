

/*==============================================================*/
/* Table: admin_groups                                          */
/*==============================================================*/
create table admin_groups
(
   group_id             int primary key auto_increment comment '分组id',
   group_name           varchar(30) comment '分组名',
   `_d`                   char(1) default '0' comment '删除位',
   `_c`                   timestamp comment '创建时间'
);

alter table admin_groups comment '管理员分组';

/*==============================================================*/
/* Table: admins                                                */
/*==============================================================*/
create table admins
(
   admin_id             int primary key auto_increment comment '管理员id',
   admin_name           varchar(30) comment '显示名称',
   admin_account        varchar(16) comment '登录账号',
   admin_pwd            char(32) comment '登录密码',
   `group`                int comment '分组',
   `_c`                   timestamp default CURRENT_TIMESTAMP comment '创建时间',
   `_d`                   char(1) default '0' comment '删除位'
);

alter table admins comment '管理员';


/*==============================================================*/
/* Table: colleges                                              */
/*==============================================================*/
create table colleges
(
   college_id           int primary key auto_increment comment '学校id',
   college_name         varchar(40) comment '学校名',
   join_time            timestamp default CURRENT_TIMESTAMP comment '加入时间',
   `_d`                   char(1) default '0' comment '删除位'
);

alter table colleges comment '学校';
/*==============================================================*/
/* Table: good_types                                            */
/*==============================================================*/
create table good_types
(
   type_id              int primary key auto_increment comment '类型id',
   type_name            varchar(30) comment '商品类型名',
   `_d`                   char(1) default '0' comment '删除位',
   parent               int default 0 comment '父节点'
);

alter table good_types comment '商品类型';

/*==============================================================*/
/* Table: goods                                                 */
/*==============================================================*/
create table goods
(
   good_id              int primary key auto_increment comment 'good_id',
   post_id              int comment '动态id',
   type_id              int comment '类型id',
   good_number          smallint comment '数量',
   good_price           numeric(2,0) comment '价格',
   original_price       numeric(2,0) comment '原价',
   images               text comment '图片',
   pay_type             char(1) comment '支付方式',
   `_d`                   char(1) default '0' comment '删除位',
   `_c`                   timestamp default CURRENT_TIMESTAMP comment '创建时间',
   create_by            int comment '发布者',
   tags                 varchar(255) comment '标签'
);

alter table goods comment '商品';

/*==============================================================*/
/* Table: goods_record                                          */
/*==============================================================*/
create table goods_record
(
   record_id            int primary key auto_increment comment 'record_id',
   good_id              int comment '商品号',
   user_id              int comment '用户id',
   `_c`                   timestamp default CURRENT_TIMESTAMP comment '创建时间',
   buy_num              smallint comment '购买数量',
   total                numeric(2,0) comment '总价'
);

alter table goods_record comment '商品交易记录';


/*==============================================================*/
/* Table: posts                                                 */
/*==============================================================*/
create table posts
(
   post_id              int primary key auto_increment comment '动态id',
   post_title           varchar(255) comment '动态标题',
   post_content         text comment '动态内容',
   contact              char(11) comment '联系电话',
   contact_wx           char(30) comment '联系微信',
   create_by            int comment '创建人',
   `_d`                   char(1) default '0' comment '删除位',
   `_c`                   timestamp default CURRENT_TIMESTAMP comment '创建时间'
);

alter table posts comment '动态表';


/*==============================================================*/
/* Table: task_details                                          */
/*==============================================================*/
create table task_details
(
   detail_id            int primary key auto_increment comment 'detail_id',
   task_id              int comment '任务id',
   `_c`                   timestamp default CURRENT_TIMESTAMP comment '创建时间',
   `_d`                   char(1) default '0' comment '删除位',
   state                char(1) comment '状态',
   user                 int comment '报名人'
);

alter table task_details comment '任务详情';

/*==============================================================*/
/* Table: task_reply                                            */
/*==============================================================*/
create table task_reply
(
   reply_id             int primary key auto_increment comment 'reply_id',
   post_id              int comment '动态id',
   reply_user           int comment '回复人',
   reply_content        text comment '回复内容',
   `_c`                   timestamp default CURRENT_TIMESTAMP comment '回复时间',
   `_d`                   char(1) default '0' comment '删除位'
);

alter table task_reply comment '任务评论表';

/*==============================================================*/
/* Table: task_type                                             */
/*==============================================================*/
create table task_type
(
   type_id              int primary key auto_increment comment '任务类型',
   type_name            longblob comment '类型名',
   `_d`                   char(1) default '0' comment '删除位'
);

alter table task_type comment '任务类型';


/*==============================================================*/
/* Table: tasks                                                 */
/*==============================================================*/
create table tasks
(
   task_id              int primary key auto_increment comment '任务id',
   type_id              int comment '任务类型',
   post_id              int comment '动态id',
   start_time           datetime comment '开始时间',
   end_time             datetime comment '结束时间',
   reward_type          char(1) comment '酬劳类型',
   money                numeric(2,0) comment '酬劳金额',
   reward               varchar(30) comment '酬劳（选填）',
   number               smallint comment '人数(-1代表无限制)',
   state                char(1) default '0' comment '状态(记录任务进度)',
   review               char(1) comment '是否需要审核才能开始',
   `_d`                   char(1) default '0',
   `_c`                   timestamp default CURRENT_TIMESTAMP
);

alter table tasks comment '任务表';


/*==============================================================*/
/* Table: users                                                 */
/*==============================================================*/
create table users
(
   user_id              int primary key auto_increment comment '用户id',
   wx_id                char(30) comment '微信账号',
   user_tel             char(11) comment '登录手机号',
   user_pwd             char(32) comment '登录密码',
   user_sex             char(1) comment '性别',
   college              int comment '所在学校',
   `_d`                   char(1) default '0' comment '删除位',
   `_c`                   timestamp default CURRENT_TIMESTAMP comment '创建时间'
);

alter table users comment '用户表';


alter table admins add constraint FK_Reference_1 foreign key (`group`)
      references admin_groups (group_id) on delete restrict on update restrict;

alter table good_types add constraint FK_Reference_14 foreign key (parent)
      references good_types (type_id) on delete restrict on update restrict;

alter table goods add constraint FK_Reference_13 foreign key (create_by)
      references users (user_id) on delete restrict on update restrict;

alter table goods add constraint FK_Reference_17 foreign key (type_id)
      references good_types (type_id) on delete restrict on update restrict;

alter table goods add constraint FK_Reference_9 foreign key (post_id)
      references posts (post_id) on delete restrict on update restrict;

alter table goods_record add constraint FK_Reference_15 foreign key (good_id)
      references goods (good_id) on delete restrict on update restrict;

alter table goods_record add constraint FK_Reference_16 foreign key (user_id)
      references users (user_id) on delete restrict on update restrict;

alter table task_details add constraint FK_Reference_11 foreign key (user)
      references users (user_id) on delete restrict on update restrict;

alter table task_details add constraint FK_Reference_7 foreign key (task_id)
      references tasks (task_id) on delete restrict on update restrict;

alter table task_reply add constraint FK_Reference_12 foreign key (reply_user)
      references users (user_id) on delete restrict on update restrict;

alter table task_reply add constraint FK_Reference_5 foreign key (post_id)
      references posts (post_id) on delete restrict on update restrict;

alter table tasks add constraint FK_Reference_6 foreign key (type_id)
      references task_type (type_id) on delete restrict on update restrict;

alter table tasks add constraint FK_Reference_8 foreign key (post_id)
      references posts (post_id) on delete restrict on update restrict;

alter table users add constraint FK_Reference_2 foreign key (college)
      references colleges (college_id) on delete restrict on update restrict;

