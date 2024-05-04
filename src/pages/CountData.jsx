import React, { Component } from 'react';
import CountDataErrCityUl from './components/CountDataErrCityUl';
import CountDataErrTopUl from './components/CountDataErrTopUl';
import CountDataTable from './components/CountDataTable';
import CountDataErrDayList from './components/CountDataErrDayList';
import CountDataItem from './components/CountDataItem';
import CountDataTag from './components/CountDataTag';
import CountDataTime from './components/CountDataTime';
import CountDataXiaLa from './components/CountDataXiaLa';
import { list } from './api/CountData/CountDataApi';
import { Modal, Spin } from 'antd';
import CountDataRiLi from './components/CountDataRiLi';
import Img from '../imgs/022督办事项图标.e9ec03ef.png';
import { getUserInfo } from './api/Monitor/ChooseMonitorApi';
import AdminModal from './components/AdminModal';
const x = "data:image/png;base64,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";
/**
 * 统计页面
 * 
 * @author wuzhi
 */
class CountData extends Component {
    state = { startDate: "", endDate: "", dpName: "", mediaType: "", now: "", data:{}, wait: true, isAdmin: false, open: false } 
    getList = (dpName, mediaType, startDate, endDate) => {
        this.setState({wait: true});
        list(dpName, mediaType, startDate, endDate).then(res => {
            if (res.data.code === 200) {
                this.setState({data: res.data.data, wait: false});
            }
        })
    }
    componentDidMount() {
        this.getList("", "", "", "");
        getUserInfo().then(res => {
            if (res.data.code === 200) {
                const roles = res.data.user.roles;
                var isAdmin = false;
                roles.forEach(item => {
                    if (item.roleId === 16) {
                        isAdmin = true;
                    }
                })
                this.setState({isAdmin});
            }
        })
    }
    componentDidUpdate(oldProps, oldState) {
        const { startDate, endDate, dpName, mediaType } = this.state;
        if (startDate !== oldState.startDate || endDate !== oldState.endDate || dpName !== oldState.dpName || mediaType !== oldState.mediaType) {
            this.getList(dpName, mediaType, startDate, endDate);
        } 
    }
    render() { 
        const { now, wait, data, dpName, isAdmin, open } = this.state;
        return (
            <>
            <div style={ {margin: '15px 11px', minWidth: 1727, position: 'relative'} }>
                <div style={ {width: 340, height: 365, display: 'inline-block', position: 'absolute', left: 10, border: '1px solid #D9D9D9'} }>
                    <CountDataRiLi onChange={(startDate, endDate, now) => {this.setState({startDate, endDate, now})}} />
                </div>
                <div style={ {width: 727, height: 365, display: 'inline-block', position: 'absolute', left: 'calc(43% - 727px / 2)'} }>
                <div style={ {width: '100%', height: 133, marginTop: 30} }>
                    <div style={ {display: 'inline-block', width: 236, height: 101} }><CountDataTime now={now} /></div>
                    <div style={ {display: 'inline-block', width: 'calc(100% - 236px)'} }>
                        <div><CountDataXiaLa onChange={(deptName, pingTai) => {this.setState({dpName: deptName, mediaType: pingTai})}} /></div>
                        <div style={ {marginTop: 18} }>
                            <CountDataTag date={now} dpName={dpName} />
                        </div>
                    </div>
                </div>
                <Spin spinning={wait}>
                <div style={ {width: '100%', height: 232, marginTop: 40} }>
                    <div>
                    <CountDataItem title={"累计检测次数"} num={data.examineNumber ? data.examineNumber : 0} />
                    <CountDataItem title={"累计检测文件数"} num={data.docNumber ? data.docNumber : 0} />
                    <CountDataItem title={"累计已修改数"} num={data.modifiedNumber ? data.modifiedNumber : 0} />
                    <CountDataItem title={"累计无需修改数"} num={data.noModifiedNumber ? data.noModifiedNumber : 0} />  
                    </div>
                    <div style={ {marginTop: 30} }>
                    <CountDataItem title={"累计检测字数"} num={data.examineSize ? data.examineSize : 0} />
                    <CountDataItem title={"累计检测文章数"} num={data.textNumber ? data.textNumber : 0} />
                    <CountDataItem title={"累计待修改数"} num={data.waitNumber ? data.waitNumber : 0} />   
                    </div>
                </div>
                </Spin>
                </div>
                <div style={ {width: 600, height: 365, display: 'inline-block', position: 'absolute', right: 10} }>
                    <CountDataTable />
                </div>
            </div>
            <div style={ {position: 'relative', top: 390, minWidth: 1730} }>
                <div style={ {width: 900, position: 'absolute', left: 20, height: 520, borderTop: '1px dashed #DCDCDC'} }>
                    <CountDataErrDayList seriousNumber={data.seriousNumber} sevenDayNumber={data.sevenDayNumber} allErrNumber={data.allErrNumber} modifiedNumber={data.modifiedNumber} wait={wait} />
                </div>
                <div style={ {width: 350, position: 'absolute', right: 390} }><CountDataErrTopUl /></div>
                <div style={ {width: 350, position: 'absolute', right: 10} }><CountDataErrCityUl /></div>
            </div>
            {isAdmin ? <div className="yiDong">
                <img src={Img} alt=""  width="100px" onClick={() => {this.setState({open: true})}} />
            </div> : <></>}
            <Modal open={open} footer={null} closable={false} width= {1080} afterOpenChange={(op) => document.body.style.overflowY = (op ? 'hidden' : 'scroll')} >
                <div style={ {position: 'absolute', top: -50, right: -50, cursor: 'pointer'} } onClick={() => {this.setState({open: false})}}><img alt='' src={x} width='50px' /></div>
                <AdminModal />
            </Modal>
            </>
        );
    }
}
 
export default CountData;