module.exports = class Controller {

    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }
    json(data) {
        this.res.json({
            code: 0,
            ...data
        })
        console.log(`${this.req.method}`.green,`${this.req.url}`.yellow,`${200}`.green);
    }
    header(key,value){

        this.res.header(key,value);
    }
    status(status){
        this.res.status(status);
    }
}