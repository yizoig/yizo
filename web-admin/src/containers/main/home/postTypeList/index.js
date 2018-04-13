
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Table, Icon, Divider, Button, Popconfirm, Radio } from 'antd';
import { connect } from 'react-redux'
// import './index.less';
import { get_list, trigger_editor, del_items, use_items, select_row, select_type } from '../../../../redux/actions/postType'
import PostTypeEditor from '../../../../components/PostTypeEditor';

const RadioGroup = Radio.Group;
class PostTypeList extends React.Component {
    columns = [{
        title: '类型名',
        dataIndex: 'tname',
        key: 'tname',
        width: 180
    }, {
        title: '创建时间',
        dataIndex: 't_c',
        key: 't_c',
        width: 180
    }, {
        title: '操作',
        key: 'action',
        render: (parent, record) => (
            <span>
                <Popconfirm title={"你确认要" + (record['is_use'] == 1 ? "禁用" : "启用") + "该数据吗?"} onConfirm={() => {
                    this.props.dispatch(use_items({
                        ids: [record.tid, 0],
                        use: record.is_use == 0 ? 1 : 0
                    }))
                }} okText="确认" cancelText="取消">
                    {record['is_use'] == 1 ? (<a href="#" style={{ color: '#F00' }}>禁用</a>) : (<a href="#" style={{ color: '#50B233' }}>启用</a>)}
                </Popconfirm>
                <Divider type="vertical" />
                <Popconfirm title="删除数据后无法恢复,你确认要删除吗？" onConfirm={() => {
                    this.props.dispatch(del_items({
                        ids: [record.tid, 0],
                        del: 1
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
    render() {

        const { list, loading, editorData, selectedRowKeys, type } = this.props.memory;
        const { dispatch } = this.props;
        return (
            <div className="list">
                <Alert
                    message="动态类型管理注意事项"
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
                    <Button className="btn-danger" onClick={() => {
                        this.props.dispatch(use_items({
                            ids: selectedRowKeys,
                            use: 0
                        }))
                    }}>禁用</Button>
                    <Button className="btn-success" onClick={() => {
                        this.props.dispatch(use_items({
                            ids: selectedRowKeys,
                            use: 1
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
                <div style={{ margin: "20px 0" }}>
                    <RadioGroup value={type} onChange={(e) => {
                        this.props.dispatch(select_type(e.target.value))
                    }}>
                        {list.map(({ tid, tname, t_c }) => <Radio key={tid} value={tid}>{tname}</Radio>)}
                    </RadioGroup>
                </div>
                <Table
                    columns={this.columns}
                    dataSource={list.filter(({ tid }) => type == -1 || tid == type).reduce((arr, item) => { return [...arr, ...item.children] }, [])}
                    bordered
                    rowKey={({ tid }) => tid}
                    style={{ marginTop: 10 }}
                    loading={loading}
                    rowSelection={{
                        fixed: true,
                        onChange: (selectedRowKeys) => { dispatch(select_row(selectedRowKeys)) },
                        selectedRowKeys
                    }}
                />
                {editorData && (
                    <PostTypeEditor
                        data={editorData}
                        types={list}
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
    return state.postType
}
export default connect(mapStateToProps)(PostTypeList)