import { SIGNING, RESIZE,SIGNINED } from "../actions/signIn";


/**
 * 初始化login state
 */
const initialState = {
    loading: false,
    mainHeight: window.innerHeight - 120,
    formState: {
        user: null,
        password: null
    }
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNING: {
            return {
                ...state,
                loading:true
            };
        }
        case SIGNINED:{
            return {
                ...state,
                loading:false
            };
        }
        case "save_fields": {
            return {
                ...state,
                formState: Object.assign(state.formState, action.payload)
            }
        }
        case RESIZE: {
            let height = window.innerHeight - 120;
            return {
                ...initialState,
                mainHeight: height > 800 ? height : 800
            }
        }
        default: return state
    }
}