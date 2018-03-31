
import { SAVE_LIST } from '../actions/adminGroup';
//获取用户基本信息
const stateInit = {
    //会缓存的数据
    cache: {

    },
    //不会缓存的数据
    memory: {
        loading: true,
        list: [],
        pageSize: 5
    }
}
export default (state = stateInit, action) => {
    switch (action.type) {
        case SAVE_LIST: {
            return {
                ...state,
                memory: {
                    ...state.memory,
                    ...action.payload
                }
            }
        }
        default: {
            return state
        }
    }
}


