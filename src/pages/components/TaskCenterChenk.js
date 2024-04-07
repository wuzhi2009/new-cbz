import { connect } from "react-redux";
import { withRouter } from "../../utils/withRouter";
import React, { Component } from 'react';

/**
 * 检测情况查看组件
 * 
 * @author wuzhi
 */
class TaskCenterChenk extends Component {
    state = {  } 
    go = (path) => {
        const nav = this.props.router.navigate;
        if (path === '/taskCenter/zwei') {
            this.getZweiList();
        } else {
            this.getEinsList();
        }
        nav(path);
    }
    getEinsList = () => {
        console.log("向xxx接口发送axios请求获得第一个表的数据 参数321" + this.props.searchValue);
        const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, smId: 123, fanWei: [{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"}]},{id: 6,  type: "自定义", name: "测试", man: "wuzhi", smId:22222,create: "2024-03-29 08:57:26", status:1, fanWei: [{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"}]}];
        console.log('将得到的data传给list2 :>> ', data);
        var info = {type: "getTask1List", data: data};
        var info2 = {page: 1, total: 20};
        window.sessionStorage.removeItem("currentPageundefined");
        this.props.change(info2);
        this.props.sendAction(info);
    }
    getZweiList = () => {
        console.log("向xxx接口发送axios请求获得第二个表的数据 参数321" + this.props.searchValue);
        const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, fanWei: [{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"}]},{id: 6,  type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, fanWei: [{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"}]}];
        console.log('将得到的data传给list2 :>> ', data);
        var info = {type: "getTask2List", data: data};
        var info2 = {page: 1, total: 31};
        window.sessionStorage.removeItem("currentPageundefined");
        this.props.change(info2);
        this.props.sendAction(info);
    }
    componentDidMount() {
        const { pathname } = this.props.router.location;
        if (pathname === '/taskCenter/zwei') {
            this.getZweiList();
        } else {
            this.getEinsList();
        }
    }
    componentDidUpdate(prevProps) {
        const { pathname } = this.props.router.location;
        const { page, searchValue } = this.props;
        const page2 = prevProps.page;
        const searchValue2 = prevProps.searchValue;
        if (page !== page2 || searchValue !== searchValue2) {
            this.onPropChange(pathname);
        }
    }
    onPropChange(path) {
        // 根据props变化执行的操作
        console.log("初始化不执行");
        console.log('当前页数 :>> ', this.props.page);
        console.log('搜索数据 :>> ', this.props.searchValue);
        if (path === '/taskCenter/zwei') {
            console.log("向xxx接口发送axios请求获得第二个表的数据");
            const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, fanWei: [{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"}]},{id: 6,  type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, fanWei: [{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"}]}];
            var info = {type: "getTask2List", data: data};
            var info2 = {page: this.props.page, total: 31};
            this.props.change(info2);
            this.props.sendAction(info);
        } else {
            console.log("向xxx接口发送axios请求获得第一个表的数据");
            const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, fanWei: [{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"}]},{id: 6,  type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, fanWei: [{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"},{channelId:193628,channelName:"纠错"}]}];
            info = {type: "getTask1List", data: data};
            info2 = {page: this.props.page, total: 41};
            this.props.change(info2);
            this.props.sendAction(info);
        }
    }
    render() { 
        const { pathname } = this.props.router.location;
        return (
            <>
            { pathname === '/taskCenter/eins' ? 
            <>
            <span style={ {cursor: 'pointer'} }><img alt='' src='http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/result-active.3d1dfdc0.png' /><span className="count">99+</span></span>
            <span style={ {cursor: 'pointer'} }><img src="http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/waiting.c7343f38.png" alt="" onClick={ () => {this.go('/taskCenter/zwei')} } /></span>
            </> 
            : 
            <>
            <span style={ {cursor: 'pointer'} }><img alt='' src='http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/result.93cc4c77.png' onClick={ () => {this.go('/taskCenter/eins')} }/></span> 
            <span style={ {cursor: 'pointer'} }><img src="http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/waiting-active.0658a338.png" alt=""  /><span style={ {position: 'absolute', top: 153, left: 395, fontSize: 12, fontWeight: 100, color: '#F56460', userSelect: 'none'} }>有0次检测正在队列中</span></span>
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


