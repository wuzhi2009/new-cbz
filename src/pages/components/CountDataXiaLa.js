import { Select } from 'antd';
import React, { Component } from 'react';
/**
 * 树形下拉组件
 * 
 * @author wuzhi
 * @param onChange
 */
class CountDataXiaLa extends Component {
    state = {  } 
    render() { 
        return (
            <>
                        <Select
                style={{
                    width: 120,
                    marginRight: 46
                }}
                />
                        <Select
                style={{
                    width: 120,
                    marginRight: 46
                }}
                />
                        <Select
                style={{
                    width: 120,
                }}
                />
            </>
        );
    }
}
 
export default CountDataXiaLa;