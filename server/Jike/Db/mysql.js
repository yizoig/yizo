let mysqlUtil = require("mysql");
//获取配置
let { mysql: config } = require(APP_PATH + "/config/server.json")

config = Object.assign({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "root",
    database: "demo",
    dateStrings: "timestamp"
}, config);
//创建连接池
var pool;
module.exports = class Mysql {

    constructor() {
        //如果连接池不存在就创建连接池
        if (!pool) {
            pool = mysqlUtil.createPool(config);
            pool.on('acquire', function (connection) {
                console.log(`连接${connection.threadId}获取`);
            });
            pool.on('enqueue', function () {
                console.log('等待获取连接');
            });
            pool.on('release', function (connection) {
                console.log('连接%d已释放', connection.threadId);
            });
        }
        //事务开启标示
        this.transFlag = false;
    }
    /**
     * 转义工具
     */
    escape(value) {
        return pool.escape(value);
    }
    /**
     * 获取链接
     */
    async getConnection() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                err && reject(err);
                //保存连接
                this.connection = connection;
                resolve();
            })
        }).catch((error) => {
            console.log(error, 1)
        });
    }
    async query(options) {

        //如果没有连接就到连接池获取连接
        this.connection || await this.getConnection();
        return new Promise((resolve, reject) => {
            //sql查询
            let query = this.connection.query(options, (err, result) => {
                err && reject(err);
                // 如果事务没有开启 那么查询成功后连接释放连接池
                if (!this.transFlag) {
                    this.connection.release();
                    this.connection = null;
                }
                resolve(result);
            });
            this.sqls = this.sqls || [];

            console.log(query.sql)
            //保存sql语句
            this.sqls.push(query.sql);
        }).catch(async (error) => {
            console.log(error)
            this.transFlag && await this.rollback();
            //释放连接

            console.log(this.connection)
            this.connection = null;
            throw error;
        });
    }
    /**
     * 开启事务
     */
    async startTrans() {

        //如果事务已经开启过  就先提交前面的事务  再开启事务
        this.transFlag && await this.commit();
        //如果没有连接就到连接池获取连接
        this.connection || await this.getConnection();
        return new Promise((resolve, reject) => {
            //使用连接池进行
            this.connection.beginTransaction((err) => {
                if (err) reject(err);
                this.transFlag = true;
                resolve();
            })
        }).catch((error) => {
            console.log(error, 1)
        });
    }
    /**
     * 回滚
     */
    async rollback() {

        if (!this.transFlag) {
            return;
        }
        return new Promise((resolve, reject) => {
            //直接reject
            this.connection.rollback(() => {
                this.transFlag = false;
                console.log("rollback")
                reject();
            });
            resolve();
        })
    }
    /**
     * 提交
     */
    async commit() {

        let that = this;
        if (!this.transFlag) {
            return;
        }
        return new Promise((resolve, reject) => {
            //resolve
            this.connection.commit(async (err) => {
                this.transFlag = false;
                console.log("commit");
                err && await that.rollback();
                resolve();
            });
        }).catch((error) => {
            console.log(error, 'commit')
        });
    }
}