import React, { Component } from 'react';
import MonitorItem from './components/MonitorItem';
import MonitorItemZwei from './components/MonitorItemZwei';
import MonitorItemDrei from './components/MonitorItemDrei';
import OpenUndClose from './components/OpenUndClose';
import { withRouter } from '../utils/withRouter';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { get } from '../utils/reqUtil';
import { Spin } from 'antd';
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
const chongZhiIco = "http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/004%E9%87%8D%E7%BD%AE.01894080.png";
const chaXunIco = "http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/015%E6%9F%A5%E8%AF%A2%E5%9B%BE%E6%A0%87.81216bac.png";
const jianCeIco = "http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/005%E6%A3%80%E6%B5%8B.cab9c870.png";
const searchIco = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAABzklEQVQ4jZ3US4hPYRgG8N/8R4oibNRsJBpiOwqZpiwkNooFsWEhSbKwwEKSS00kNi6lKLltWMjCLRGxsLCQexYWkktNI7lM6K331Ol0zvzNPHXqXL7vOc/7fs/7dPQs36kNWpiD2ZiCATzL62/d1jHD8E3CdqxHF37iOyaiE+9xDCfwrbyx1UC4FK+wAcdT6bhUOhY9OIco8ynmtyNdg2u4im7sw/NSqX/wBLswK0lvY3ET6TycwX5srJZVg89YhQu4gmkF6Xjcwgycxk3sqSFYhm0170P5JrzEqYL0B6Ym2Vw8zj5W0YuVDYqH8lCXRLWt/FM0fHr+ZHeTVdrgXvZ+RWGpOJhLGMQBvBsFqWxjX9mnq0dJVMbb6P1w5q9DrJ9ceT+QLSzQajJ/HYbS5F8r19bS2pi8TyNR2p8DUcWL0vMiPKqSbsbFVFLFYE5SE8KOC7CjWn547dAI1BfowJH0+P06pdfxIKfrfxET2JdKdXZ195b3vcl4O4pfeNhmECKxDpci8kYdaSCIPuJgTEdaJobhd2lNZO06nMfCvL9cfGw6/ZO4k2WdzVB+nVVMwMy8j0zdiw/lzcNZKkjWYkuGSWRnKPySAX63NhrxD60DaMh7x31CAAAAAElFTkSuQmCC";
class ChooseMonitor extends Component {
    state = { dpName: "", mediaType: 1, data: [], data2: [], checkVendor: "KPY", data3: [], postStartTime: "", postEndTime: "", choose: "", delDpName: "", open: true, modifyState: "-1", data4:[], wait: false }
    componentDidMount() {
        get("/monitoring/getDeptList").then((res) => {
            if (res.data.code === 200) {
                var data = res.data.data[0].children;
                this.setState({data, data2: data[0].children});
            }
        })
    }
    componentDidUpdate(oldProps) {
        const { modifyState } = this.props;
        const dasStatus = oldProps.modifyState;
        if (modifyState && modifyState !== dasStatus) {
            this.setState({ modifyState: modifyState });
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
        console.log("查询");
    }
    jianCe = () => {
        console.log('检测 :>> ');
    }
    chongZhi = () => {
        this.setState({ delDpName: "chongZhi", data3: [], choose: "" });
    }
    getStatus = (modifyState) => {
        this.setState({ modifyState });
    }
    render() {
        const { data, data2, data3, dpName, mediaType, delDpName, open, data4, wait } = this.state;
        const { location, navigate } = this.props.router;
        var dasStyle = { position: 'relative', height: 390 };
        if (!open) {
            dasStyle = { ...dasStyle, height: 60, overflow: 'hidden' };
        }
        return (
            
            <div style={{ position: 'relative', height: '100%' }}>
                {location.pathname === '/choose/searchData' ? <div style={{ position: 'absolute', right: '50%', cursor: 'pointer', top: 20, transform: 'translate(700%)' }} onClick={() => { navigate('/searchData') }} ><img alt='' src={searchIco} style={{ marginRight: 10 }} />查询记录</div> : <></>}
                
                <div style={{ position: 'absolute', left: '50%', top: 60, transform: 'translate(-50%)' }}>
                    <Spin spinning={wait}>
                    <MonitorItem title="平台" data={[{ id: 1, label: "网站" }, { id: 2, label: "新媒体" }]} en={true} change={(a, b, key) => { 
                        this.setState({wait:true}, () => {
                          get(`/monitoring/getChannelByDpName?dpName=${dpName}&mediaType=${key}`).then((res) => {
                            if (res.data.code === 200) {
                                var dasData4 = res.data.data;
                            this.setState({ mediaType: key, data4: dasData4, wait:false });   
                            }
                        })   
                        })
                        
                        }} />
                    <MonitorItem title="区域" data={data} en={true} change={(children) => { this.setState({ data2: children, data4:[] }) }} />
                    <MonitorItem title="单位" data={data2} en={false} change={(_, label) => {
                        // 等待状态
                        this.setState({wait: true}, () => {
                            get(`/monitoring/getChannelByDpName?dpName=${label}&mediaType=${mediaType}`).then((res) => {
                                if (res.data.code === 200) {
                                    var dasData4 = res.data.data;
                                this.setState({ dpName: label, data4: dasData4, wait:false });   
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
                    <div style={{ paddingLeft: '50%', transform: 'translate(-15%)', position: 'absolute', bottom: -70 }}>
                        <div style={{ background: `url('${chongZhiIco}')`, height: 60, width: 188, display: 'inline-block', cursor: 'pointer', marginRight: 10 }} onClick={() => { this.chongZhi() }} />
                        {
                        location.pathname === '/choose/monitor' ?
                            <div style={{ background: `url('${jianCeIco}')`, height: 60, width: 188, display: 'inline-block', cursor: 'pointer', marginLeft: 10 }} onClick={() => { this.jianCe() }} />
                            :
                            <div style={{ background: `url('${chaXunIco}')`, height: 60, width: 188, display: 'inline-block', cursor: 'pointer', marginLeft: 10 }} onClick={() => { this.chaXun() }} />
                        }
                    </div>
                </Spin>    
                </div>
               
            </div>
            
        );
    }
}

const getStatus = (status) => {
    return status;
}
export default withRouter(connect(({ status }) => getStatus(status))(ChooseMonitor));