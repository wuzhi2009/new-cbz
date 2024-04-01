import React, { Component } from 'react';
/**
 * 展开关闭组件
 * 
 * @author wuzhi
 * @param text 内容 [{"channelId":193628,"channelName":"纠错"}]
 */
class OpenUndClose extends Component {
    state = { open: false } 
    render() { 
        const { text } = this.props;
        var allName = [];
        var name = "";
        text.map((item) => {
            return(
                allName.push(item.channelName)
            )
        })
        if (allName.length >= 2) {
            name = allName[0] + "、" + allName[1];
            name = name + "..."
        } else {
            name = allName.join("、");
        }
        var s = allName.join("、");
        const { open } = this.state;
        if (open) {
            return (<span>{ s }<span onClick={() => {this.setState({open:false})}} style={ {display: 'inline-block', background: '#FEF1EF', textAlign: 'center', color: 'rgb(252, 164, 39)', borderRadius: 2, padding: '4px 8px 2px', width: 35, height: 20, fontWeight: 650, userSelect: 'none', cursor: 'pointer'} }>收回</span></span>)
        } else {
            return (<span>{ name }<span onClick={() => {this.setState({open:true})}} style={ {display: 'inline-block', background: '#e1e9f2', textAlign: 'center', color: '#61a3ff', borderRadius: 2, padding: '4px 8px 2px', width: 35, height: 20, fontWeight: 650, userSelect: 'none', cursor: 'pointer'} }>展开</span></span>)
        }
    }
}
 
export default OpenUndClose;