import { Empty, Spin } from 'antd';
import React, { Component } from 'react';
import { withRouter } from '../../utils/withRouter';
const tableKopf = ["操作时间", "已选条件", "操作人"];
/**
 * 历史记录表
 * 
 * @author wuzhi
 * @param data 表数据
 * @param wait 数据等待
 */
class HistoricalTable extends Component {
    state = {}
    // 套用模板进行查询
    taoYong = (json) => {
        const { navigate } = this.props.router;
        navigate('/searchDataTable', {state: json});
    }
    render() {
        const { data, wait } = this.props;
        return (
            <Spin spinning={wait}>
            <table style={ {borderSpacing: '0px 0px'} } width={'100%'}>
                <colgroup>
                    <col style={{ width: 90, minWidth: 90, textAlign: 'center' }} />
                    <col style={{ minWidth: 300, textAlign: 'center' }} />
                    <col style={{ width: 60, minWidth: 60, textAlign: 'center' }} />
                </colgroup>
                <thead>
                    <tr style={ {color: 'white', background: '#61A3FF', height: 55, width: '100vw'} }>
                        {tableKopf.map((item, key) => {
                            return (
                                <th key={key} style={{ backgroundColor: '#61A3FF', height: 55, cursor: 'default', userSelect: 'none' }}>{item}</th>
                            )
                        })}
                    </tr>
                    {data.length === 0 ?
                    <tr>
                        <td style={ {backgroundColor: 'white'} } />
                        <td style={ {backgroundColor: 'white'} }><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></td>
                        <td style={ {backgroundColor: 'white'} } />
                    </tr> : <></>
                    }
                    { data.map((item, key) => {
                    return (
                    <tr key={ key + 100 } style={ {backgroundColor: 'white', height: 10} }>
                        <td style={ {textAlign: 'center', borderBottom: '1px dotted black'} }>{item.createTime}</td>
                        <td style={ {textAlign: 'center', lineHeight: 1.5, borderBottom: '1px dotted black'} }>
                            {item.choseMsg}
                            <span style={ {display: 'inline-block', background: '#E1E9F2', width: 45, height: 32, color: '#61A3FF', userSelect: 'none', cursor: 'pointer'} } onClick={() => {this.taoYong(item.choseJson)}}>
                                套用
                            </span>
                        </td>
                        <td style={ {textAlign: 'center', borderBottom: '1px dotted black'} }>{item.createBy}</td>
                    </tr>
                    )
                })}
                </thead>
            </table>
            </Spin>
        );
    }
}

export default withRouter(HistoricalTable);