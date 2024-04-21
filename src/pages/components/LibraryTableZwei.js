import { Empty, Spin } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LangText from './LangText';
const tableKopf = ["序号", "词汇", "添加时间", "最后更新时间", "操作"];
/**
 * 白名单表
 * 
 * @author wuzhi
 * @param data[] 词库数据
 * @param wait 等待
 */
class LibraryTableZwei extends Component {
    state = { data: [], page: 1, pageSize: 10 } 
    componentDidUpdate(oldProps) {
        const { data, page, pageSize } = this.props;
        if (data && data !== oldProps.data) {
            this.setState({data, page, pageSize})
        }
    }
    render() { 
        const { wait, data, page, pageSize } = this.props;
        var nowData = data;
        var nowPage = page;
        var nowPageSize = pageSize;
        if (!data) {
            // 传过来的data不存在 说明是因为点击编辑而发送回来的
            nowData = this.state.data;
            nowPage = this.state.page;
            nowPageSize = this.state.pageSize;
        }
        return (
            <Spin spinning={wait}>
            <table style={ {margin: '20px 10px', borderSpacing: '0 0px', width: '99%'} }>
                <colgroup>
                    <col style={ {width: 40,minWidth: 40,textAlign: 'center'} }/>
                    <col style={ {width: 400,minWidth: 400, textAlign: 'center'} } />
                    <col style={ {width: 160,minWidth: 160, textAlign: 'center'} } />
                    <col style={ {width: 160,minWidth: 160, textAlign: 'center'} }  />
                    <col style={ {width: 150,minWidth: 150, textAlign: 'center'} } />
                </colgroup>
                <thead>
                <tr>
                    {tableKopf.map((item, key) => {
                        return (
                            <th key={key} style={ {backgroundColor: '#ECF2F8', height: 50, border: '1px solid #8F9399'} }>{item}</th>
                        )
                    })}
                </tr>
                { nowData.map((item, key) => {
                    return (
                    <tr key={ key } style={ {backgroundColor: 'white', height: 45} }>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{(key + 1) + ((nowPage - 1) * nowPageSize)}</td>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }><LangText col={1} is={false} text={item.wort} /></td>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.createTime}</td>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.updateTime}</td>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} } className='aaaa'>
                            <div className='DasButton' style={ {cursor: 'pointer', width: 65} } onClick={() => {
                                this.props.sendAction({type: "wortItem", form: item});
                            }}><span>修 改</span></div>
                            <div className='DasButton' style={ {cursor: 'pointer', backgroundColor: 'red', width: 65, marginLeft: 10} }
                                onClick={() => {this.props.sendAction({type: "delWort", id: item.id})}}>
                                <span>移 除</span>
                                </div>
                        </td>
                    </tr>
                    )
                })}
                </thead>
                </table>
                {nowData.length === 0 ?
                    <Empty image={<div style={ {lineHeight: 13} }>{Empty.PRESENTED_IMAGE_SIMPLE}</div>} style={ {backgroundColor: '#FFFFFF', height: 168, margin: '10px 24px'} } />: <></>
                }
            </Spin>
        );
    }
}
 
const setItem = (dispatch) => {
    return {
        sendAction: (info) => {
            dispatch(info)
        }
    }
}
export default connect(({whiteList}) => {return whiteList}, setItem)(LibraryTableZwei);