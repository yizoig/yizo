import posts from '../../api/post'
export const PT_SAVE_TO_CACHE = "PT_SAVE_TO_CACHE";
export const PT_SAVE_TO_MEMORY = "PT_SAVE_TO_MEMORY";
import React, { Component } from 'react';
import { message, notification, Icon } from 'antd';
export function get_list() {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: PT_SAVE_TO_MEMORY,
                payload: {
                    loading: true
                }
            })
            let list = await posts.typeList({ type:'tree' });
            dispatch({
                type: PT_SAVE_TO_MEMORY,
                payload: {
                    list,
                    loading: false
                }
            })
            message.success('获取数据成功');
        } catch (e) {
            dispatch({
                type: PT_SAVE_TO_MEMORY,
                payload: {
                    loading: false
                }
            })
            console.error(e)
            message.error(e.message);
        }
    }
}

export function trigger_editor(data) {
    return {
        type: PT_SAVE_TO_MEMORY,
        payload: {
            editorData: data
        }
    }
}

export function del_items({ ids, del = 0 }) {
    return async (dispatch) => {

        if (ids.length == 0) {
            return message.warning('请选择需要删除的数据');
        }
        try {
            let result = await posts.delType({ ids, del });
            notification.open({
                message: "操作成功",
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
            })
            dispatch(get_list())
        } catch (e) {
            notification.open({
                message: "操作失败",
                description: e.message,
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
            })
        }
    }
}
export function use_items({ ids, use = 1 }) {
    return async (dispatch) => {

        if (ids.length == 0) {
            return message.warning('请选择需要操作的数据');
        }
        try {
            let result = await posts.useType({ ids, use });
            notification.open({
                message: "操作成功",
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
            })
            dispatch(get_list())
        } catch (e) {
            notification.open({
                message: "操作失败",
                description: e.message,
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
            })
        }

    }
}

export function select_row(selectedRowKeys) {
    return {
        type: PT_SAVE_TO_MEMORY,
        payload: {
            selectedRowKeys
        }
    }
}

export function select_type(key) {
    return {
        type: PT_SAVE_TO_MEMORY,
        payload: {
            type:key
        }
    }
}