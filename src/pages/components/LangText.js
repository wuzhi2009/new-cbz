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
                <p style={ 
                    {overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: col,
                    WebkitBoxOrient: 'vertical'}
                    } title={text} dangerouslySetInnerHTML={ {__html:text} } />
            )
        }
        return (
            <p style={ 
                {overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: col,
                WebkitBoxOrient: 'vertical'}
                } title={text}>
                { text }
            </p>
        );
    }
}
 
export default LangText;