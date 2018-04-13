
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Table, Icon, Divider, Button, message } from 'antd';
import { connect } from 'react-redux'
import tasks from '../../../../api/task';
import users from '../../../../api/user';
class TaskList extends React.Component {
    columns = [{
        title: '头像',
        dataIndex: 'createId',
        key: 'avatar',
        width: 160,
        render: (id, { createName }) => <div className="avatar"><img  src={users.avatar(id)} />{createName}</div>
    }, {
        title: '任务类型',
        dataIndex: 'tName',
        key: 'tname',
        width: 160
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
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="#" >删除</a>
                <Divider type="vertical" />
            </span>
        ),
    }];
    componentWillMount() {

        this.loadData()
    }
    state = {
        list: [],
        loading: true,
        editorData: null
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

        const { list, loading, pagination, editorData } = this.state;
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
                    expandedRowRender={({ title,content,cName,tName,gender,number,rewardType,reward }) => (
                        <div>
                            <div>标题:{title}</div>
                            <div>内容:{content}</div>
                            <div>学校:{cName}</div>
                            <div>类型:{tName}</div>
                            <div>性别限制:{gender==-1?"不限":(gender==0?"男":"女")}</div>
                            <div>人数:{number}</div>
                            <div>酬劳:{reward+(rewardType==0?"元":"")}</div>
                        </div>
                    )}
                // rowSelection={{
                //     fixed: true
                // }}
                />
            </div>
        )
    }
}

export default connect()(TaskList)