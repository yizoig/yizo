
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Table, Icon, Divider, Button,Popconfirm } from 'antd';
import { connect } from 'react-redux'
// import './index.less';
import { get_list, del_items, trigger_editor } from '../../../../redux/actions/goodType'
import GoodTypeEditor from '../../../../components/GoodTypeEditor';
class GoodTypeList extends React.Component {
    columns = [{
        title: '序号',
        dataIndex: 'tid',
        key: 'tid',
        width: 120
    }, {
        title: '类型名',
        dataIndex: 'tname',
        key: 'tname',
        width: 180
    },{
        title: '创建时间',
        dataIndex: 't_c',
        key: 't_c',
        width: 180
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
               <Popconfirm title={"你确认要" + (record['t_d'] == 0 ? "禁用" : "启用") + "该数据吗?"} onConfirm={() => {
                    this.props.dispatch(del_items({
                        ids: [record.gid],
                    }))
                }} okText="确认" cancelText="取消">
                    {record['t_d'] == 0 ? (<a href="#" style={{ color: '#F00' }}>禁用</a>) : (<a href="#" style={{ color: '#50B233' }}>启用</a>)}
                </Popconfirm>
                <Divider type="vertical" />
                <Popconfirm title="删除数据后无法恢复,你确认要删除吗？" onConfirm={() => {
                    this.props.dispatch(del_items({
                        ids: [record.gid],
                        real: 1
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

        const { list, loading, pagination, editorData } = this.props.memory;
        const { dispatch } = this.props;
        return (
            <div className="list">
                <Alert
                    message="物品类型管理注意事项"
                    description={(
                        <div>
                            <div>1.类型名不能重复</div>
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
 
                    rowSelection={{
                        fixed: true
                    }} />
                     {editorData && (
                    <GoodTypeEditor
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
    return state.goodType
}
export default connect(mapStateToProps)(GoodTypeList)