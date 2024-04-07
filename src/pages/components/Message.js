import React, { Component } from 'react';
/**
 * 消息提示组件
 * 
 * @author wuzhi
 * @param type 消息类型 "error" "success" "warning"
 * @param text 消息
 */
class Message extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className='alert'>
                <p></p>
            </div>
            </>
        );
    }
}
 
export default Message;