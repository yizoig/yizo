import { Api, method as m, String, Number, md5 } from './interface';

/**
 * 发送验证码
 */
interface sendCode extends Api {
    name: "smsCode/:tel/:type",
    method: m.GET,
    params: {
        type: "signUp" | "unbindTel" | "bindTel" | "changePwd"
    }
    return: {
        code: md5//加密
        tel: Number<11>
    }
}