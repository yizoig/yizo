let CollegeModel = require("../model/college")
const fs = require("fs");
const path = require("path");
//控制器
module.exports = class College extends JikeJs.Controller {
    /**
     * 获取学校列表
     */
    async list({ search, page, pageSize, del, use,ids }) {

        let model = new CollegeModel();
        return await model.list({ search, page, pageSize, del, use,ids });
    }
    /**
     * 修改学校基本信息
     */
    async updateInfo({ id, name }) {
        let model = new CollegeModel();
        return await model.updateInfo(id, { college_name: name });
    }
    async logo({id}){

        let pathname =path.join(__dirname,`../static/college/logo/`);
        if(fs.existsSync(pathname+`${id}.png`)){
            pathname += `${id}.png`;
        }else{
            pathname +=`_0.png`
        }
        this.ctx.type="image/png"
        this.ctx.status = 200;
        this.ctx.body = fs.readFileSync(pathname);
    }
    /**
     * 添加学校
     */
    async add({ name, logo }) {
        //保存logo

        try {
            let logoFile = fs.readFileSync(logo.path);
            let model = new CollegeModel();
            let id = await model.add({ name });
            fs.writeFileSync(path.join(__dirname,`../static/college/logo/${id}.png`), logoFile);
            return id;
        } catch (e) {
            if (e instanceof JikeJs.BaseError) {
                throw e;
            }
            console.log(e)
            throw new Error("文件移动失败")
        }

    }
    /**
     * 删除学校
     */
    async del({ ids, del }) {
        let model = new CollegeModel();

        return await model.del(ids, del);
    }
    /**
     * 删除学校
     */
    async use({ ids, use }) {
        let model = new CollegeModel();
        return await model.use(ids, use);
    }
}