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
import { Spin } from 'antd';
import CountDataRiLi from './components/CountDataRiLi';
import Img from '../imgs/022督办事项图标.e9ec03ef.png';
import { getUserInfo } from './api/Monitor/ChooseMonitorApi';
/**
 * 统计页面
 * 
 * @author wuzhi
 */
class CountData extends Component {
    state = { startDate: "", endDate: "", dpName: "", mediaType: "", now: "", data:{}, wait: true, isAdmin: false } 
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
        const { now, wait, data, dpName, isAdmin } = this.state;
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
                <img src={Img} alt=""  width="100px" />
            </div> : <></>}
            </>
        );
    }
}
 
export default CountData;