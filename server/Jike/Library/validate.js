let { ValidationError,BaseError } = require("./error")
let {Code} = require("../Code/code");
let lange = require(APP_PATH + "/config/language/zh-cn/index");
module.exports = (function () {

    function Validate() {

        Validate.error = null;
        Validate.validationData = null;
    }

    Validate.EXISTS_VALIDATE = 0; //或者0 存在字段就验证
    Validate.VALUE_VALIDATE = 1; //或者1 值不为空的时候验证
    Validate.MUST_VALIDATE = 2; //或者2 必须验证
    let validateData = {};
    let error = {}
    /**
     * params 参数
     * validate 参数验证条件
     */
    Validate.autoCheck = (params, validate) => {

        //设置参数
        this.validateData = {};
        //初始化验证参数和错误
        this.error = null;
        //遍历验证条件
        for (let validKey in validate) {

            //当存在指定字段的验证条件和验证参数时 才进行验证
            if (validate[validKey] || validate[validKey].length != 0) {

                /**
                 * 获取验证类型，和验证条件
                 * 
                 * verifyType 存在字段就验证||必须验证||值不为空的时候验证
                 */
                let [verifyType, ...fieldVerify] = validate[validKey];

                switch (verifyType) {
                    case 0: {
                        //存在就验证
                        if (validKey in params) {
                            Validate._validateField(validKey, fieldVerify, params[validKey]);
                        }
                        break;
                    }
                    case 1: {

                        //当参数存在不为空的时候
                        if (validKey in params && (!(typeof params[validKey] == 'string') || params[validKey].trim() != '')) {
                            Validate._validateField(validKey, fieldVerify, params[validKey]);
                        }
                        break;
                    }
                    case 2:
                    default: {
                        //必须验证
                        Validate._validateField(validKey, fieldVerify, params[validKey]);
                        break;
                    }
                }
            }
        }
        if (this.error) {
            //参数错误
            throw new ValidationError(this.error);
        }
        //合并参数
        return Object.assign(params, this.validateData);
    }
    /**
     * 字段验证条件 字段值
     * fieldKey 字段名
     * fieldVerify 字段验证条件
     * fieldValue 字段值
     */
    Validate._validateField = (fieldKey, fieldVerify, fieldValue) => {

        //遍历字段的驗證條件
        for (let fieldVerifyItem of fieldVerify) {


            let [ruleValue, error, rule = 'regex'] = fieldVerifyItem;
            try {
                ruleValue = JSON.parse(ruleValue)
            } catch (e) {
                console.log("是纯字符,不是number或者数组对象的字符串格式");
            } finally {
                //如果驗證失敗就設置驗證錯誤提示信息
                if (!Validate._validateItem(fieldValue, ruleValue, rule)) {
                    if (!this.error) {
                        this.error = {}
                    }
                    this.error[fieldKey] = lange[error];
                    return;
                }
            }
        }
        //全部驗證完  並且沒有指定字段的錯誤信息 就報存數據
        if (this.validateData.hasOwnProperty(fieldKey)) {
            this.validateData[fieldKey] = fieldValue;
        }
    }
    /**
     * 验证参数的值和规则
     * value 字段值
     * ruleValue 验证条件
     * rule 验证條件规则
     */

    Validate._validateItem = (value='', ruleValue, rule) => {

        //如果验证规则是
        if (Object.prototype.toString.call(ruleValue) === '[object RegExp]' && rule != 'regex') {
            throw new BaseError(Code.SERVER_ERR, "请保证验证条件和验证类型都为regex");
        }
        switch (rule) {

            case 'varType': {

                switch (ruleValue) {
                    case 'Number': {
                        return Object.prototype.toString.call(value) == '[object Number]';
                    }
                    case 'Array': {
                        return Object.prototype.toString.call(value) == '[object Array]';
                    }
                    case 'object': {
                        return Object.prototype.toString.call(value) == '[object Array]';
                    }
                    case 'NumberArray': {

                        if (Object.prototype.toString.call(value) == '[object Array]') {

                            for (let k in value) {
                                if (Object.prototype.toString.call(value[k]) !== '[object Number]') {
                                    return false;
                                }
                            }
                        }
                        return true;
                    }
                    case 'StringArray': {
                        console.log(Object.prototype.toString.call(value))
                        if (Object.prototype.toString.call(value) == '[object Array]') {
                            
                            for (let k in value) {
                                
                                if (Object.prototype.toString.call(value[k]) !== '[object String]') {
                                    return false;
                                }
                            }
                            return true;
                        }
                        return false;
                    }
                }
            }
            case 'length': {

                value = value+'';
                //判断规则的值是数字
                if (typeof ruleValue === 'number') {
                    return value.length == ruleValue;
                }
                //判断规则是数组
                if (Object.prototype.toString.call(ruleValue) === '[object Array]' && ruleValue.length == 2 && ruleValue[0] < ruleValue[1]) {

                    return value.length >= ruleValue[0] && value.length <= ruleValue[1];
                }
                throw new BaseError(Code.SERVER_ERR, ruleValue + ":规则要么是number  要么是一个区间数组");
                break;
            }
            case 'in':
            case 'notin': {
                //判断规则是数组
                if (Object.prototype.toString.call(ruleValue) === '[object Array]') {
                    return rule == 'in' ? ruleValue.includes(value) : !ruleValue.includes(value);
                }
                throw new BaseError(Code.SERVER_ERR, ruleValue + ":规则必须是数组");
                break;
            }
            case 'between':
            case 'notbetween': {
                //判断规则是数组
                if (Object.prototype.toString.call(ruleValue) === '[object Array]' && ruleValue.length == 2 && ruleValue[0] < ruleValue[1]) {

                    return rule == 'between' ? value > ruleValue[0] && value < ruleValue[1] : !(value > ruleValue[0] && value < ruleValue[1]);
                }
                throw new BaseError(Code.SERVER_ERR, ruleValue + ":规则必须是一个区间数组");
                break;
            }
            case 'equal':
            case 'notequal': {
                return rule == 'equal' ? value === ruleValue : value !== ruleValue;
            }
            case 'regex':
            default: {
                return Validate._regex(value, ruleValue);
            }
        }
    }
    /**
     * 正则验证
     * value 字段值
     * rule 正则规则
     */
    Validate._regex = (value = '', ruleValue) => {

        let regexs = {
            'require': /\S+/,
            'email': /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            'tel': /^((13[0-9])|(15[^4,\D])|(18[0,0-9]))\d{8}$/g,
            'number': /^\d+$/g
        };

        if (ruleValue in regexs) {
            ruleValue = regexs[ruleValue];
        }
        try {
            //正则转换
            //如果验证规则不是regex  就转换
            if (Object.prototype.toString.call(ruleValue) !== '[object RegExp]') {
                ruleValue = eval(ruleValue);
            }
            return ruleValue.test(value);
        } catch (e) {

            console.log(e)
            throw new ValidationError(500, "验证规则不是正则表达式哟");
        }
    }
    return Validate;
})();

