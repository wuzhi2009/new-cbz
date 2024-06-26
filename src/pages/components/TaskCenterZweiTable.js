import React, { Component } from 'react';
import { connect } from 'react-redux';
import OpenUndClose from './OpenUndClose';
import Modal from './Modal';
import { Empty, message, Spin } from 'antd';
import { stop } from '../api/TaskCenter/TaskCenterApi';
import {LoadingOutlined, ThunderboltTwoTone } from '@ant-design/icons';
const tableKopf = ["id", "类型", "检测名称", "发起人", "发起时间", "检测范围", "状态", "操作"];
/**
 * 正在检测表格
 * 
 * @author wuzhi
 * @param data 数据
 */
class TaskCenterZweiTable extends Component {
    state = { open:false, id:-1, wait2: false } 
    // 关闭模态框
    close = () => {
        this.setState({open: false});
    }
    // 确认删除
    ok = () => {
        const { id } = this.state;
        this.setState({wait2: true});
        stop(id).then(res => {
            if (res.data.code === 200) {
                message.success(res.data.msg);
                // 刷新页面
                this.props.sendAction({type: "search", label: "1", searchValue: ""});
                this.setState({wait2: true, open: false});
            } else {
                message.error(res.data.msg);
            }
        })
    }
    render() { 
        const { open, wait2 } = this.state;
        const { data, wait } = this.props;
        return (
            <Spin spinning={wait}>
            <table width={'98%'} style={{borderSpacing: '0 10px', margin: "0 auto"}} >
                <colgroup>
                <col style={ {width: 120, minWidth: 120} } />
                <col style={ {width: 320, minWidth: 320} } />
                <col style={ {width: 130, minWidth: 130} } />
                <col style={ {width: 200, minWidth: 200} } />
                <col style={ {width: 320, minWidth: 320} } />
                <col style={ {width: 320, minWidth: 320} } />
                <col style={ {width: 130, minWidth: 130} } />
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
                {data.map((item, key) => {
                    return (
                    <tr key={ key + 100 } style={ {backgroundColor: 'white', height: 45} }>
                        <td style={ {display: 'none'} }>{item.id}</td>
                        <td style={ {textAlign: 'center'} }>{item.checkType}</td>
                        <td>{item.monitoringTitle}</td>
                        <td style={ {textAlign: 'center'} }>{item.originator}</td>
                        <td style={ {textAlign: 'center'} }>{item.createTime}</td>
                        <td style={ {textAlign: 'center'} }><OpenUndClose text={ JSON.parse(item.siteChannelsJson) } /></td>
                        <td style={ {textAlign: 'center'} }>{item.status === 1 ? <div style={ {color: '#FF9854'} }><ThunderboltTwoTone twoToneColor={"#FFB584"} />等待运行</div> : <div style={ {color: 'red'} }>正在运行</div>}</td>
                        <td style={ {textAlign: 'center'} }>
                            <div style={ {display: 'inlineBlock',width: 120,height: 26, textAlign: 'center',backgroundColor: 'red',color: '#fff', cursor: 'pointer'} } onClick={() => {this.setState({open: true, id:item.id})}}>
                                <span style={ { userSelect: 'none', position: 'relative', top: '15%', fontWeight: 600} }>取消</span>
                            </div>
                        </td>
                    </tr>
                    )
                })}
            </thead>
            </table>
            {data.length === 0 ?
                    <Empty image={<div style={ {lineHeight: 13} }>{Empty.PRESENTED_IMAGE_SIMPLE}</div>} style={ {backgroundColor: '#FFFFFF', height: 168, margin: '10px 24px'} } />: <></>
                }
            <Modal open={open} close={this.close.bind(this)}>
                <div style={ {marginBottom: 20, position: 'absolute', top: 34} }>提示：</div>
                <div style={ {margin: 30} }>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您是否要取消此任务</div>
                <div style={ {marginLeft: '50%', marginTop: 16} } className='zweiTable'>
                    <span className='DasButton' onClick={() => {this.close()}} >取消</span>
                    {wait2 ? <span className='grepButton' style={ {marginLeft: 2} }> <LoadingOutlined style={ {marginRight: 2} } /> 确定</span> : <span className='grepButton' onClick={() => {this.ok()}} style={ {marginLeft: 2} }>确定</span>}
                </div>
            </Modal>
            </Spin>
        );
    }
}
 
const getList = (task2List) => {
    return task2List;
}

const search = (dispatch) => {
    return {
        sendAction: (info) => {
            dispatch(info)
        }
    }
}
export default connect(({task2List}) => getList(task2List), search)(TaskCenterZweiTable);