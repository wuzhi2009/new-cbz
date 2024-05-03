import { Breadcrumb } from 'antd';
import React, { Component } from 'react';
import Pagination from '../components/Pagination';
import { getSeriousErr, getSevenDay, getWaitChange } from '../api/CountData/CountDataApi';
import AdminTable from './AdminTable';
const titleStyle = {
    padding: '15px 20px',
    color: '#344b79',
    fontSize: 18,
    fontWeight: 700,
    cursor: 'pointer'
};
const xuanZheStyle = {
    padding: '15px 20px',
    color: '#344b79',
    fontSize: 18,
    fontWeight: 700,
    cursor: 'pointer',
    borderBottom: '2px solid #4B83F0'
}
/**
 * 管理员提醒模态框
 * 
 * @author wuzhi
 */
class AdminModal extends Component {
    state = { key: 1, data: [], ids: [], page: 1, pageSize: 10, total: 0, wait: false, siteName: "", errorPlatform: "", errorDescription: "", amendments: "" }
    componentDidMount() {
        this.setState({wait: true});
        getSeriousErr("", "", "", "", "", "").then(res => {
            if (res.data.code === 200) {
                this.setState({ data: res.data.data, total: res.data.total, wait: false })
            }
        })
    }
    componentDidUpdate(oldProps, oldState) {
        const { key, pageSize, siteName, errorPlatform, errorDescription, amendments } = this.state;
        // 切换头部选择
        if (key !== oldState.key || siteName !== oldState.siteName || errorPlatform !== oldState.errorPlatform || errorDescription !== oldState.errorDescription || amendments !== oldState.errorDescription) {
            this.setState({wait: true});
            switch (key) {
                case 1:
                    // 严重表述错误
                    getSeriousErr(1, pageSize, siteName, errorPlatform, errorDescription, amendments).then(res => {
                        if (res.data.code === 200) {
                            this.setState({ data: res.data.data, total: res.data.total, wait: false, siteName, errorPlatform, errorDescription, amendments, page: 1 })
                        }
                    })
                    break;
                case 2:
                    // 超7天未修改数
                    getSevenDay(1, pageSize, siteName, errorPlatform, errorDescription, amendments).then(res => {
                        if (res.data.code === 200) {
                            this.setState({ data: res.data.data, total: res.data.total, wait: false, siteName, errorPlatform, errorDescription, amendments, page: 1 })
                        }
                    })
                    break;
                case 3:
                    // 累计待修改数
                    getWaitChange(1, pageSize, siteName, errorPlatform, errorDescription, amendments).then(res => {
                        if (res.data.code === 200) {
                            this.setState({ data: res.data.data, total: res.data.total, wait: false, siteName, errorPlatform, errorDescription, amendments, page: 1 })
                        }
                    })
                    break;
                default:
                    break;
            }
        }
    }
    render() {
        const { key, data, page, pageSize, total, wait, siteName, errorPlatform, errorDescription, amendments } = this.state;
        return (
            <>
                <div>
                    <div style={{ display: 'inline-block' }}>
                        <Breadcrumb
                            separator={<div style={{ content: "", position: 'absolute', top: 25, bottom: 10, width: .5, background: 'linear-gradient(180deg,#efefef,#344b79,#efefef)', transform: 'rotate(15deg)', height: 50 }} />}
                            items={[
                                {
                                    title: <div style={key === 1 ? xuanZheStyle : titleStyle} onClick={() => { this.setState({ key: 1 }) }}>严重表述错误</div>,
                                },
                                {
                                    title: <div style={key === 2 ? xuanZheStyle : titleStyle} onClick={() => { this.setState({ key: 2 }) }}>超7天未修改数</div>,
                                },
                                {
                                    title: <div style={key === 3 ? xuanZheStyle : titleStyle} onClick={() => { this.setState({ key: 3 }) }}>累计待修改数</div>,
                                },
                            ]}
                        />
                    </div>
                    <div style={{ display: 'inline-block', float: 'right' }}>
                        <span className='YellowButton heikuang' style={{ backgroundColor: '#62D862', width: 96, marginRight: 15, marginTop: 15 }} onClick={() => { }}><span>选择提醒</span></span>
                        <span className='YellowButton heikuang' style={{ backgroundColor: '#66BDFF', width: 96, marginTop: 15 }} onClick={() => { }}><span>一键提醒</span></span>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #EFEFEF' }}>
                    <AdminTable data={data} changeIds={(ids) => { this.setState({ ids }) }} page={page} pageSize={pageSize} wait={wait} />
                    <Pagination defaultCurrent={page} total={total} onChange={(page, pageSize) => {
                        this.setState({wait: true});
                        // 检验现在的key判断请求哪个接口
                        switch (key) {
                            case 1:
                                // 严重表述错误
                                getSeriousErr(page, pageSize, siteName, errorPlatform, errorDescription, amendments).then(res => {
                                    if (res.data.code === 200) {
                                        this.setState({ data: res.data.data, total: res.data.total, wait: false })
                                    }
                                })
                                break;
                            case 2:
                                // 超7天未修改数
                                getSevenDay(page, pageSize, siteName, errorPlatform, errorDescription, amendments).then(res => {
                                    if (res.data.code === 200) {
                                        this.setState({ data: res.data.data, total: res.data.total, wait: false })
                                    }
                                })
                                break;
                            case 3:
                                // 累计待修改数
                                getWaitChange(page, pageSize, siteName, errorPlatform, errorDescription, amendments).then(res => {
                                    if (res.data.code === 200) {
                                        this.setState({ data: res.data.data, total: res.data.total, wait: false })
                                    }
                                })
                                break;
                            default:
                                break;
                        }
                        this.setState({ page, pageSize });
                    }} />
                </div>
            </>
        );
    }
}

export default AdminModal;