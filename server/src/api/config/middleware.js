const { verifyToken } = require("../common/jwt")
const AdminModel = require("../model/admin")
const UserModel = require("../model/user")

module.exports = {
    /**
     * 管理员验证
     */
    adminCheck: async function (ctx) {
        let { type, sub } = ctx.request.user;
        if (type != 'admin' || !sub) {
            throw new Error("no auth")
            this.fail(this.codes.NO_AUTH);
        }
        let data = await (new AdminModel()).info(sub);
        if (!data) {
            this.fail(this.codes.ACCOUNT_NOT_EXISTS);
        }
    },
    /**
     * 用户验证
     */
    userCheck: function (ctx) {
        let { type, sub } = ctx.request.user;
        if (type != 'user' || !sub) {
            throw new Error("no auth")
            this.fail(this.codes.NO_AUTH);
        }
        let data = await(new UserModel()).info(sub);
        if (!data) {
            this.fail(this.codes.ACCOUNT_NOT_EXISTS);
        }
    },
    tokenVerify(ctx) {
        console.log(ctx)
        let token = ctx.request.get('access-token');
        let payload = verifyToken.call(ctx, token);
        ctx.request.user = payload;
        return payload;
    }
}