import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Menu, Breadcrumb, Icon, Dropdown } from 'antd';
import { connect } from 'react-redux'
import './index.less';
import { start_time, end_time, switch_nav, switch_module, sign_out, get_userinfo } from '../../redux/actions/home';
import { Switch, Route, } from '../../components/common/Route/index';
import menus from '../../config/menu';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // let { '1': moduleName = 'home', '2': navArr = '' } = this.props.location.pathname.match(/\/([^\/]+)(?:\/(\S+))?/) || {};
        // this.props.dispatch(switch_module(moduleName))
        // this.props.dispatch(switch_nav(navArr))
        this.props.dispatch(get_userinfo())
    }
    componentDidMount() {
        // console.log("开始")
        // this.props.dispatch(start_time());
    }
    componentWillUnmount() {
        // console.log("结束")
        // this.props.dispatch(end_time());
    }
    /**
     * 渲染菜单
     */
    renderSideMenu() {

        let { currentModule = 'home', currentNav = pathname } = this.props.cache;
        let { user } = this.props.memory;
        let { [currentModule]: currentMenu = [] } = menus;
        currentNav = currentNav || "";
        let [group = '', nav = ''] = currentNav.split('/');
        return (
            <div className="side-menu">
                <div className="user-info">
                    <div><img src="https://avatars0.githubusercontent.com/u/25115931?s=460&v=4" /></div>
                    {user && <Dropdown overlay={(
                        <Menu style={{ width: 100 }}>
                            <Menu.Item key="0">
                                <a >基本信息</a>
                            </Menu.Item>
                            <Menu.Item key="1">
                                <a >修改头像</a>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item key="3">
                                <a onClick={() => {
                                    this.props.dispatch(sign_out())
                                }}>注销账号</a>
                            </Menu.Item>
                        </Menu>
                    )} trigger={['click']} placement="bottomCenter">
                        <a className="ant-dropdown-link" href="#">
                            {user.aname}<Icon type="down" />
                        </a>
                    </Dropdown>
                    }
                </div>
                <Menu mode="inline" onClick={this.switchNav.bind(this)} defaultSelectedKeys={[currentNav]} >
                    {currentMenu.map(({ path, icon, name, children }) => {
                        return (
                            <Menu.ItemGroup key={path} title={name}>
                                {children.map(({ path: cpath, name: cname }) => (
                                    <Menu.Item key={path + cpath}>{cname}</Menu.Item>
                                ))}
                            </Menu.ItemGroup>
                        );
                    })}
                </Menu>
            </div>
        )
    }
    switchMenu({ key }) {
        this.props.dispatch(switch_module(key))
    }
    switchNav({ key }) {
        this.props.dispatch(switch_nav(key))
    }
    /**
     * 渲染header
     */
    renderHeader() {
        return (
            <div className="header">
                <div className="left">
                    <div className="logo">
                        <div className="title">yizo管理后台</div>
                    </div>
                    {/* <Breadcrumb style={{ padding: "10px 0" }}>
                        <Breadcrumb.Item href="">
                            <Icon type="home" />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <Icon type="user" />
                            <span>前台管理</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            任务列表
                        </Breadcrumb.Item>
                    </Breadcrumb> */}
                </div>
                <div className="right">
                    <div className="time">
                        {this.props.time}
                    </div>
                    <Menu mode="horizontal" onClick={this.switchMenu.bind(this)} selectedKeys={[this.props.currentModule]}>
                        <Menu.Item key="home" ><Icon type="mail" />前台管理</Menu.Item>
                        <Menu.Item key="back" ><Icon type="appstore-o" />后台管理</Menu.Item>
                        {/* <Menu.Item key="setting" ><Icon type="setting" />系统设置</Menu.Item> */}
                    </Menu>
                </div>

            </div >
        );
    }
    render() {

        let routers = [];
        for (let key in menus) {
            for (let { path, children } of menus[key]) {
                for (let { path: cpath, component } of children) {
                    routers.push({
                        path: '/' + key + path + cpath,
                        component
                    })
                }
            }
        }
        return (
            <div id="home" style={{ height: window.innerHeight }}>
                {this.renderSideMenu()}
                <div className="main">
                    {this.renderHeader.call(this)}
                    <div className="content">
                        {/* <Switch> */}
                        {routers.map(({ path, component }) => (
                            <Route key={path} component={component} path={path} />
                        ))}
                        {/* </Switch> */}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.home
}
export default connect(mapStateToProps)(Home);
