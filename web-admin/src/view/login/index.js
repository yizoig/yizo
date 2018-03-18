import React, { Component } from 'react';
import './index.less';
import { Form, Input, Button, Icon,notification } from 'antd';
const FormItem = Form.Item;
export default Form.create()(class LoginView extends React.Component {


    loginSubmit(event) {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {

               
                return console.log('Received values of form: ', values);
            }
            let {user,password} = this.props.form.getFieldsValue();
            if(user!='admin' || password!='123456'){
                return notification.open({
                    message: '登录失败',
                    description: '账号或密码错误',
                    icon: <Icon type="frown" style={{ color: '#f00' }} />,
                }) 
            }
            notification.open({
                message: '登录成功',
                description: '3秒后跳转管理页面',
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
            }) 
            setTimeout(()=>{
                this.props.history.push('/')
            },3000)
           
        });

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="login-view">
                <div className="login-header">
                    <div className="title">YIZO后台管理</div>
                </div>
                <div className="login-main" style={{height:window.innerHeight-120}}>
                    <div className="main-inner">
                        <div className="left">
                        </div>
                        <div className="login-box">
                            <Form
                                style={{ padding: "20px 30px" }}
                                onSubmit={this.loginSubmit.bind(this)}
                            >
                                <FormItem>
                                    <label>管理员登录</label>
                                </FormItem>
                                <FormItem

                                >
                                    {getFieldDecorator('user', {
                                        rules: [{ required: true, message: '请输入账号!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                                    )}
                                </FormItem>
                                <FormItem

                                >
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '请输入密码!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" type="password" />
                                    )}
                                </FormItem>
                                <FormItem
                                >
                                    <Button type="primary" htmlType="submit" style={{ width: "100%" }}>登录</Button>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="login-footer">
                <span>遵义师范学院-李凌云毕业设计</span>
                </div>
            </div>
        );
    }
})