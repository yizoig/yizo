import Test from '../../containers/main/setting/test'
export default [
    {
        key: "test",
        name: "设置1",
        icon: "setting",
        path: '/test',
        children: [
            {
                key: 'list',
                name: "设置1",
                path: '/list',
                component:Test
            }
        ]
    }
]