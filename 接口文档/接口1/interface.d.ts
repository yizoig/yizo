

export namespace method {
    export type GET = 'string';
    export type POST = 'string';
    export type DELETE = 'string';
    export type PUT = 'string';
}


export interface Api {

    //请求的api
    name: string,
    //请求的方法
    method: method.GET | method.POST | method.DELETE | method.PUT,
    params?: { [i: string]: any },
    return: any

}


export class String<T1 extends number=any,T2 extends number=any>{ }


export class Number<T extends number=any>{}

export class Date{}

export function md5(){}