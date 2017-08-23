import { Api, method as m, String, Number } from './interface';
/**
 * 登录接口
 */
interface SignIn extends Api {
    name: "/account/signIn",
    method: m.POST,
    params: {
        account: Number<11>,//手机号
        password: String<6, 12>,//密码
        type: "user" | "admin"
    }
}
/**
 * 获取用户头像
 */
interface UserHead extends Api {

    name: "/account/head/(:id).png",
    method: m.GET,
    needToken: false
}
/**
 * 修改手机号
 */
interface changeTel extends Api{
    name:"/account/tel/:id"
    method:m.PUT
    params:{
        base:{
            tel:Number<11>
            newTel:Number<11>
        }
        user:{
            code:Number<6>
            newCode:Number<6>
        }
    }
    needToken: true    
}
/**
 * 手机验证码改密码
 */
interface changeTelByTel extends Api{
    name:"/account/pwd/tel/:tel"
    method:m.PUT
    params:{
        base:{
            tel:Number<11>
            password:String<6, 12>
        }
        user:{
            code:Number<6>
        }
    }
}
/**
 * 旧密码换新密码
 */
interface changeTelByOldPwd extends Api{
    name:"/account/pwd/:id"
    method:m.PUT
    params:{
        base:{
            tel:Number<11>
            password:String<6, 12>
        }
        user:{
            code:Number<6>
        }
    }
}