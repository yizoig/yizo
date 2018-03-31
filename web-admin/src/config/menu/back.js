import AdminGroupList from '../../containers/main/back/adminGroupList'
import AdminList from '../../containers/main/back/adminList'
import CollegeList from '../../containers/main/back/collegeList'
export default [
    {
        name: '管理组管理',
        key: 'adminGroup',
        path: '/admingroup',
        icon: "team",
        children: [
            {
                name: '管理组列表',
                key: 'list',
                path: "/list",
                component:AdminGroupList
            }
        ]
    },
    {
        name: '管理员管理',
        key: 'admin',
        path: '/admin',
        icon: "team",
        children: [
            {
                name: '管理员列表',
                key: 'list',
                path: "/list",
                component:AdminList
            }
        ]
    },
    {
        name: '学校管理',
        key: 'college',
        path: '/college',
        icon: "team",
        children: [
            {
                name: '学校列表',
                key: 'college',
                path: "/college",
                component:CollegeList
            }
        ]
    }
]