//import pako from 'pako';
var pako = require("pako")

const deflate = str => JSON.stringify(Object.values(pako.deflate(str)));

const inflate = str => {

    let arr = JSON.parse(str);
    let u8arr = new Uint8Array(arr.length);

    arr.forEach((e, index) => u8arr[index] = e);
    return pako.inflate(arr, { to: "string" })
}
Storage.prototype._getItem = Storage.prototype.getItem;
Storage.prototype._setItem = Storage.prototype.setItem;
Storage.prototype.getJsonItem = function (key) {

    let item = this.getItem(key)
    try {
        return JSON.parse(item);
    } catch (e) {
        return null;
    }
}
Storage.prototype.setJsonItem = function (key, data) {
    this.setItem(key, JSON.stringify(data));
}
Storage.prototype.setItem = function (key, data) {
    this._setItem(key, deflate(data));
}
Storage.prototype.getItem = function (key) {
    let item = this._getItem(key);
    if(item){

        return inflate(item)
    }else{
        return null;
    }
}

let cache = {

    get session() {
        return sessionStorage;
    },
    get local() {
        return localStorage;
    }
};

export default cache;