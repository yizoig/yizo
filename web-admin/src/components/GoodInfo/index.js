import React, { Component } from 'react';
import ReactDom from 'react-dom';
import users from '../../api/user';
import good from '../../api/good';
import college from '../../api/college';
import { Spin, Table, Badge } from 'antd';
import './index.less';
import GoodApi from '../../../../weiApp/src/lib/apis/good';
export default class GoodInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            loading: false
        }
    }
    goodstates = {
        "-1": <Badge status="error" text="已结束" />,
        "0": <Badge status="processing" text="进行中" />,
        "1": <Badge status="success" text="已完成" />,
    }
    componentWillMount() {
        this.loadData();
    }
    async loadData() {

        this.setState({
            loading: true
        })
        let { data: { pid: id } } = this.state
        let data = await good.info({ id })
        this.setState({
            data,
            loading: false
        })
    }
    render() {

        let {
            data: { cName, title, content, number, cid, records = [], state, images = [], price, oprice },
            loading,
        } = this.state
        return (
            <Spin spinning={loading}>
                <div className="good-expend">
                    <div className="info-box">
                        <div className="college">
                            <img width="80" height="80" src={college.logo(cid)} />
                            <div>{cName}</div>
                        </div>
                        <div className="info">
                            <div className="title">{title}</div>
                            <div className="images">
                                {images.map((img, index) => (
                                    <img key={index} src={GoodApi.uploadImage + img} />
                                ))}
                            </div>
                            <div className="content">{content}</div>
                            <div className="price">
                                <div style={{color:"#f00",fontSize:18}}>￥{price}</div>
                                <div style={{color:"#999",fontSize:12,textDecoration:"line-through"}}>原价 {oprice}</div>
                            </div>
                            <div className="bottom">
                                <div>{this.goodstates[state]} 数量:{number}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
        )
    }
}