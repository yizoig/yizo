
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Table, Icon, Divider, Button } from 'antd';
import { connect } from 'react-redux'
import './index.less';
import { get_list } from '../../../../redux/actions/admin'
class AdminList extends React.Component {
    columns = [{
        title: '序号',
        dataIndex: 'aid',
        key: 'aid',
        width: 120
    }, {
        title: '昵称',
        dataIndex: 'aname',
        key: 'aname',
        width: 150
    },{
        title: '账号',
        dataIndex: 'aaccount',
        key: 'aaccount',
        width: 150
    }, {
        title: '创建时间',
        dataIndex: 'a_c',
        key: 'a_c',
        width: 180
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                {record['a_d'] == 0 ? (<a href="#" style={{ color: '#F00' }}>禁用</a>) : (<a href="#" style={{ color: '#50B233' }}>启用</a>)}
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
    render() {

        const { list, loading } = this.props.memory;
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
                <Table columns={this.columns} dataSource={list} bordered style={{ marginTop: 10 }} loading={loading} rowSelection={{
                    fixed: true
                }} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.admin
}
export default connect(mapStateToProps)(AdminList)