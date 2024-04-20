import React, { Component } from 'react';
import MonitorItem from './components/MonitorItem';
import MonitorItemZwei from './components/MonitorItemZwei';
import MonitorItemDrei from './components/MonitorItemDrei';
import OpenUndClose from './components/OpenUndClose';
import { withRouter } from '../utils/withRouter';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin, message, Modal, Progress } from 'antd';
import { add, getChannelList, getDeptList } from './api/Monitor/ChooseMonitorApi';
import { setHistorical } from './api/Historical/HistoricalApi';
import Cz from '../imgs/004重置.01894080.png';
import Jc from '../imgs/005检测.cab9c870.png';
import Cx from '../imgs/015查询图标.81216bac.png';
import ChengGong from '../imgs/chengGong_20240418204522.png';
import ShiBai from '../imgs/shiBai_20240418215613.png';
const rightStyle = {
    cursor: 'pointer',
    textAlign: 'center',
    width: '100%'
};
const lineStyle = {
    display: 'inline-block',
    width: '46%',
    height: 1,
    borderTop: 'dotted #595959 2px',
    margin: '0 10px'
};
var zhongWen = false;
// 判断是否为谷歌浏览器
const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
const chongZhiIco = Cz;
const chaXunIco = Cx;
const jianCeIco = Jc;
const searchIco = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAABzklEQVQ4jZ3US4hPYRgG8N/8R4oibNRsJBpiOwqZpiwkNooFsWEhSbKwwEKSS00kNi6lKLltWMjCLRGxsLCQexYWkktNI7lM6K331Ol0zvzNPHXqXL7vOc/7fs/7dPQs36kNWpiD2ZiCATzL62/d1jHD8E3CdqxHF37iOyaiE+9xDCfwrbyx1UC4FK+wAcdT6bhUOhY9OIco8ynmtyNdg2u4im7sw/NSqX/wBLswK0lvY3ET6TycwX5srJZVg89YhQu4gmkF6Xjcwgycxk3sqSFYhm0170P5JrzEqYL0B6Ym2Vw8zj5W0YuVDYqH8lCXRLWt/FM0fHr+ZHeTVdrgXvZ+RWGpOJhLGMQBvBsFqWxjX9mnq0dJVMbb6P1w5q9DrJ9ceT+QLSzQajJ/HYbS5F8r19bS2pi8TyNR2p8DUcWL0vMiPKqSbsbFVFLFYE5SE8KOC7CjWn547dAI1BfowJH0+P06pdfxIKfrfxET2JdKdXZ195b3vcl4O4pfeNhmECKxDpci8kYdaSCIPuJgTEdaJobhd2lNZO06nMfCvL9cfGw6/ZO4k2WdzVB+nVVMwMy8j0zdiw/lzcNZKkjWYkuGSWRnKPySAX63NhrxD60DaMh7x31CAAAAAElFTkSuQmCC";
class ChooseMonitor extends Component {
    state = { dpName: "", mediaType: 1, data: [], data2: [], checkVendor: "KPY", data3: [], postStartTime: "", postEndTime: "", choose: "", delDpName: "", open: true, modifyState: "-1", data4:[], wait: false, monitoringTitle: "", open2:false, warning:"", open3: false, cG: false, jinDu: 0, daoJiShi: 5 }
    time2 = null;
    componentDidMount() {
        getDeptList().then((res) => {
            if (res.data.code === 200) {
                var data = res.data.data[0].children;
                this.setState({data, data2: data[0].children});
            }
        })
    }
    componentDidUpdate(oldProps) {
        const { modifyState } = this.props;
        const { navigate } = this.props.router;
        const { daoJiShi, cG } = this.state;
        const dasStatus = oldProps.modifyState;
        if (modifyState && modifyState !== dasStatus) {
            this.setState({ modifyState: modifyState });
        }
        if (daoJiShi === 0) {
            // 删除定时器
            clearInterval(this.time2);
            if (cG) {
                // 倒计时归零 并且接口访问成功并且跳转
                navigate("/taskCenter/zwei");  
            } else {
                // 倒计时归零 但是接口访问失败
                this.setState({daoJiShi: 5, open3: false});
            }
            
        }
    }
    // 改变选择的栏目
    changeLanMu = (list) => {
        const { dpName, data3, mediaType } = this.state;
        // 先把该栏目选择的删掉
        var data = data3.filter((item) => item.dpName !== dpName);
        var l = list.filter((item) => item.dpName === dpName);
        if (l[0] && l[0].name.length > 0) {
            this.setState({ data3: [...data, { dpName: dpName, list: l[0].name, mediaType: mediaType }], delDpName: "" }, () => { this.getChoose() });
        } else {
            this.setState({ data3: data, delDpName: "" }, () => { this.getChoose() });
        }
    }
    getChoose = () => {
        const { data3, postStartTime, postEndTime } = this.state;
        var choose = "";
        // 拼接选择站点和栏目
        data3.forEach((item) => {
            var a = "";
            var b = "";
            var c = [];
            if (item.mediaType === 1) {
                a = "网站";
            } else {
                a = "新媒体";
            }
            item.list.forEach((item2) => c.push(item2.channelDesc));
            b = "【" + a + "】" + item.dpName + "（" + c.join("、") + "）";
            choose = choose + b;
        })
        var s = "";
        if (choose) {
            s = choose + "," + postStartTime + "~" + postEndTime;
        }
        this.setState({ choose: s });
    }
    del = (dpName) => {
        const { data3 } = this.state;
        var newData3 = data3.filter((item) => { return item.dpName !== dpName });
        this.setState({ data3: newData3, delDpName: dpName }, () => { this.getChoose() });
    }
    chaXun = () => {
        const { choose, modifyState, postEndTime, postStartTime, data3, checkVendor } = this.state;
        if (data3.length === 0) {
            // 没有选择栏目
            message.warning("请选择栏目！！");
            return;
        }
        if (!(postEndTime || postStartTime)) {
            message.warning("请选择时间！！");
            return;
        }
        if (modifyState === "-1") {
            message.warning("请选择状态！！");
            return;
        }
        // 检查单位拼接
        var checkUnit = [];
        // 所选栏目
        var siteChannels = [];
        data3.map((item) => {
            siteChannels.push(...item.list);
            return checkUnit.push(item.dpName);
        })
        var info = {checkUnit, checkVendor, choseMsg: choose, endTime: postEndTime, modifyState, siteChannels, startTime: postStartTime};
        this.setState({wait:true});
        setHistorical(info).then(res => {
            if (res.data.code === 200) {
                // 操作成功带参数跳转
                const { navigate } = this.props.router;
                navigate('/searchDataTable', {state: {...info}});
            }
        })
    }
    jianCe = (monitoringTitle) => {
        const { choose, postEndTime, postStartTime, data3, checkVendor } = this.state;
        if (data3.length === 0) {
            // 没有选择栏目
            message.warning("请选择栏目！！");
            return;
        }
        if (!(postEndTime || postStartTime)) {
            message.warning("请选择时间！！");
            return;
        }
        // 检查单位拼接
        var checkUnit = "";
        var unit = [];
        // 所选栏目
        var siteChannels = [];
        data3.map((item) => {
            siteChannels.push(...item.list);
            return unit.push(item.dpName);
        })
        checkUnit = unit.join(",");
        var info = {checkUnit, checkVendor, choseMsg: choose, postEndTime, siteChannels, postStartTime, monitoringTitle, checkType: "自定义"};
        this.setState({open3: true});
        // 创建进度条定时器
        const time = setInterval(() => {
            const { jinDu } = this.state;
            if (jinDu < 95) {
                this.setState({jinDu: jinDu + 4});
            }
        }, 100);
        add(info).then(res => {
            if (res.data.code === 200) {
                // 请求成功 卸载定时器
                clearInterval(time);
                this.setState({cG: true, jinDu: 100, open3: true});
                // 创建跳转的倒计时
                this.time2 = setInterval(() => {
                    const { daoJiShi } = this.state;
                    this.setState({daoJiShi: daoJiShi - 1})
                }, 1000)
            } else {
                clearInterval(time);
                this.setState({cG: false, jinDu: 100, open3: true})
            }
        })
    }
    chongZhi = () => {
        this.setState({ delDpName: "chongZhi", data3: [], choose: "" });
    }
    getStatus = (modifyState) => {
        this.setState({ modifyState });
    }
    // 防止输入中文产生的抖动
    iput = (e) => {
        if (!zhongWen) {
            this.setState({
                monitoringTitle: e.target.value
            })
        }
    }
    // 判断是否为中文输入状态
    zhongWenOr(e) {
        if (e.type === 'compositionend') {
            zhongWen = false;
            if (!zhongWen && isChrome) {
                this.iput(e);
            }
        } else {
            zhongWen = true;
        }
    }
    render() {
        const { data, data2, data3, dpName, mediaType, delDpName, open, data4, wait, open2, warning, monitoringTitle, open3, cG, jinDu, daoJiShi } = this.state;
        const { location, navigate } = this.props.router;
        const bianKuangStyle = {width: 260, height: 32, outline: 'none', border: '1px solid #DCDCDC',color: '#050505', fontSize: 18};
        var inputStyle = bianKuangStyle;
        var dasStyle = { minHeight: 100 };
        if (!open) {
            dasStyle = { ...dasStyle, height: 100, overflow: 'hidden' };
        }
        if (warning) {
            // 存在警告 说明边框要变红
            inputStyle.border = 0;
            inputStyle.outline = 0;
            inputStyle.border = 'solid 1px red';
        }
        return (
            
            <div style={{ position: 'relative', height: '100%' }}>
                {location.pathname === '/choose/searchData' ? <div style={{ position: 'absolute', right: '50%', cursor: 'pointer', top: 20, transform: 'translate(700%)' }} onClick={() => { navigate('/searchData') }} ><img alt='' src={searchIco} style={{ marginRight: 10 }} />查询记录</div> : <></>}
                
                <div style={{ position: 'absolute', left: '50%', top: 60, transform: 'translate(-50%)' }}>
                    <Spin spinning={wait}>
                    <MonitorItem title="平台" data={[{ id: 1, label: "网站" }, { id: 2, label: "新媒体" }]} en={true} change={(a, b, key) => { 
                       if (dpName) { 
                        this.setState({wait:true}, () => {
                            
                                getChannelList(dpName, key).then((res) => {
                                    if (res.data.code === 200) {
                                        var dasData4 = res.data.data;
                                    this.setState({ mediaType: key, data4: dasData4, wait:false });   
                                    }
                                })   
                        })
                        }
                        }} />
                    <MonitorItem title="区域" data={data} en={true} change={(children) => { this.setState({ data2: children, data4:[] }) }} />
                    <MonitorItem title="单位" data={data2} en={false} change={(_, label) => {
                        // 等待状态
                        this.setState({wait: true}, () => {
                            getChannelList(label, mediaType).then((res) => {
                                if (res.data.code === 200) {
                                    var dasData4 = res.data.data;
                                    this.setState({ dpName: label, data4: dasData4, wait:false });   
                                } else {
                                    this.setState({wait: false});
                                }
                            })    
                        })
                        }} />
                    <MonitorItemDrei onChange={(list) => { this.changeLanMu(list) }} data={data4} dpName={dpName} del={delDpName} />
                    <MonitorItem title="接口" data={[{ label: "KPY" }]} en={true} haben={true} change={(_, label) => { this.setState({ checkVendor: label }) }} />
                    <MonitorItemZwei onChange={(sDate, eDate) => { this.setState({ postStartTime: sDate, postEndTime: eDate, delDpName: "" }, () => { this.getChoose() }) }} del={delDpName} />
                    <Outlet />
                    <div style={dasStyle}>
                        <div style={{ color: '#4B83F0', display: 'inline-block', marginRight: 20 }}>已选择</div>
                        {data3.map((item, key) => {
                            return (
                                <div style={{ backgroundColor: '#E8ECF2', minHeight: 24, display: 'inline-block', padding: 5, marginLeft: 10, marginTop: 5 }} key={key}>
                                    【{item.mediaType === 1 ? "网站" : "新媒体"}】{item.dpName}（<OpenUndClose text={item.list} param={"channelDesc"} />）
                                    <span style={{ marginLeft: 8, textAlign: 'center', cursor: 'pointer', color: '#344B79' }} onClick={() => { this.del(item.dpName) }}>X</span>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {
                            open ?
                                <div style={rightStyle} onClick={() => { this.setState({ open: false }) }}><span style={lineStyle} />折叠∧<span style={lineStyle} /></div>
                                :
                                <div style={rightStyle} onClick={() => { this.setState({ open: true }) }}><span style={lineStyle} />展开∨<span style={lineStyle} /></div>
                        }
                    </div>
                    <div style={{ paddingLeft: '50%', transform: 'translate(-19%)', position: 'absolute', bottom: -70 }}>
                        <div style={{ background: `url('${chongZhiIco}')`, height: 60, width: 188, display: 'inline-block', cursor: 'pointer', marginRight: 10 }} onClick={() => { this.chongZhi() }} />
                        {
                        location.pathname === '/choose/monitor' ?
                            <div style={{ background: `url('${jianCeIco}')`, height: 60, width: 188, display: 'inline-block', cursor: 'pointer', marginLeft: 10 }} onClick={() => { 
                                const { postEndTime, postStartTime, data3 } = this.state;
                                    if (data3.length === 0) {
                                        // 没有选择栏目
                                        message.warning("请选择栏目！！");
                                        return;
                                    }
                                    if (!(postEndTime || postStartTime)) {
                                        message.warning("请选择时间！！");
                                        return;
                                    }
                                    this.setState({open2: true});
                            }} />
                            :
                            <div style={{ background: `url('${chaXunIco}')`, height: 60, width: 188, display: 'inline-block', cursor: 'pointer', marginLeft: 10 }} onClick={() => { this.chaXun() }} />
                        }
                    </div>
                </Spin>    
                </div>
               <Modal open={open2} centered={true} title={<div>确认新增检测</div>} width={420} onOk={() => {
                    if (!monitoringTitle) {
                        this.setState({warning:"请输入检测标题！！"})
                    } else {
                        this.setState({warning: "", open2: false})
                        this.jianCe(monitoringTitle);
                    }
               }} onCancel={() => {this.setState({open2: false, warning: ""})}}>
                        <div style={ {borderBottom: '1px dotted black', borderTop: '1px dotted black'} }>
                            <label style={ {fontSize: 16} }>
                                <span style={ {color: 'red', lineHeight: 10, fontSize: 22} }>*</span> <span>检测标题：</span>
                                <input style={ inputStyle } placeholder='请输入检测标题' 
                                    onChange={(e) => {this.iput(e)}} 
                                    onCompositionStart={(e) => {this.zhongWenOr(e)}}
                                    onCompositionEnd={(e) => {this.zhongWenOr(e)}}
                                    onClick={() => {this.setState({warning: ""})}}
                                />
                            </label>
                            <div style={ {color: 'red', minHeight: 22, position: 'absolute', top: 180, left: 120} }>{warning}</div>
                        </div>
               </Modal>
               <Modal open={open3} footer={null} centered={true} maskClosable={true} closable={false} onCancel={() => {this.setState({open3: false})}}>
                    {jinDu === 100 ? (cG ? <div style={ {paddingTop: 42.5, marginBottom: 30} }><img src={ChengGong} alt='' style={ {marginLeft: 151.5} } />
                        <div style={ {marginLeft: 120.5} }>发起检测成功！！还有{daoJiShi}秒关闭当前窗口</div>
                    </div> : <div style={ {paddingTop: 42.5, marginBottom: 35} }><img src={ShiBai} alt='' style={ {marginLeft: 151.5} } />
                        <div style={ {marginLeft: 120.5} }>发起检测失败！！还有{daoJiShi}秒关闭当前窗口</div>
                    </div>)
                    :
                    <div style={ {height: 260, width: 280, margin: 'auto'} }>
                        <Progress strokeLinecap="round" percent={jinDu} showInfo={false} strokeColor="#FCB200" size={"small"} style={ {marginTop: 130} } />
                    </div>}
               </Modal>
            </div>
            
        );
    }
}

const getStatus = (status) => {
    return status;
}
export default withRouter(connect(({ status }) => getStatus(status))(ChooseMonitor));