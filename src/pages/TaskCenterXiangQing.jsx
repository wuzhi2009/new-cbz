import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import OpenUndClose from './components/OpenUndClose';
import XiaLaKuang from './components/XiaLaKuang';
import XiangQingTable from './components/XiangQingTable';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { UserOutlined, FieldTimeOutlined, ContainerOutlined, OneToOneOutlined, LoadingOutlined, ReadOutlined, DownloadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import Modal from './components/Modal';
import { message } from 'antd';
import { chongXinJianCe, getXiangQingTable, not, excel } from './api/TaskCenterXiangQing/XiangQingApi';
const DasTypeStyle = {
    display: 'inline-block', 
    backgroundColor: 'rgb(177, 136, 229)', 
    width: 95, 
    height: 34, 
    textAlign: 'center', 
    color: 'white',
};
const DasTitleStyle = {
    display: 'inline-block',
    backgroundColor: '#E1E9F2',
    marginLeft: 10,
    padding: '0 20px',
    height: 34,
    textAlign: 'center',
    color: '#4F5155',
    fontWeight: 600
};
const fontStyle = {
    userSelect: 'none',
    position: 'relative',
    top: 6
};
const options = [{key: "文章片段", value: 1},{key: "站点名称", value: 2}];
const options2 = [{key: "全部", value: "2"},{key: "未修改", value: "0"},{key: "已修改", value: "1"},{key: "无需修改", value: "null"}];
const options3 = [{key: "默认排序", value: "id"},{key: "时间升序", value: "time"},{key: "时间降序", value: "time1"}];
const options4 = [{key: "全部", value: ""},{key: "自定义禁用词", value: "自定义禁用词"},{key: "自定义替换词", value: "自定义替换词"},{key: "自定义领导姓名错误", value: "自定义领导姓名错误"},
{key: "自定义领导人职务搭配错误", value: "自定义领导人职务搭配错误"},{key: "自定义领导人排序错误", value: "自定义领导人排序错误"},
{key: "领导姓名错误", value: "领导姓名错误"},{key: "领导职务名称错误", value: "领导职务名称错误"},{key: "领导姓名职务搭配错误", value: "领导姓名职务搭配错误"},
{key: "领导职务排序错误", value: "领导职务排序错误"},{key: "落马官员", value: "落马官员"},
{key: "专用表述错误", value: "专用表述错误"},{key: "国家主权错误", value: "国家主权错误"},{key: "机构 / 组织 / 会议名称错误", value: "机构 / 组织 / 会议名称错误"},
{key: "政策法规文件名称错误", value: "政策法规文件名称错误"},{key: "国家名称错误", value: "国家名称错误"},
{key: "省市县搭配错误", value: "省市县搭配错误"},{key: "暴恐", value: "暴恐"},{key: "迷信邪教", value: "迷信邪教"},{key: "泄露国家密码", value: "泄露国家密码"},
{key: "泄露军队信息", value: "泄露军队信息"},{key: "泄露内部信息", value: "泄露内部信息"},{key: "黄赌毒", value: "黄赌毒"},
{key: "不文明/不恰当用语", value: "不文明/不恰当用语"},{key: "广告法违禁词", value: "广告法违禁词"},{key: "民族宗教错误", value: "民族宗教错误"},
{key: "自定义错误", value: "自定义错误"},{key: "常见错误", value: "常见错误"},{key: "其他涉政涉敏错误", value: "其他涉政涉敏错误"},
{key: "少字", value: "少字"},{key: "多字", value: "多字"},{key: "错字/别字", value: "错字/别字"},
{key: "字词顺序颠倒", value: "字词顺序颠倒"},{key: "语法错误", value: "语法错误"},{key: "标点符号错误", value: "标点符号错误"},
{key: "日期时间错误", value: "日期时间错误"}, {key: "数字/金额错误", value: "数字/金额错误"}, {key: "语序错误", value: "语序错误"},
{key: "其它常见词句错误", value: "其它常见词句错误"}, {key: "疾病名称", value: "疾病名称"}, {key: "其他", value: "其他"}];
/**
 * 检测结果
 * 
 * @author wuzhi
 */
class TaskCenterXiangQing extends Component {
    state = { smId:0, monitoringTitle:"", checkType:"", originator:"", createTime:"", siteChannelsJson:"", label:1, searchValue:"", page:1, pageSize: 10, total:0, mdId:[], modifyState:"2", errorType:"", paiXu:"id",data:[], postStartTime: "", postEndTime: "", open:false, open2: false, del:"", wait:true, wait2: false } 
    componentDidMount() {
        const { location } = this.props.router;
        const { state } = location;
		const { errorType, modifyState, paiXu } = this.state;
        this.setState(state);
		this.setState({smId: state.id, size: state.size});
		var smId = state.id;
		var page = 1;
		var pageSize = 10;
		var info = {smId, page, pageSize, errorType, modifyState, paiXu};
		getXiangQingTable(info).then(res => {
			if (res.data.code === 200) {
				this.setState({data: res.data.data, total:res.data.total, wait: false})
			}
		})
    }
    componentDidUpdate(oldProps) {
        // console.log('发生改变 发送请求 参数如下 :>> ');
		// console.log('this.state :>> ', this.state);
		const { searchValue, label } = this.props;
        const searchValue2 = oldProps.searchValue;
		if ((label && searchValue) && (searchValue !== searchValue2 || label !== oldProps.label)) {
            var s = searchValue;
            if (s === "空的里边是空的wuzhi") {
                // 空的标识
                s = "";
                if (!this.state.searchValue) {
                    // 原本就是空的
                    return;
                }
            }
			const { smId, errorType, paiXu, modifyState, pageSize } = this.state;
			var searchType = label;
			var searchWord = s;
			var info = {smId, errorType, paiXu, modifyState, page: 1, pageSize, searchWord, searchType};
            this.setState({wait:true}, () => {
                getXiangQingTable(info).then(res => {
                    if (res.data.code === 200) {
                        this.setState({data: res.data.data, total:res.data.total, page: 1, wait:false})
                    }
                })
            })
			
            this.setState({searchValue: s, label: label});
        }
		
    }
	getPage = (page, pageSize) => {
		const { smId, errorType, paiXu, modifyState, searchValue, label } = this.state;
		var searchType = label;
		var searchWord = searchValue;
		var info = {smId, errorType, paiXu, modifyState, page, pageSize, searchWord, searchType};
        this.setState({wait: true}, () => {
            getXiangQingTable(info).then(res => {
                if (res.data.code === 200) {
                    this.setState({data: res.data.data, total:res.data.total, page, pageSize, wait:false})
                }
            })  
        })
		
	}
	// 复选框
	changeMdId = (mdIds) => {
		this.setState({mdId: mdIds, del:""})
	}
	// 状态下拉框
	changeZhuangTai = (value) => {
		const { smId, errorType, paiXu, pageSize } = this.state;
		var info = {smId, errorType, modifyState: value, paiXu, page: 1, pageSize};
        this.setState({wait: true}, () => {
            getXiangQingTable(info).then((res) => {
			    if (res.data.code === 200) {
				    this.setState({data: res.data.data, total: res.data.total, page: 1, del:"", wait: false});
			    }
		    })
        })
		
		this.setState({modifyState:value});
	}
	// 错误类型下拉框
	changeCuoWuType = (value) => {
		const { smId, modifyState, pageSize, paiXu } = this.state;
        var info = {smId, errorType: value, modifyState, paiXu, page: 1, pageSize};
        this.setState({wait: true});
        getXiangQingTable(info).then(res => {
            if (res.data.code === 200) {
                this.setState({data: res.data.data, total: res.data.total, page: 1, del:"", wait: false});
            }
        })
		this.setState({errorType:value, del:""});
	}
	// 排序下拉框
	changePaiXu = (value) => {
		const { smId, errorType, modifyState, pageSize } = this.state;
		var info = {smId, errorType, modifyState, paiXu: value, page: 1, pageSize};
        this.setState({wait: true}, () => {
            getXiangQingTable(info).then((res) => {
                if (res.data.code === 200) {
                    this.setState({data: res.data.data, total: res.data.total, page: 1, del:"", wait: false});
                }
            }) 
        })
		
		this.setState({paiXu:value});
	}
    // 导出检测excel
    exportExcel = (smId, mdIds, title) => {
        excel(mdIds, smId).then(res => {
            const blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' })
            const blobURL = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = blobURL;
            a.download = `${title}.xlsx`;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.parentNode.removeChild(a);
            window.URL.revokeObjectURL(blobURL);
            this.setState({wait2: false});
        })
    }
    render() { 
        message.config({
            zIndex: 1000
        })
        const { navigate } = this.props.router;
        const nav = navigate;
        const { smId, monitoringTitle, checkType, originator, createTime, siteChannelsJson, page, total, data, pageSize, postStartTime, postEndTime, open, open2, del, wait, wait2, size } = this.state;
        if (smId === 0) {
            // 直接通过地址访问
            return (
                <>
                啥也没有<span className='YellowButton heikuang' onClick={() => {nav("/taskCenter/eins")}}><span>返 回</span></span>
                </>
            );
        }
        return (
			<>
            <div style={ {position: 'relative', top: 10} }>
                <div style={ {margin: '20px 21px', display: 'flex', flexDirection: 'column', minWidth: 1630} } className='xiangQing'>
                    <div style={ {display: 'flex', flexDirection: 'row'} }>
                        <p style={ {flex: 4} }>
                        <span style={ DasTypeStyle }><span style={ fontStyle }>{checkType}</span></span>
                        <span style={ DasTitleStyle }><span style={ fontStyle }>{monitoringTitle}</span></span>
                        </p>
                        <p style={ {flex: 4} }>
                        <span className='xiangQingText'><UserOutlined style={ {marginRight: 5} } />发起人：</span><span>{originator}</span>
                        </p>
                        <p style={ {flex: 4} }>
                            <span className='xiangQingText'><FieldTimeOutlined style={ {marginRight: 5} } />发起时间：</span><span>{createTime}</span>
                        </p>
                    </div>
                    <div style={ {display: 'flex', flexDirection: 'row', marginTop: 10} }>
                        <p style={ {flex: 7} }>
                            <span className='xiangQingText'><ContainerOutlined style={ {marginRight: 5} } />检测范围：</span><span><OpenUndClose text={JSON.parse(siteChannelsJson)} /></span>
                        </p>
                        <p style={ {flex: 7} }>
                            <span className='xiangQingText'><OneToOneOutlined style={ {marginRight: 5} } />检测时间范围：</span><span>{postStartTime}~{postEndTime}</span>
                        </p>
                        <div style={ {flex: 7} }>
                            <span style={ {float: 'right', display: 'inline-block', minWidth: 340 } }>
                                <span className='YellowButton heikuang' onClick={() => {
                                    const { mdId } = this.state;
                                    if (mdId.length <= 0) {
                                        message.warning("请先选择数据！！");
                                    } else {
                                      this.setState({open: true, del:""})  
                                    } 
                                }} style={ {background: '#62D862', marginRight: 6} }><span>无需修改</span></span>
                                <span className='YellowButton heikuang' onClick={() => {
                                    const { mdId } = this.state;
                                    if (mdId.length <= 0) {
                                        message.warning("请先选择数据！！");
                                    } else {
                                      this.setState({open2: true, del:""})  
                                    } 
                                }} style={ {background: '#B188E5', width: 130, marginRight: 6} }><span>部分重新检测</span></span>
                                <span className='YellowButton heikuang' onClick={() => {nav("/taskCenter/eins")}}><span>返 回</span></span>
                            </span>
                        </div>
                    </div>
                    <div style={ {flex: 7} }>
                        <p style={ {marginTop: 19} }>
                            <span className='xiangQingText'><ReadOutlined style={ {marginRight: 5} } />检测文章数：</span><span>{size}</span>
                        </p>
                    </div>
                </div>
                <div style={ {marginTop: 20, marginLeft: 20, minWidth: 1430} }>
                    <div style={ {display: 'inline-block'} }><XiaLaKuang title="状态" options={options2} change={this.changeZhuangTai.bind(this)} /></div>
                    <div style={ {display: 'inline-block', marginLeft: 12} }><XiaLaKuang title="错误类型" options={options4} change={this.changeCuoWuType.bind(this)} /></div>
                    <div style={ {display: 'inline-block', marginLeft: 12} }><XiaLaKuang title="排序" options={options3} change={this.changePaiXu.bind(this)} /></div>
                    <div style={ {display: 'inline-block', float: 'right', marginRight: 20} }><Search options={options} /></div>
                </div>
                <div style={ {minWidth: 1530} }>
                    <XiangQingTable style={ {margin: '20px 10px', borderSpacing: '0 0px', width: '99%'} } data={data} page={page} pageSize={pageSize} changeMdId={this.changeMdId.bind(this)} del={del} wait={wait} />
					{wait2 ? <span className='YellowButton heikuang' style={ {maxWidth: 150, minWidth: 150,backgroundColor: '#3ea6ff', margin: 20, display: 'inline-block'} }>
                        <LoadingOutlined style={ {marginRight: 8} } /> <span>导出Excel表格</span>
                        </span>
                     : 
                    <span className='YellowButton heikuang' style={ {maxWidth: 150, minWidth: 150,backgroundColor: '#3ea6ff', margin: 20, display: 'inline-block'} } onClick={() => {
                        const { mdId, smId, monitoringTitle } = this.state;
                        this.exportExcel(smId, mdId, monitoringTitle);
                        this.setState({wait2: true});
                    }}>
                        <DownloadOutlined style={ {marginRight: 8} } /><span>导出Excel表格</span>
                    </span>}
                    <Pagination defaultCurrent={page} total={total} onChange={(page, pageSize) => {this.getPage(page, pageSize)}} style={ {marginTop: 6, paddingTop: 15, display: 'inline-block', float: 'right'} } />
                </div>
            </div>
			<Modal open={open} close={() => this.setState({open:false})}>
                <div style={ {marginBottom: 20, position: 'absolute', top: 34} }>提示：</div>
                <div style={ {margin: 30} }>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改选中数据为无需修改</div>
                <div style={ {marginLeft: '50%', marginTop: 16} } className='zweiTable'>
                    <span className='DasButton' onClick={() => {this.setState({open: false})}} >取消</span>
                    {wait2 ? <span className='grepButton' style={ {marginLeft: 2} }><LoadingOutlined style={ {marginRight: 2} } />确定</span> 
                    : 
                    <span className='grepButton' onClick={() => {
						const { mdId } = this.state;
                            this.setState({wait2: true});
							// 确认将选中数据改为无需修改
							not(mdId).then((res) => {
								if (res.data.code === 200) {
									message.success(res.data.msg);
									this.setState({open: false, mdId: [], del:"chongZhi", page: 1, wait2: false});
                                    // 重新获取数据
                                    this.getPage(1, pageSize);
								} else {
									message.error(res.data.msg);
								}
							})
					}} style={ {marginLeft: 2} }>确定</span>}
                </div>
            </Modal>
			<Modal open={open2} close={() => this.setState({open2:false})}>
                <div style={ {marginBottom: 20, position: 'absolute', top: 34} }>提示：</div>
                <div style={ {margin: 30} }>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确认重新检测</div>
                <div style={ {marginLeft: '50%', marginTop: 16} } className='zweiTable'>
                    <span className='DasButton' onClick={() => {this.setState({open2: false})}} >取消</span>
                    {wait2 ? <span className='grepButton' style={ {marginLeft: 2} }> <LoadingOutlined style={ {marginRight: 2} } />确定</span>
                     : 
                    <span className='grepButton' onClick={() => {
						const { mdId } = this.state;
                            this.setState({wait2: true});
							// 重新检测
							chongXinJianCe(mdId).then((res) => {
								if (res.data.code === 200) {
									message.success(res.data.msg);
									this.setState({open2: false, mdId:[], del:"chongZhi", page: 1, wait2: false});
                                    // 重新获取数据
                                    this.getPage(1, pageSize);
								} else {
									message.error(res.data.msg);
								}
							})
						
					}} style={ {marginLeft: 2} }>确定</span>}
                </div>
            </Modal>
			</>
        );
    }
}
 
const getSearch = (search) => {
    return search;
}
export default withRouter(connect(({search}) => getSearch(search))(TaskCenterXiangQing));