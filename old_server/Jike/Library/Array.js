//去除数组重复的值
Array.prototype.unique = function () {

    let hash = {}, result = [], type = '', item;
    for (let i = 0; i < this.length; i++) {
        item = this[i];
        type = Object.prototype.toString.call(item);

        if (!hash[item + type]) {
            hash[item + type] = true;
            result.push(item);
        }
    }
    return result;
};
Object.defineProperty(Array.prototype, 'remove', {
    writable: false,
    enumerable: false,
    configurable: true,
    value: function (key) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] == key) {
                this.splice(i, 1);
                break;
            }
        }
        console.log(this)
    }
});
Date.prototype.format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}


