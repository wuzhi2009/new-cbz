import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons'
/**
 * 搜索组件
 * 
 * @author wuzhi
 * @param options 下拉框选项[{key, value}]
 */
class Search extends Component {
    state = { label:"", searchValue:"" } 
    setInfo = () => {
        var info = this.state;
        if (this.state.label === "" ) {
            // 初始化下拉框值
            info = {...info, label: this.props.options[0].value};
        }
        this.props.sendAction(info)
    }
    componentDidMount() {
        // 初始化的时候发送action到table触发更新
        if (this.state.label === "" ) {
            // 初始化下拉框值
            var info = {label: this.props.options[0].value, searchValue: ""};
        }
        this.props.sendAction(info)
    }
    
    render() { 
        const options = this.props.options;
        return (
            <div className='search'>
                <select className='xiaLaKuang' onChange={ (event) => {this.setState({...this.state, label: event.target.value})} }>
                    {options.map((item, key) => {
                        return (
                            <option value={ item.value } key={ key }>{ item.key }</option>
                        )
                    })}
                </select>
                <input type= "search" placeholder='请输入关键词' className='shuRuKuang' onChange={ (event) => {this.setState({...this.state, searchValue: event.target.value})} }/>
                <div className='DasButton' onClick={ () => {this.setInfo()} }><SearchOutlined /><span>搜索</span></div>
            </div>
        );
    }
}
 
const set = (dispatch) => {
    return {
        sendAction: (info) => {
            dispatch({
                type: 'search',
                ...info
            })
        }
    }
}

export default connect(null, set)(Search);