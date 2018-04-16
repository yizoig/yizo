
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Table, Icon, Divider, Button, message, Badge } from 'antd';
import { connect } from 'react-redux'
import tasks from '../../../../api/task';
import users from '../../../../api/user';
import './index.less';
import TaskInfo from '../../../../components/TaskInfo';
import TaskRecord from '../../../../components/TaskRecord';
import Comment from '../../../../components/Comment';
class TaskList extends React.Component {
    columns = [{
        title: '头像',
        dataIndex: 'createId',
        key: 'avatar',
        width: 160,
        render: (id, { createName }) => <div className="avatar"><img src={users.avatar(id)} />{createName}</div>
    }, {
        title: '任务类型',
        dataIndex: 'tName',
        key: 'tname',
        width: 120
    }, {
        title: "标题",
        dataIndex: 'title',
        key: 'title',
        width: 160
    }, {
        title: '创建时间',
        dataIndex: '_c',
        key: 'p_c',
        width: 180
    }, {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        width: 80,
        render: state => this.taskstates[state]
    }, {
        title: '操作',
        key: 'action',
        render: (text, record, index) => (
            <span>
                <a onClick={() => {
                    this.settype(record, index, "info")
                }}>详情</a>
                <Divider type="vertical" />
                <a onClick={() => {
                    this.settype(record, index, "record")
                }}>任务记录</a>
                <Divider type="vertical" />
                <a onClick={() => {
                    this.settype(record, index, "comment")
                }}>查看评论</a>
                <Divider type="vertical" />
                <a href="#" >删除</a>
            </span>
        ),
    }];
    settype(record, index, type) {
        let { expandedRowKeys: keys, list } = this.state;
        if (keys.indexOf(record.pid) != -1) {
            if (list[index]['_type'] == type)
                keys = keys.filter(i => i != record.pid)
        } else {
            keys.push(record.pid);
        }
        list[index] = {
            ...record,
            _type: type
        }

        this.setState({
            expandedRowKeys: keys,
            list
        })
    }
    componentWillMount() {

        this.loadData()
    }
    taskstates = {
        "-1": <Badge status="error" text="已结束" />,
        "0": <Badge status="processing" text="进行中" />,
        "1": <Badge status="success" text="已完成" />,
    }
    state = {
        list: [],
        loading: true,
        editorData: null,
        expandedRowKeys: []
    }
    async loadData(data = {}) {
        try {
            this.setState({
                loading: true
            })
            let { list } = await tasks.list(data);
            this.setState({
                list
            })
        } catch (e) {
            console.error(e);
            message.error(e.message)
        } finally {
            this.setState({
                loading: false
            })
        }
    }
    handleTableChange = async (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;

        await this.loadData({ pagination })
    }
    render() {

        const { list, loading, pagination, editorData, expandedRowKeys } = this.state;
        const { dispatch } = this.props;
        return (
            <div className="user-list">
                <Alert
                    message="任务列表注意事项"
                    description={(
                        <div>
                        </div>
                    )}
                    type="info"
                    showIcon
                />
                <div className="table-btns">
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
                    rowKey={({ pid }) => pid}
                    expandedRowKeys={expandedRowKeys}
                    onExpandedRowsChange={expandedRows => {
                        this.setState({
                            expandedRowKeys: expandedRows
                        })
                    }}
                    expandedRowRender={data => {
                        return data._type == "info" ? <TaskInfo data={data} /> : (data._type == "record" ? <TaskRecord id={data.pid} /> : <Comment id={data.pid} />)
                    }}
                // rowSelection={{
                //     fixed: true
                // }}
                />
            </div>
        )
    }
}

export default connect()(TaskList)