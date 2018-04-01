import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Modal, Form, Input, Button, notification, Icon } from 'antd';
import admin from '../../api/admin';
import { Select, Spin } from 'antd';

class AdminEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cache: this.props.data,
            groupList: [],
            loading: true
        }
    }
    static defaultProps = {
        onCancel: () => { },
        onOk: () => { }
    }
    formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
    }
    async componentWillMount() {

        let { list } = await admin.groupList();
        this.setState({
            groupList: list,
            loading: false
        })
    }
    handleSubmit = (e) => {
        const { data: { type } } = this.props;
        this.props.form.validateFieldsAndScroll(async (err, { name = '', group, account }) => {
            if (!err) {
                try {
                    let result;
                    if (type == "add") {
                        console.log(account)
                        result = await admin.add({
                            name,
                            group,
                            account,
                            password: '123456'
                        });
                    } else {
                        result = await admin.update({
                            name,
                            group,
                            account,
                            id: this.props.data.aid
                        });
                    }
                    if (!result) {
                        throw new Error("修改失败")
                    }
                    notification.open({
                        message: (type == "add" ? "添加" : "修改") + "成功",
                        icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
                    })
                    this.props.onOk();
                } catch (e) {
                    notification.open({
                        message: (type == "add" ? "添加" : "修改") + "失败",
                        description: e.message,
                        icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
                    })
                }
            }
        });
    }
    render() {
        const { data: { type, aname, aaccount, gid } } = this.props;
        const { getFieldDecorator, getFieldProps } = this.props.form;
        const { groupList, loading } = this.state;
        console.log(groupList)
        return (
            <Modal
                title={type == "add" ? "添加管理员" : "修改管理员信息"}
                visible={true}
                maskStyle={{ background: "rgba(0,0,0,.1)" }}
                okText="添加"
                cancelText="取消"
                onCancel={this.props.onCancel}
                footer={[
                    <Button type="primary" htmlType="submit" key="submit" onClick={this.handleSubmit}>{type == "add" ? "添加" : "修改"}</Button>
                ]}
            >
                <Spin spinning={loading} delay={500} >
                    <Form >
                        <Form.Item
                            {...this.formItemLayout}
                            label="昵称"
                        >{getFieldDecorator('name', {
                            rules: [{ required: true, message: '请填写昵称' }],
                            initialValue: aname
                        })(
                            <Input placeholder="必填" />
                        )}
                        </Form.Item>
                        <Form.Item
                            {...this.formItemLayout}
                            label="账号"
                        >{getFieldDecorator('account', {
                            rules: [{ required: true, message: '请填写账号' }],
                            initialValue: aaccount
                        })(
                            <Input placeholder="必填" />
                        )}
                        </Form.Item>
                        <Form.Item
                            {...this.formItemLayout}
                            label="分组"
                        >{getFieldDecorator('group', {
                            rules: [{ required: true, message: '请选择分组' }],
                            initialValue: gid
                        })(
                            <Select>
                                {groupList.map((item) => (<Select.Option key={"group" + item.gid} value={item.gid}>{item.gname}</Select.Option>))}
                            </Select>
                        )}
                        </Form.Item>
                    </Form>
                </Spin>
            </Modal>
        )
    }
}

export default Form.create()(AdminEditor);