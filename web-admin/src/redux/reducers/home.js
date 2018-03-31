import { UPDATE_TIME, SWITCH_MENU, SWITCH_NAV,SAVE_USERINFO } from '../actions/home';
import cache from '../../lib/cache'
//获取用户基本信息
const stateInit = {
    //会缓存的数据
    cache: {
        currentModule: 'home',
        currentNav: null,
    },
    //不会缓存的数据
    memory: {
        time: null,
        navs: {
            current: "home",
            home: {
                name: "哈哈哈",
            }
        },
    }
}
export default (state = stateInit, action) => {
    switch (action.type) {
        case UPDATE_TIME: {
            return {
                ...state,
                memory: {
                    ...state.memory,
                    time: action.time
                }
            };
        }
        case SWITCH_NAV: {
            return {
                ...state,
                cache: {
                    ...state.cache,
                    ...action.payload
                }
            }
        }
        case SAVE_USERINFO:{
            return {
                ...state,
                memory: {
                    ...state.memory,
                    user:action.payload
                }
            }
        }
        default: {
            return state
        }
    }
}


