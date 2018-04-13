
import { PT_SAVE_TO_CACHE, PT_SAVE_TO_MEMORY } from '../actions/postType';
//获取用户基本信息
const stateInit = {
    //会缓存的数据
    cache: {

    },
    //不会缓存的数据
    memory: {
        loading: true,
        list: [],
        type:1,
        editorData: null,
        selectedRowKeys:[]
    }
}
export default (state = stateInit, action) => {
    switch (action.type) {
        case PT_SAVE_TO_CACHE: {
            return {
                ...state,
                cache: {
                    ...state.cache,
                    ...action.payload
                }
            }
        }
        case PT_SAVE_TO_MEMORY: {
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


