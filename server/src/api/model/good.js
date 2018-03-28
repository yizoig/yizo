//模型
module.exports = class Good extends JikeJs.Model {

    constructor(props) {
        super(props);
        this.table("goods");
    }
    /**
     * 获取商品列表
     */
    async list({ search, creater, partner, college, type, state, pageable, pageSize, page, _d }) {
        
    }
    /**
     * 添加商品
     */
    async add({title,content,concat,concat_tel,images,type,price,oprice,number}){

        
    }
}