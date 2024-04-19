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
/**
 * 下拉框组件
 * 
 * @author wuzhi
 * @param options[] [{key, value}]
 * @param title 前边的标题 如果不需要则不传
 */
class XiaLaKuang extends Component {
    state = {  } 
    render() { 
        const {title, options, change} = this.props;
        return (
            <>
                <div>
                    {title ? title + "：" : null}
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