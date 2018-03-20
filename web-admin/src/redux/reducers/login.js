import { DO_LOGIN,RESIZE } from "../actions/login";
import { Icon, notification } from 'antd';
import React, { Component } from 'react';
/**
 * 初始化login state
 */
const initialState = {
    isLogin: false,
    mainHeight:window.innerHeight - 120,
    formState: {
        user: null,
        password: null
    }
};
export default (state = initialState, action) => {
    switch (action.type) {
        case DO_LOGIN: {
            console.log(1)
            return Object.assign(state, doLogin(action));
        }
        case "save_fields": {
            return {
                ...state,
                formState: Object.assign(state.formState, action.payload)
            }
        }
        case RESIZE:{
            let height  =window.innerHeight - 120;
            return {
                ...initialState,
                mainHeight:height>800?height:800
            }
        }
        default: return state
    }
}
/**
 * 登录操作
 */
function doLogin({ user, password }) {
    if (user != 'admin' || password != '123456') {
        notification.open({
            message: "登录失败",
            description: "账号或密码错误",
            icon: <Icon type="frown" style={{ color: '#f00' }} />,
        })
        return {
            isLogin: false
        }
    }
    console.log(1)
    notification.open({
        message: "登录成功",
        description: '3秒后跳转管理页面',
        icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    })
    
    return {
        isLogin: true
    }
}