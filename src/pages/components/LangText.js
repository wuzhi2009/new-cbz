import { Tooltip } from 'antd';
import React, { Component } from 'react';
/**
 * 超长文本隐藏显示组件
 * 
 * @author wuzhi
 * @param col 最多显示的行数
 * @param text 文本
 * @param is 是否需要识别为html
 */
class LangText extends Component {
    state = {  } 
    render() { 
        const { text, col, is } = this.props;
        if (is) {
            return (
                <Tooltip title={() => {return <span dangerouslySetInnerHTML={ {__html:text} }></span>}} >
                    <span style={ 
                        {overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: col,
                        WebkitBoxOrient: 'vertical'}
                        } dangerouslySetInnerHTML={ {__html:text} } />
                </Tooltip> 
            )
        }
        return (
            <Tooltip title={text}>
                <span style={ 
                    {overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: col,
                    WebkitBoxOrient: 'vertical'}
                    } >{text}</span>
            </Tooltip>
        );
    }
}
 
export default LangText;