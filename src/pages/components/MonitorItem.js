import React, { Component } from 'react';
const titleStyle = {
    paddingLeft: 13,
    paddingBottom: 5,
    borderLeft: '5px solid #4B83F0',
    display: 'inline-block',
    color: '#344B79',
    fontWeight: 600,
    position: 'absolute',
    top: 0
};
const rightStyle = {
    position: 'absolute', 
    right: 0,
    top: 0,
    cursor: 'pointer'
}
const monitorLiStyle = {
    marginLeft: 45,  
    cursor: 'pointer', 
    display: 'inline-block', 
    marginBottom: 13
}
const ulStyle = {
    listStyle: 'none', userSelect: 'none',
    borderBottom: '1px dotted black', 
    paddingBottom: 10, 
    marginBottom: 10, 
    position: 'relative', 
    width: 1350, 
    minHeight: 40
}
/**
 * 发起检测模块组件
 * 
 * @author wuzhi
 * @param title 左侧标题
 * @param data[] 数据 {label,别的数据}
 * @param en 是否默认选择第一个
 * @param change
 * @param haben 是否显示展开
 */
class MonitorItem extends Component {
    state = { open: false, data2:[], key:0, label:"", cityListOpen:false, cityList:[], cityLabel:"" } 
    openUndClose = (data) => {
        var key = 0;
        if (this.props.en) {
            key = 1;
        }
        this.setState({data2: data, key, cityListOpen: false, open: false});
    }
    componentDidMount() {
        const { data, change } = this.props;
        if (data[0] && data[0].children) {
            change(data[0].children, data[0].children.label, undefined); 
        }
        this.openUndClose(data);
    }
    componentDidUpdate(oldProps) {
       const { data } = this.props;
        if (data !== oldProps.data) {
            this.setState({data2: data, cityListOpen: false, open: false})
        }
    }
    xuanZhe = (key, item) => {
        const { data, change } = this.props;
        if (key < 1000) {
            // 自治区的
            var newData = data.filter(dasItem => dasItem.id === item.id);
            this.setState({key: key + 1, label: item.label, cityListOpen: false});
            if (newData[0].children) {
                change(newData[0].children, newData[0].label, key + 1);
            } else {
                change(undefined, newData[0].label, key + 1)
            }   
        } else {
            // 非自治区的
            this.setState({cityLabel: item});
            change(undefined, item, key)
        }
        
    }
    render() { 
        const { title, haben } = this.props;
        const { open, data2, key, label, cityListOpen, cityList, cityLabel } = this.state;
        var key2 = key;
        var dasData = data2;
        var DasUl = ulStyle;
        if (!open) {
            DasUl = {...ulStyle, height:12, overflow: 'hidden'}
        }
        var istSpan = false;
        if (dasData[0] && dasData[0].label === '市直部门') {
            // 说明是非自治区 需要展开为span
            istSpan = true;
        }
        return (
            <ul style={ DasUl }>
                <span style={titleStyle}>{title}</span>
                <div style={ {display: 'inline-block', marginLeft: 40, minWidth: 1180, maxWidth: 1180} }>
                {dasData.map((item, key) => {
                    const monitorLiStyle2 = {...monitorLiStyle, color: '#4B83F0'};
                    const monitorLiStyle3 = {...monitorLiStyle, background: '#EEEEEE', color: '#4B83F0', width: 89, height: 28, textAlign: 'center', marginBottom: 0};
                    return (
                        istSpan ? 
                        <span key={key} style={ label === item.label ? monitorLiStyle3 : monitorLiStyle } onClick={() => {
                            var cityList = [];
                            item.children.map(({label}) => {
                                return (
                                    cityList.push(label)
                                )
                            })
                            this.setState({cityListOpen: true, label: item.label, cityList, open: true});
                        }}>{item.label}</span>
                        : 
                        <li key={key} style={ key2 === key + 1 ? monitorLiStyle2 : monitorLiStyle} onClick={() => {this.xuanZhe(key, item)}}>{item.label}</li> 
                    )
                })}
                </div>
                {cityListOpen ?
                <div style={ {background: '#EEEEEE', marginLeft: 86} }>
                    
                    {
                    cityList.map((cityItem, key3) => {
                        var newKey = key3 + 1000;
                        var style = {...monitorLiStyle, marginLeft: 18};
                        var onStyle = {...style, color: '#4B83F0'}
                        return (<li key={newKey} style={cityLabel === cityItem ? onStyle : style} onClick={() => {this.xuanZhe(newKey, cityItem)}}>{cityItem}</li>)
                    })
                    }
                </div> : <></>
                }
                { !haben ? (open ? <span style={ rightStyle } onClick={() => {this.setState({open:false})}}>收起∧</span> : <span style={ rightStyle } onClick={() => {this.setState({open:true})}}>展开∨</span>) : <></>}
            </ul>
        );
    }
}
 
export default MonitorItem;