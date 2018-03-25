import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Menu, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux'
import './index.less';
import { start_time, end_time,switch_nav,switch_module } from '../../redux/actions/home';
import { Switch, Route, } from '../../common/Route/index';
import {  menus} from '../../redux/reducers/home';
import User from './main/user/index'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Home extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log("开始")
        this.props.dispatch(start_time());
    }
    componentWillUnmount() {
        console.log("结束")
        this.props.dispatch(end_time());
    }
    /**
     * 渲染菜单
     */
    renderSideMenu() {
        let {currentModule='home',currentNav=''} = this.props.cache;
        let {[currentModule]:currentMenu=[]} = menus;
        currentNav = currentNav ||"";
        let [group='',nav=''] = currentNav.split('/');
        return (
            <div className="side-menu">
                <div className="user-info">
                    <div><img src="https://avatars0.githubusercontent.com/u/25115931?s=460&v=4" /></div>
                    <div>超级管理员</div>
                </div>
                <Menu mode="inline" onClick={this.switchNav.bind(this)} defaultOpenKeys={[group]} defaultSelectedKeys={[currentNav]} >
                    {currentMenu.map(({ key, icon, name, children }) => {
                        return (
                            <SubMenu key={key} title={<span><Icon type={icon} /><span>{name}</span></span>}>
                                {children.map(({ key: ckey, name: cname }) => (<Menu.Item key={key+'/'+ckey}>{cname}</Menu.Item>))}
                            </SubMenu>
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
                        {this.props.time}
                    </div>
                    <Menu mode="horizontal" onClick={this.switchMenu.bind(this)} selectedKeys={[this.props.currentModule]}>
                        <Menu.Item key="home" ><Icon type="mail" />前台管理</Menu.Item>
                        <Menu.Item key="back" ><Icon type="appstore-o" />后台管理</Menu.Item>
                        <Menu.Item key="setting" ><Icon type="setting" />系统设置</Menu.Item>
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
                            <Route path="/home/user/list" component={User} />
                        </Switch>
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
