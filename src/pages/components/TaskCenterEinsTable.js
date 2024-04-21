import React, { Component } from 'react';
import { connect } from 'react-redux';
import OpenUndClose from './OpenUndClose';
import { withRouter } from '../../utils/withRouter';
import { Empty, Spin } from 'antd';
import { excel } from '../api/TaskCenterXiangQing/XiangQingApi';
import { LoadingOutlined } from '@ant-design/icons';
const tableKopf = ["id", "类型", "检测名称", "发起人", "发起时间", "检测范围", "操作"];
/**
 * 检测完成表格
 * 
 * @author wuzhi
 */
class TaskCenterEinsTable extends Component {
    state = { loading: false, id: -1 } 
    // 跳转到检测详情页面
    go = (item) => {
        const nav = this.props.router.navigate;
        nav("/taskCenterXiangQing", {state: {...item}})
    }
    export = (id, title) => {
        if (this.state.loading === true) {
            return;
        }
        this.setState({loading: true, id});
        excel([], id).then(res => {
            const blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' })
            const blobURL = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = blobURL;
            a.download = `${title}.xlsx`;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.parentNode.removeChild(a);
            window.URL.revokeObjectURL(blobURL);
            this.setState({loading: false, id: -1});
        })
    }
    render() { 
        const { data, wait } = this.props;
        const { loading, id } = this.state;
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
                { data.map((item, key) => {
                    var das = <>{item.checkType}</>;
                    if (item.checkType === "月常") {
                        das = <span className='DasButton' style={ {color: 'white', backgroundColor: '#FCA427', width: 64, height: 25, display: 'inline-block', fontWeight: 600} }>{item.checkType}</span>
                    }
                    return (
                    <tr key={ key + 100 } style={ {backgroundColor: 'white', height: 45} }>
                        <td style={ {textAlign: 'center'} }>{das}</td>
                        <td>{item.monitoringTitle}</td>
                        <td style={ {textAlign: 'center'} }>{item.originator}</td>
                        <td style={ {textAlign: 'center'} }>{item.createTime}</td>
                        <td style={ {textAlign: 'center'} }><OpenUndClose text={JSON.parse(item.siteChannelsJson)} /></td>
                        <td style={ {textAlign: 'center'} } className='aaaa'>
                            <div className='grepButton' style={ {cursor: 'pointer'} } onClick={() => {this.go(item)}}><span>查看检测结果</span></div>
                            <div className='DasButton' style={ {cursor: 'pointer'} } onClick={() => {this.export(item.id, item.monitoringTitle)}}><span>{loading && item.id === id ? <LoadingOutlined style={ {marginRight: 5} } /> : <></>}点击下载</span></div>
                        </td>
                    </tr>
                    )
                })}
            </thead>
            </table>
            {data.length === 0 ?
                    <Empty image={<div style={ {lineHeight: 13} }>{Empty.PRESENTED_IMAGE_SIMPLE}</div>} style={ {backgroundColor: '#FFFFFF', height: 168, margin: '10px 24px'} } />: <></>
                }
            </Spin>
        );
    }
}

const getList = (task1List) => {
    return task1List;
}
 
export default withRouter(connect(({task1List}) => getList(task1List))(TaskCenterEinsTable));