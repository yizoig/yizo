import { push } from 'react-router-redux';
import { Icon, notification } from 'antd';
import React, { Component } from 'react';
import admin from '../../api/admin'
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
    return async (dispatch, getState) => {
        //实现登录
        dispatch({
            type: SIGNING
        })
        try {
            let info = await admin.signIn({ account: user, password });
            //判断登录账号密码
            dispatch({
                type: SIGNINED
            })
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
        } catch (e) {
            notification.open({
                message: "登录失败",
                description: e.message,
                icon: <Icon type="frown" style={{ color: '#f00' }} />,
            })
            dispatch({
                type: SIGNINED
            });
            console.error(e)
        }


    }
}

export function reSize() {
    return {
        type: "RESIZE"
    }
}