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

