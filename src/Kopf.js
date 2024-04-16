import React, { Component } from 'react';
import {Avatar} from 'antd';
import KopfUl from './pages/components/KopfUl';
import { getUserInfo } from './pages/api/Monitor/ChooseMonitorApi';
const touXiang = "https://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/avatar.2eac4a7a.png";
class Kopf extends Component {
    state = { name:"" }
    componentDidMount() {
        getUserInfo().then(res => {
            this.setState({name: res.data.user.nickName})
        })
    } 
    render() { 
        const { name } = this.state;
        return (
            <div className="Kopf">
                <div className="eins" />
                <div className="zwei"><KopfUl /></div>
                <div className="drei">
                    <div style={ {display: 'inline-block', marginTop: 10} }>
                    <Avatar size={64} icon={<img alt='' src={touXiang} />} />
                    <span style={ {lineHeight: 4, marginLeft: 5, color: 'white'} }>{name}</span>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Kopf;