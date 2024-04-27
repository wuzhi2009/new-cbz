import React, { Component } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;
const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAABgUlEQVQ4jb2VPyiFURjGf/5lYFEMxGBQTJTNIHVHi0XpshmMVrsBi0kJi5RS0kUkAylkUAopNyFkuHWLFMl1S289V6e3283wuU+des7znfN87/v0nfOV9I6/4tAINAEnTq8FOoFdp1cDMWAjFMuBMiAONEirlN7tDCr0rMPptr8KaNU8AyTMYAhYDBbOAkfAsjPY1rMtp18Cg8BFoMXNuN4t7AGafT5Au4rwsOhGnVZXnmdhm0Y+g4E8eg0w7MXSPAsjgVV8DaxG7Jv+L+MPM+4DJiI2fvQZvwAP4m/ATa4CdWb4BNaBc82/gU3gNDTyxsngxN0Ch7kKgH3xFDAP7ATFLOhlv7AjPVaMKKz9Z/H3IBZr/178S9UnNc8CB8BVaOSNLbc98WTQrpkmxO3FU8CK5hbFpLsWiheFtZwOeEo8E3Br/Qx4KuTsjY+DFm3zkrjlNyd+B4wA04WM/SUU0zB0aaA7OHcPt/hv9i8VRwYztpMTNbIWxRrQr39aFMgCMz93ZVx4R0+gmwAAAABJRU5ErkJggg==";
const titleStyle = {
    paddingLeft: 13,
    paddingBottom: 5,
    borderLeft: '5px solid #4B83F0',
    display: 'inline-block',
    color: '#344B79',
    fontWeight: 600,
    position: 'absolute',
    top: 0
};
const ulStyle = {
    listStyle: 'none', 
    userSelect: 'none',
    borderBottom: '1px dotted black', 
    paddingBottom: 10, 
    marginBottom: 10, 
    position: 'relative', 
    width: 1480, 
    minHeight: 30
}
// 日期格式化添加0
const addZero = (num) => {
    return num < 10 ? '0' + num : num;
}
// 日期格式化
const fDate = (date) => {
    var year = date.getFullYear();
    var month = addZero(date.getMonth() + 1);
    var day = addZero(date.getDate());
    var h = addZero(date.getHours());
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
    return year + '-' + month + '-' + day + " " + h + ":" + m + ":" + s;
}
/**
 * 选择日期组件
 * 
 * @author wuzhi
 * @param onChange 日期回调 （startDate, endDate)
 * @param del 重置传chongZhi
 */
class MonitorItemZwei extends Component {
    state = {key:1, startDate:"", endDate:""}
    // 选择日期
    setChenkDate = (i) => {
        var startDate = new Date();
        var endDate = new Date();
        switch (i) {
            case 1:
                break;
            case 2:
                startDate.setDate(endDate.getDate() - 7);
                break;
            case 3:
                startDate.setMonth(endDate.getMonth() - 3);
                break;
            case 4:
                startDate.setFullYear(endDate.getFullYear() - 1);
                break;
            default:
                break;
        }
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        startDate = fDate(startDate);
        endDate = fDate(endDate);
        this.setState({startDate, endDate, key: i});
        this.props.onChange(startDate, endDate);
    }
    componentDidMount() {
        var startDate = new Date();
        var endDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        startDate = fDate(startDate);
        endDate = fDate(endDate);
        this.setState({startDate, endDate, key: 1});
        this.props.onChange(startDate, endDate);
    }
    componentDidUpdate(oldProps) {
        const { del } = this.props;
        if (del === "chongZhi" && del !== oldProps.del) {
            this.componentDidMount();
        }
    }
    render() {
        const { startDate, endDate, key } = this.state;
        
        var sDate = dayjs(startDate);
        var eDate = dayjs(endDate);
        if (startDate === "" || endDate === "") {
            sDate = "";
            eDate = "";
        }
        return (
            <ul style={ ulStyle }>
                <div style={titleStyle}>时间</div>
                <div style={ {position: 'absolute', left: 80} }>
                    <span className='spanspan' onClick={() => {this.setChenkDate(1)}} style={ key === 1 ? {backgroundColor: '#4B83F0', color: 'white'} : {} }>今日</span>
                    <span className='spanspan' onClick={() => {this.setChenkDate(2)}} style={ key === 2 ? {backgroundColor: '#4B83F0', color: 'white'} : {} }>一周</span>
                    <span className='spanspan' onClick={() => {this.setChenkDate(3)}} style={ key === 3 ? {backgroundColor: '#4B83F0', color: 'white'} : {} }>季度</span>
                    <span className='spanspan' onClick={() => {this.setChenkDate(4)}} style={ key === 4 ? {backgroundColor: '#4B83F0', color: 'white'} : {} }>一年</span>
                    <span style={ {width: 320} }>
                        <RangePicker placeholder={["      开始日期", "       结束日期"]} 
                            suffixIcon={<img src={icon} alt='' />} 
                            onChange={(_, value) => {
                                if (value[0] && value[1]) {
                                    var einsDate = value[0] + " 00:00:00";
                                    var zweiDate = value[1] + " 23:59:59";
                                    this.setState({startDate: einsDate, endDate: zweiDate, key: 0});
                                    this.props.onChange(einsDate, zweiDate);
                                } else {
                                    this.setState({startDate: "", endDate: "", key: 0});
                                    this.props.onChange("", "");
                                }
                                
                            }} 
                            value={[sDate, eDate]} 
                            inputReadOnly={true}
                         />
                    </span>
                </div>
            </ul>
        );
    }
}

export default MonitorItemZwei;