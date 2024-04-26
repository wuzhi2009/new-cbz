import React, { Component } from 'react';
import CountDataErrCityUl from './components/CountDataErrCityUl';
import CountDataErrTopUl from './components/CountDataErrTopUl';
import CountDataTable from './components/CountDataTable';
import CountDataErrDayList from './components/CountDataErrDayList';
import CountDataItem from './components/CountDataItem';
import CountDataTag from './components/CountDataTag';
import CountDataTime from './components/CountDataTime';
import CountDataXiaLa from './components/CountDataXiaLa';
// 日期格式化添加0
const addZero = (num) => {
    return num < 10 ? '0' + num : num;
}
// 日期格式化
const fDate = (date) => {
    var year = date.getFullYear();
    var month = addZero(date.getMonth() + 1);
    var day = addZero(date.getDate());
    return year + '-' + month + '-' + day;
}
/**
 * 统计页面
 * 
 * @author wuzhi
 */
class CountData extends Component {
    state = { startDate: "", endDate: "", dpName: "", mediaType: "", now: "" } 
    componentDidMount() {
        var now = new Date();
        now = fDate(now);
        this.setState({now});
    }
    render() { 
        const { now } = this.state;
        return (
            <>
            <div style={ {margin: '15px 11px', minWidth: 1727, position: 'relative'} }>
                <div style={ {width: 340, height: 365, display: 'inline-block', position: 'absolute', left: 10} }>
                    ssss
                </div>
                <div style={ {width: 727, height: 365, display: 'inline-block', position: 'absolute', left: 'calc(43% - 727px / 2)'} }>
                <div style={ {width: '100%', height: 133, marginTop: 30} }>
                    <div style={ {display: 'inline-block', width: 236, height: 101} }><CountDataTime now={now} /></div>
                    <div style={ {display: 'inline-block', width: 'calc(100% - 236px)'} }>
                        <div><CountDataXiaLa /></div>
                        <div style={ {marginTop: 18} }>
                            <CountDataTag ciShu={10} ziShu={40} />
                        </div>
                    </div>
                </div>
                <div style={ {width: '100%', height: 232, marginTop: 40} }>
                    <div>
                      <CountDataItem title={"累计检测次数"} num={123} />
                    <CountDataItem title={"累计检测文件数"} num={0} />
                    <CountDataItem title={"累计已修改数"} num={0} />
                    <CountDataItem title={"累计无需修改数"} num={0} />  
                    </div>
                    <div style={ {marginTop: 30} }>
                    <CountDataItem title={"累计检测字数"} num={0} />
                    <CountDataItem title={"累计检测文章数"} num={0} />
                    <CountDataItem title={"累计待修改数"} num={0} />   
                    </div>
                </div>
                </div>
                <div style={ {width: 600, height: 365, display: 'inline-block', position: 'absolute', right: 10} }>
                    <CountDataTable />
                </div>
            </div>
            <div style={ {position: 'relative', top: 390, minWidth: 1730} }>
                <div style={ {width: 860, position: 'absolute', left: 10, height: 520, borderTop: '1px dashed #DCDCDC'} }><CountDataErrDayList /></div>
                <div style={ {width: 350, position: 'absolute', right: 390} }><CountDataErrTopUl /></div>
                <div style={ {width: 350, position: 'absolute', right: 10} }><CountDataErrCityUl /></div>
            </div>
            </>
        );
    }
}
 
export default CountData;