import React, { Component } from 'react';
import EChartsReact from 'echarts-for-react';
import { getErroList } from '../api/CountData/CountDataApi';
import { Spin } from 'antd';
/**
 * 图表
 * 
 * @author wuzhi
 */
class CountDataLineCharts extends Component {
    state = { x: [], err: [], errHigh: [], wait: true } 
    componentDidMount() {
        getErroList().then(res => {
            if (res.data.code === 200) {
                var x = [];
                var err = [];
                var errHigh = [];
                if (res.data.code === 200) {
                    res.data.data.map(item => {
                        x.push(item.date);
                        err.push(item.err);
                        return errHigh.push(item.errHigh);
                    })
                    this.setState({x, err, errHigh, wait: false});
                }    
            }
        })
    }
    
    render() { 
        const { x, err, errHigh, wait } = this.state;
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['错误率', '严重错误表述率'],
                icon: 'circle',
                right: 10,
                top: 10,
                textStyle: {
                    fontSize: 16
                },
                itemWidth: 7,
                itemHeight: 7
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: x
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: err,
                    name: '错误率',
                    type: 'line',
                    smooth: true
                },
                {
                    data: errHigh,
                    name: '严重错误表述率',
                    type: 'line',
                    smooth: true
                }
            ]
        }
        return (
            <Spin spinning={wait} style={ {width: '100%', height: 423} }>
                <EChartsReact option={option} style={ { background: '#E8F2FF', width: '100%', minHeight: 421} } />
            </Spin>
        );
    }
}
 
export default CountDataLineCharts;