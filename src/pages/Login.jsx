import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import { getUserInfo } from './api/Monitor/ChooseMonitorApi';
/**
 * 未登录页面
 * 
 * @author wuzhi
 */
class Login extends Component {
    state = {  }
    componentDidMount() {
       const { navigate } = this.props.router; 
       getUserInfo().then(res => {
            if (res.data.code === 200) {
                navigate("/taskCenter/eins");
            }
        }).catch(error => {
            
        })
    } 
    render() { 
        return (
            <div style={ {fontSize: 32, lineHeight: 5, fontWeight: 700, textAlign: 'center', padding: '2em', color: '#595959'} }>401 Page</div>
        );
    }
}
 
export default withRouter(Login);