import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Modal, Form, Input, Button,notification,Icon } from 'antd';
import admin from '../../api/admin';
class AdminGroupEditor extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            cache:this.props.data
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
    handleSubmit = (e) => {
        const { data: { type } } = this.props;
        this.props.form.validateFieldsAndScroll(async (err, { gname = '' }) => {
            if (!err) {
                try {

                    let result;
                    if (type == "add") {
                        result = await admin.addGroup({
                            name: gname
                        });
                    } else {
                        result = await admin.updateGroup({
                            name: gname,
                            id:this.props.data.gid
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
        const { data: { type ,gname} } = this.props;
        const { getFieldDecorator, getFieldProps } = this.props.form;
        return (
            <Modal
                title={type == "add" ? "添加分组" : "修改分组信息"}
                visible={true}
                maskStyle={{ background: "rgba(0,0,0,.1)" }}
                okText="添加"
                cancelText="取消"
                onCancel={this.props.onCancel}
                footer={[
                    <Button type="primary" htmlType="submit" key="submit" onClick={this.handleSubmit}>{type == "add" ? "添加" : "修改"}</Button>
                ]}
            >
                <Form >
                    <Form.Item
                        {...this.formItemLayout}
                        label="分组名"
                    >{getFieldDecorator('gname', {
                        rules: [{ required: true, message: '请填写分组名' }],
                        initialValue:gname
                    })(
                        <Input placeholder="必填" />
                    )}
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AdminGroupEditor);