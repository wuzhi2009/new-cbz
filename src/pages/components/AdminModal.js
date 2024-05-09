import { Breadcrumb, Input, Modal, message } from 'antd';
import React, { Component } from 'react';
import Pagination from '../components/Pagination';
import { getSeriousErr, getSevenDay, getWaitChange, tx } from '../api/CountData/CountDataApi';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import AdminTable from './AdminTable';
const titleStyle = {
    padding: '15px 20px',
    color: '#344b79',
    fontSize: 18,
    fontWeight: 700,
    cursor: 'pointer',
    userSelect: 'none'
};
const xuanZheStyle = {
    padding: '15px 20px',
    color: '#344b79',
    fontSize: 18,
    fontWeight: 700,
    cursor: 'pointer',
    borderBottom: '2px solid #4B83F0',
    userSelect: 'none'
}
const shuZiStyle = {
    display: 'inline-block',
    width: 30,
    height: 30,
    borderRadius: '15px 15px',
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 400,
    position: 'absolute',
    top: 13,
    lineHeight: 1.8
}
/**
 * 管理员提醒模态框
 * 
 * @author wuzhi
 */
class AdminModal extends Component {
    state = { key: 1, data: [], ids: [], page: 1, pageSize: 10, total: 0, wait: false, deptName: "", siteName: "", errorPlatform: "", errorDescription: "", amendments: "", total2: 0, total3: 0, open: false, allTiXing: false }
    componentDidMount() {
        this.setState({ wait: true });
        getSeriousErr("", "", "", "", "", "", "").then(res => {
            if (res.data.code === 200) {
                this.setState({ data: res.data.data, total: res.data.total, wait: false })
            }
        })
        getSevenDay("", "", "", "", "", "", "").then(res => {
            if (res.data.code === 200) {
                this.setState({ total2: res.data.total })
            }
        })
        getWaitChange("", "", "", "", "", "", "").then(res => {
            if (res.data.code === 200) {
                this.setState({ total3: res.data.total })
            }
        })
    }
    componentDidUpdate(oldProps, oldState) {
        const { key, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments } = this.state;
        // 切换头部选择
        if (key !== oldState.key || (deptName && deptName !== oldState.deptName) || (errorPlatform && errorPlatform !== oldState.errorPlatform)) {
            this.setState({ wait: true });
            switch (key) {
                case 1:
                    // 严重表述错误
                    getSeriousErr(1, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments).then(res => {
                        if (res.data.code === 200) {
                            this.setState({ data: res.data.data, total: res.data.total, wait: false, deptName, errorPlatform, errorDescription, amendments, page: 1 })
                        }
                    })
                    break;
                case 2:
                    // 超7天未修改数
                    getSevenDay(1, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments).then(res => {
                        if (res.data.code === 200) {
                            this.setState({ data: res.data.data, total2: res.data.total, wait: false, deptName, errorPlatform, errorDescription, amendments, page: 1 })
                        }
                    })
                    break;
                case 3:
                    // 累计待修改数
                    getWaitChange(1, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments).then(res => {
                        if (res.data.code === 200) {
                            this.setState({ data: res.data.data, total3: res.data.total, wait: false, deptName, errorPlatform, errorDescription, amendments, page: 1 })
                        }
                    })
                    break;
                default:
                    break;
            }
        }
    }
    // 提醒
    tiXing = (id) => {
        const { ids, key, deptName, siteName, errorPlatform, allTiXing } = this.state;
        if (id) {
            // 通过点击提醒过来的
            var s = [];
            s.push(id);
            var info = {ids: s, errType: key};
            tx(info).then(res => {
                if (res.data.code === 200) {
                    message.success(res.data.msg);
                    this.setState({open: false});
                }
            })
        } else {
            // 通过点击上方两个按钮过来的
            if (allTiXing) {
                // 全部提醒
                var infoZwei = {errType: key, siteName, deptName, errorPlatform};
                tx(infoZwei).then(res => {
                    if (res.data.code === 200) {
                        message.success(res.data.msg);
                        this.setState({open: false});
                    }
                })
            } else {
                // 选择提醒
                var infoDrei = {ids, errType: key};
                tx(infoDrei).then(res => {
                    if (res.data.code === 200) {
                        message.success(res.data.msg);
                        this.setState({open: false});
                    }
                })
            }     
        }
    }
    render() {
        const { key, data, page, pageSize, total, wait, deptName, siteName, errorPlatform, errorDescription, amendments, total2, total3, open, ids } = this.state;
        var nowTotal = 0;
        switch (key) {
            case 1:
                nowTotal = total;
                break;
            case 2:
                nowTotal = total2;
                break;
            case 3:
                nowTotal = total3
                break;
            default:
                break;
        }
        return (
            <>
                <div>
                    <div style={{ display: 'inline-block' }}>
                        <Breadcrumb
                            separator={<div style={{ content: "", position: 'absolute', top: 25, bottom: 10, width: .5, background: 'linear-gradient(180deg,#efefef,#344b79,#efefef)', transform: 'rotate(15deg)', height: 50 }} />}
                            items={[
                                {
                                    title: <div style={key === 1 ? xuanZheStyle : titleStyle} onClick={() => { this.setState({ key: 1 }) }}>
                                        严重表述错误
                                        <div style={shuZiStyle}>
                                            {total >= 999 ? 999 : total}
                                        </div>
                                    </div>,
                                },
                                {
                                    title: <div style={key === 2 ? xuanZheStyle : titleStyle} onClick={() => { this.setState({ key: 2 }) }}>
                                        超7天未修改数
                                        <div style={shuZiStyle}>
                                            {total2 >= 999 ? 999 : total}
                                        </div>
                                    </div>,
                                },
                                {
                                    title: <div style={key === 3 ? xuanZheStyle : titleStyle} onClick={() => { this.setState({ key: 3 }) }}>
                                        累计待修改数
                                        <div style={shuZiStyle}>
                                            {total3 >= 999 ? 999 : total}
                                        </div>
                                    </div>,
                                },
                            ]}
                        />
                    </div>
                    <div style={{ display: 'inline-block', float: 'right' }}>
                        <span className='YellowButton heikuang' style={{ backgroundColor: '#62D862', width: 96, marginRight: 15, marginTop: 15 }} onClick={() => {
                            if (ids.length <= 0) {
                                message.warning("请选择数据！！");
                            } else {
                                this.setState({open: true, allTiXing: false});
                            }
                         }}><span>选择提醒</span></span>
                        <span className='YellowButton heikuang' style={{ backgroundColor: '#66BDFF', width: 96, marginTop: 15 }} onClick={() => { this.setState({open: true, allTiXing: true}) }}><span>一键提醒</span></span>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #EFEFEF' }}>
                    <div style={{ marginTop: 13, marginBottom: 5, marginLeft: 20 }}>
                        <div style={{ display: 'inline-block', width: 230, marginRight: 10 }}><Input placeholder='请输入站点/账号名称' onChange={(e) => { this.setState({ siteName: e.currentTarget.value }) }} /></div>
                        <div style={{ display: 'inline-block', width: 230, marginRight: 10 }}><Input placeholder='请输入不规范表述' onChange={(e) => { this.setState({ errorDescription: e.currentTarget.value }) }} /></div>
                        <div style={{ display: 'inline-block', width: 230, marginRight: 60 }}><Input placeholder='请输入规范表述' onChange={(e) => { this.setState({ amendments: e.currentTarget.value }) }} /></div>
                        <span className='YellowButton heikuang' style={{ backgroundColor: 'white', width: 70, marginRight: 15, color: 'black', border: '1px solid #EFEFEF' }}
                            onClick={() => {
                                this.setState({ deptName: "", siteName: "", errorPlatform: "", errorDescription: "", amendments: "", page: 1 }, () => {
                                    this.setState({ wait: true });
                                    switch (key) {
                                        case 1:
                                            // 严重表述错误
                                            getSeriousErr(1, pageSize, "", "", "", "", "").then(res => {
                                                if (res.data.code === 200) {
                                                    this.setState({ data: res.data.data, total: res.data.total, wait: false })
                                                }
                                            })
                                            break;
                                        case 2:
                                            // 超7天未修改数
                                            getSevenDay(1, pageSize, "", "", "", "", "").then(res => {
                                                if (res.data.code === 200) {
                                                    this.setState({ data: res.data.data, total2: res.data.total, wait: false })
                                                }
                                            })
                                            break;
                                        case 3:
                                            // 累计待修改数
                                            getWaitChange(1, pageSize, "", "", "", "", "").then(res => {
                                                if (res.data.code === 200) {
                                                    this.setState({ data: res.data.data, total3: res.data.total, wait: false })
                                                }
                                            })
                                            break;
                                        default:
                                            break;
                                    }
                                })
                            }}><span>重 置</span></span>
                        <span className='YellowButton heikuang' style={{ backgroundColor: '#66BDFF', width: 70 }} onClick={() => {
                            this.setState({ wait: true });
                            switch (key) {
                                case 1:
                                    getSeriousErr(1, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments).then(res => {
                                        if (res.data.code === 200) {
                                            this.setState({ data: res.data.data, total: res.data.total, wait: false, page: 1 })
                                        }
                                    })
                                    break;
                                case 2:
                                    getSevenDay(1, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments).then(res => {
                                        if (res.data.code === 200) {
                                            this.setState({ data: res.data.data, total2: res.data.total, wait: false, page: 1 })
                                        }
                                    })
                                    break;
                                case 3:
                                    getWaitChange(1, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments).then(res => {
                                        if (res.data.code === 200) {
                                            this.setState({ data: res.data.data, total3: res.data.total, wait: false, page: 1 })
                                        }
                                    })
                                    break;
                                default:
                                    break;
                            }
                        }}><span>查 询</span></span>
                    </div>
                    <AdminTable data={data} changeIds={(ids) => { this.setState({ ids }) }} page={page} pageSize={pageSize} wait={wait}
                        onChange={(deptName, errorPlatform) => { this.setState({ deptName, errorPlatform }) }} 
                        onTiXing={(id) => {this.setState({allTiXing: false}, () => {this.tiXing(id)});}} />
                    <Pagination defaultCurrent={page} total={nowTotal} onChange={(page, pageSize) => {
                        this.setState({ wait: true });
                        // 检验现在的key判断请求哪个接口
                        switch (key) {
                            case 1:
                                // 严重表述错误
                                getSeriousErr(page, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments).then(res => {
                                    if (res.data.code === 200) {
                                        this.setState({ data: res.data.data, total: res.data.total, wait: false })
                                    }
                                })
                                break;
                            case 2:
                                // 超7天未修改数
                                getSevenDay(page, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments).then(res => {
                                    if (res.data.code === 200) {
                                        this.setState({ data: res.data.data, total: res.data.total, wait: false })
                                    }
                                })
                                break;
                            case 3:
                                // 累计待修改数
                                getWaitChange(page, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments).then(res => {
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
                <Modal open={open} onCancel={() => {this.setState({open: false})}} title={<div><QuestionCircleTwoTone twoToneColor="#FBC14F" style={{ margin: 15, fontSize: 24 }} />提示</div>} onOk={() => {this.tiXing(null)}}>
                    <div style={ {fontSize: 18, marginLeft: 40} }>确认提醒该数据</div>
                </Modal>
            </>
        );
    }
}

export default AdminModal;