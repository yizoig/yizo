
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Table, Icon, Divider, Button } from 'antd';
import { connect } from 'react-redux'
import './index.less';
import { get_list } from '../../../../redux/actions/user'
class UserList extends React.Component {
    columns = [{
        title: '昵称',
        dataIndex: 'nickname',
        key: 'nickname',
        width: 160
    }, {
        title: '手机号',
        dataIndex: 'utel',
        key: 'utel',
        width: 120
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
        width: 180
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
                {record['u_d'] == 0 ? (<a href="#" style={{ color: '#F00' }}>禁用</a>) : (<a href="#" style={{ color: '#50B233' }}>启用</a>)}
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

        this.props.dispatch(get_list())
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
                    message="注意事项"
                    description={(
                        <div>
                            <div>1.分组名不能重复</div>
                            <div>2.数据删除就无法恢复，建议使用禁用</div>
                        </div>
                    )}
                    type="info"
                    showIcon
                />
                <div className="table-btns">
                    <Button type="primary">添加</Button>
                    <Button type="primary">禁用</Button>
                    <Button type="primary">删除</Button>
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