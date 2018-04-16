import React, { Component } from 'react';
import ReactDom from 'react-dom';
import users from '../../api/user';
import task from '../../api/task';
import college from '../../api/college';
import { Spin, Table,Badge } from 'antd';
import './index.less';
export default class TaskInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            loading: false
        }
    }
    taskstates = {
        "-1":<Badge status="error" text="已结束" />,
        "0":<Badge status="processing" text="进行中" />,
        "1":<Badge status="success" text="已完成" />,
    }
    componentWillMount() {
        this.loadData();
    }
    async loadData() {

        this.setState({
            loading: true
        })
        let { data: { pid: id } } = this.state
        let data = await task.info({ id })
        this.setState({
            data,
            loading: false
        })
    }
    render() {

        let { data: { cName, gender, title, content, rewardType, reward, number, cid ,records=[],state}, loading } = this.state
        return (
            <Spin spinning={loading}>
                <div className="task-expend">
                    <div className="info-box">
                        <div className="college">
                            <img width="80" height="80" src={college.logo(cid)} />
                            <div>{cName}</div>
                        </div>
                        <div className="info">
                            <div className="top">
                                <div className="ribbon-wrapper">
                                    {
                                        gender == -1 ? (
                                            <div className="ribbon" style={{ backgroundColor: "#029A60" }}>不限</div>
                                        ) : (gender == 0 ? (
                                            <div className="ribbon" style={{ backgroundColor: "#FF0852" }}>限女生</div>
                                        ) : (
                                                <div className="ribbon" style={{ backgroundColor: "#1C79FF" }} >限男生</div>
                                            ))
                                    }
                                </div>
                            </div>
                            <div className="title">{title}</div>
                            <div className="content">
                                {content}
                                <div className="reward">酬劳:{reward + (rewardType == 0 ? "元" : "")}</div>
                            </div>
                            <div className="bottom">
                                <div>{this.taskstates[state]} 人数:{number}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
        )
    }
}