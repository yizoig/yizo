import React, { Component } from 'react';
import ReactDom from 'react-dom';
import good from '../../api/good';
import users from '../../api/user';
import college from '../../api/college';
import { Spin, Table, Badge } from 'antd';
import './index.less';
export default class GoodRecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            loading: false
        }
    }
    goodstates = {
        "-1": <Badge status="error" text="放弃购买" />,
        "0": <Badge status="processing" text="已下单" />,
        "1": <Badge status="success" text="已完成" />,
    }
    columns = [{
        title: '头像',
        dataIndex: 'uid',
        key: 'avatar',
        width: 160,
        render: (id, { uname }) => <div className="avatar"><img src={users.avatar(id)} style={{ width: 30, height: 30, margin: 3 }} />{uname}</div>
    },{
        title: '联系人',
        dataIndex: 'contact',
        key: 'contact',
        render: (text) => text||"无"
    },  {
        title: '联系电话',
        dataIndex: 'contactTel',
        key: 'contactTel',
        render: (text) => text||"无"
    },  {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        width: 100,
        render:state=>this.goodstates[state]
    },{
        title: '数量',
        dataIndex: 'num',
        key: 'num',
        width: 60,
    },{
        title: '总价',
        dataIndex: 'total',
        key: 'total',
        width: 60,
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
        let { records = [] } = await good.info({ id })
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