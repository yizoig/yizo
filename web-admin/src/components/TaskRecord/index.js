import React, { Component } from 'react';
import ReactDom from 'react-dom';
import task from '../../api/task';
import users from '../../api/user';
import college from '../../api/college';
import { Spin, Table, Badge } from 'antd';
import './index.less';
export default class TaskRecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            loading: false
        }
    }
    taskstates = {
        "-1": <Badge status="error" text="已结束" />,
        "0": <Badge status="processing" text="进行中" />,
        "1": <Badge status="success" text="已完成" />,
    }
    columns = [{
        title: '头像',
        dataIndex: 'uid',
        key: 'avatar',
        width: 160,
        render: (id, { uname }) => <div className="avatar"><img src={users.avatar(id)} style={{ width: 30, height: 30, margin: 3 }} />{uname}</div>
    }, {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        width: 160
    }, {
        title: '报名时间',
        dataIndex: '_c',
        key: '_c',
        width: 180
    }];
    componentWillMount() {
        this.loadData();
    }
    async loadData() {

        this.setState({
            loading: true
        })
        let { id } = this.props
        let { records = [] } = await task.info({ id })
        this.setState({
            data: records,
            loading: false
        })
    }
    render() {

        let { data, loading } = this.state
        return (
            <Spin spinning={loading}>
                <Table
                    columns={this.columns}
                    className="components-table-demo-nested"
                    dataSource={data}
                    size="small"
                />
            </Spin>
        )
    }
}