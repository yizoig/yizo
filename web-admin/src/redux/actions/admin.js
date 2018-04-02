import admin from '../../api/admin'
export const AD_SAVE_TO_CACHE = "AD_SAVE_TO_CACHE";
export const AD_SAVE_TO_MEMORY = "AD_SAVE_TO_MEMORY";
import React, { Component } from 'react';

import { message,notification,Icon } from 'antd';
export function get_list(data) {
    return async (dispatch, getState) => {
        //获取默认数据
        if (!data) {
            let { admin: { memory: { pagination } } } = getState();
            data = {
                pagination
            }
        }
        let { pageSize, current } = data.pagination;
        try {
            dispatch({
                type: AD_SAVE_TO_MEMORY,
                payload: {
                    loading: true
                }
            })
            let { list, pagination } = await admin.list({ pageSize, page: current });
            list = list.map(item => ({ ...item, key:item.aid }))
            dispatch({
                type: AD_SAVE_TO_MEMORY,
                payload: {
                    list,
                    pagination: {
                        current: current,
                        ...pagination
                    },
                    loading: false
                }
            })
            message.success('共' + pagination.total + '条数据，本次查询到' + list.length + "条数据");
        } catch (e) {
            dispatch({
                type: AD_SAVE_TO_MEMORY,
                payload: {
                    loading: false
                }
            })
            message.error(e.message);
        }
    }
}

export function trigger_editor(data) {
    return {
        type: AD_SAVE_TO_MEMORY,
        payload: {
            editorData: data
        }
    }
}


export function del_items({ ids, del = 0 }) {
    return async (dispatch) => {

        if(ids.length==0){
            return  message.warning('请选择需要删除的数据');
        }
        try {
            let result = await admin.del({ ids, del });
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
export function use_item({ ids, use = 1 }) {
    return async (dispatch) => {

        if(ids.length==0){
            return  message.warning('请选择需要操作的数据');
        }
        try {
            let result = await admin.use({ ids, use });
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

export function select_row(selectedRowKeys){
    return {
        type: AD_SAVE_TO_MEMORY,
        payload: {
            selectedRowKeys
        }
    }
}