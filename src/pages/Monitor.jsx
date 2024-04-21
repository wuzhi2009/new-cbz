import React, { Component } from 'react';
import { connect } from 'react-redux';
/**
 * 发起检测
 * 
 * @author wuzhi
 */
class Monitor extends Component {
    state = {  } 
    componentDidMount() {
        this.props.sendAction({modifyState: "-1"});
    }
    render() { 
        return (
            <></>
        );
    }
}
 
const setStatus = (dispatch) => {
    return {
        sendAction: (info) => {
            dispatch({
                type: 'status',
                ...info
            })
        }
    }
}
export default connect(null, setStatus)(Monitor);