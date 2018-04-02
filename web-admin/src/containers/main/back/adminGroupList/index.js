
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Table, Icon, Divider, Button, Popconfirm } from 'antd';
import { connect } from 'react-redux'
import './index.less';
import { get_list, trigger_editor, save_info, del_items, disable_items, select_row } from '../../../../redux/actions/adminGroup'
import AdminGroupEditor from '../../../../components/AdminGroupEditor';
class AdminGroupList extends React.Component {

    columns = [{
        title: '序号',
        dataIndex: 'gid',
        key: 'id',
        width: 120
    }, {
        title: '分组名',
        dataIndex: 'gname',
        key: 'gname',
        width: 280
    }, {
        title: '创建时间',
        dataIndex: 'g_c',
        key: 'g_c',
        width: 180
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <Popconfirm title={"你确认要" + (record['is_use'] == 1 ? "禁用" : "启用") + "该数据吗?"} onConfirm={() => {
                    this.props.dispatch(disable_items({
                        ids: [record.gid, 0],
                        use: record.is_use == 0 ? 1 : 0
                    }))
                }} okText="确认" cancelText="取消">
                    {record['is_use'] == 1 ? (<a href="#" style={{ color: '#F00' }}>禁用</a>) : (<a href="#" style={{ color: '#50B233' }}>启用</a>)}
                </Popconfirm>
                <Divider type="vertical" />
                <Popconfirm title="删除数据后无法恢复,你确认要删除吗？" onConfirm={() => {
                    this.props.dispatch(del_items({
                        ids: [record.gid, 0],
                        del: record.is_del == 0 ? 1 : 0
                    }))
                }} okText="确认" cancelText="取消">
                    <a href="#" >删除</a>
                </Popconfirm>
                <Divider type="vertical" />
                <a href="#" onClick={() => {
                    this.props.dispatch(trigger_editor({
                        type: "edit",
                        ...record
                    }))
                }}>修改</a>
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

        const { list, loading, editorData, pagination, selectedRowKeys } = this.props.memory;
        const { dispatch } = this.props;
        return (
            <div className="list">
                <Alert
                    message="管理员分组注意事项"
                    description={(
                        <div>
                            <div>1.管理员分组名不能重复</div>
                            <div>2.数据删除就无法恢复，建议使用禁用</div>
                        </div>
                    )}
                    type="info"
                    showIcon
                />
                <div className="table-btns">
                    <Button type="primary" onClick={() => {
                        this.props.dispatch(trigger_editor({
                            type: "add"
                        }))
                    }}>添加</Button>
                    <Button className="btn-danger" onClick={() => {
                        this.props.dispatch(disable_items({
                            ids: selectedRowKeys,
                            use: 0
                        }))
                    }}>禁用</Button>
                    <Button className="btn-success" onClick={() => {
                        this.props.dispatch(disable_items({
                            ids: selectedRowKeys,
                        }))
                    }}>启用</Button>
                    <Popconfirm title="删除数据后无法恢复,你确认要删除吗？" onConfirm={() => {
                        this.props.dispatch(del_items({
                            ids: selectedRowKeys,
                            del: 1
                        }))
                    }} okText="确认" cancelText="取消">
                        <Button type="primary" >删除</Button>
                    </Popconfirm>

                </div>
                <Table
                    columns={this.columns}
                    dataSource={list}
                    pagination={pagination}
                    bordered
                    style={{ marginTop: 10 }}
                    loading={loading}
                    onChange={this.handleTableChange}
                    rowSelection={{
                        fixed: true,
                        selectedRowKeys,
                        onChange: (selectedRowKeys) => { dispatch(select_row(selectedRowKeys)) }
                    }} />
                {editorData && (
                    <AdminGroupEditor
                        data={editorData}
                        onOk={() => {
                            dispatch(trigger_editor())
                            dispatch(get_list())
                        }}
                        onCancel={() => dispatch(trigger_editor())}
                    />
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.adminGroup
}
export default connect(mapStateToProps)(AdminGroupList)