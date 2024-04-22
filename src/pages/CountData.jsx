import React, { Component } from 'react';
import CountDataTable from './components/CountDataTable';
/**
 * 统计页面
 * 
 * @author wuzhi
 */
class CountData extends Component {
    state = {  } 
    render() { 
        return (
            <div style={ {margin: '15px 11px', minWidth: 1677} }>
                <div style={ {width: 340, height: 365, display: 'inline-block'} }>
                    ssss
                </div>
                <div style={ {width: 727, height: 365, display: 'inline-block', marginLeft: 5} }>日期</div>
                <div style={ {width: 600, height: 365, display: 'inline-block', marginLeft: 5} }>
                    <CountDataTable />
                </div>
            </div>
        );
    }
}
 
export default CountData;