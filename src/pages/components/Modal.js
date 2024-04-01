import React, { Component } from 'react';
import '../../css/modal.css';
/**
 * 模态框
 * 
 * @author wuzhi
 * @param open 是否打开
 * @param close 关闭模态框的方法
 */
class Modal extends Component {
    state = {  } 
    render() { 
        const {open, close} = this.props;
        if (!open) {
            return null;
        }
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <span className="close" onClick={ close }>&times;</span>
                    <div>{this.props.children}</div>
                </div>
            </div>
        );
    }
}
 
export default Modal;