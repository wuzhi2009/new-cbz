import React, { Component } from 'react';
import { connect } from 'react-redux';
const tableKopf = ["id", "类型", "检测名称", "发起人", "发起时间", "检测范围", "操作"];
class TaskCenterEinsTable extends Component {
    state = {  } 
    render() { 
        return (
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
                {this.props.data.map((item, key) => {
                    return (
                    <tr key={ key + 100 } style={ {backgroundColor: 'white', height: 45} }>
                        <td style={ {display: 'none'} }>{item.id}</td>
                        <td style={ {textAlign: 'center'} }>{item.type}</td>
                        <td>{item.name}</td>
                        <td style={ {textAlign: 'center'} }>{item.man}</td>
                        <td style={ {textAlign: 'center'} }>{item.create}</td>
                        <td>{item.fanWei}</td>
                        <td style={ {textAlign: 'center'} } className='aaaa'>
                            <div className='grepButton'><span>查看检测结果</span></div>
                            <div className='DasButton'><span>点击下载</span></div>
                        </td>
                    </tr>
                    )
                })}
            </thead>
            </table>
        );
    }
}

const getList = (task1List) => {
    return task1List;
}
 
export default connect(({task1List}) => getList(task1List))(TaskCenterEinsTable);