import React, { Component } from 'react';
import LangText from './components/LangText';
import { Empty, Tooltip, Spin, message } from 'antd';
import { withRouter } from '../utils/withRouter';
import XiaLaKuang from './components/XiaLaKuang';
import { ContainerOutlined, LoadingOutlined, OneToOneOutlined } from '@ant-design/icons';
import OpenUndClose from './components/OpenUndClose';
import Search from './components/Search';
import Pagination from './components/Pagination';
import { connect } from 'react-redux';
import { getSearchTable } from './api/SearchTable/SearchTableApi';
import Modal from './components/Modal';
import { chongXinJianCe } from './api/TaskCenterXiangQing/XiangQingApi';
const tableKopf = ["序号", "单位", "站点/账号名称", "平台", "错误类型", "不规范表述", "规范表述", "文章标题", "片段", "数据类型", "引用页", "发布时间", "修改状态"];
const options = [{ key: "文章片段", value: 1 }, { key: "站点名称", value: 2 }];
const options2 = [{ key: "全部", value: "2" }, { key: "未修改", value: "0" }, { key: "已修改", value: "1" }, { key: "无需修改", value: "null" }];
/**
 * 查询检测结果页面
 * 
 * @author wuzhi
 */
class SearchDataTable extends Component {
    state = { mdId: [], quanXuan: false, items: [], data: [], page: 1, pageSize: 10, total: 10, fanWei: [], startTime: "", endTime: "", modifyState: "2", errorType: "", searchValue: "", label: "", json: {}, wait: true, wait2: false, open2: false }
    componentDidMount() {
        const { location } = this.props.router;
        const { state } = location;
        var json = state;
        if (!(json instanceof Object)) {
            // 当且仅当不是字符串的时候转换
            json = JSON.parse(state);
        }
        json.pageNum = 1;
        json.pageSize = 10;
        // 在此处将json传到后端 取到data数据
        getSearchTable(json).then(res => {
            if (res.data.code === 200) {
                this.setState({ data: res.data.data.records, total: res.data.data.total, wait: false });
            }
        })
        this.setState({ modifyState: json.modifyState, fanWei: json.siteChannels, startTime: json.startTime, endTime: json.endTime, json });
    }
    componentDidUpdate(oldProps) {
        const { searchValue, label } = this.props;
        if (label && searchValue && (label !== oldProps.label || searchValue !== oldProps.searchValue)) {
            var value = searchValue;
            if (value === "空的里边是空的wuzhi") {
                value = ""
            }
            const { errorType, modifyState, json, pageSize } = this.state;
            var newJson = { ...json, pageNum: 1, pageSize, errorType, modifyState, searchType: label, searchWord: value };
            this.setState({ wait: true });
            getSearchTable(newJson).then(res => {
                if (res.data.code === 200) {
                    this.setState({ total: res.data.data.total, data: res.data.data.records, wait: false })
                }
            })
            this.setState({ label, searchValue: value });
        }
    }
    xuanAll = (e) => {
        const { mdId, data } = this.state;
        var mdIds = mdId;
        if (e.target.checked) {
            // 选中全部
            data.map(item => {
                var index = mdIds.indexOf(item.id);
                if (index === -1) {
                    // 当且仅当没选取
                    return mdIds.push(item.id);
                }
                return null;
            })
        } else {
            // 取消全选 如果是第一页和第二页都全选了 只取消其中一页的全选
            data.forEach(item => {
                var index = mdIds.indexOf(item.id);
                if (index !== -1) {
                    mdIds.splice(index, 1);
                }
            })
        }
        this.setState({ quanXuan: e.target.checked, mdId: mdIds });
    }
    xuanZhe = (e, DasMdId) => {
        const { mdId, data } = this.state;
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
            this.setState({ mdId: [...mdId, DasMdId], quanXuan: q });
        } else {
            var index = mdId.indexOf(DasMdId);
            if (index !== -1) {
                mdId.splice(index, 1);
            }
            this.setState({ mdId, quanXuan: false });
        }
    }
    changeZhuangTai = (value) => {
        const { errorType, pageSize, json } = this.state;
        var newJson = { ...json, pageNum: 1, pageSize, errorType, modifyState: value };
        this.setState({ wait: true });
        getSearchTable(newJson).then(res => {
            if (res.data.code === 200) {
                this.setState({ total: res.data.data.total, data: res.data.data.records, wait: false })
            }
        })
        this.setState({ modifyState: value, json: newJson });
    }
    changeCuoWuType = (value) => {
        const { modifyState, pageSize, json } = this.state;
        var newJson = { ...json, pageNum: 1, pageSize, errorType: value, modifyState };
        this.setState({ wait: true });
        getSearchTable(newJson).then(res => {
            if (res.data.code === 200) {
                this.setState({ total: res.data.data.total, data: res.data.data.records, wait: false })
            }
        })
        this.setState({ errorType: value, jso: newJson });
    }
    getPage = (page, pageSize) => {
        const { errorType, modifyState, json, mdId } = this.state;
        var newJson = { ...json, pageNum: page, pageSize, errorType, modifyState };
        this.setState({ wait: true });
        getSearchTable(newJson).then(res => {
            if (res.data.code === 200) {
                var q = true;
                var data = res.data.data.records;
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
                this.setState({ total: res.data.data.total, data: res.data.data.records, wait: false, quanXuan: q })
            }
        })
        this.setState({ page, pageSize, json: newJson });
    }
    render() {
        // 复选框是否全选
        const { quanXuan, mdId, data, page, pageSize, fanWei, startTime, endTime, total, wait, wait2, open2 } = this.state;
        const { navigate } = this.props.router;
        return (
            <>
                <div style={{ position: 'relative', top: 10 }}>
                    <div style={{ margin: '20px 21px', display: 'flex', flexDirection: 'column', minWidth: 1430 }} className='xiangQing'>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                            <p style={{ flex: 7 }}>
                                <span className='xiangQingText'><ContainerOutlined style={{ marginRight: 5 }} />检测范围：</span><span><OpenUndClose text={fanWei} /></span>
                            </p>
                            <p style={{ flex: 7 }}>
                                <span className='xiangQingText'><OneToOneOutlined style={{ marginRight: 5 }} />检测时间范围：</span><span>{startTime}~{endTime}</span>
                            </p>
                            <div style={{ flex: 7 }}>
                                <span style={{ float: 'right', display: 'inline-block', minWidth: 280 }}>
                                    <span className='YellowButton heikuang' onClick={() => {
                                        const { mdId } = this.state;
                                        if (mdId.length <= 0) {
                                            message.warning("请选择数据！！");
                                        } else {
                                            this.setState({ open2: true });
                                        }
                                    }} style={{ background: '#B188E5', width: 130, marginRight: 6 }}><span>部分重新检测</span></span>
                                    <span className='YellowButton heikuang' onClick={() => { navigate("/choose/searchData") }}><span>返 回</span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 20, marginLeft: 20, minWidth: 1430 }}>
                        <div style={{ display: 'inline-block' }}><XiaLaKuang title="状态" options={options2} change={this.changeZhuangTai.bind(this)} /></div>
                        <div style={{ display: 'inline-block', marginLeft: 12 }}><XiaLaKuang title="错误类型" options={options2} change={this.changeCuoWuType.bind(this)} /></div>
                        <div style={{ display: 'inline-block', float: 'right', marginRight: 20 }}><Search options={options} /></div>
                    </div>
                </div>
                <Spin spinning={wait}>
                    <table style={{ margin: '20px 10px', borderSpacing: '0 0px' }} width="99%" >
                        <colgroup>
                            <col style={{ width: 50, minWidth: 50, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 60, minWidth: 60, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 120, minWidth: 120, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 120, minWidth: 120, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 60, minWidth: 80, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 120, minWidth: 120, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 120, minWidth: 120, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 120, minWidth: 120, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 120, minWidth: 120, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ minWidth: 300, width: 300, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 70, minWidth: 70, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 130, minWidth: 130, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 120, minWidth: 120, textAlign: 'center', minHeight: 70 }} />
                            <col style={{ width: 120, minWidth: 120, textAlign: 'center', minHeight: 70 }} />
                        </colgroup>
                        <thead>

                            <tr>
                                <th style={{ backgroundColor: '#ECF2F8', height: 50, border: '1px solid #8F9399' }}>
                                    <input type='checkbox' style={{ width: 20, height: 20 }} onChange={(e) => { this.xuanAll(e) }} checked={quanXuan} />
                                </th>
                                {tableKopf.map((item, key) => {
                                    return (
                                        <th key={key} style={{ backgroundColor: '#ECF2F8', height: 70, border: '1px solid #8F9399' }}>{item}</th>
                                    )
                                })}
                            </tr>
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
                                    <tr key={key} style={mdId.includes(item.id) ? { background: '#F0FAFF', maxHeight: 40 } : { maxHeight: 40 }}>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}><input type='checkbox' style={{ width: 20, height: 20 }} onChange={(e) => { this.xuanZhe(e, item.id) }} checked={mdId.includes(item.id)} /></td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>{(key + 1) + ((page - 1) * pageSize)}</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>{item.deptName}</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>{item.siteName}</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>{newMediaType}</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>{item.errorType}</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399', color: 'red' }}>{item.errorDescription}</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>{newAmendments[0]}</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}><LangText col={3} text={<span style={ {fontSize: 12} }>{item.articleTitle}</span>} is={false} /> </td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}><LangText col={3} text={newDescription} is={true} /></td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>正文</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}><Tooltip title={item.postUrl}><a href={item.postUrl}>{newPostUrl}</a></Tooltip></td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>{item.postTime}</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>{newModifyState}</td>
                                    </tr>
                                )
                            })}
                        </thead>
                    </table>
                    {data.length === 0 ?
                    <Empty image={<div style={ {lineHeight: 13} }>{Empty.PRESENTED_IMAGE_SIMPLE}</div>} style={ {backgroundColor: '#FFFFFF', height: 168, margin: '10px 24px'} } />: <></>
                }
                </Spin>
                <div style={ {minWidth: 1600} }>
                    <Pagination defaultCurrent={page} total={total} onChange={(page, pageSize) => { this.getPage(page, pageSize) }} style={{ marginTop: 6, paddingTop: 15, minWidth: 800, marginRight: 15 }} />
                </div>
                <Modal open={open2} close={() => this.setState({ open2: false })}>
                    <div style={{ marginBottom: 20, position: 'absolute', top: 34 }}>提示：</div>
                    <div style={{ margin: 30 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确认重新检测</div>
                    <div style={{ marginLeft: '50%', marginTop: 16 }} className='zweiTable'>
                        <span className='DasButton' onClick={() => { this.setState({ open2: false }) }} >取消</span>
                        {wait2 ? <span className='grepButton' style={{ marginLeft: 2 }}><LoadingOutlined style={{ marginRight: 2 }} />确定</span> 
                        :
                        <span className='grepButton' onClick={() => {
                            const { mdId } = this.state;
                            this.setState({ wait2: true });
                            // 重新检测
                            chongXinJianCe(mdId).then((res) => {
                                if (res.data.code === 200) {
                                    message.success(res.data.msg);
                                    this.setState({ open2: false, mdId: [], del: "chongZhi", page: 1, wait2: false });
                                    // 重新获取数据
                                    this.getPage(1, pageSize);
                                }
                            })

                        }} style={{ marginLeft: 2 }}>确定</span>}
                    </div>
                    
                </Modal>
            </>
        );
    }
}

export default withRouter(connect(({ search }) => { return search })(SearchDataTable));