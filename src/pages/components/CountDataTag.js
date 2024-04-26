import React, { Component } from 'react';
import Img from '../../imgs/018今日检测次数图标.ef4a76b9.png';
import Img2 from '../../imgs/019今日检测字数图标.bfaf9e5a.png';
import { day } from '../api/CountData/CountDataApi';
/**
 * 今日检测数据组件
 * 
 * @author wuzhi
 * @param date 时间
 * @param dpName 部门
 */
class CountDataTag extends Component {
    state = { ciShu: 0, ziShu: 0 } 
    componentDidUpdate(oldProps) {
        const { date, dpName } = this.props;
        if (date !== oldProps.date || dpName !== oldProps.dpName) {
            day(date, dpName).then(res => {
                if (res.data.code === 200) {
                    this.setState({ciShu: res.data.data.skript, ziShu: res.data.data.unterSuchen});
                }
            })
        }
    }
    render() { 
        const {  ciShu, ziShu } = this.state;
        return (
            <>
                <span style={ {position: 'relative'} }><img alt="" src={Img} style={ {marginRight: 15} }  /><span style={ {position: 'absolute', left: 60, color: 'white', top: -35} }>今日检测次数</span><span style={ {position: 'absolute', left: 60, color: 'white', top: -10} }>{ciShu}</span></span>
                <span style={ {position: 'relative'} }><img alt="" src={Img2} /><span style={ {marginRight: 15} }  /><span style={ {position: 'absolute', left: 60, color: 'white', top: -35} }>今日检测字数</span><span style={ {position: 'absolute', left: 60, color: 'white', top: -10} }>{ziShu}</span></span>
            </>
        );
    }
}
 
export default CountDataTag;