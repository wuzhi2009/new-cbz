import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import OpenUndClose from './components/OpenUndClose';
import XiaLaKuang from './components/XiaLaKuang';
import XiangQingTable from './components/XiangQingTable';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { UserOutlined, FieldTimeOutlined, ContainerOutlined, OneToOneOutlined } from '@ant-design/icons';
import { post, put } from '../utils/reqUtil';
import { connect } from 'react-redux';
import Modal from './components/Modal';
import { message } from 'antd';
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
class TaskCenterXiangQing extends Component {
    state = { smId:0, monitoringTitle:"", checkType:"", originator:"", createTime:"", siteChannelsJson:"", label:1, searchValue:"", page:1, pageSize: 10, total:0, mdId:[], modifyState:"2", errorType:"", paiXu:"id",data:[], postStartTime: "", postEndTime: "", open:false, open2: false, del:"", wait:true } 
    componentDidMount() {
        const { location } = this.props.router;
        const { state } = location;
		const { errorType, modifyState, paiXu } = this.state;
        this.setState(state);
		this.setState({smId: state.id});
		var smId = state.id;
		var page = 1;
		var pageSize = 10;
		var info = {smId, page, pageSize, errorType, modifyState, paiXu};
		post('/monitoringDetails/list', info).then(res => {
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
                post('/monitoringDetails/list', info).then(res => {
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
            post('/monitoringDetails/list', info).then(res => {
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
            post('/monitoringDetails/list', info).then((res) => {
			    if (res.data.code === 200) {
				    this.setState({data: res.data.data, total: res.data.total, page: 1, del:"", wait: false});
			    }
		    })
        })
		
		this.setState({modifyState:value});
	}
	// 错误类型下拉框
	changeCuoWuType = (value) => {
		console.log('暂时先不写 :>> ');
		this.setState({errorType:value, del:""});
	}
	// 排序下拉框
	changePaiXu = (value) => {
		const { smId, errorType, modifyState, pageSize } = this.state;
		var info = {smId, errorType, modifyState, paiXu: value, page: 1, pageSize};
        this.setState({wait: true}, () => {
            post('/monitoringDetails/list', info).then((res) => {
                if (res.data.code === 200) {
                    this.setState({data: res.data.data, total: res.data.total, page: 1, del:"", wait: false});
                }
            }) 
        })
		
		this.setState({paiXu:value});
	}
    render() { 
        const { navigate } = this.props.router;
        const nav = navigate;
        const { smId, monitoringTitle, checkType, originator, createTime, siteChannelsJson, page, total, data, pageSize, postStartTime, postEndTime, open, open2, del, wait } = this.state;
        if (smId === 0) {
            // 直接通过地址访问
            return (
                <>
                啥也没有
                </>
            );
        }
        return (
			<>
            <div style={ {position: 'relative'} }>
                <div style={ {margin: '20px 21px', display: 'flex', flexDirection: 'column'} } className='xiangQing'>
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
                            <span style={ {position: 'absolute', right: 10} }>
                                <span className='YellowButton' onClick={() => {this.setState({open: true, del:""})}} style={ {background: '#62D862', marginRight: 6} }><span>无需修改</span></span>
                                <span className='YellowButton' onClick={() => {this.setState({open2: true, del:""})}} style={ {background: '#B188E5', width: 130, marginRight: 6} }><span>部分重新检测</span></span>
                                <span className='YellowButton' onClick={() => {nav("/taskCenter/eins")}}><span>返 回</span></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div style={ {display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 20} }>
                    <div style={ {flex:3} }><XiaLaKuang title="状态" options={options2} change={this.changeZhuangTai.bind(this)} /></div>
                    <div style={ {flex:3} }><XiaLaKuang title="错误类型" options={options2} change={this.changeCuoWuType.bind(this)} /></div>
                    <div style={ {flex:3} }><XiaLaKuang title="排序" options={options3} change={this.changePaiXu.bind(this)} /></div>
                    <div style={ {flex:5} }><Search options={options} /></div>
                </div>
                <div>
                    <XiangQingTable style={ {margin: '20px 10px', borderSpacing: '0 0px', width: '99%'} } data={data} page={page} pageSize={pageSize} changeMdId={this.changeMdId.bind(this)} del={del} wait={wait} />
					<Pagination defaultCurrent={page} total={total} onChange={(page, pageSize) => {this.getPage(page, pageSize)}} style={ {marginTop: 6, paddingTop: 15} } />
                </div>
            </div>
			<Modal open={open} close={() => this.setState({open:false})}>
                <div style={ {marginBottom: 20, position: 'absolute', top: 34} }>提示：</div>
                <div style={ {margin: 30} }>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改选中数据为无需修改</div>
                <div style={ {marginLeft: '50%', marginTop: 16} } className='zweiTable'>
                    <span className='DasButton' onClick={() => {this.setState({open: false})}} >取消</span>
                    <span className='grepButton' onClick={() => {
						const { mdId } = this.state;
						if (mdId.length <= 0) {
							message.error("请先选择数据");
						} else {
							// 确认将选中数据改为无需修改
							put(`/monitoringDetails/${mdId}`).then((res) => {
								if (res.data.code === 200) {
									message.success(res.data.msg);
									this.setState({open: false, mdId: [], del:"chongZhi", page: 1});
                                    // 重新获取数据
                                    this.getPage(1, pageSize);
								} else {
									message.error(res.data.msg);
								}
							})
						}
						
					}} style={ {marginLeft: 2} }>确定</span> 
                </div>
            </Modal>
			<Modal open={open2} close={() => this.setState({open2:false})}>
                <div style={ {marginBottom: 20, position: 'absolute', top: 34} }>提示：</div>
                <div style={ {margin: 30} }>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确认重新检测</div>
                <div style={ {marginLeft: '50%', marginTop: 16} } className='zweiTable'>
                    <span className='DasButton' onClick={() => {this.setState({open2: false})}} >取消</span>
                    <span className='grepButton' onClick={() => {
						const { mdId } = this.state;
						if (mdId.length <= 0) {
							message.error("请先选择数据");
						} else {
							// 重新检测
							post(`/monitoring/partialRetesting`, {mdIds: mdId}).then((res) => {
								if (res.data.code === 200) {
									message.success(res.data.msg);
									this.setState({open2: false, mdId:[], del:"chongZhi", page: 1});
                                    // 重新获取数据
                                    this.getPage(1, pageSize);
								} else {
									message.error(res.data.msg);
								}
							})
						}
						
					}} style={ {marginLeft: 2} }>确定</span> 
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