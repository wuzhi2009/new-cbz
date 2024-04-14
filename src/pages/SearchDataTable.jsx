import React, { Component } from 'react';
import LangText from './components/LangText';
import { Empty, Tooltip } from 'antd';
import { withRouter } from '../utils/withRouter';
import XiaLaKuang from './components/XiaLaKuang';
import { ContainerOutlined, OneToOneOutlined } from '@ant-design/icons';
import OpenUndClose from './components/OpenUndClose';
import Search from './components/Search';
import Pagination from './components/Pagination';
import { connect } from 'react-redux';
import { getSearchTable } from './api/SearchTable/SearchTableApi';
const tableKopf = ["序号", "单位", "站点/账号名称", "平台", "错误类型", "不规范表述", "规范表述", "文章标题", "片段", "数据类型", "引用页", "发布时间", "修改状态"];
const options = [{ key: "文章片段", value: 1 }, { key: "站点名称", value: 2 }];
const options2 = [{ key: "全部", value: "2" }, { key: "未修改", value: "0" }, { key: "已修改", value: "1" }, { key: "无需修改", value: "null" }];
/**
 * 查询检测结果页面
 * 
 * @author wuzhi
 */
class SearchDataTable extends Component {
    state = { mdId: [], quanXuan: false, items: [], data: [], page: 1, pageSize: 10, total: 10, fanWei: [], startTime: "", endTime: "", modifyState: "", errorType: "", searchValue:"", label: "", json:{} }
    componentDidMount() {
        const { location } = this.props.router;
        const { state } = location;
        var json = JSON.parse(state);
        // json.pageNum = 1;
        // json.pageSize = 10;
        // json.modifyState = "2";
        // // 在此处将json传到后端 取到data数据
        // post(`/monitoringDetails/byChannelList`, json).then(res => {
        //     if (res.data.code === 200) {
        //         this.setState({data: res.data.data.records, total: res.data.data.total})
        //     }
        // })
        this.setState({ fanWei: json.siteChannels, startTime: json.startTime, endTime: json.endTime, json });
    }
    componentDidUpdate(oldProps) {
        const { searchValue, label } = this.props;
        if (label && searchValue && (label !== oldProps.label || searchValue !== oldProps.searchValue)) {
            var value = searchValue;
            if (value === "空的里边是空的wuzhi") {
                value = ""
            }
            const { errorType, modifyState, json, pageSize } = this.state;
            var newJson = {...json, pageNum: 1, pageSize, errorType, modifyState, searchType: label, searchWord: value }
            getSearchTable(newJson).then(res => {
                if (res.data.code === 200) {
                    this.setState({total: res.data.data.total, data:res.data.data.records})
                }
            })
            this.setState({label, searchValue: value});
        }
    }
    xuanAll = (e) => {
        var mdId = [];
        if (e.target.checked) {
            // 选中全部
            this.props.data.map(item => {
                return mdId.push(item.id);
            })
        }
        this.props.changeMdId(mdId);
        this.setState({ quanXuan: e.target.checked, mdId });
    }
    xuanZhe = (e, DasMdId) => {
        const { mdId } = this.state;
        const { data } = this.props;
        var q = false;
        if (e.target.checked) {
            if (mdId.length === data.length - 1) {
                q = true;
            }
            this.setState({ mdId: [...mdId, DasMdId], quanXuan: q });
            this.props.changeMdId([...mdId, DasMdId]);
        } else {
            var index = mdId.indexOf(DasMdId);
            if (index !== -1) {
                mdId.splice(index, 1);
            }
            this.setState({ mdId, quanXuan: q });
            this.props.changeMdId(mdId);
        }
    }
    changeZhuangTai = (value) => {
        const { errorType, pageSize, json } = this.state;
        var newJson = {...json, pageNum:1, pageSize, errorType, modifyState: value }
        getSearchTable(newJson).then(res => {
            if (res.data.code === 200) {
                this.setState({total: res.data.data.total, data:res.data.data.records})
            }
        })
        this.setState({ modifyState: value, json: newJson });
    }
    changeCuoWuType = (value) => {
        const { modifyState, pageSize, json } = this.state;
        var newJson = {...json, pageNum:1, pageSize, errorType: value, modifyState }
        getSearchTable(newJson).then(res => {
            if (res.data.code === 200) {
                this.setState({total: res.data.data.total, data:res.data.data.records})
            }
        })
        this.setState({ errorType: value, jso: newJson });
    }
    getPage = (page, pageSize) => {
        const { errorType, modifyState, json } = this.state;
        var newJson = {...json, pageNum: page, pageSize, errorType, modifyState }
        getSearchTable(newJson).then(res => {
            if (res.data.code === 200) {
                this.setState({total: res.data.data.total, data:res.data.data.records})
            }
        })
        this.setState({ page, pageSize, json: newJson });
    }
    render() {
        // 复选框是否全选
        const { quanXuan, mdId, data, page, pageSize, fanWei, startTime, endTime, total } = this.state;
        const { navigate } = this.props.router;
        return (
            <>
                <div style={{ position: 'relative' }}>
                    <div style={{ margin: '20px 21px', display: 'flex', flexDirection: 'column' }} className='xiangQing'>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                            <p style={{ flex: 7 }}>
                                <span className='xiangQingText'><ContainerOutlined style={{ marginRight: 5 }} />检测范围：</span><span><OpenUndClose text={fanWei} /></span>
                            </p>
                            <p style={{ flex: 7 }}>
                                <span className='xiangQingText'><OneToOneOutlined style={{ marginRight: 5 }} />检测时间范围：</span><span>{startTime}~{endTime}</span>
                            </p>
                            <div style={{ flex: 7 }}>
                                <span style={{ position: 'absolute', right: 10 }}>
                                    <span className='YellowButton' onClick={() => { }} style={{ background: '#B188E5', width: 130, marginRight: 6 }}><span>部分重新检测</span></span>
                                    <span className='YellowButton' onClick={() => { navigate("/choose/searchData") }}><span>返 回</span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                        <div style={{ flex: 3 }}><XiaLaKuang title="状态" options={options2} change={this.changeZhuangTai.bind(this)} /></div>
                        <div style={{ flex: 8 }}><XiaLaKuang title="错误类型" options={options2} change={this.changeCuoWuType.bind(this)} /></div>
                        <div style={{ flex: 3 }}><Search options={options} /></div>
                    </div>
                </div>
                <table style={{ margin: '20px 10px', borderSpacing: '0 0px' }} width="99%" >
                    <colgroup>
                        <col style={{ width: 50, minWidth: 50, textAlign: 'center' }} />
                        <col style={{ width: 60, minWidth: 60, textAlign: 'center' }} />
                        <col style={{ width: 120, minWidth: 120, textAlign: 'center' }} />
                        <col style={{ width: 120, minWidth: 120, textAlign: 'center' }} />
                        <col style={{ width: 60, minWidth: 80, textAlign: 'center' }} />
                        <col style={{ width: 120, minWidth: 120, textAlign: 'center' }} />
                        <col style={{ width: 120, minWidth: 120, textAlign: 'center' }} />
                        <col style={{ width: 120, minWidth: 120, textAlign: 'center' }} />
                        <col style={{ width: 120, minWidth: 120, textAlign: 'center' }} />
                        <col style={{ minWidth: 150, textAlign: 'center'}} />
                        <col style={{ width: 70, minWidth: 70, textAlign: 'center' }} />
                        <col style={{ width: 130, minWidth: 130, textAlign: 'center' }} />
                        <col style={{ width: 120, minWidth: 120, textAlign: 'center' }} />
                        <col style={{ width: 120, minWidth: 120, textAlign: 'center' }} />
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
                        {data.length === 0 ? <tr>
                            <td style={{ textAlign: 'center' }} />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td style={{ textAlign: 'center', width: '100%' }}><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></td>
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr> : <></>
                        }
                        {data.map((item, key) => {
                            const { description, amendments, modifyState, mediaType, postUrl } = item;
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
                                    <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}>{amendments}</td>
                                    <td style={{ textAlign: 'center', border: '1px solid #8F9399' }}><LangText col={3} text={item.articleTitle} is={false} /> </td>
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
                <Pagination defaultCurrent={page} total={total} onChange={(page, pageSize) => { this.getPage(page, pageSize) }} style={{ marginTop: 6, paddingTop: 15 }} />
            </>
        );
    }
}

export default withRouter(connect(({search}) => {return search})(SearchDataTable));