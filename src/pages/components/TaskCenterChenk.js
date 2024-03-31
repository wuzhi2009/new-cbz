import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * 检测情况查看组件
 * 
 * @author wuzhi
 */
const TaskCenterChenk = (props) => {
    const { pathname } = useLocation();
    const nav = useNavigate();
    const go = (path) => {
        if (path === '/taskCenter/zwei') {
            console.log("向xxx接口发送axios请求 参数321" + props.searchValue);
            const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"}];
            console.log('将得到的data传给list2 :>> ', data);
            var info = {type: "getTask2List", data: data};
            var info2 = {page: 1, total: 20};
            window.sessionStorage.removeItem("currentPageundefined");
            window.sessionStorage.setItem("DasEins", "1");
            props.change(info2);
            props.sendAction(info);
        } else {
            console.log("向xxx接口发送axios请求 参数123" + props.label + props.searchValue);
            const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:80", status:1, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"}];
            console.log('将得到的data传给list1 :>> ', data);
            info = {type: "getTask1List", data: data};
            info2 = {page: 1, total: 19};
            window.sessionStorage.removeItem("currentPageundefined");
            window.sessionStorage.setItem("DasEins", "1");
            props.change(info2);
            props.sendAction(info);
        }
        nav(path);
    }
    useEffect(() => {
        // 每当props更新时执行
        if (props.label) {
            // 防止执行两次
            console.log('发送请求 参数:>> ', props.searchValue + props.label + props.page);
            if (pathname === '/taskCenter/zwei') {
                console.log("向xxx接口发送axios请求 参数3" + props.searchValue);
                const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"}];
                console.log('将得到的data传给list2 :>> ', data);
                var info = {type: "getTask2List", data: data};
                props.sendAction(info) 
            } else {
                console.log("向xxx接口发送axios请求 参数123" + props.label + props.searchValue);
                const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:80", status:1, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"}];
                console.log('将得到的data传给list1 :>> ', data);
                info = {type: "getTask1List", data: data};
                props.sendAction(info) 
            }
            window.sessionStorage.setItem("DasEins", "1");
        } else {
            // 利用缓存判断是否为第二次
            if (window.sessionStorage.getItem("DasEins")) {
                console.log("是第二次 不发送请求");
                window.sessionStorage.removeItem("DasEins");
            } else {
                // 通过点击页码和初始化触发的
                console.log('props.page :>> ', props.page);
                if (pathname === '/taskCenter/zwei') {
                    console.log("向xxx接口发送axios请求 参数3211111111" + props.searchValue);
                    const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:26", status:1, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"}];
                    console.log('将得到的data传给list2 :>> ', data);
                    info = {type: "getTask2List", data: data};
                    props.change({total:40});
                    props.sendAction(info) 
                } else {
                    console.log("向xxx接口发送axios请求 参数123" + props.label + props.searchValue);
                    const data = [{id: 3, type: "自定义", name: "测试", man: "wuzhi", create: "2024-03-29 08:57:80", status:1, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"},{id: 6, type: "自定义", name: "测试2", man: "wuzhi", create: "2024-03-33", status:0, fanWei: "all"}];
                    console.log('将得到的data传给list1 :>> ', data);
                    info = {type: "getTask1List", data: data};
                    
                    props.sendAction(info) 
                }
            }
            
        }
    }, [props.page, pathname, props.searchValue, props.label]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            { pathname === '/taskCenter/eins' ? 
            <>
            <span><img alt='' src='http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/result-active.3d1dfdc0.png' /></span> 
            <span><img src="http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/waiting.c7343f38.png" alt="" onClick={ () => {go('/taskCenter/zwei')} } /></span>
            </> 
            : 
            <>
            <span><img alt='' src='http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/result.93cc4c77.png' onClick={ () => {go('/taskCenter/eins')} }/></span> 
            <span><img src="http://ht.dsjfzj.gxzf.gov.cn/nrgf-jc/img/waiting-active.0658a338.png" alt=""  /><span style={ {position: 'absolute', top: 153, left: 395, fontSize: 12, fontWeight: 100, color: '#F56460', userSelect: 'none'} }>有0次检测正在队列中</span></span>
            </> 
            }
        </>
    )
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

export default connect(({search}) => getSearch(search), setListData)(TaskCenterChenk);