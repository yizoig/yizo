let Mysql = require("./mysql");
module.exports = class Model extends Mysql {



    constructor() {
        super();
        this._data = {};
    }
    /**
     * 覆盖msyql方法
     * @param {*} sql 
     * @param {*} options 
     */
    async query(sql, ...options) {

        try {
            //进行字段映射
            for (let key in this._map) {
                if (options.hasOwnProperty(key)) {
                    options[this._map[key]] = options[key];
                    delete options[key];
                }
            }
            let result = await super.query({
                sql,
                // nestTables:'_',
                values: options
            });
            return result;
        } catch (e) {
            console.log(e);
            throw new BaseError(Code.SQL_ERR, "sql查询错误");
        }

    }

    //连贯操作
    /**
     * 
     * @param {*字段} _fileds 
     * 支持字符串 'id,name'
     * 支持对象  {id:'user_id',name:"user_name"}
     */
    field(_fileds) {


        switch (Object.prototype.toString.call(_fileds)) {

            case "[object String]": {
                //首先去除两边空格或者将两个以上空格转换为一个空格
                _fileds = _fileds.trim().replace(/\s\s+/, " ").replace(/\s*,\s*/, ",");
                if (!/^([a-zA-Z$_][a-zA-Z_0-9]+( as [a-zA-Z$_][a-zA-Z_0-9])?)(,[a-zA-Z$_][a-zA-Z_0-9]+( as [a-zA-Z$_][a-zA-Z_0-9])?)*$/.test(_fileds)) {
                    throw new Error("字段格式错误 格式比如：'id,name'");
                }
                //转换为数组
                _fileds = (_fileds+"").split(",");
                break;
            }
            case "[object Object]": {
                for (let key in _fileds) {
                    if (!/^[a-zA-Z$_][a-zA-Z_0-9]+$/.test(_fileds[key])) {
                        throw new Error(_fileds[key] + "格式错误 必须是变量格式 格式比如：['id','name']");
                    }
                }
                break;
            }
            default: {
                throw new Error("只支持字符串和数组形式");
            }
        }

        console.log(_fileds)
        //合并字段  允许连贯
        this._data['field'] = Object.assign(this._data['field'] || {}, _fileds);

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
            case "[object String]": {
                if (!/^([a-zA-Z$_][a-zA-Z_0-9]+=\S)(&[a-zA-Z$_][a-zA-Z_0-9]+=\S)*$/.test(_data)) {
                    throw new Error("字段格式错误 格式比如：'id=1&name=2'");
                }
                break;
            }
            case "[object Object]": {
                break;
            }
            default: {
                throw new Error("只支持字符串和数组形式");
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
        // console.log(_where)
        //如果是数组  就按照数组解析
        for (let key in _where) {

            //如果是数组
            if (isArray) {

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
                        whereStr.push(this.whereCheck(_where[key], Object.prototype.toString.call(_where[key]) == "[object Array]"));
                    }
                    if (key > 0) {
                        //如果是多个条件就添加括号
                        for (let k in whereStr) {
                            if (map[k]) {
                                whereStr[k] = `(${whereStr[k]})`
                            }
                        }
                        whereStr = [whereStr.join(` ${logic} `)]
                    }
                }
            } else {
                switch (Object.prototype.toString.call(_where[key])) {
                    case "[object String]": {

                        if (key == "_logic") {
                            //判断是不是条件逻辑符
                            if (_where[key].toUpperCase() == "AND" || _where[key].toUpperCase() == "OR") {
                                logic = _where[key].toUpperCase();
                            }
                        } else {

                            whereStr.push(`\`${key}\`=${this.escape(_where[key])}`)
                        }

                        break;
                    }
                    case "[object Array]": {
                        whereStr.push(this.whereCheck(_where[key], true));
                        break;
                    }
                    case "[object Object]": {
                        whereStr.push(this.whereCheck(_where[key]));
                        break;
                    }
                    default: {
                        whereStr.push(`\`${key}\`=${this.escape(_where[key])}`)
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
            case "[object String]": {
                if (!/^([a-zA-Z$_][a-zA-Z_0-9]+=\S)( (and|or) [a-zA-Z$_][a-zA-Z_0-9]+=\S)*$/.test(_data)) {
                    throw new Error("字段格式错误 格式比如： 'id=2 and name=3 or age=5'");
                }
                //合并字段  允许连贯
                this._data['where'] = _where;
                break;
            }
            case "[object Array]": {
                this._data['where'] = this.whereCheck(_where, true);
                break;
            }
            case "[object Object]": {
                this._data['where'] = this.whereCheck(_where);
                break;
            }
            default: {
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

        _limit = _limit.join();
        if (/^[0-9]+,[1-9][0-9]*$/.test(_limit)) {
            _limit = _limit.split(",");
        } else {
            throw new Error("参数格式错误  调用方法：limit('1,10') 或者 limit(1,10)");
        }
        let beforeKey;
        for (let key in _limit) {
            if (_limit[key] <= beforeKey) {
                throw new Error("参数格式错误  开始记录必须大于结束记录");
            }
            _limit[key] = parseInt(_limit[key]);
            beforeKey = key;
        }
        this._data['limit'] = _limit;
    }
    /**
     * 分页
     * @param {*} _page 
     */
    page(..._page) {
        _page = _page.join();
        if (/^[1-9][0-9]*,[1-9][0-9]*$/.test(_page)) {
            _page = _page.split(",");
        } else {
            throw new Error("参数格式错误  page('1,10') 或者 page(1,10) 第一页为1");
        }

        for (let key in _page) {
            _page[key] = parseInt(_page[key]);
        }

        //转换为limit
        this._data['limit'] = [(_page[0] - 1) * _page[1], _page[0] * _page[1]];
    }
    group(_group) {

    }
    select() {

    }
    insert() {

    }
    update() {

    }

    /**
     * 
     * @param {*} _order 
     * 支持字符串 id desc,name,age asc
     * 支持对象 {id:"desc",name:"asc",age:"asc"}
     */
    order(_order) {

        switch (Object.prototype.toString.call(_order)) {
            case "[object String]": {

                //首先去除两边空格或者将两个以上空格转换为一个空格
                _order = _order.trim().replace(/\s\s+/, " ").replace(/\s*,\s*/, ",");
                console.log(_order)
                //匹配格式
                if (!/^[a-zA-Z$_][a-zA-Z_0-9]+(\s*(desc|asc)|)(,[a-zA-Z$_][a-zA-Z_0-9]+(\s*(desc|asc)|))*$/ig.test(_order)) {
                    throw new Error("参数格式错误  比如:id desc,name,age asc");
                }
                let _orderArr = _order.split(',');
                _order = {};
                for (let key in _orderArr) {

                    let item = (_orderArr[key] + "").split(" ");
                    _order[item[0]] = item[1] ? (item[1] + "").toUpperCase() : "ASC"
                }
                break;
            }
            case "[object Object]": {

                for (let key in _order) {
                    _order[key] = (_order[key] + "").toUpperCase();

                    if (_order[key] !== "DESC" && _order[key] !== "ASC") {
                        throw new Error("参数值必须是desc或者asc");
                    }
                }
                break
            }
            default: {
                throw new Error("参数格式错误  支持字符串或对象");
            }
        }
        this._data['order'] = _order;
    }
    distinct(_distinct) {
        this._data['distinct'] = _distinct;
    }

}