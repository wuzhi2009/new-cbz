import { Progress } from 'antd';
import React, { Component } from 'react';
import { getErrTop } from '../api/CountData/CountDataApi';
const DasTypeStyle = {
    display: 'inline-block',
    backgroundColor: 'red',
    width: 68,
    height: 29,
    textAlign: 'center',
    color: 'white',
    userSelect: 'none',
    lineHeight: 1.8,
    cursor: 'pointer'
};
/**
 * 错误量前十排名ul表
 * 
 * @author wuzhi
 */
class CountDataErrTopUl extends Component {
    state = { data: [], key: 1 } 
    go = (key) => {
        this.setState({key});
        getErrTop(key).then(res => {
            if (res.data.code === 200) {
                this.setState({data: res.data.data});
            }
        })
    }
    componentDidMount() {
        this.go(1);
    }
    render() { 
        const { data, key } = this.state;
        var spanStyle = { ...DasTypeStyle, backgroundColor: '#EDEDED', color: 'black' };
        var total = 0;
        data.forEach(item => {
            total = total + item.errAnzahl;
        })
        return (
            <>
                <div style={{ color: '#61a3ff', fontWeight: 700, fontSize: 18, display: 'inline-block', userSelect: 'none' }}>错误量TOP10</div>
                <div style={{ minWidth: 136, display: 'inline-block', marginLeft: 104}}><span style={key === 1 ? DasTypeStyle : spanStyle} onClick={() => { if (key !== 1) { this.go(1) } }}>网站</span>
                            <span style={key === 2 ? DasTypeStyle : spanStyle} onClick={() => { if (key !== 2) { this.go(2) } }}>新媒体</span>
                </div>
                <ul style={ {height: 420, width: 350, marginTop: 10, listStyle: 'none'} }>
                    {data.map((item, key) => {
                        var value = (item.errAnzahl / total) * 100;
                        return (
                            <li key={key} style= { {height: 42, marginTop: -2} }>
                                <span style={ {userSelect: 'none', background: '#DCDCDC', width: 30, height: 30, display: 'inline-block', borderRadius: 8, textAlign: 'center', lineHeight: 1.8, marginRight: 5} }>{key + 1}</span>
                                <div style={ {display: 'inline-block', width: 315, height: 35, transform: 'translateY(10px)'} }>
                                    <span style={ {display: 'block', fontSize: 12, userSelect: 'none', transform: 'translateY(3px)'} }>{item.deptName}<span style={ {float: 'right'} }>{item.errAnzahl}</span></span>
                                    <Progress strokeLinecap="round" percent={value} showInfo={false} strokeColor="#1890FF" size={"small"} style={ {width: 315, transform: 'translateY(-2px)'} } />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}
 
export default CountDataErrTopUl;