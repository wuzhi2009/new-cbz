import { Progress, Spin } from 'antd';
import React, { Component } from 'react';
import { getErrCity } from '../api/CountData/CountDataApi';
/**
 * 统计模块错误城市统计
 * 
 * @author wuzhi
 */
class CountDataErrCityUl extends Component {
    state = { data: [], wait: true } 
    componentDidMount() {
        getErrCity().then(res => {
            if (res.data.code === 200) {
                this.setState({data: res.data.data, wait: false});
            }
        })
    }
    render() { 
        const { data, wait } = this.state;
        var total = 0;
        data.forEach(item => {
            total = total + item.errAnzahl;
        })
        return (
            <Spin spinning={wait}>
                <div style={{ color: '#61a3ff', fontWeight: 700, fontSize: 18, display: 'inline-block', userSelect: 'none' }}>市级错误量TOP</div>
                <div style={{ minWidth: 76, display: 'inline-block', marginLeft: 149, fontSize: 12}}><span style={ {color: 'red'} }>*</span>全平台统计
                </div>
                <ul style={ {height: 420, width: 350, marginTop: 10, listStyle: 'none'} }>
                    {data.map((item, key) => {
                        var value = (item.errAnzahl / total) * 100;
                        return (
                            <li key={key} style= { {height: 42, marginTop: -2} }>
                                <span style={ {userSelect: 'none', background: '#DCDCDC', width: 30, height: 30, display: 'inline-block', borderRadius: 8, textAlign: 'center', lineHeight: 1.8, marginRight: 5} }>{key + 1}</span>
                                <div style={ {display: 'inline-block', width: 315, height: 35, transform: 'translateY(10px)'} }>
                                    <span style={ {display: 'block', fontSize: 12, userSelect: 'none', transform: 'translateY(3px)'} }>{item.city}<span style={ {float: 'right'} }>{item.errAnzahl}</span></span>
                                    <Progress strokeLinecap="round" percent={value} showInfo={false} strokeColor="#8690EE" size={"small"} style={ {width: 315, transform: 'translateY(-2px)'} } />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </Spin>
        );
    }
}
 
export default CountDataErrCityUl;