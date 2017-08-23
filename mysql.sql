CREATE TABLE colleges(
college_id INT PRIMARY KEY AUTO_INCREMENT COMMENT '学校id',
college_name VARCHAR(50) NOT NULL
) COMMENT '学校表' ENGINE='innodb' CHARSET='utf8';

CREATE TABLE users(
user_id INT PRIMARY KEY AUTO_INCREMENT COMMENT '用户id',
`@create` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
`@live` TINYINT DEFAULT 0 COMMENT '是否被禁用'
)COMMENT '用户表' ENGINE='innodb' CHARSET='utf8';

CREATE TABLE admins(
admin_id  INT PRIMARY KEY AUTO_INCREMENT COMMENT '管理员id',
`@create` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
)COMMENT '管理员表' ENGINE='innodb' CHARSET='utf8';


CREATE TABLE accounts(
id INT PRIMARY KEY AUTO_INCREMENT,
account CHAR(11) NOT NULL UNIQUE COMMENT '登录账号',
`password` CHAR(32) NOT NULL COMMENT '登录密码',
nicename VARCHAR(50) NOT NULL COMMENT '帐号昵称',
avatar VARCHAR(50) COMMENT '帐号头像',
gender TINYINT DEFAULT 0 COMMENT '性别(0:未知,1:男,2:女)',
college INT COMMENT '学校' ,
user_id INT  ,
admin_id INT ,
FOREIGN KEY (college) REFERENCES colleges(college_id) ,
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (admin_id) REFERENCES admins(admin_id) 
)COMMENT '登录表' ENGINE='innodb' CHARSET='utf8';



create table admin_groups(
group_id INT PRIMARY KEY AUTO_INCREMENT,
group_name varchar(50) not null comment '管理员组名',
`@create` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
)COMMENT '管理员组' ENGINE='innodb' CHARSET='utf8';


create table run_orders(
run_order_id int PRIMARY KEY AUTO_INCREMENT,
run_order_content text comment '内容',
run_order_title varchar(100) comment '标题',
college int ,
gender_constraint tinyint default 0 comment '性别限制(0:不限,1:男性,2:女性)',
creater int not null comment '创建人',
`@create` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
FOREIGN KEY (creater) REFERENCES users(user_id)
)cOMMENT '跑单表' ENGINE='innodb' CHARSET='utf8';


create table run_order_details(
id int pRIMARY KEY AUTO_INCREMENT,
run_order_id int not null comment '跑单id',
money varchar(15) not null comment '格式(本金,佣金)',
user_id int comment '用户(为谁跑单)',
runner int comment '跑跑(跑单人)',
contact VARCHAR(50) comment '联系人',
contact_number char(11) comment '联系电话',
address varchar(100) comment '送达地址',
demands VARCHAR(100) comment '附加需求',
status tinyint default 0 comment '订单状态',
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (runner) REFERENCES users(user_id),
FOREIGN KEY (run_order_id) REFERENCES run_orders(run_order_id)
)COMMENT '跑单详情表' ENGINE='innodb' CHARSET='utf8';