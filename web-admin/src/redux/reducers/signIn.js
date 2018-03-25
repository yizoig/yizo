import { SIGNING, RESIZE, SIGNINED } from "../actions/signIn";


/**
 * 初始化login state
 */
const initialState = {
    //会缓存的数据
    cache: {

    },
    //不会缓存的数据
    memory: {
        loading: false,
        mainHeight: window.innerHeight - 120,
        formState: {
            user: null,
            password: null
        }
    }
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNING: {
            return {
                ...state,
                memory: {
                    ...state.memory,
                    loading: true
                }
            };
        }
        case SIGNINED: {
            return {
                ...state,
                memory: {
                    ...state.memory,
                    loading: false
                }
            };
        }
        case "save_fields": {
            return {
                ...state,
                memory: {
                    ...state.memory,
                    formState: Object.assign(state.memory.formState, action.payload)
                }

            }
        }
        case RESIZE: {
            let height = window.innerHeight - 120;
            return {
                ...initialState,
                memory: {
                    ...state.memory,
                    mainHeight: height > 800 ? height : 800
                }
            }
        }
        default: return state
    }
}