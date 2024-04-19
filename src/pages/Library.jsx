import React, { Component } from 'react';
import XiaLaKuang from './components/XiaLaKuang';
import Search from './components/Search';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { withRouter } from '../utils/withRouter';
import { getWhiteList, getWortList } from './api/Library/LibraryApi';
import LibraryIconItem from './components/LibraryIconItem';
import Pagination from './components/Pagination';
const DasTypeStyle = {
    display: 'inline-block', 
    backgroundColor: '#838EEF', 
    width: 95, 
    height: 29, 
    textAlign: 'center', 
    color: 'white',
    userSelect: 'none',
    lineHeight: 1.8,
    cursor: 'pointer'
};
const options = [{key: "全部", value: "null"}, {key: "错词", value: 1}, {key: "敏感词", value: 2}, {key: "严重错误表述", value: 3}]
const options2 = [{key: "", value: ""}];
const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAABgUlEQVQ4ja2UTUtVURSGH/X6iU3EEBwY1SAKEpGGEkRD0VGBE2lS0KhhNGkSQfQP+gPi3EFBFIj1AzTIkYKNQjIlsAap94l9WPdyrl09W/CFxT6sc/az37XOYneohIaAy5yuNeAwvrgKfAAeAh9bdiWoel/dt1r34vsU/eon9bd6t5QnOe0GdoBl4BVwcIJXw+lRKXcBeAtMArNNx+r18DdTPu0MMXjccQ2KSKpX9LOsQeB2xKVwPAAsARO1fE6h9COfAQ+AXmAX2CgZ+wb8TPZvRvnTFSXPR4k/1BfqpNqpTkRuXR0ppikTOqfW1ffqUCn/HzAXOqzuqe/UrlL+Yjtgis6MPj4G+oFHx8Ypjd4icAfYbtmR4XRTXajo95j6ulFJldMx4EoM+GmaAp7GqFVCb8S6mtGmpqqgo7F+P09ob6y75wldAV6eBdiA/o3nnjbvvwLPMziNigqlq68L2AJ+AW9Kh+SqD3gC/AHGi00xZ7fULxmXdDsdqJ/VawVL+QcW4xlgvYBkQQAAAABJRU5ErkJggg==";
const icon2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABYUlEQVQ4jdXUv0tVYRzH8deVm9J0N4OMwEC0CMKGlv6EG+kSjeKkaQrVn2CDCS2JewU5iBJBUISTKA6Cgji1iIoi6CBJREUUD3zPIufca9fJDxw45/t9nvf313meUnXsCCr4gV+KtYWrBd59vMJEGZdjcQmbmMc7LJ7YNIpLBcDbGMPFBNxDFR24iXsYDPAwvsamDzWyT/qLgab4+IIpPIqyHuIaVtBbB5RpHa1NOY4UaQbdWMAs7p8SKg+Y6Vtk9wlvceWswKQ/6MdPTIatFD1vbgSYdIjn6MF19OFjDDAXmEUs5/g/4wXe4zse42X0dbUI2BkR7+T4lzCCNfzGUNhHispJwAs1yk8/a1cErITtaZyMQmA9bcdgbkVr3tRan9e3Im3EU1OnyfC/dD6AR/HefkZWG47TUHawjPEIsNsA7AaeYDqb8oO4YV43mF26oebwLAOmrO5G2i0NAI9xAP8AVINCQA8CXTIAAAAASUVORK5CYII=";
const icon3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAABL0lEQVQ4ja3UvyvFURjH8de9bgYpKaVkMCozo5RdGVw2kwmLxWA1IANlUdSVJH8AC5mMRpPIIkokMkh+derc2+3e77193XzqqXM+9by/z/ec5zmZ/MoL9GMNA8hJp2ssoiAmdeIYpxjFe0rQELbxgKMAGsMb8vhMCQk6QQ+mAiiLLtz8EVLUBTrCOoAyDQCqlE3wdvBTJ+6TQEk3tIDdOh9/TAu6jfEnJYG60VvhfeMcr7XgSaBVjCf4s9io8J5jJB72RLzJyqiEBG1ipBYojQqxGUtqFDSJvv8AVSntpDdjGS1l3kw8n9Ck67mUMxYqb0VbmRf27fhCUwBdYToOX2LXxqclTHlRoYolHBaNANrHHM6wh4+yhCdspfn3AAqJg5jHcCy5qLsaoANclnb4BfAKPQupJlRgAAAAAElFTkSuQmCC";
/**
 * 词库页面
 * 
 * @author wuzhi
 */
class Library extends Component {
    state = { data: [], con: "", level: "", errSay: "", wort: "", page: 1, pageSize: 10, key: 1, total: 0, data2: [] } 
    componentDidMount() {
        const { pathname } = this.props.router.location;
            if (pathname === '/library/zwei') {
                this.whiteList();
            } else {
                this.wortList();
            }
    }
    componentDidUpdate(oldProps) {
        const { pathname } = this.props.router.location;
        const { searchValue } = this.props;
        const searchValue2 = oldProps.searchValue;
        if (searchValue && searchValue !== searchValue2) {
            var s = searchValue;
            if (s === "空的里边是空的wuzhi") {
                // 空的标识
                s = "";
            }
            
            this.setState({con: s}, () => {this.onPropChange(pathname)});
        }
    }
    onPropChange = (path) => {
        const { con, data, page, pageSize, data2, level } = this.state;
        // 发送到表的信息
        var info = {};
        
        // 根据props变化执行的操作
        if (path === '/library/zwei') {
            // 先发送等待信息
            this.props.sendAction({type:"getWhiteList", data:data2, wait: true, page, pageSize});
            getWhiteList(page, pageSize, level, con).then(res => {
                if (res.data.code === 200) {
                    var data = res.data.data;
                    info = {type: "getWhiteList", data: data, wait: false, page, pageSize};
                    this.props.sendAction(info);
                    this.setState({total: res.data.total, data2:res.data.data});
                }
            })
        } else {
            // 先发送等待信息
            this.props.sendAction({type:"getWortList", data:data, wait: true, page, pageSize});
            getWortList(page, pageSize, level, con).then(res => {
                if (res.data.code === 200) {
                    var data = res.data.data;
                    info = {type: "getWortList", data: data, wait: false, page, pageSize};
                    this.props.sendAction(info);
                    this.setState({total: res.data.total, data});
                }
            })
        }
    }
    go = (path) => {
        const { navigate } = this.props.router;
        if (path === "/library/eins") {
            this.setState({key: 1});
            this.wortList();
        } else {
            this.setState({key: 2});
            this.whiteList();
        }
        navigate(path);
    }
    wortList = () => {
        const { level, con, page, pageSize } = this.state;
        // 发送到表的信息
        var info = {};
        // 先发送等待信息
        this.props.sendAction({type:"getWortList", data:[], wait: true, page: 1, pageSize});
            getWortList(page, pageSize, level, con).then(res => {
                if (res.data.code === 200) {
                    var data = res.data.data;
                    info = {type: "getWortList", data, wait: false, page:1, pageSize};
                    this.props.sendAction(info);
                    this.setState({total: res.data.total, data, page: 1});
                }
            })
    }
    whiteList = () => {
        const { level, con, page, pageSize } = this.state;
        // 发送到表的信息
        var info = {};
        // 先发送等待信息
        this.props.sendAction({type:"getWhiteList", data:[], wait: true});
            getWhiteList(page, pageSize, level, con).then(res => {
                if (res.data.code === 200) {
                    var data = res.data.data;
                    info = {type: "getWhiteList", data, wait: false, page:1, pageSize};
                    this.props.sendAction(info);
                    this.setState({total: res.data.total, data2: data, page: 1});
                }
            })
    }
    render() { 
        const { key, page, total } = this.state;
        var spanStyle = {...DasTypeStyle, backgroundColor: '#EDEDED', color: 'black'};
        return (
            <div style={ {margin: 18, marginTop: 110} }>
                <div style={ {display: 'flex', flexDirection: 'row'} }>
                    <div style={ {flex: 4, minWidth: 190} }><span style={  key === 1 ? DasTypeStyle : spanStyle } onClick={() => {this.go("/library/eins")}}>词库</span>
                    <span style={ key === 2 ? DasTypeStyle : spanStyle } onClick={() => {this.go("/library/zwei")}}>白名单</span>
                    </div>
                    <div style={ {flex: 4} }><XiaLaKuang options={options} change={(level) => {
                        const { pathname } = this.props.router.location;
                        if (level !== "null") {
                            level = parseInt(level);
                        } else {
                            level = "";
                        }
                        this.setState({level}, () => {this.onPropChange(pathname)})}} /></div>
                    <div style={ {flex: 4} }><Search options={options2} haben={false} /></div>
                    <div style={ {flex: 2, minWidth: 300} }>
                        <span style={ {background: 'rgb(75, 131, 240)', color: 'white',
                            display: 'inline-block', padding: '2px 10px 3px',
                            borderRadius: 5, marginLeft: 10, cursor: 'pointer', height: 25, lineHeight: 1.5    } }>
                            <img alt='' src={icon} style={ {marginRight: 18, width: 16, position: 'relative', top: 1} } />导出
                        </span>
                        <LibraryIconItem icon={icon2} title="导入" onClick={() => {console.log('点击了 :>> ');}} />
                        <LibraryIconItem icon={icon3} title="添加" onClick={() => {console.log('添加 :>> ');}} />
                    </div>
                </div>
                <Outlet />
                <Pagination defaultCurrent={page} total={total} onChange={(page, pageSize) => {}} />
            </div>
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
export default withRouter(connect(({search}) => {return search}, setListData)(Library));