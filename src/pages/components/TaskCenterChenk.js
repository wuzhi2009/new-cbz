import { connect } from "react-redux";
import { withRouter } from "../../utils/withRouter";
import React, { Component } from 'react';
import { getEinsList, getZweiList } from "../api/TaskCenter/TaskCenterApi";
import Img from '../../imgs/result-active.3d1dfdc0.png';
import Img2 from '../../imgs/waiting.c7343f38.png';
import Img3 from '../../imgs/result.93cc4c77.png';
import Img4 from '../../imgs/waiting-active.0658a338.png';
/**
 * 检测情况查看组件
 * 
 * @author wuzhi
 */
class TaskCenterChenk extends Component {
    state = { searchValue:"", total:0, dasData:[], dasData2:[] } 
    go = (path) => {
        const nav = this.props.router.navigate;
        if (path === '/taskCenter/zwei') {
            this.zweiList();
        } else {
            this.einsList();
        }
        nav(path);
    }
    einsList = () => {
        const { pageSize } = this.props;
        const { searchValue } = this.state;
        // 返回给分页器总数信息
        var info2 = {};
        // 发送到表的信息
        var info = {};
        // 先发送等待信息
        this.props.sendAction({type:"getTask1List", data:[], wait: true});
        // 先发送请求 防止二次请求
        this.props.change({page:1});
        var status = [2, 3, 4];
            getEinsList(status, 1, pageSize, searchValue).then(res => {
                if (res.data.data.code === 200) {
                    var data = res.data.data.rows;
                    info2 = {total: res.data.data.total, page: 1};
                    info = {type: "getTask1List", data: data, wait: false};
                    this.props.change(info2);
                    this.props.sendAction(info);
                    this.setState({total: res.data.data.total, dasData: res.data.data.rows});
                }
            })
    }
    zweiList = () => {
        const { pageSize } = this.props;
        const { searchValue } = this.state;
        // 返回给分页器总数信息
        var info2 = {};
        // 发送到表的信息
        var info = {};
        // 先发送等待信息
        this.props.sendAction({type:"getTask2List", data:[], wait: true});
        // 先发送请求 防止二次请求
        this.props.change({page:1});
        var status = [0, 1];
            getZweiList(status, 1, pageSize, searchValue).then(res => {
                if (res.data.data.code === 200) {
                    var data = res.data.data.rows;
                    info2 = {total: res.data.data.total, page: 1};
                    info = {type: "getTask2List", data: data, wait: false};
                    this.props.change(info2);
                    this.props.sendAction(info);
                    this.setState({total: res.data.data.total, dasData2: res.data.data.rows});
                }
            })
    }
    componentDidUpdate(prevProps) {
        const { pathname } = this.props.router.location;
        const { page, searchValue, label, pageSize} = this.props;
        const page2 = prevProps.page;
        const pageSize2 = prevProps.pageSize;
        const searchValue2 = prevProps.searchValue;
        if (page !== page2 || pageSize !== pageSize2) {
            this.onPropChange(pathname);
        } else if (label && searchValue && searchValue !== searchValue2) {
            var s = searchValue;
            if (s === "空的里边是空的wuzhi") {
                // 空的标识
                s = "";
            }
            
            this.setState({searchValue: s}, () => {this.onPropChange(pathname)});
        }
    }
    componentDidMount() {
        const { pathname } = this.props.router.location;
            if (pathname === '/taskCenter/zwei') {
                this.zweiList();
            } else {
                this.einsList();
            }
    }
    onPropChange(path) {
        const { searchValue, dasData, dasData2 } = this.state;
        const { page, pageSize } = this.props;
        // 返回给分页器总数信息
        var info2 = {};
        // 发送到表的信息
        var info = {};
        // 需要请求的状态
        var status = [];
        // 根据props变化执行的操作
        if (path === '/taskCenter/zwei') {
            // 先发送等待信息
            this.props.sendAction({type:"getTask2List", data:dasData, wait: true});
            status = [0, 1];
            getZweiList(status, page, pageSize, searchValue).then(res => {
                if (res.data.data.code === 200) {
                    var data = res.data.data.rows;
                    info2 = {total: res.data.data.total};
                    info = {type: "getTask2List", data: data, wait: false};
                    this.props.change(info2);
                    this.props.sendAction(info);
                    this.setState({total: res.data.data.total, dasData:res.data.data.rows});
                }
            })
        } else {
            // 先发送等待信息
            this.props.sendAction({type:"getTask1List", data:dasData2, wait: true});
            status = [2, 3, 4];
            getEinsList(status, page, pageSize, searchValue).then(res => {
                if (res.data.data.code === 200) {
                    var data = res.data.data.rows;
                    info2 = {total: res.data.data.total};
                    info = {type: "getTask1List", data: data, wait: false};
                    this.props.change(info2);
                    this.props.sendAction(info);
                    this.setState({total: res.data.data.total, dasData2:res.data.data.rows});
                }
            })
        }
    }
    render() { 
        const { pathname } = this.props.router.location;
        const { total } = this.state;
        return (
            <>
            { pathname === '/taskCenter/eins' ? 
            <>
            <span style={ {cursor: 'pointer'} }><img alt='' src={Img} /><span className="count">{total > 100 ? "99+" : total}</span></span>
            <span style={ {cursor: 'pointer'} }><img src={Img2} alt="" onClick={ () => {this.go('/taskCenter/zwei')} } /></span>
            </> 
            : 
            <>
            <span style={ {cursor: 'pointer'} }><img alt='' src={Img3} onClick={ () => {this.go('/taskCenter/eins')} }/></span> 
            <span style={ {cursor: 'pointer'} }><img src={Img4} alt=""  /><span style={ {position: 'absolute', top: 153, left: 395, fontSize: 12, fontWeight: 100, color: '#F56460', userSelect: 'none'} }>有{total}次检测正在队列中</span></span>
            </> 
            }
        </>
        );
    }
}

//发送list数据
const setListData = (dispatch) => {
    return {
        sendAction: (info) => {
            dispatch(info)
        }
    }
}


const getSearch = (search) => {
    return search;
}
export default withRouter(connect(({search}) => getSearch(search), setListData)(TaskCenterChenk));


