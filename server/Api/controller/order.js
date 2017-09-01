let { BaseError, Code } = jike;

module.exports = class OrderController extends jike.Controller{


     /**
     * 生成id
     */
    static makeId(type) {
        let date = new Date();
        let time = date.getTime() + "";
        return type+date.format("yyyyMMddhhmmss") + time.substr(time.length - 3);
    }
}