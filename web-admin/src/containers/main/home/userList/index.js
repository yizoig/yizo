
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Table, Icon, Divider, Button } from 'antd';
import { connect } from 'react-redux'
import './index.less';
import { get_list } from '../../../../redux/actions/user'
import user from '../../../../redux/reducers/user';
import users from '../../../../api/user';
class UserList extends React.Component {
    columns = [{
        title: '头像',
        dataIndex: 'uid',
        key: 'avatar',
        width: 160,
        render: id => <div ><img width="50" height="50" src={users.avatar(id)} /></div>
    }, {
        title: '昵称',
        dataIndex: 'nickname',
        key: 'nickname',
        width: 160
    }, {
        title: '手机号',
        dataIndex: 'utel',
        key: 'utel',
        width: 120,
        render: text => text || "无"
    }, {
        title: '性别',
        dataIndex: 'ugender',
        key: 'ugender',
        width: 80,
        render: text => text == 0 ? "男" : "女"
    }, {
        title: '学校',
        dataIndex: 'cname',
        key: 'cname',
        width: 180,
        render: text => text || "暂无"
    }, {
        title: '创建时间',
        dataIndex: 'u_c',
        key: 'u_c',
        width: 180
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="#"
                    style={{ color: record['is_use'] == 1 ? '#F00' : "#50B233" }}
                    onClick={() => {

                    }}
                >{record['is_use'] == 0 ? "启用" : "禁用"}</a>
                <Divider type="vertical" />
                <a href="#" >删除</a>
                <Divider type="vertical" />
                <a href="#">修改</a>
                <Divider type="vertical" />
                <a href="#">重置密码</a>
            </span>
        ),
    }];
    componentWillMount() {
        if(this.props.memory.list.length==0){
            this.props.dispatch(get_list())
        }
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.props.memory.pagination };
        pager.current = pagination.current;
        this.props.dispatch(get_list({
            pagination: pager
        }))
    }
    render() {

        const { list, loading, pagination, editorData } = this.props.memory;
        const { dispatch } = this.props;
        return (
            <div className="list">
                <Alert
                    message="用户管理注意事项"
                    description={(
                        <div>
                            <div>1.用户账号不能重复</div>
                            <div>2.数据删除就无法恢复，建议使用禁用</div>
                            <div>3.用户必须填写学校，并且学校没有被禁用，才能登录</div>
                            <div>4.重置密码默认123456</div>
                        </div>
                    )}
                    type="info"
                    showIcon
                />
                <div className="table-btns">

                </div>
                <Table
                    columns={this.columns}
                    dataSource={list}
                    bordered
                    style={{ marginTop: 10 }}
                    loading={loading}
                    pagination={pagination}
                    onChange={this.handleTableChange}
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.cname}</p>}
                // rowSelection={{
                //     fixed: true
                // }}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}
export default connect(mapStateToProps)(UserList)