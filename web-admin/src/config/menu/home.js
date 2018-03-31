import UserList from '../../containers/main/home/userList'
import TaskList from '../../containers/main/home/taskList'
import TaskTypeList from '../../containers/main/home/taskTypeList'
import GoodTypeList from '../../containers/main/home/goodTypeList'
import GoodList from '../../containers/main/home/goodList'
export default [
    {
        key: 'user',
        name: "用户管理",
        path:'/user',
        icon: "user",
        children: [
            {
                name: "用户列表",
                key: 'list',
                path: '/list',
                component:UserList
            }
        ]
    },
    {
        key: 'task',
        name: "任务管理",
        path: '/task',
        icon: "solution",
        children: [
            {
                name: "任务类型",
                key: 'type',
                path: '/typelist',
                component:TaskTypeList
            },
            {
                name: "任务列表",
                key: 'list',
                path: '/list',
                component:TaskList
            }
        ]
    },
    {
        key: 'good',
        name: "物品管理",
        icon: "shop",
        path: '/good',
        children: [
            {
                name: "物品类型",
                key: 'type',
                path: '/typelist',
                component:GoodTypeList
            },
            {
                name: "物品列表",
                key: 'list',
                path: '/list',
                component:GoodList
            }
        ]
    }
]