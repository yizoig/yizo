

/**
 * 定义常量
 */
export const DO_LOGIN ="DO_LOGIN";
export const RESIZE ="RESIZE";
/**
* 登录action
* @param {} param0 
*/

export function doLogin({ user, password }) {
    return {
        type:DO_LOGIN,
        user,
        password
    }
}

export function reSize(){
    return {
        type:"RESIZE"
    }
}