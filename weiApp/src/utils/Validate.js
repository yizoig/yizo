var Validate = (function () {
  function Validate() {
    //this.error = null;
    //this.validationData = null;
    //this.validate = null;
  }

  Validate.EXISTS_VALIDATE = 0; //或者0 存在字段就验证（默认）
  Validate.MUST_VALIDATE = 1; //或者1 必须验证
  Validate.VALUE_VALIDATE = 2; //或者2 值不为空的时候验证验证时间：
  Validate.MODEL_INSERT = 1; //或者1新增数据时候验证
  Validate.MODEL_UPDATE = 2; //或者2编辑数据时候验证
  Validate.MODEL_BOTH = 3; //或者3全部情况下验证（默认）

  Validate.check = function (data, validates) {
    this.error = null;
    this.validationData = {};
    if (!validates) {
      validates = this.validate;
    }

    //去除data值中的空格
    for (let k in data) {
      if (typeof data[k] === "string") {
        data[k] = data[k].trim();
      }
    }
    for (var key in validates) {
      var validate = validates[key];
      validate[3] = validate[3] ? validate[3] : this.EXISTS_VALIDATE;
      validate[4] = validate[4] ? validate[4] : 'regex';
      switch (validate[3]) {
        case this.MUST_VALIDATE: {
          //必须验证
          this._validationField(data, validate);
          break;
        }
        case this.VALUE_VALIDATE: {
          //不为空验证
          if (!(/^\s*$/ig.test(data[validate[0]]))) {
            this._validationField(data, validate);
          }
          break;
        }
        case this.EXISTS_VALIDATE:
        default: {
          //存在验证
          if (validate[0] in data) {
            this._validationField(data, validate);
          }
          break;
        }
      }
    }
    return Object.assign(data, this.validationData);
  };
  Validate._validationField = function (data, validate) {

    if (!this._validationFieldItem(data, validate)) {
      throw new Error(validate[2]);
    }
    else {
      if (!this.validationData) {
        this.validationData = {};
      }
      this.validationData[validate[0]] = data[validate[0]];
    }
  };
  Validate._validationFieldItem = function (data, validate) {
    validate[4] = validate[4].toLowerCase();
    switch (validate[4]) {
      case 'confirm': {
        return data[validate[0]] === data[validate[1]];
      }
      default: {
        return this._check(data[validate[0]], validate[1], validate[4]);
      }
    }
  };
  Validate._check = function (value, rule, type) {
    if (type === void 0) {
      type = 'regex';
    }
    type = type.toLowerCase();
    switch (type) {
      case 'between':
      case 'notbetween': {
        if (rule.length != 2) {
          throw TypeError("验证规则类型错误");
        }
        value = parseInt(value);
        var min = rule[0];
        var max = rule[1];
        return type == 'between' ? min <= value && value <= max : min > value || value > max;
      }
      case 'notin':
      case 'in': {
        return type == 'notin' ? rule.indexOf(value + '') == -1 : rule.indexOf(value + '') > -1;
      }
      case 'equal':
      case 'notequal': {
        return type == 'equal' ? value === rule : value !== rule;
      }
      case 'length': {
        var min = rule[0];
        var max = rule[1];
        var length_1 = value.length;
        return min <= length_1 && length_1 <= max;
      }
      case 'regex':
      default: {
        return this.regex(rule, value);
      }
    }
  };
  Validate.regex = function (reg, value) {
    var validate = {
      'require': /\S+/,
      'email': /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      'tel': /^((13[0-9])|(15[^4,\D])|(18[0,0-9]))\d{8}$/g,
      'api': /^(((\/[A-Za-z0-9-+.]+)|(\/:[^0-9]\w*)))+$/g,
      'number': /^\d+$/g
    };
    if (reg in validate) {
      reg = validate[reg];
    }
    try {
      return reg.test(typeof value !== 'undefined' ? value : '');
    }
    catch (e) {
      console.log(e)
      return false;
    }
  };
  return Validate;
}());
export default Validate;