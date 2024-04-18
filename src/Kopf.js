import React, { Component } from 'react';
import {Avatar} from 'antd';
import KopfUl from './pages/components/KopfUl';
import { getUserInfo } from './pages/api/Monitor/ChooseMonitorApi';
import Img from "./imgs/touXiang.png"
const touXiang = Img;
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
                    <div style={ {display: 'inline-block', marginTop: 10, minWidth: 115} }>
                    <Avatar size={64} icon={<img alt='' src={touXiang} />} />
                    <span style={ {lineHeight: 4, marginLeft: 10, color: 'white', display:'inline-block'} }>{name}</span>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Kopf;