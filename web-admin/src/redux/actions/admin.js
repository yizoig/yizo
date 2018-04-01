import admin from '../../api/admin'
export const AD_SAVE_TO_CACHE = "AD_SAVE_TO_CACHE";
export const AD_SAVE_TO_MEMORY = "AD_SAVE_TO_MEMORY";
import { message } from 'antd';
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
            list = list.map(item => ({ ...item, key:"admin"+item.aid }))
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