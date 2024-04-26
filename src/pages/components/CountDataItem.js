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
        return (
            <div style={ {display: 'inline-block', height: 69, width: 166, textAlign: 'center'} }>
                <div style={ {color: '#7DB3FF', fontSize: 24, fontWeight: 700} }>{num}</div>
                <div style={ {marginTop: 10, fontSize: 17} }>{title}</div>
            </div>
        );
    }
}
 
export default CountDataItem;