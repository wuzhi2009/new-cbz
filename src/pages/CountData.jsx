import React, { Component } from 'react';
import CountDataErrCityUl from './components/CountDataErrCityUl';
import CountDataErrTopUl from './components/CountDataErrTopUl';
import CountDataTable from './components/CountDataTable';
import CountDataErrDayList from './components/CountDataErrDayList';
import Img from '../imgs/018今日检测次数图标.ef4a76b9.png';
import Img2 from '../imgs/019今日检测字数图标.bfaf9e5a.png';
/**
 * 统计页面
 * 
 * @author wuzhi
 */
class CountData extends Component {
    state = { startDate: "", endDate: "", dpName: "", mediaType: "" } 
    render() { 
        return (
            <>
            <div style={ {margin: '15px 11px', minWidth: 1727, position: 'relative'} }>
                <div style={ {width: 340, height: 365, display: 'inline-block', position: 'absolute', left: 10} }>
                    ssss
                </div>
                <div style={ {width: 727, height: 365, display: 'inline-block', position: 'absolute', left: 'calc(43% - 727px / 2)'} }>
                <img alt="" src={Img} />
                <img alt="" src={Img2} />
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