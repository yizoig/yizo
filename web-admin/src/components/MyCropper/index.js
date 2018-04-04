import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Modal, Button, message } from 'antd';
import { Cropper } from 'react-image-cropper';
export default class MyCropper extends React.Component {


    constructor() {
        super();
        this.state = {
            url: '',
        }
    }
    static defaultProps = {
        onCancel: () => { },
        onOk: () => { }
    }
    _crop() {
        this.setState({
            url: this.cropper.crop()
        })
    }
    render() {

        const { src, onOk } = this.props;
        const { url } = this.state;
        return (
            <Modal
                title="剪切图片"
                visible={true}
                maskStyle={{ background: "rgba(0,0,0,.1)" }}
                onCancel={this.props.onCancel}
                width={540}
                footer={[
                    <Button type="primary" key="submit" onClick={() => {
                        if (!this.state.url) {
                            return message.error("请截取图片")
                        }
                        onOk(url)
                    }}>确认</Button>
                ]}
                bodyStyle={{ display: "flex", justifyContent: "space-between" }}
            >
                <Cropper
                    ref={ref => { this.cropper = ref; }}
                    src={src}
                    // aspectRatio={16 / 9}
                    // guides={false}
                    onChange={this._crop.bind(this)}
                />
                <div >
                    <img src={url} width="150" height="150" style={{ border: "1px solid #ccc", padding: 5 }} />
                </div>
            </Modal>
        )
    }
}