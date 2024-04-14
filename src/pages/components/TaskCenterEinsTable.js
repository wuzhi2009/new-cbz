import React, { Component } from 'react';
import { connect } from 'react-redux';
import OpenUndClose from './OpenUndClose';
import { withRouter } from '../../utils/withRouter';
import { Empty, Spin } from 'antd';
const tableKopf = ["id", "类型", "检测名称", "发起人", "发起时间", "检测范围", "操作"];
class TaskCenterEinsTable extends Component {
    state = { } 
    // 跳转到检测详情页面
    go = (item) => {
        const nav = this.props.router.navigate;
        nav("/taskCenterXiangQing", {state: {...item}})
    }
    render() { 
        const { data, wait } = this.props;
        return (
            <Spin spinning={wait} >
            <table width={'98%'} style={{borderSpacing: '0 10px', margin: "0 auto"}} >
                <colgroup>
                <col style={ {width: 120, minWidth: 120} } />
                <col style={ {width: 320, minWidth: 320} } />
                <col style={ {width: 130, minWidth: 130} } />
                <col style={ {width: 200, minWidth: 200} } />
                <col style={ {width: 320, minWidth: 320} } />
                <col style={ {width: 320, minWidth: 320} } />
                <col />
                </colgroup>
            <thead>
                <tr style={ {color: 'white', background: '#61A3FF', height: 39, width: '100vw'} }>
                    {/* 表头 */}
                    { tableKopf.map((item, key) => {
                        return (
                            <th key={ key } style={ item === 'id' ? {display: 'none'} : {} }>{item}</th>
                        )
                    }) }
                </tr>
                {data.length === 0 ?
                    <tr>
                        <td style={ {backgroundColor: 'white'} } />
                        <td style={ {backgroundColor: 'white'} } />
                        <td style={ {backgroundColor: 'white'} } />
                        <td style={ {backgroundColor: 'white'} }><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></td>
                        <td style={ {backgroundColor: 'white'} } />
                        <td style={ {backgroundColor: 'white'} } />
                    </tr>: <></>
                }
                { data.map((item, key) => {
                    return (
                    <tr key={ key + 100 } style={ {backgroundColor: 'white', height: 45} }>
                        <td style={ {textAlign: 'center'} }>{item.checkType}</td>
                        <td>{item.monitoringTitle}</td>
                        <td style={ {textAlign: 'center'} }>{item.originator}</td>
                        <td style={ {textAlign: 'center'} }>{item.createTime}</td>
                        <td style={ {textAlign: 'center'} }><OpenUndClose text={JSON.parse(item.siteChannelsJson)} /></td>
                        <td style={ {textAlign: 'center'} } className='aaaa'>
                            <div className='grepButton' style={ {cursor: 'pointer'} } onClick={() => {this.go(item)}}><span>查看检测结果</span></div>
                            <div className='DasButton' style={ {cursor: 'pointer'} }><span>点击下载</span></div>
                        </td>
                    </tr>
                    )
                })}
            </thead>
            </table>
            </Spin>
        );
    }
}

const getList = (task1List) => {
    return task1List;
}
 
export default withRouter(connect(({task1List}) => getList(task1List))(TaskCenterEinsTable));