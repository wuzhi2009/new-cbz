import { Calendar, DatePicker } from 'antd';
import dayjs from 'dayjs';
import React, { Component } from 'react';
const { RangePicker } = DatePicker;
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
 * 日历组件
 * 
 * @author wuzhi
 * @param onChange(startDate, endDate, now)
 */
class CountDataRiLi extends Component {
    state = { now: "", startDate: "", endDate: "" } 
    componentDidMount() {
        var now = new Date();
        now = fDate(now);
        this.setState({now});
        this.props.onChange("", "", now);
    }
    render() { 
        const { startDate, endDate, now } = this.state;
        var sDate = dayjs(startDate);
        var eDate = dayjs(endDate);
        if (startDate === "" || endDate === "") {
            sDate = "";
            eDate = "";
        }
        return (
            <Calendar fullscreen={false} headerRender={() => {
                return (
                    <RangePicker placeholder={["        开始日期", "         结束日期"]} 
                            onChange={(_, value) => {
                                if (value[0] && value[1]) {
                                    this.setState({startDate: value[0], endDate: value[1]});
                                    this.props.onChange(value[0], value[1], now);
                                } else {
                                    this.setState({startDate: "", endDate: ""});
                                    this.props.onChange("", "", now);
                                }
                                
                            }} 
                            value={[sDate, eDate]} 
                            inputReadOnly={true}
                            style={ {width: '100%', margin: '15px 0px'} }
                            suffixIcon=""
                         />
                )
            }} style={ {margin: '0 15px'} } onSelect={(date) => {
                // 日期拼接
                var riQi = fDate(new Date(date.$y + "-" + (date.$M + 1) + "-" + date.$D));
                this.setState({now: riQi});
                this.props.onChange(startDate, endDate, riQi);
            }} />
        );
    }
}
 
export default CountDataRiLi;