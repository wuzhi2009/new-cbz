import React, { Component } from 'react';
/**
 * 下拉框查询组件
 * 
 * @author wuzhi
 * @param title 标题
 * @param options [{key, value}] 下拉框值
 * @param change 
 */
const selectStyle = {
    width: 203,
    height: 32,
    backgroundColor: '#FFFFFF',
    border: '1px solid #DCDCDC',
    fontSize: 16,
    color: '#616161'
}
class XiaLaKuang extends Component {
    state = {  } 
    render() { 
        const {title, options, change} = this.props;
        return (
            <>
                <div>
                    {title}：
                    <select style={ selectStyle } onChange={ (event) => {change(event.target.value)} }>
                        {options.map((item, key) => {
                            return (
                                <option key={key} value={item.value}>{item.key}</option>
                            );
                        })}
                    </select>
                </div>
            </>
        );
    }
}
 
export default XiaLaKuang;