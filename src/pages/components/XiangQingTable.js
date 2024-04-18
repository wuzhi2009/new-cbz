import React, { Component } from 'react';
import LangText from './LangText';
import { Empty, Spin, Tooltip } from 'antd';
const tableKopf = ["序号", "单位", "站点/账号名称", "平台", "错误类型", "不规范表述", "规范表述", "文章标题", "片段", "数据类型", "引用页", "发布时间", "修改状态", "操作"];
/**
 * 检测详情表
 * 
 * @author wuzhi
 * @param data[] 表数据
 * @param getMdId 获取选择id的方法
 * @param page 当前页数 用于获取前面的索引
 * @param pageSize 当前数据量 用于获取前面的索引
 * @param style 样式
 * @param del "传chongZhi"则删除所有mdId
 */
class XiangQingTable extends Component {
    state = { mdId:[],quanXuan: false, items:[] } 
    xuanAll = (e) => {
        const { mdId } = this.state;
        var mdIds = mdId;
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
        this.props.changeMdId(mdIds);
        this.setState({quanXuan: e.target.checked, mdId:mdIds});
    }
    xuanZhe = (e, DasMdId) => {
        const { mdId } = this.state;
        const { data } = this.props;
        var q = true;
        if (e.target.checked) {
            // 选取 // 当元素是该页最后一个被选取的时候 同时选取表头的选项
            try {
                data.forEach(item => {
                    if (item.id !== DasMdId && !mdId.includes(item.id)) {
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
            this.setState({mdId:[...mdId, DasMdId], quanXuan: q});
            this.props.changeMdId([...mdId, DasMdId]);
        } else {
            // 取消选取
            var index = mdId.indexOf(DasMdId);
            if (index !== -1) {
                mdId.splice(index, 1);
            }
            this.setState({mdId, quanXuan: false});
            this.props.changeMdId(mdId);
        }
    }
    componentDidUpdate(oldProps) {
        const { del, data } = this.props;
        const { mdId } = this.state;
        const del2 = oldProps.del;
        const data2 = oldProps.data;
        if (del && del === "chongZhi" && del !== del2) {
            this.setState({mdId: [], quanXuan: false, items:[]})
        }
        if (data.length > 0 && data !== data2) {
            var q = true;
            // 切换数据判断是否全选
            try {
                data.forEach(item => {
                    if (!mdId.includes(item.id)) {
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
            this.setState({quanXuan: q});
        }
    }
    render() { 
        // 复选框是否全选
        const { quanXuan, mdId } = this.state;
        const { data, page, pageSize, wait } = this.props;
        return (
            <Spin spinning={wait}>
            <table style={ this.props.style }>
                <colgroup>
                    <col style={ {width: 50,minWidth: 50,textAlign: 'center'} }/>
                    <col style={ {width: 60,minWidth: 60, textAlign: 'center'} } />
                    <col style={ {width: 120,minWidth: 120, textAlign: 'center'} } />
                    <col style={ {width: 140,minWidth: 120, textAlign: 'center'} } />
                    <col style={ {width: 60,minWidth: 80, textAlign: 'center'} }  />
                    <col style={ {width: 120,minWidth: 120, textAlign: 'center'} } />
                    <col style={ {width: 120,minWidth: 120, textAlign: 'center'} } />
                    <col style={ {width: 120,minWidth: 120, textAlign: 'center'} } />
                    <col style={ {width: 120,minWidth: 120, textAlign: 'center'} } />
                    <col style={ {width: 240, textAlign: 'center'} } />
                    <col style={ {width: 70,minWidth: 70, textAlign: 'center'} } />
                    <col style={ {width: 150, minWidth: 100,textAlign: 'center'} } />
                    <col style={ {width: 100,minWidth: 100, textAlign: 'center'} } />
                    <col style={ {width: 100,minWidth: 100, textAlign: 'center'} } />
                    <col style={ {width: 110,minWidth: 110,textAlign: 'center'} } />
                </colgroup>
                <thead>
                    
                    <tr>
                        <th style={ {backgroundColor: '#ECF2F8', height: 50, border: '1px solid #8F9399'} }>
                            <input type='checkbox' style={ {width: 20, height: 20} } onChange={(e) => {this.xuanAll(e)}} checked={quanXuan} />
                        </th>
                        {tableKopf.map((item, key) => {
                            return (
                                <th key={key} style={ {backgroundColor: '#ECF2F8', height: 70, border: '1px solid #8F9399'} }>{item}</th>
                            )
                        })}
                    </tr>
                    {data.length === 0 ? <tr>
                    <td style={ {textAlign: 'center'} } />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td style={ {textAlign: 'center', width: '100%'} }><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></td>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                    </tr> : <></>
                    }
                        {data.map((item, key) => {
                            const { description, amendments, modifyState, mediaType, postUrl } = item;
                            var newAmendments = JSON.parse(amendments);
                            var newDescription = description.replace(/yellow/g, "red");
                            var newModifyState = "";
                            switch (modifyState) {
                                case 0:
                                    newModifyState = "未修改";
                                    break;
                                case 1:
                                    newModifyState = "已修改";
                                    break;
                                case null:
                                    newModifyState = "无需修改";
                                    break;
                                default:
                                    // eslint-disable-next-line no-unused-vars
                                    newModifyState = "";
                                    break;
                            }
                            var newMediaType = "";
                            switch (mediaType) {
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
                            var newPostUrl = postUrl;
                            if (postUrl.length > 37) {
                                newPostUrl = postUrl.substring(0, 37) + "...";
                            }
                            return (
                                <tr key={key} style={ mdId.includes(item.id) ? {background: '#F0FAFF', maxHeight: 40} : {maxHeight: 40}}>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }><input type='checkbox' style={ {width: 20, height: 20} } onChange={(e) => {this.xuanZhe(e, item.id)}} checked={mdId.includes(item.id)} /></td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{(key + 1) + ((page - 1) * pageSize)}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.deptName}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.siteName}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{newMediaType}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.errorType}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399', color: 'red'} }>{item.errorDescription}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{newAmendments[0]}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }><LangText col={3} text={item.articleTitle} is={false} /> </td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }><LangText col={3} text={newDescription} is={true} /></td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.doctype}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }><Tooltip title={item.postUrl}><a href={item.postUrl}>{newPostUrl}</a></Tooltip></td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.postTime}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{newModifyState}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>
                                        {item.modifyState === 0 ? 
                                            <div className='YellowButton' style={ {background: '#61A3FF'} } onClick={() => {window.open(item.modifyTheUrl)}}><span>修改</span></div>
                                            : 
                                            <div className='YellowButton' style={ {background: '#E1E9F2', color: '#D2DAE6'} } ><span>修改</span></div>}
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
 
export default XiangQingTable;