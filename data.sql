/*
SQLyog Ultimate v12.5.0 (32 bit)
MySQL - 5.7.20 : Database - new_yizo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`new_yizo` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `new_yizo`;

/*Table structure for table `admin_groups` */

DROP TABLE IF EXISTS `admin_groups`;

CREATE TABLE `admin_groups` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '分组id',
  `group_name` varchar(30) DEFAULT NULL COMMENT '分组名',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `is_del` tinyint(1) NOT NULL DEFAULT '0' COMMENT '删除位',
  `is_use` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COMMENT='管理员分组';

/*Data for the table `admin_groups` */

insert  into `admin_groups`(`group_id`,`group_name`,`_c`,`is_del`,`is_use`) values 
(1,'遵义师范','2018-04-26 10:18:37',0,1),
(23,'遵义医学院','2018-04-26 10:18:44',0,1),
(24,'遵义医专','2018-04-26 10:18:52',0,0),
(25,'职高','2018-04-26 10:18:58',0,1),
(26,'干部','2018-04-26 10:19:15',1,1);

/*Table structure for table `admins` */

DROP TABLE IF EXISTS `admins`;

CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `admin_name` varchar(30) DEFAULT NULL COMMENT '显示名称',
  `admin_account` varchar(16) DEFAULT NULL COMMENT '登录账号',
  `admin_pwd` char(32) DEFAULT NULL COMMENT '登录密码',
  `group` int(11) DEFAULT NULL COMMENT '分组',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `is_del` tinyint(1) DEFAULT '0' COMMENT '删除位',
  `is_use` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`admin_id`),
  KEY `FK_Reference_1` (`group`),
  CONSTRAINT `FK_Reference_1` FOREIGN KEY (`group`) REFERENCES `admin_groups` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COMMENT='管理员';

/*Data for the table `admins` */

insert  into `admins`(`admin_id`,`admin_name`,`admin_account`,`admin_pwd`,`group`,`_c`,`is_del`,`is_use`) values 
(1,'李凌云1','admin','e10adc3949ba59abbe56e057f20f883e',1,'2018-03-30 01:10:35',0,1),
(44,'管理员A','super','e10adc3949ba59abbe56e057f20f883e',1,'2018-04-02 02:05:14',0,0),
(45,'管理员B','admin','e10adc3949ba59abbe56e057f20f883e',23,'2018-04-02 21:27:35',1,1);

/*Table structure for table `colleges` */

DROP TABLE IF EXISTS `colleges`;

CREATE TABLE `colleges` (
  `college_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '学校id',
  `college_name` varchar(40) DEFAULT NULL COMMENT '学校名',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '加入时间',
  `is_del` tinyint(1) DEFAULT '0' COMMENT '删除位',
  `is_use` tinyint(1) DEFAULT '1',
  `liveness` int(11) DEFAULT '0' COMMENT '活跃度  人气',
  `now_live` int(11) DEFAULT '0' COMMENT '今日活跃度',
  PRIMARY KEY (`college_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COMMENT='学校';

/*Data for the table `colleges` */

insert  into `colleges`(`college_id`,`college_name`,`_c`,`is_del`,`is_use`,`liveness`,`now_live`) values 
(1,'遵义师范学院','2018-04-01 01:07:09',0,1,104,25),
(31,'遵义医学院','2018-04-03 20:46:16',0,1,301,11),
(32,'遵义医药高等专科学校','2018-04-03 20:46:50',0,1,50,3),
(33,'遵义高职','2018-04-03 20:47:06',0,1,5,1),
(34,'1fff','2018-04-26 10:27:33',1,1,0,0),
(35,'ee','2018-04-26 10:27:47',1,0,0,0);

/*Table structure for table `good_buy_records` */

DROP TABLE IF EXISTS `good_buy_records`;

CREATE TABLE `good_buy_records` (
  `record_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'record_id',
  `good_id` int(11) DEFAULT NULL COMMENT '物品号',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `buy_num` smallint(6) DEFAULT NULL COMMENT '购买数量',
  `total` decimal(2,0) DEFAULT NULL COMMENT '总价',
  `state` tinyint(4) DEFAULT '0' COMMENT '(-2:放弃购买 -1：删除记录，0:下单成功，1：购买成功 ）',
  `contact_tel` char(11) DEFAULT NULL COMMENT '手机号',
  `contact` varchar(30) DEFAULT NULL COMMENT '联系人',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`record_id`),
  KEY `FK_Reference_15` (`good_id`),
  KEY `FK_Reference_16` (`user_id`),
  CONSTRAINT `FK_Reference_15` FOREIGN KEY (`good_id`) REFERENCES `goods` (`good_id`),
  CONSTRAINT `FK_Reference_16` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='物品交易记录';

/*Data for the table `good_buy_records` */

insert  into `good_buy_records`(`record_id`,`good_id`,`user_id`,`buy_num`,`total`,`state`,`contact_tel`,`contact`,`_c`,`remark`) values 
(5,6,26,1,20,-1,'18311540604','1','2018-04-26 12:21:19',NULL),
(6,6,26,1,20,-1,'18311540600','1','2018-04-26 12:22:44',NULL);

/*Table structure for table `goods` */

DROP TABLE IF EXISTS `goods`;

CREATE TABLE `goods` (
  `good_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'good_id',
  `post_id` int(11) DEFAULT NULL COMMENT '动态id',
  `good_number` smallint(6) DEFAULT NULL COMMENT '物品售卖数量',
  `good_price` decimal(2,0) DEFAULT NULL COMMENT '物品售卖价格',
  `original_price` decimal(2,0) DEFAULT NULL COMMENT '原价',
  `images` text COMMENT '图片集',
  `state` tinyint(1) DEFAULT '0' COMMENT '状态（0:创建订单,1:进行中,2:售罄 3：结束）',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`good_id`),
  KEY `FK_Reference_9` (`post_id`),
  CONSTRAINT `FK_Reference_9` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='物品';

/*Data for the table `goods` */

insert  into `goods`(`good_id`,`post_id`,`good_number`,`good_price`,`original_price`,`images`,`state`,`_c`) values 
(6,21,2,20,99,'1f8d9d31c0a277f6355120610f6e14a3-94.png,75518a1ff79bd87d313b2db4d45ad22b-29.png,90897a84fa21e80a423ffc3650146b93-62.png',0,'2018-04-23 00:45:01'),
(7,22,5,1,1,'75518a1ff79bd87d313b2db4d45ad22b-33.png,75518a1ff79bd87d313b2db4d45ad22b-26.png',-1,'2018-04-24 00:55:26');

/*Table structure for table `post_comments` */

DROP TABLE IF EXISTS `post_comments`;

CREATE TABLE `post_comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'reply_id',
  `post_id` int(11) DEFAULT NULL COMMENT '动态id',
  `user` int(11) DEFAULT NULL COMMENT '回复人',
  `content` text COMMENT '回复内容',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '回复时间',
  PRIMARY KEY (`comment_id`),
  KEY `FK_Reference_12` (`user`),
  KEY `FK_Reference_5` (`post_id`),
  CONSTRAINT `FK_Reference_12` FOREIGN KEY (`user`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FK_Reference_5` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COMMENT='动态评论表';

/*Data for the table `post_comments` */

insert  into `post_comments`(`comment_id`,`post_id`,`user`,`content`,`_c`) values 
(1,5,26,'我会装','2018-04-14 10:50:28'),
(2,5,26,'联系我吧 18311540605','2018-04-15 11:21:22'),
(3,6,26,'我也需要，同求','2018-04-19 21:18:44'),
(4,14,26,'联系我 手机号131****1111','2018-04-20 02:17:29'),
(6,21,26,'看起来不错','2018-04-23 10:12:45'),
(7,21,26,'我要了','2018-04-23 10:12:48'),
(8,6,26,'我在图书馆1楼 电话联系18311540605','2018-04-23 11:17:17'),
(9,8,27,'1月6日、1月7日、1月13日等','2018-04-23 11:20:36'),
(10,6,26,'我找到了 谢谢','2018-04-23 11:54:20'),
(14,22,26,'afa ','2018-04-24 17:43:55'),
(15,22,26,'afafafaf','2018-04-24 17:43:59'),
(16,23,26,'你是十二','2018-04-26 11:46:45'),
(17,22,26,'看看','2018-04-26 13:35:44');

/*Table structure for table `post_types` */

DROP TABLE IF EXISTS `post_types`;

CREATE TABLE `post_types` (
  `type_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '类型id',
  `type_name` varchar(30) DEFAULT NULL COMMENT '物品类型名称',
  `_c` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_del` tinyint(1) DEFAULT '0' COMMENT '删除位',
  `is_use` tinyint(1) DEFAULT '1',
  `parent` int(11) DEFAULT '0' COMMENT '父节点',
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COMMENT='动态类型';

/*Data for the table `post_types` */

insert  into `post_types`(`type_id`,`type_name`,`_c`,`is_del`,`is_use`,`parent`) values 
(1,'任务','2018-04-02 02:13:36',0,1,0),
(2,'闲置','2018-04-02 02:13:44',0,1,0),
(22,'帮忙','2018-04-03 11:58:16',0,1,1),
(23,'求助','2018-04-03 11:58:18',0,1,1),
(24,'问答','2018-04-03 11:58:20',0,1,1),
(25,'技术服务','2018-04-03 11:58:20',0,0,1),
(26,'男装','2018-04-03 11:58:20',0,1,2),
(27,'女装','2018-04-03 11:58:21',0,1,2),
(29,'图书','2018-04-13 01:20:47',0,1,2),
(30,'f','2018-04-26 10:29:29',1,1,1);

/*Table structure for table `posts` */

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '动态id',
  `post_title` varchar(255) DEFAULT NULL COMMENT '动态标题',
  `post_content` text COMMENT '动态内容',
  `contact` varchar(30) DEFAULT NULL COMMENT '联系人',
  `contact_tel` char(11) DEFAULT NULL COMMENT '联系电话',
  `create_by` int(11) DEFAULT NULL COMMENT '创建人',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `college` int(11) DEFAULT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`post_id`),
  KEY `posts_colleges_college_id_fk` (`college`),
  KEY `posts_post_types_type_id_fk` (`type`),
  CONSTRAINT `posts_colleges_college_id_fk` FOREIGN KEY (`college`) REFERENCES `colleges` (`college_id`),
  CONSTRAINT `posts_post_types_type_id_fk` FOREIGN KEY (`type`) REFERENCES `post_types` (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COMMENT='动态表';

/*Data for the table `posts` */

insert  into `posts`(`post_id`,`post_title`,`post_content`,`contact`,`contact_tel`,`create_by`,`_c`,`college`,`type`) values 
(5,'谁会装win7系统','我的window系统坏了 ，哪位同学能帮帮忙','1','1',27,'2018-04-08 09:27:24',1,25),
(6,'本人在图书馆需要type-c充电器，求借','本人在图书馆需要type-c充电器，求借','1','1',26,'2018-04-08 09:42:56',1,23),
(7,'我在新浦 有需要带东西的吗？','我在新浦 有需要带东西的吗？','1','1',28,'2018-04-08 09:43:56',1,22),
(8,'遵义师范普通话什么时候考试？？','遵义师范普通话什么时候考试？？','1','1',26,'2018-04-08 09:44:17',1,24),
(14,'求借校园一天','临时回学校，急需校园网一天，酬劳你提出','李凌云','18311540605',27,'2018-04-20 02:10:59',1,23),
(15,'谁需要带东西，我在遵义市','谁需要带东西，我在遵义市','1','18311540605',27,'2018-04-20 02:14:28',1,22),
(21,'出售一本Vc++书','这本书是新书，买了之后没有使用多久，现在用不到了。便宜出售。需要的下单后联系我','李凌云','18311540605',28,'2018-04-23 00:45:01',1,29),
(22,'VC++书','11我fffdddrrrrr','111','18311540605',26,'2018-04-24 00:55:26',1,26),
(23,'发布任务','方法','18311540605','18311540605',28,'2018-04-26 11:46:35',1,22),
(24,'1','1','1','18311540606',26,'2018-04-26 11:55:05',31,22);

/*Table structure for table `task_records` */

DROP TABLE IF EXISTS `task_records`;

CREATE TABLE `task_records` (
  `record_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'detail_id',
  `task_id` int(11) DEFAULT NULL COMMENT '任务id',
  `user` int(11) DEFAULT NULL COMMENT '报名人',
  `state` tinyint(1) DEFAULT '0' COMMENT '状态（-1：任务终止 0：报名成功 1：任务结束）',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `contact` varchar(30) DEFAULT NULL COMMENT '联系人',
  `contact_tel` char(11) DEFAULT NULL COMMENT '手机号码',
  PRIMARY KEY (`record_id`),
  KEY `FK_Reference_11` (`user`),
  KEY `FK_Reference_7` (`task_id`),
  CONSTRAINT `FK_Reference_11` FOREIGN KEY (`user`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FK_Reference_7` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`task_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='任务详情';

/*Data for the table `task_records` */

insert  into `task_records`(`record_id`,`task_id`,`user`,`state`,`_c`,`contact`,`contact_tel`) values 
(1,7,26,-1,'2018-04-14 10:02:04','李凌云','18311540605'),
(2,7,27,0,'2018-04-24 23:53:35',NULL,NULL),
(3,7,26,-1,'2018-04-26 01:44:46','1','18311540605'),
(4,7,26,-1,'2018-04-26 01:54:16','`','18311540606'),
(5,7,26,-1,'2018-04-26 01:54:43','1','13195229959'),
(6,7,28,0,'2018-04-26 02:04:33','1','18311540505'),
(7,8,26,-1,'2018-04-26 11:48:23','1','18311540065'),
(8,2,27,0,'2018-04-26 12:53:21','1','18311540605'),
(9,7,26,0,'2018-04-26 13:19:58','李凌云','18311540650');

/*Table structure for table `tasks` */

DROP TABLE IF EXISTS `tasks`;

CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '任务id',
  `post_id` int(11) DEFAULT NULL COMMENT '动态id',
  `due_date` datetime DEFAULT NULL COMMENT '截止时间',
  `reward_type` tinyint(1) DEFAULT NULL COMMENT '酬劳类型',
  `money` decimal(2,0) DEFAULT NULL COMMENT '酬劳金额',
  `reward` varchar(30) DEFAULT NULL COMMENT '其他酬劳（选填）',
  `number` smallint(6) DEFAULT '0' COMMENT '人数(-1代表无限制)',
  `state` tinyint(1) DEFAULT '0' COMMENT '状态(-1：任务终止 0：任务进行  1：任务结束)',
  `gender` tinyint(1) DEFAULT NULL COMMENT '性别限制',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`task_id`),
  KEY `FK_Reference_8` (`post_id`),
  CONSTRAINT `FK_Reference_8` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='任务表';

/*Data for the table `tasks` */

insert  into `tasks`(`task_id`,`post_id`,`due_date`,`reward_type`,`money`,`reward`,`number`,`state`,`gender`,`_c`) values 
(1,5,'2017-11-01 10:10:10',0,1,NULL,1,0,-1,'2018-04-08 09:27:24'),
(2,6,'2017-11-01 10:10:10',0,2,'',1,0,0,'2018-04-08 09:42:56'),
(3,7,'2017-11-01 10:10:10',1,NULL,'随便',5,0,1,'2018-04-08 09:43:56'),
(4,8,'2017-11-01 10:10:10',1,NULL,'无',3,0,-1,'2018-04-08 09:44:17'),
(6,14,'2018-04-20 00:00:00',1,NULL,'你开价',3,0,-1,'2018-04-20 02:10:59'),
(7,15,'2018-04-20 00:00:00',1,NULL,'不需要报酬',5,0,-1,'2018-04-20 02:14:28'),
(8,23,'2018-04-26 00:00:00',0,21,'21',5,0,0,'2018-04-26 11:46:35'),
(9,24,'2018-04-26 00:00:00',0,1,'1',1,0,0,'2018-04-26 11:55:05');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `wx_id` char(30) DEFAULT NULL COMMENT '微信账号',
  `nick_name` varchar(30) DEFAULT NULL,
  `user_tel` char(11) DEFAULT NULL COMMENT '登录手机号',
  `user_pwd` char(32) DEFAULT NULL COMMENT '登录密码',
  `user_gender` tinyint(1) DEFAULT NULL COMMENT '性别',
  `college` int(11) DEFAULT NULL COMMENT '所在学校',
  `_c` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `is_del` tinyint(1) DEFAULT '0' COMMENT '删除位',
  `is_use` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`user_id`),
  KEY `FK_Reference_2` (`college`),
  CONSTRAINT `FK_Reference_2` FOREIGN KEY (`college`) REFERENCES `colleges` (`college_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COMMENT='用户表';

/*Data for the table `users` */

insert  into `users`(`user_id`,`wx_id`,`nick_name`,`user_tel`,`user_pwd`,`user_gender`,`college`,`_c`,`is_del`,`is_use`) values 
(26,'ovlIO0UUk5_meFgw90wizuf3LBs0','李凌云',NULL,'124',1,NULL,'2018-04-06 14:35:45',0,1),
(27,'ovlIO0b1Bc1_61tIjdd7mJHizLBY','森之',NULL,'124',1,NULL,'2018-04-23 10:17:00',0,1),
(28,'ovlIO0T5KbBwQ8YH3ivVRawyjnWA','小班鱼',NULL,'124',1,NULL,'2018-04-23 10:35:19',0,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
