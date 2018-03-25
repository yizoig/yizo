import { UPDATE_TIME, SWITCH_MENU, SWITCH_NAV } from '../actions/home';

export const  menus = {
    "home": [
        {
            key: 'user',
            name: "用户管理",
            icon: "user",
            children: [
                {
                    name: "用户列表",
                    key: 'list',
                    path: '/user',
                }
            ]
        },
        {
            key: 'task',
            name: "任务管理",
            icon: "solution",
            children: [
                {
                    name: "任务类型",
                    key: 'type',
                    path: '/tasktype',
                },
                {
                    name: "任务列表",
                    key: 'list',
                    path: '/task',
                }
            ]
        },
        {
            key: 'shop',
            name: "商品管理",
            icon: "shop",
            children: [
                {
                    name: "商品类型",
                    key: 'type'
                },
                {
                    name: "商品列表",
                    key: 'list'
                }
            ]
        }
    ],
    "back": [
        {
            key: "admin",
            name: "管理员管理",
            icon: "team",
            children: [
                {
                    key: 'list',
                    name: "管理员列表"
                }
            ]
        }
    ],
    "setting": [
        {
            key: "test",
            name: "设置1",
            icon: "setting",
            children: [
                {
                    key: 'list',
                    name: "设置1"
                }
            ]
        }
    ]
}

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
            current:"home",
            home:{
                name:"哈哈哈",
            }
        }
    }
}
export default (state = stateInit, action) => {
    switch (action.type) {
        case UPDATE_TIME: {
            return {
                ...state,
                memory:{
                    ...state.memory,
                    time: action.time
                }
            };
        }
        case SWITCH_NAV: {
            return {
                ...state,
                memory:{
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


