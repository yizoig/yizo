import admin from '../../api/admin'
export const AG_SAVE_TO_CACHE = "AG_SAVE_TO_CACHE";
export const AG_SAVE_TO_MEMORY = "AG_SAVE_TO_MEMORY";
import { message } from 'antd';
export function get_list(data) {
    return async (dispatch, getState) => {
        //获取默认数据
        if (!data) {
            let { adminGroup: { memory: { pagination } } } = getState();
            data = {
                pagination
            }
        }
        let { pageSize, current } = data.pagination;
        try {
            dispatch({
                type: AG_SAVE_TO_MEMORY,
                payload: {
                    loading: true
                }
            })
            let { list, pagination } = await admin.groupList({ pageSize, page: current });
            list = list.map(item => ({ ...item, key:"admingroup"+item.gid }))
            dispatch({
                type: AG_SAVE_TO_MEMORY,
                payload: {
                    list,
                    pagination: {
                        current: current,
                        ...pagination
                    },
                    loading: false
                }
            })
            message.success('共'+pagination.total+'条数据，本次查询到'+list.length+"条数据");
        } catch (e) {
            dispatch({
                type: AG_SAVE_TO_MEMORY,
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
        type: AG_SAVE_TO_MEMORY,
        payload: {
            editorData: data
        }
    }
}

export function del_items({ ids, real = 0 }) {
    return async (dispatch) => {
        try {
            let result = await admin.delGroup({ ids, real });
        } catch (e) {

        }
    }
}