import React, { Component } from 'react';
import { connect } from 'react-redux';
const ulStyle = {
    listStyle: 'none', 
    userSelect: 'none',
    borderBottom: '1px dotted black', 
    paddingBottom: 10, 
    marginBottom: 10, 
    marginTop: 15,
    position: 'relative', 
    width: 1480, 
    minHeight: 30
};
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
// modifyState
/**
 * 历史记录查询状态
 * 
 * @author wuzhi
 * @param onChange(status) 选择状态回调
 */
class SearchData extends Component {
    state = { key: "-1" } 
    setChenkDate = (key) => {
        this.setState({key});
        this.props.sendAction({type: 'status', modifyState: key});
    };
    render() { 
        const { key } = this.state;
        return (
            <ul style={ ulStyle }>
                <div style={titleStyle}>状态</div>
                <div style={ {position: 'absolute', left: 80} }>
                    <span className='spanspan' onClick={() => {this.setChenkDate("1")}} style={ key === "1" ? {backgroundColor: '#4B83F0', color: 'white'} : {} }>已修改</span>
                    <span className='spanspan' onClick={() => {this.setChenkDate("null")}} style={ key === "null" ? {backgroundColor: '#4B83F0', color: 'white'} : {} }>无需修改</span>
                    <span className='spanspan' onClick={() => {this.setChenkDate("0")}} style={ key === "0" ? {backgroundColor: '#4B83F0', color: 'white'} : {} }>待修改</span>
                    <span className='spanspan' onClick={() => {this.setChenkDate("2")}} style={ key === "2" ? {backgroundColor: '#4B83F0', color: 'white'} : {} }>全选</span>
                </div>
            </ul>
        );
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: (info) => {
            dispatch(info)
        }
    }
}
export default connect(null, mapDispatchToProps)(SearchData);