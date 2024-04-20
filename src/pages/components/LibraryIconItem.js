import React, { Component } from 'react';
/**
 * 词库模块右上角按钮
 * 
 * @author wuzhi
 * @param onClick 点击事件
 * @param icon 图标
 * @param title 标题文字
 */
class LibraryIconItem extends Component {
    state = {  } 
    render() { 
        const { icon, title } = this.props;
        return (
            <span style={ {
                display: 'inline-block', padding: '2px 10px 3px',
                borderRadius: 5, marginLeft: 10, cursor: 'pointer', height: 25, border: '1px solid #4B83F0', lineHeight: 1.5} } onClick={this.props.onClick} >
                <img alt='' src={icon} style={ {marginRight: 18, width: 16, position: 'relative', top: 2.5} } /><span style={ {color: '#4B83F0'} }>{title}</span>
            </span>
        );
    }
}
 
export default LibraryIconItem;