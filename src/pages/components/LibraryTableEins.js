import { Empty, Spin } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LangText from './LangText';
const tableKopf = ["序号", "正确表述", "错误表述", "添加时间", "最后更新时间", "操作"];
/**
 * 词库表
 * 
 * @author wuzhi
 * @param data[] 词库数据
 */
class LibraryTableEins extends Component {
    state = {  } 
    componentDidUpdate(oldProps) {
    }
    render() { 
        const { wait, data, page, pageSize } = this.props;
        return (
            <Spin spinning={wait}>
            <table style={ {margin: '20px 10px', borderSpacing: '0 0px', width: '99%'} }>
                <colgroup>
                    <col style={ {width: 40,minWidth: 40,textAlign: 'center'} }/>
                    <col style={ {width: 80,minWidth: 80, textAlign: 'center'} } />
                    <col style={ {width: 300,minWidth: 300, textAlign: 'center'} } />
                    <col style={ {width: 147,minWidth: 147, textAlign: 'center'} } />
                    <col style={ {width: 147,minWidth: 147, textAlign: 'center'} }  />
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
                {data.length === 0 ?
                    <tr>
                        <td style={ {backgroundColor: 'white'} } />
                        <td style={ {backgroundColor: 'white'} } />
                        <td style={ {backgroundColor: 'white'} }><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></td>
                        <td style={ {backgroundColor: 'white'} } />
                        <td style={ {backgroundColor: 'white'} } />
                        <td style={ {backgroundColor: 'white'} } />
                    </tr>: <></>
                }
                { data.map((item, key) => {
                    return (
                    <tr key={ key } style={ {backgroundColor: 'white', height: 45} }>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{(key + 1) + ((page - 1) * pageSize)}</td>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.wort}</td>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }><LangText col={1} is={false} text={item.errSay} /></td>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.createTime}</td>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.updateTime}</td>
                        <td style={ {textAlign: 'center', border: '1px solid #8F9399'} } className='aaaa'>
                            <div className='DasButton' style={ {cursor: 'pointer', width: 65} } onClick={() => {}}><span>修改</span></div>
                            <div className='DasButton' style={ {cursor: 'pointer', backgroundColor: 'red', width: 65, marginLeft: 10} }><span>移除</span></div>
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
 
export default connect(({wortList}) => {return wortList})(LibraryTableEins);