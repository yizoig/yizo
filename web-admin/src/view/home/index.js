import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Menu, Breadcrumb, Icon } from 'antd';
import './index.less';
import moment from 'moment';
import { Switch, Route, } from '../../common/Route/index';
import UserListView from './main/user/index'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class HomeView extends React.Component {

    state = {
        time: null,
        subMenu: [],
        menu: "home"
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: moment(Date.now()).utcOffset(8).format("YYYY年-MM月-DD日 hh:mm:ss")
            });
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    /**
     * 渲染菜单
     */
    renderSideMenu() {

        return (
            <div className="side-menu">
                <div className="user-info">
                    <div><img src="https://avatars0.githubusercontent.com/u/25115931?s=460&v=4" /></div>
                    <div>超级管理员</div>
                </div>
                <Menu mode="inline">
                    {menu[this.state.menu].map(({ key, icon, name, children }) => {
                        return (
                            <SubMenu key={key} title={<span><Icon type={icon} /><span>{name}</span></span>}>
                                {children.map(({ key: ckey, name: cname }) => (<Menu.Item key={key + ckey}>{cname}</Menu.Item>))}
                            </SubMenu>
                        );
                    })}
                </Menu>
            </div>
        )
    }
    switchMenu({ key }) {
        if (this.state.menu != key) {
            this.setState({
                menu: key
            })
        }
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
                    <Breadcrumb style={{ padding: "10px 0" }}>
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
                    </Breadcrumb>
                </div>
                <div className="right">
                    <div className="time">
                        {this.state.time}
                    </div>
                    <Menu mode="horizontal" onClick={this.switchMenu.bind(this)} defaultKey={"home"}>
                        <Menu.Item key="home" ><Icon type="mail" />前台管理</Menu.Item>
                        <Menu.Item key="back" ><Icon type="mail" />后台管理</Menu.Item>
                        <Menu.Item key="setting" ><Icon type="mail" />系统设置</Menu.Item>
                    </Menu>
                </div>

            </div >
        );
    }
    render() {
        return (
            <div id="home" style={{ height: window.innerHeight }}>
                {this.renderSideMenu()}
                <div className="main">
                    {this.renderHeader.call(this)}
                    <div>
                        <Switch>
                            <Route path="/user" component={UserListView} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

let menu = {
    "home": [
        {
            key: 'user',
            name: "用户管理",
            icon: "user",
            children: [
                {
                    name: "用户列表",
                    key: 'list',
                    path:'/user',
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
                    path:'/tasktype',
                },
                {
                    name: "任务列表",
                    key: 'list',
                    path:'/task',
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