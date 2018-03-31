import moment from 'moment';
import { push } from 'react-router-redux';
import menus from '../../config/menu'
import cache from '../../lib/cache'
import { Icon, notification } from 'antd';
import React, { Component } from 'react';
/**
 * 定义常量
 */
export const UPDATE_TIME = "UPDATE_TIME";
export const SWITCH_NAV = "SWITCH_NAV";
export const SWITCH_MENU = "SWITCH_MENU";
export const SAVE_USERINFO = "SAVE_USERINFO";

//定时器
let interval = null;
export function start_time() {
    return (dispatch, getState) => {
        interval = setInterval(() => {
            dispatch({
                type: UPDATE_TIME,
                time: moment(Date.now()).utcOffset(8).format("YYYY年-MM月-DD日 hh:mm:ss")
            });
        }, 1000)
    }
}
export function end_time() {

    clearInterval(interval);
    return {
        type: UPDATE_TIME,
        time: null
    }
}

export function switch_module(module) {
    return (dispatch, getState) => {
        if (typeof module == 'string' && module in menus) {
            dispatch(push('/' + module))
            dispatch({
                type: SWITCH_NAV,
                payload: {
                    currentModule: module
                }
            });
        }
    }
}
export function switch_nav(nav) {
    return (dispatch, getState) => {

        if (typeof nav == 'string') {
            let { home: { cache: { currentModule } } } = getState();
            dispatch(push(('/' + currentModule + '/' + nav).replace(/\/\//, '\/')))
            dispatch({
                type: SWITCH_NAV,
                payload: {
                    currentNav: nav
                }
            });
        }
    }
}

export function sign_out() {
    return (dispatch, getState) => {
        cache.local.removeItem("access-token");
        cache.local.removeItem("userinfo");
        notification.open({
            message: "注销成功",
            description: '3秒后跳转登录页面',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        })
        setTimeout(() => {
            dispatch(push('/signIn'));
        }, 3000)
    }
}

export function get_userinfo() {
    return dispatch => {
        let user = cache.local.getItem("userinfo");
        try {
            user = JSON.parse(user);
            dispatch({
                type:SAVE_USERINFO,
                payload:user
            })
        } catch (e) {
            user = null
        }
    }
}