import UserList from '../../containers/main/home/userList'
import TaskList from '../../containers/main/home/taskList'
import PostTypeList from '../../containers/main/home/postTypeList'
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
        key: 'post',
        name: "动态管理",
        path: '/post',
        icon: "solution",
        children: [
            {
                name: "动态类型",
                key: 'type',
                path: '/type',
                component:PostTypeList
            },
            {
                name: "评论列表",
                key: 'comment',
                path: '/comment',
                component:GoodList
            },
            {
                name: "任务列表",
                key: 'task',
                path: '/task',
                component:TaskList
            },
            {
                name: "物品列表",
                key: 'good',
                path: '/good',
                component:GoodList
            }
        ]
    },
]