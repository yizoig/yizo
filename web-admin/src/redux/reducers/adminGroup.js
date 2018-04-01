
import { AG_SAVE_TO_CACHE, AG_SAVE_TO_MEMORY } from '../actions/adminGroup';
//获取用户基本信息
const stateInit = {
    //会缓存的数据
    cache: {

    },
    //不会缓存的数据
    memory: {
        loading: true,
        list: [],
        pagination: {
            current:1,
            pageSize: 5,
            total: 0
        },
        editorData: null,
    }
}
export default (state = stateInit, action) => {
    switch (action.type) {
        case AG_SAVE_TO_CACHE: {
            return {
                ...state,
                cache: {
                    ...state.cache,
                    ...action.payload
                }
            }
        }
        case AG_SAVE_TO_MEMORY: {
            return {
                ...state,
                memory: {
                    ...state.memory,
                    ...action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}


