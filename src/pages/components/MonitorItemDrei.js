import { Tree } from 'antd';
import React, { Component } from 'react';
const ulStyle = {
    listStyle: 'none', userSelect: 'none',
    borderBottom: '1px dotted black', 
    paddingBottom: 10, 
    marginBottom: 10, 
    position: 'relative', 
    width: 1350, 
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
const data = [
    {
        "channelId": 34825,
        "channelDesc": "政府文件",
        "channelName": "政府文件_100",
        "parentChannelId": 0,
        "siteId": null,
        "siteDesc": null,
        "totalArticles": null,
        wcmchannels: [
            {
                "channelId": 34849,
                "channelDesc": "最新文件",
                "channelName": "最新文件",
                "parentChannelId": 34825,
                "siteId": null,
                "siteDesc": null,
                "totalArticles": null,
                wcmchannels: [{
                    "channelId": 1090333,
                    "channelDesc": "会议回顾",
                    "channelName": "会议回顾_d86c_109038",
                    "parentChannelId": 109037,
                    "siteId": null,
                    "siteDesc": null,
                    "totalArticles": null,
                    wcmchannels: []
                }]
            },
            {
                "channelId": 34846,
                "channelDesc": "自治区人民政府令",
                "channelName": "自治区人民政府令_34846",
                "parentChannelId": 34825,
                "siteId": null,
                "siteDesc": null,
                "totalArticles": null,
                wcmchannels: []
            }
        ]
    },
    {
        "channelId": 109037,
        "channelDesc": "自治区十三届人民政府第88次常务会议",
        "channelName": "自治区十三届人民政府第88次常务会议",
        "parentChannelId": 29128,
        "siteId": null,
        "siteDesc": null,
        "totalArticles": null,
        wcmchannels: [
            {
                "channelId": 109038,
                "channelDesc": "会议回顾",
                "channelName": "会议回顾_d86c_109038",
                "parentChannelId": 109037,
                "siteId": null,
                "siteDesc": null,
                "totalArticles": null,
                wcmchannels: []
            },
            {
                "channelId": 109039,
                "channelDesc": "图解",
                "channelName": "图解_d88c",
                "parentChannelId": 109037,
                "siteId": null,
                "siteDesc": null,
                "totalArticles": null,
                wcmchannels: []
            }
        ]
    }
];
/**
 * 栏目选择组件
 * 
 * @author wuzhi
 * @param onChange 选择栏目回调 ([{栏目对象},{},{}])
 * @param data 树
 */
class MonittorItemDrei extends Component {
    state = { data:[], list:[] } 
    onCheck = (key, e) => {
        this.setState({data: e.checkedNodes, list: key});
        this.props.onChange(e.checkedNodes);
    };
    // 全选
    all = (data, dList, dData) => {
        const { onChange } = this.props;
        data.map((item) => {
            if (item.wcmchannels.length > 0) {
                this.all(item.wcmchannels, dList, dData);
            }
            dData.push(item);
            return dList.push(item.channelId);
        })
        this.setState({list: dList}, () => {onChange(dData)});
    };
    componentDidUpdate() {

    }
    render() { 
        const { list } = this.state;
        const { onChange } = this.props;
        return (
            <ul style={ ulStyle }>
                <span style={titleStyle}>栏目</span>
                <span className='spanspan' onClick={() => {var dList= []; var dData = []; this.all(data, dList, dData)}} style={ {marginLeft: 75} }>全选</span>
                <span className='spanspan' onClick={() => {this.setState({list:[]});onChange([])}} style={ {marginLeft: 11} }>清空</span>
                <Tree
                    checkable={true}
                    onCheck={(key, e) => {this.onCheck(key, e)}}
                    multiple={true}
                    fieldNames={ {key:"channelId", title:"channelDesc", children:"wcmchannels"} }
                    height={300}
                    checkedKeys={list}
                    treeData={data} 
                    style={ {marginLeft: 55, marginTop: 10} }
                />
            </ul>
        );
    }
}
 
export default MonittorItemDrei;