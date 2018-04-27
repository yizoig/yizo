let GoodModel = require("../model/good")
const md5File = require("md5-file");
const fs = require("fs");
const path = require("path");
//控制器
module.exports = class Good extends JikeJs.Controller {
    /**
     * 获取商品列表
     */
    async list({ search, creater, partner, college, type, state, page, pageSize, _d }) {
        let model = new GoodModel();
        return await model.list({ search, creater, partner, college, type, state, page, pageSize, _d })
    }
    async add({ title, content, contact, tel, images, type, price, oprice, number, college }) {

        let model = new GoodModel();
        let result = await model.add(this.user.id, { title, content, contact, tel, images, type, price, oprice, number, college });
        //移动文件
        for (let img of images) {
            let filename = path.join(__dirname, `../static/tmp/${img}`);
            if (fs.existsSync(filename)) {
                fs.renameSync(path.join(__dirname, `../static/tmp/${img}`), path.join(__dirname, `../static/good/images/${img}`));
            }
        }
        return result;
    }
    /**
     * 添加
     */
    async update({ id, title, content, contact, tel, images, type, price, oprice, number }) {
        let model = new GoodModel();
        for (let img of images) {
            let filename = path.join(__dirname, `../static/tmp/${img}`);
            if (fs.existsSync(filename)) {
                fs.renameSync(path.join(__dirname, `../static/tmp/${img}`), path.join(__dirname, `../static/good/images/${img}`));
            }
        }
        return await model.updateInfo(id, {
            title,
            content,
            contact,
            tel,
            images: images.join(),
            type, price,
            oprice,
            number
        })
    }
    /**
     * 删除
     */
    async del({ id, real }) {
        let model = new GoodModel();
        if (real == 0) {
            return await model.del(id)
        }
        return await model.disabled(id)
    }
    /**
     * 购买
     */
    async buy({ id, number, remark, contact, tel }) {
        let model = new GoodModel();
        return await model.buy(id, { number, remark, contact, tel, user: this.user.id });
    }
    /**
     * 获取基本信息
     */
    async info({ id }) {
        let model = new GoodModel();
        return await model.info(id);
    }
    /**
     * 上传文件 
     */
    async uploadImage({ images }) {

        let pathnames = [];
        for (let image of images) {
            let file = fs.readFileSync(image.path);
            let name = md5File.sync(image.path) + '-' + parseInt(Math.random() * 100) + '.png';
            fs.writeFileSync(path.join(__dirname, `../static/tmp/${name}`), file);
            pathnames.push(name);
        }
        return pathnames;
    }
    async image({ name }) {
        let pathname = path.join(__dirname, `../static/good/images/`, `${name}.png`);
        if (!fs.existsSync(pathname)) {
            pathname = path.join(__dirname, `../static/404.png`);
        }
        this.ctx.type = "image/png"
        this.ctx.status = 200;
        this.ctx.body = fs.readFileSync(pathname);
    }
    /**
     * 取消
     */
    async cancel({ id }) {
        let model = new GoodModel();
        return await model.cancel(id, this.user.id);
    }
    /**
     * 取消
     */
    async state({ id,type }) {
        let model = new GoodModel();
        return await model.putState(id, type);
    }
}