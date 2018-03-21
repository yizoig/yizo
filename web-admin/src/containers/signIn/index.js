import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { doSignIn, reSize } from '../../redux/actions/signIn';
import { Form, Input, Button, Icon, notification } from 'antd';
import { createForm, createFormField } from 'rc-form';
import { push } from 'react-router-redux';

const FormItem = Form.Item;

class SignIn extends React.Component {

    static propTypes = {
        form: PropTypes.object,
        dispatch: PropTypes.func,
        isSignIn: PropTypes.bool
    }
    constructor(props, context) {
        super(props);
    }
    /**
     * 注册窗口大小改变事件
     */
    componentWillMount() {
        window.onresize = () => this.props.dispatch(reSize());
    }
    /**
     * 移除窗口该表事件
     * @param {} event 
     */
    componentWillUnmount() {
        window.onresize = null;
    }
    signInSubmit(event) {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                return console.log('Received values of form: ', values);
            }
            let { user, password } = this.props.form.getFieldsValue();
            this.props.dispatch(doSignIn({ user, password }))
        });
    }
    render() {
        const { getFieldDecorator, getFieldProps } = this.props.form;
        const { mainHeight,loading } = this.props;
        return (
            <div id="signIn-view">
                <div className="signIn-header">
                    <div className="title">YIZO后台管理</div>
                </div>
                <div className="signIn-main" style={{ height: mainHeight }}>
                    <div className="main-inner">
                        <div className="left">
                        </div>
                        <div className="signIn-box">
                            <Form
                                style={{ padding: "20px 30px" }}
                                onSubmit={this.signInSubmit.bind(this)}
                            >
                                <FormItem>
                                    <label>管理员登录</label>
                                </FormItem>
                                <FormItem
                                >
                                    <Input {...getFieldProps('user', {
                                        rules: [],
                                    })}
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号"
                                    />

                                </FormItem>
                                <FormItem
                                >
                                    <Input  {...getFieldProps('password', {
                                        rules: [],
                                    })}
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" type="password" />
                                </FormItem>
                                <FormItem
                                >
                                    <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={loading}>登录</Button>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="signIn-footer">
                    <span>遵义师范学院-李凌云毕业设计</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.sign
}
export default connect(mapStateToProps)(createForm({
    mapPropsToFields(props) {
        return {
            user: createFormField(props.formState.user),
            password: createFormField(props.formState.password),
        };
    },
    onFieldsChange(props, fields) {
        // console.log('onFieldsChange', fields);
        props.dispatch({
            type: 'save_fields',
            payload: fields,
        });
    },
})(SignIn))