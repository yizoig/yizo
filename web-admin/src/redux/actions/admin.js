import admin from '../../api/admin'
export const SAVE_LIST = "SAVE_LIST";

export function get_list() {
    return async (dispatch) => {

        let { list, pageTotal, pageSize } = await admin.list();
        dispatch({
            type: SAVE_LIST,
            payload: {
                list,
                pageSize,
                pageSize,
                loading: false
            }
        })
    }
}