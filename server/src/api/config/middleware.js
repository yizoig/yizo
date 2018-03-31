const { verifyToken } = require("../common/jwt")
const AdminModel = require("../model/admin")
function tokenVerify(ctx) {
    let token = ctx.request.get('access-token');
    let payload = verifyToken.call(ctx, token);
    ctx.request.user = payload;
    return payload;
}
module.exports = {
    /**
     * 管理员验证
     */
    adminCheck: async function () {
        let { type, sub } = tokenVerify(this) || {};
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
    userCheck: function (ctx, next) {

    },

}