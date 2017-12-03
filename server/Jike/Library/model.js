let Mysql = require("../Db/mysql");
let { BaseError } = require('../Library/error')
let { Code } = require("../Code/code");

module.exports = class Model extends Mysql {

    constructor(table) {
        super();
        this._data = {};
        if (table && Object.prototype.toString.call(table) === "[object String]") {
            this._data['table'] = table;
        }
    }
    /**
     * 字段映射处理
     */
    map_handle(data) {

        for (let key in data) {
            //过滤undefined的数据
            if (typeof options[key] == "undefined") {
                delete options[key];
                continue;
            }
            if (options.hasOwnProperty(key)) {
                options[this._map[key]] = options[key];
                delete options[key];
            }
        }
    }
    /**
     * 字段过滤
     * isFilter = true表示前面的filter中的字段是过滤字段
     * isFilter = false表示前面的filter中的字段是非过滤字段
     */
    filter_handle(data, filter = [], isFilter = true) {

        let filterObj = {};
        let notFilterObj = {};
        for (let key in data) {
            //过滤undefined的数据
            if (isFilter && filter.indexOf(key) != -1) {
                filterObj[key] = data[key];
            } else {
                notFilterObj[key] = data[key];
            }
        }
        return filterObj;
    }

    /**
     * 覆盖msyql方法
     * @param {*} sql
     * @param {*} options
     */
    async query(sql, ...options) {
        sql = sql.replace(/\s+/g,' ');
        try {
            //进行字段映射
            let result = await super.query({
                sql,
                // nestTables:'_',
                values: options
            });
            return result;
        } catch (e) {
            console.log(e);
            throw new BaseError(Code.SQL_ERR,e.message);
        }

    }
    table(_table) {

        if (Object.prototype.toString.call(_table) === "[object String]") {

            _table = _table.split(',').join('`,`')
            if (!this._data['table']) {
                this._data['table'] = `\`${_table}\``;
            } else {
                this._data['table'] += `,\`${_table}\``;
            }
        } else {
            throw new Error("table:参数无效");
        }
        return this;
    }

    alias(_alias) {
        if (Object.prototype.toString.call(_alias) === "[object String]") {
            this._data['alias'] = _alias;
        } else {
            throw new Error("alias:参数无效");
        }
        return this;
    }
    //连贯操作
    /**
     *
     * @param {*字段} _fileds
     * 支持字符串 'id,name'
     */
    field(_fileds) {

        if (Object.prototype.toString.call(_fileds) !== "[object String]") {
            throw new Error("只支持字符串");
        }
        //首先去除两边空格或者将两个以上空格转换为一个空格
        _fileds = _fileds
            .trim()
            .replace(/\s\s+/, " ")
            .replace(/\s*,\s*/g, ",")
            .replace(/\s+as\s+/g, ' AS ');
        //转换为数组 去除重复的值
        _fileds = (_fileds + "").split(",");

        for (let i = 0; i <= _fileds.length; i++) {
            if (_fileds[i])
                _fileds[i] = _fileds[i].replace(/(([a-zA-Z$_@][@a-zA-Z_0-9]*\()?([@a-zA-Z$_*][@a-zA-Z_0-9]*)(\))?)(\SAS\S+)?/, (...data) => {

                    if (data[3] != "*") {
                        data[3] = `\`${data[3]}\``
                    }
                    return (data[2] || '').toUpperCase() + data[3] + (data[4] || '') + (data[5] || '')
                });
        }
        //合并字段  允许连贯  (unique使用的是自定义的函数 Array.property.unique)
        this._data['field'] = _fileds.concat(this._data['field'] || []).unique();
        return this;
    }
    /**
     *
     * @param {*数据} _data
     * 支持字符串 'id=1&name=2'
     * 支持对象 {id:1,name:2}
     *
     */
    data(_data) {

        switch (Object.prototype.toString.call(_data)) {
            case "[object String]":
                {
                    //去除空格
                    _data = _data
                        .trim()
                        .replace(/\s\s+/, " ")
                        .replace(/\s*(&|=)\s*/g, "$1");
                    console.log(_data)
                    if (!/^([a-zA-Z$_][a-zA-Z_0-9]+=\S)(&[a-zA-Z$_][a-zA-Z_0-9]+=\S)*$/.test(_data)) {
                        throw new Error("字段格式错误 格式比如：'id=1&name=2'");
                    }
                    _data = _data.split('&');
                    let newData = {};
                    for (let i = 0; i < _data.length; i++) {
                        let item = _data[i].split("=");
                        newData[item[0]] = item[1];
                    }
                    _data = newData;
                }
            case "[object Object]":
                {
                    for (let key in _data) {
                        if (typeof _data[key] == "string") {
                            _data[key] = this.escape(_data[key]);
                        }
                    }
                    break;
                }
            default:
                {
                    throw new Error("只支持字符串和数组形式");
                }
        }
        //过滤掉undefined
        for (let key in _data) {
            if (typeof _data[key] == "undefined") {
                delete _data[key]
            }
        }
        //合并字段  允许连贯
        this._data['data'] = Object.assign(this._data['data'] || {}, _data);

        return this;
    }
    whereCheck(_where, isArray = false) {

        let whereStr = [];
        let logic = "AND";
        let map = [];
        // console.log(_where) 如果是数组  就按照数组解析 如果是数组
        if (isArray) {
            for (let key = 0; key < _where.length; key++) {
                //偶数
                if (key % 2 == 1 && (_where[key].toUpperCase() == "AND" || _where[key].toUpperCase() == "OR")) {

                    logic = _where[key].toUpperCase();

                } else {
                    //如果不是数组或对象就保存
                    if (Object.prototype.toString.call(_where[key]) !== "[object Array]" && Object.prototype.toString.call(_where[key]) !== "[object Object]") {

                        whereStr.push(this.escape(_where[key]));
                        map.push(false);

                    } else {
                        map.push(Object.getOwnPropertyNames(_where[key]).length > 1);
                        console.log(_where[key])
                        whereStr.push(this.whereCheck(_where[key], Object.prototype.toString.call(_where[key]) == "[object Array]"));
                    }
                    if (key > 0) {
                        //如果是多个条件就添加括号
                        for (let k in whereStr) {

                            if (!whereStr[k]) {
                                whereStr[k] = '1=1'
                                continue;
                            }
                            if (map[k]) {
                                whereStr[k] = `(${whereStr[k]})`
                            }
                        }
                        whereStr = [whereStr.join(` ${logic} `)]
                    }
                }
            }
        } else {
            for (let key in _where) {
                if (typeof _where[key] == "undefined") {
                    delete _where[key]
                }
            }
            for (let key in _where) {
                switch (Object.prototype.toString.call(_where[key])) {
                    case "[object String]":
                        {

                            if (key == "_logic") {
                                //判断是不是条件逻辑符
                                if (_where[key].toUpperCase() == "AND" || _where[key].toUpperCase() == "OR") {
                                    logic = _where[key].toUpperCase();
                                }
                            } else {
                                whereStr.push(`${key}=${this.escape(_where[key])}`)
                            }

                            break;
                        }
                    case "[object Array]":
                        {
                            //如果数组包裹的值也是数组就继续解析逻辑符号

                            if (!isArray && typeof _where[key][0] == 'string') {

                                _where[key][0] = _where[key][0].toUpperCase();
                                switch (_where[key][0]) {
                                    case "=":
                                    case "<>":
                                    case "!=":
                                    case "<":
                                    case ">":
                                    case "<=":
                                    case "<=":
                                    case "LIKE":
                                    case "NOT LIKE":
                                        {
                                            whereStr.push(`\`${key}\` ${_where[key][0]} '${_where[key][1]}'`);
                                            break;
                                        }
                                    case "BETWEEN":
                                    case "NOT BETWEEN":
                                        {
                                            whereStr.push(`\`${key}\` ${_where[key][0]} ${_where[key][1]} AND ${_where[key][2]}`);
                                            break;
                                        }
                                    case "IN":
                                    case "NOT IN":
                                        {
                                            whereStr.push(`\`${key}\` ${_where[key][0]} (${_where[key][1].join(',')})`);
                                            break;
                                        }
                                    case "IS NULL":
                                    case "IS NOT NULL":
                                        {
                                            whereStr.push(`\`${key}\` ${_where[key][0]}`);
                                            break;
                                        }
                                    default:
                                        {
                                            throw new Error("不存在的条件判断符号")
                                        }
                                }
                            } else {
                                whereStr.push(this.whereCheck(_where[key], true));
                            }
                            break;
                        }
                    case "[object Object]":
                        {
                            whereStr.push(this.whereCheck(_where[key]));
                            break;
                        }
                    default:
                        {
                            whereStr.push(`${key}=${this.escape(_where[key])}`)
                        }
                }
            }
        }

        return `${whereStr.join(` ${logic} `)}`
    }
    /**
     *
     * @param {*条件} _where
     * 支持字符串 'id=2 and name=3 or age=5'
     * 支持对象 {id:2,name:3,age:5}  ===> id=2 and name=3 and age=5;
     * 支持数组 [{ id: 1 }, "or", { name: 2 ,sex:3}]
     * };
     */
    where(_where) {

        switch (Object.prototype.toString.call(_where)) {
            case "[object String]":
                {
                    if (!/^([a-zA-Z$_][a-zA-Z_0-9]+=\S)( (and|or) [a-zA-Z$_][a-zA-Z_0-9]+=\S)*$/.test(_data)) {
                        throw new Error("字段格式错误 格式比如： 'id=2 and name=3 or age=5'");
                    }
                    //合并字段  允许连贯
                    this._data['where'] = _where;
                    break;
                }
            case "[object Array]":
                {

                    this._data['where'] = this.whereCheck(_where, true);
                    break;
                }
            case "[object Object]":
                {
                    this._data['where'] = this.whereCheck(_where);
                    break;
                }
            default:
                {
                    throw new Error("只支持字符串、数组和对象形式");
                }
        }
        return this;

    }
    /**
     *
     * @param {*} _limit
     * 支持 传递一个参数 limit('1,10')
     * 支持 传递两个参数 limit(1,10)
     */
    limit(..._limit) {

        //如果传递一个参数 join相当于没有执行 如果传递两个参数就会用，号连接
        _limit = _limit.join();

        if (/^[0-9]+,[1-9][0-9]*$/.test(_limit)) {
            _limit = _limit.split(",");
        } else {
            throw new Error("参数格式错误  调用方法：limit('1,10') 或者 limit(1,10)");
        }
        this._data['limit'] = _limit;
        return this;
    }
    /**
     * 分页
     * @param {*} _page
     */
    page(..._page) {
        _page = _page.join();
        if (/^[0-9]*,[1-9][0-9]*$/.test(_page)) {
            _page = _page.split(",");
        } else {
            throw new Error("参数格式错误  page('0,10') 或者 page(0,10) 第一页为0");
        }

        //转换为limit
        this._data['limit'] = [(_page[0]) * _page[1], _page[1]];
        return this;
    }
    //生成sql语句
    createSql(type) {

        let sql;
        let { field, limit, where, order, table, data, join: tjoin = [''], group, having } = this._data;
        if (!table) {
            throw new Error("请选择操作的表");
        }
        if (order) {
            let newOrder = [];
            for (let key in order) {
                newOrder.push(`${key} ${order[key]}`)
            }
            order = newOrder;
        }
        switch (type) {
            case "SELECT":
                {
                    sql = `SELECT 
                            ${field ? field.join(',') : '*'} 
                            FROM ${table}
                            ${tjoin.join(" ")} 
                            ${!where ? '' : ('WHERE ' + where)}
                            ${!order ? '' : (' ORDER BY ' + order.join(','))}
                            ${!limit ? '' : (' LIMIT ' + limit.join(','))}
                            ${!group ? '' : (' GROUP BY ' + group)}
                            ${!having ? '' : (' HAVING ' + having)}
                        ;`
                    break;
                }
            case "INSERT":
                {
                    let newData = [];
                    let newField = []
                    for (let key in data) {
                        newField.push('`' + key + '`');
                        newData.push(data[key]);
                    }
                    sql = `INSERT INTO 
                        ${table}(${newField.join(',')}) 
                        VALUES(${newData.join(',')}) 
                        ${where && 'WHERE ' + where};`
                    break;
                }
            case "UPDATE":
                {
                    let newData = [];
                    for (let key in data) {
                        newData.push(`${key}=${data[key]}`);
                    }
                    sql = `UPDATE ${table} SET ${newData.join()} ${where && 'WHERE ' + where};`
                    break;
                }
            default:
                {
                    throw new Error("sql类型错误");
                }
        }
        //清空数据
        this._data = {
            table: this._data.table
        };
        this._data['sql'] = sql;
    }
    group(_group) {

        if (Object.prototype.toString.call(_group) === "[object String]") {
            this._data['group'] = _group;
        } else {
            throw new Error("参数必须是string")
        }
        return this;
    }
    having(_having) {
        if (Object.prototype.toString.call(_having) === "[object String]") {
            this._data['having'] = _having;
        } else {
            throw new Error("参数必须是string")
        }
        return this;
    }
    async select() {
        this.createSql("SELECT")
        return await this.query(this._data['sql'])
    }
    async insert() {
        this.createSql("INSERT")
        return await this.query(this._data['sql'])
    }
    async update() {
        this.createSql("UPDATE")
        return await this.query(this._data['sql'])
    }
    /**
     *
     * @param {*} _order
     * 支持字符串 id desc,name,age asc
     * 支持对象 {id:"desc",name:"asc",age:"asc"}
     */
    order(_order) {
        switch (Object.prototype.toString.call(_order)) {
            case "[object String]":
                {
                    //首先去除两边空格或者将两个以上空格转换为一个空格
                    _order = _order
                        .trim()
                        .replace(/\s\s+/, " ")
                        .replace(/\s*,\s*/, ",");
                    //匹配格式
                    if (!/^[a-zA-Z$_][a-zA-Z_0-9]*(\s*(desc|asc)|)(,[a-zA-Z$_][a-zA-Z_0-9]*(\s*(desc|asc)|))*$/ig.test(_order)) {
                        throw new Error("参数格式错误  比如:id desc,name,age asc");
                    }
                    _order = _order.split(',');

                    let newOrder = {};
                    for (let i = 0; i < _order.length; i++) {
                        let item = _order[i].split(" ");
                        newOrder[item[0]] = (typeof item[1] === "undefined") ? "ASC" : item[1];
                    }
                    _order = newOrder;
                }
            case "[object Object]":
                {

                    for (let key in _order) {

                        if (typeof _order[key] == "undefined") {
                            continue;
                        }
                        _order[key] = (_order[key] + "").toUpperCase();
                        if (_order[key] !== "DESC" && _order[key] !== "ASC") {
                            throw new Error("参数值必须是desc或者asc");
                        }
                    }
                    break
                }
            default:
                {
                    throw new Error("参数格式错误  支持字符串或对象");
                }
        }
        this._data['order'] = Object.assign(this._data['order'] || {}, _order);
        return this;
    }
    distinct(_distinct) {
        this._data['distinct'] = _distinct;
        return this;
    }
    /**
     * 连接
     */
    join(_join) {

        if (!this._data['join']) {
            this._data['join'] = [''];
        }
        if (typeof _join === "string") {

            _join = _join.trim();
            if (!/^((right|left|inner)\s+)?join/.test(_join)) {
                _join = 'join ' + _join;
            }
            this._data['join'].push(_join);
        }
        return this;
    }

    /**
     * 内置函数
     */
    async count() {

        //设置字段为count()
        this._data['field'] = [];
        let [{ count }] = await this.field('COUNT(*) as count').select();
        return count;
    }
    async min(field) {

        //设置字段为min()
        this._data['field'] = [];
        let [{ min }] = await this.field(`MIN(${field}) as min`).select();
        return min;
    }
    async max(field) {

        //设置字段为max()
        this._data['field'] = [];
        let [{ max }] = await this.field(`MAX(${field}) as max`).select();
        return max;
    }
    async avg(field) {

        //设置字段为avg()
        this._data['field'] = [];
        let [{ avg }] = await this.field(`AVG(${field}) as avg`).select();

        return avg;
    }
    async sum(field) {

        //设置字段为sum()
        this._data['field'] = [];
        let [{ sum }] = await this.field(`SUM(${field}) as sum`).select();

        return sum;
    }
}