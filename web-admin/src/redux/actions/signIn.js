import { push } from 'react-router-redux';
import { Icon, notification } from 'antd';
import React, { Component } from 'react';
/**
 * 定义常量
 */
export const SIGNING = "signing";
export const SIGNINED = "signined";
export const RESIZE = "resize";

/**
* 登录action
* @param {} param0 
*/
export function doSignIn({ user, password }) {
    return (dispatch, getState) => {
        //实现登录
        dispatch({
            type: SIGNING
        })
        //判断登录账号密码
        if (user != 'admin' || password != '123456') {
            notification.open({
                message: "登录失败",
                description: "账号或密码错误",
                icon: <Icon type="frown" style={{ color: '#f00' }} />,
            })
            return dispatch({
                type: SIGNINED
            })
        }
        notification.open({
            message: "登录成功",
            description: '3秒后跳转管理页面',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        })
        setTimeout(() => {
            
            dispatch(push("/"));
            dispatch({
                type: SIGNINED
            });
        }, 3000)
       
    }
}

export function reSize() {
    return {
        type: "RESIZE"
    }
}