
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Table, Icon, Divider, Button } from 'antd';
import { connect } from 'react-redux'
import './index.less';
import { get_list,use_item } from '../../../../redux/actions/user'
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
                        this.props.dispatch(use_item({
                            ids: [record.uid, 0],
                            use: record.is_use == 0 ? 1 : 0
                        }))
                    }}
                >{record['is_use'] == 0 ? "启用" : "禁用"}</a>
                {/* <Divider type="vertical" />
                <a href="#">修改</a> */}
            </span>
        ),
    }];
    componentWillMount() {
        if (this.props.memory.list.length == 0) {
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