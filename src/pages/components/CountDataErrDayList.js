import { Progress, Spin } from 'antd';
import React, { Component } from 'react';
import CountDataLineCharts from './CountDataLineCharts';
const icon = "data:image/png;base64,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";
const icon2 = "data:image/png;base64,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";
/**
 * 错误天数表
 * 
 * @author wuzhi
 * @param seriousNumber 严重错误表述数量
 * @param sevenDayNumber 七天未修改数
 * @param allErrNumber 全部错误数
 * @param modifiedNumber 累计已修改数
 * @param wait 是否等待
 */
class CountDataErrDayList extends Component {
    state = { data: [], demo: 1 } 
    render() { 
        const { seriousNumber, sevenDayNumber, allErrNumber, modifiedNumber, wait } = this.props;
        // 严重错误表述率
        var yzcwbsl = ((seriousNumber / allErrNumber) * 100).toFixed(0);
        if (isNaN(yzcwbsl)) {
            yzcwbsl = 0;
        }
        // 修改率
        var xgl = ((modifiedNumber / allErrNumber) * 100).toFixed(0);
        if (isNaN(xgl)) {
            xgl = 0;
        }
        return (
            <>
            <Spin spinning={wait}>
                <div style={ {marginBottom: 10} }>
                    <div style={ {position: 'relative', display: 'inline-block', width: 172, height: 99, marginLeft: 40, userSelect: 'none'} }>
                        <Progress type="circle" percent={yzcwbsl} size={80} strokeWidth={11} /><div style={ {position: 'absolute', left: -15, margin: '2px 0'} }>严重错误表述率</div>
                    </div>
                    <div style={ {position: 'relative', display: 'inline-block', width: 120, height: 99, userSelect: 'none'} }>
                        <Progress type="circle" percent={xgl} size={80} strokeWidth={11} /><div style={ {position: 'absolute', left: 16, margin: '2px 0'} }>修改率</div>
                    </div>
                    <div style={ {position: 'relative', display: 'inline-block', width: 270, height: 99, top: 40, userSelect: 'none'} }>
                        <img alt="" src={icon} />
                        <div style={ {display: 'inline-block', position: 'absolute', top: 10} }>
                    <div style={ {display: 'inline-block'} }>严重错误表述</div>
                    <div style={ {color: 'red', fontSize: 24, fontWeight: 'bold', display: 'inline-block', marginLeft: 5} }>{seriousNumber ? seriousNumber : 0}</div>
                    </div>
                    </div>
                    <div style={ {position: 'relative', display: 'inline-block', width: 290, height: 99, top: 40, userSelect: 'none'} }>
                        <img alt="" src={icon2} />
                    <div style={ {display: 'inline-block', position: 'absolute', top: 10} }>
                    <div style={ {display: 'inline-block'} }>超7天未修改数</div>
                    <div style={ {display: 'inline-block', color: 'red', fontSize: 24, fontWeight: 'bold', marginLeft: 5} }>{sevenDayNumber ? sevenDayNumber : 0}</div>
                    </div>
                    </div>
                </div> 
            </Spin>   
            <CountDataLineCharts />
            </>
        );
    }
}
 
export default CountDataErrDayList;