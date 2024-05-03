import { Empty, Spin } from 'antd';
import React, { Component } from 'react';
const tableKopf = ["序号", "单位", "站点/账号名称", "平台", "不规范表述", "规范表述", "操作"]
/**
 * 管理员表格
 * 
 * @author wuzhi
 * @param data
 * @param changeIds([])选中的id数组
 * @param page 第几页
 * @param pageSize 每页几条数据
 * @param wait 是否加载中
 */
class AdminTable extends Component {
    state = { page: 1, pageSize: 10, ids:[], quanXuan: false } 
    xuanAll = (e) => {
        const { ids } = this.state;
        var mdIds = ids;
        if (e.target.checked) {
            // 选中全部
            this.props.data.map(item => {
                var index = mdIds.indexOf(item.id);
                if (index === -1) {
                    // 当且仅当没选取
                    return mdIds.push(item.id);
                }
                return null;
            })
        } else {
            // 取消全选 如果是第一页和第二页都全选了 只取消其中一页的全选
            this.props.data.forEach(item => {
                var index = mdIds.indexOf(item.id);
                if (index !== -1) {
                   mdIds.splice(index, 1);
                }
            })
        }
        this.props.changeIds(mdIds);
        this.setState({quanXuan: e.target.checked, ids:mdIds});
    }
    xuanZhe = (e, DasMdId) => {
        const { ids } = this.state;
        const { data } = this.props;
        var q = true;
        if (e.target.checked) {
            // 选取 // 当元素是该页最后一个被选取的时候 同时选取表头的选项
            try {
                data.forEach(item => {
                    if (item.id !== DasMdId && !ids.includes(item.id)) {
                        // 所选择的mdId中 没有包含现在数据的id
                        // 停止forEach
                        throw new Error("stop");
                    } else {
                        // 有存在的元素 继续下一个判断
                        q = true;
                    }
                }) 
            } catch (error) {
                if (error.message !== "stop") {
                    throw error;
                }
                q = false;
            }
            this.setState({ids:[...ids, DasMdId], quanXuan: q});
            this.props.changeIds([...ids, DasMdId]);
        } else {
            // 取消选取
            var index = ids.indexOf(DasMdId);
            if (index !== -1) {
                ids.splice(index, 1);
            }
            this.setState({ids, quanXuan: false});
            this.props.changeIds(ids);
        }
    }
    componentDidUpdate(oldProps) {
        const { page, pageSize } = this.props;
        if (page !== oldProps.page || pageSize !== oldProps.pageSize) {
            this.setState({page, pageSize, wait: false});
        } 
    }
    render() { 
        const { page, pageSize, quanXuan, ids } = this.state;
        const { data, wait } = this.props;
        return (
            <Spin spinning={wait}>
            <table style={ {margin: '20px 40px', borderSpacing: '0 0px', width: '99%'} }>
                <colgroup>
                    <col style={ {width: 70,minWidth: 70,textAlign: 'center', minHeight: 70} }/>
                    <col style={ {width: 60,minWidth: 60, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 130,minWidth: 130, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 140,minWidth: 140, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 60,minWidth: 60, textAlign: 'center', minHeight: 70} }  />
                    <col style={ {width: 120,minWidth: 120, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 190,minWidth: 190, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 190,minWidth: 190, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 120,minWidth: 120, textAlign: 'center', minHeight: 70} } />
                </colgroup>
                <thead>
                    
                    <tr>
                        <th style={ {backgroundColor: '#ECF2F8', height: 50, border: '1px solid #8F9399'} }>
                            <input type='checkbox' style={ {width: 20, height: 20} } onChange={(e) => {this.xuanAll(e)}} checked={quanXuan} />
                        </th>
                        {tableKopf.map((item, key) => {
                            return (
                                <th key={key} style={ {backgroundColor: '#ECF2F8', height: 40, border: '1px solid #8F9399'} }>{item}</th>
                            )
                        })}
                    </tr>
                        {data.map((item, key) => {
                            const { amendments, errorPlatform } = item;
                            var newAmendments = JSON.parse(amendments);
                            var newMediaType = "";
                            switch (errorPlatform) {
                                case "1":
                                    newMediaType = "网站";
                                    break;
                                case "2":
                                    newMediaType = "手机app";
                                    break;
                                case "3":
                                    newMediaType = "微信";
                                    break;
                                case "4":
                                    newMediaType = "微博";
                                    break;
                                default:
                                    break;
                            }
                            return (
                                <tr key={key} style={ ids.includes(item.id) ? {background: '#F0FAFF', maxHeight: 40} : {maxHeight: 40}}>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }><input type='checkbox' style={ {width: 20, height: 20} } onChange={(e) => {this.xuanZhe(e, item.id)}} checked={ids.includes(item.id)} /></td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{(key + 1) + ((page - 1) * pageSize)}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.deptName}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.siteName}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{newMediaType}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399', color: 'red'} }>{item.errorDescription}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{newAmendments[0]}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>
                                        <div className='YellowButton' style={ {background: '#61A3FF', color: 'white'} } ><span>提醒</span></div>
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
 
export default AdminTable;