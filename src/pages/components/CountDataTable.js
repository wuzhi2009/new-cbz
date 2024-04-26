import { Empty, Spin } from 'antd';
import React, { Component } from 'react';
import { getHightHz } from '../api/CountData/CountDataApi';
const tableKopf = ["序号", "规范表述", "不规范表述", "错误次数"];
/**
 * 高频错词统计表
 * 
 * @author wuzhi
 */
class CountDataTable extends Component {
    state = { data: [], wait: true }
    componentDidMount() {
        getHightHz().then(res => {
            if (res.data.code === 200) {
                this.setState({ data: res.data.data, wait: false });
            }
        })
    }
    render() {
        const { data, wait } = this.state;
        return (
            <Spin spinning={wait}>
                <div style={{ color: '#61a3ff', fontWeight: 700, fontSize: 18 }} >高频错敏词</div>
                <table style={{ marginTop: 5, borderSpacing: '0 0px' }} width={600} >
                    <colgroup>
                        <col style={{ width: 60, minWidth: 60, textAlign: 'center', minHeight: 70 }} />
                        <col style={{ width: 80, minWidth: 80, textAlign: 'center', minHeight: 70 }} />
                        <col style={{ width: 160, minWidth: 160, textAlign: 'center', minHeight: 70 }} />
                        <col style={{ width: 100, minWidth: 100, textAlign: 'center', minHeight: 70 }} />
                    </colgroup>
                    <thead>
                        <tr style={{ color: 'white', background: '#61A3FF', height: 39, width: '100vw' }}>
                            {tableKopf.map((item, key) => {
                                return (
                                    <th key={key} style={{ userSelect: 'none', textAlign: 'center' }} >{item}</th>
                                )
                            })}
                        </tr>
                    </thead>
                </table>
                <div style={{ maxHeight: 300, overflowY: 'scroll' }}>
                    <table style={{ margin: '0 0', borderSpacing: '0 0px' }} width={582} >
                        <colgroup>
                            <col style={{ width: 60, minWidth: 60, textAlign: 'center', minHeight: 45 }} />
                            <col style={{ width: 100, minWidth: 100, textAlign: 'center', minHeight: 45 }} />
                            <col style={{ width: 160, minWidth: 160, textAlign: 'center', minHeight: 45 }} />
                            <col style={{ width: 100, minWidth: 100, textAlign: 'center', minHeight: 45 }} />
                        </colgroup>
                        <tbody>
                            {data.length > 0 ?
                                data.map((item, key) => {
                                    return (
                                        <tr key={key + 900} style={key % 2 === 1 ? { backgroundColor: 'white', height: 45 } : { backgroundColor: '#f0f0f0', height: 45 }}>
                                            <td style={{ textAlign: 'center' }}>{key}</td>
                                            <td style={{ textAlign: 'center' }}>{JSON.parse(item.amendments)[0]}</td>
                                            <td style={{ textAlign: 'center' }}>{item.errorDescription}</td>
                                            <td style={{ textAlign: 'center' }}>{item.errAnzahl}</td>
                                        </tr>
                                    )
                                })
                                :
                                <></>}
                        </tbody>
                    </table>
                    {data.length === 0 ?
                    <Empty image={<div style={ {lineHeight: 13} }>{Empty.PRESENTED_IMAGE_SIMPLE}</div>} style={ {backgroundColor: '#FFFFFF', height: 168, margin: '10px 24px'} } />: <></>
                }
                </div>
            </Spin>
        );
    }
}

export default CountDataTable;