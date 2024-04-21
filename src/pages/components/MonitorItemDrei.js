import { Tree } from 'antd';
import React, { Component } from 'react';
const ulStyle = {
    listStyle: 'none', userSelect: 'none',
    borderBottom: '1px dotted black', 
    paddingBottom: 10, 
    marginBottom: 10, 
    position: 'relative', 
    width: 1480, 
    minHeight: 40
};
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
/**
 * 栏目选择组件
 * 
 * @author wuzhi
 * @param onChange 选择栏目回调 ([{栏目对象},{},{}])
 * @param dpName 部门名称
 * @param del 需要通过点击删除的集
 * @param data 树
 */
class MonittorItemDrei extends Component {
    state = { data:[], list:[] } 
    onCheck = (key, e) => {
        const { dpName } = this.props;
        const { list, data } = this.state;
        var l = list.filter((item) => item.dpName !== dpName);
        var d = data.filter((item) => item.dpName !== dpName);
        if (key.length > 0) {
            this.setState({list: [...l, {dpName: dpName, key}]});  
        } else {
            this.setState({list:l})
        }
        if (e.checkedNodes.length > 0) {
            this.setState({data: [...d, {dpName, name: e.checkedNodes}]})
        } else {
            this.setState({data: d})
        }
        this.props.onChange([...d, {dpName, name: e.checkedNodes}]);
    };
    // 全选
    all = (data2, dList, dData) => {
        const { onChange, dpName } = this.props;
        const { list, data } = this.state;
        data2.map((item) => {
            if (item.wcmchannels.length > 0) {
                this.all(item.wcmchannels, dList, dData);
            }
            dData.push({...item, dpName, name: item});
            return dList.push(item.channelId);
        })
        var l = list.filter((item) => {return item.dpName !== dpName});
        var nowData = data.filter((item) => {return item.dpName !== dpName});
        this.setState({list: [...l, {dpName: dpName, key: dList}], data: [...nowData, {dpName, name: dData}]}, () => {onChange([...nowData, {dpName, name: dData}])});
    };
    componentDidUpdate(oldProps) {
        const { del } = this.props;
        const { data, list } = this.state;
        if (del === "chongZhi" && del !== oldProps.del) {
            this.setState({data: [], list: []});
        } else if (del !== "" && del !== oldProps.del) {
            var nowData = data.filter((item) => {return item.dpName !== del});
            var nowList = list.filter((item) => {return item.dpName !== del});
            this.setState({data: nowData, list: nowList});
        }
    }
    render() { 
        const { list } = this.state;
        const { onChange, data, dpName } = this.props;
        var list2 = list.filter((item) => item.dpName === dpName);
        var dasKey = [];
        if (list2[0]) {
            dasKey = list2[0].key;
        }
        return (
            <ul style={ ulStyle }>
                <span style={titleStyle}>栏目</span>
                {data.length > 0 ? 
                <><span className='spanspan' onClick={() => {var dList= []; var dData = []; this.all(data, dList, dData)}} style={ {marginLeft: 75} }>全选</span>
                <span className='spanspan' onClick={() => {
                    var l = list.filter((item) => {return item.dpName !== dpName});
                    var d = this.state.data.filter((item) => {return item.dpName !== dpName});
                    this.setState({list: l, data: d});
                    onChange(d)
                    }} style={ {marginLeft: 11} }>清空</span>
                <Tree
                    checkable={true}
                    onCheck={(key, e) => {this.onCheck(key, e)}}
                    multiple={true}
                    fieldNames={ {key:"channelId", title:"channelDesc", children:"wcmchannels"} }
                    height={300}
                    checkedKeys={dasKey}
                    treeData={data} 
                    style={ {marginLeft: 55, marginTop: 10} }
                /></> : <></>
                }
            </ul>
        );
    }
}
 
export default MonittorItemDrei;