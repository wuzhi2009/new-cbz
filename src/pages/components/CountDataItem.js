import { Tooltip } from 'antd';
import React, { Component } from 'react';
/**
 * 检测数据模块
 * 
 * @author wuzhi
 * @param title 标题
 * @param num   数字
 */
class CountDataItem extends Component {
    state = {  } 
    render() { 
        const { title, num } = this.props;
        var nowNum = num;
        if (nowNum >= 100000000) {
            nowNum = (nowNum / 100000000).toFixed(2) + "亿";
        } else if (nowNum >= 100000) {
            nowNum = (nowNum / 10000).toFixed(2) + "万";
        }
        return (
            <div style={ {display: 'inline-block', height: 69, width: 166, textAlign: 'center', marginLeft: 15} }>
                <Tooltip title={<div style={ {textAlign: 'center'} }>{num}</div>}><div style={ {color: '#7DB3FF', fontSize: 24, fontWeight: 700} }>{nowNum}</div></Tooltip>
                <div style={ {marginTop: 10, fontSize: 17} }>{title}</div>
            </div>
        );
    }
}
 
export default CountDataItem;