import React, { Component } from 'react';
import '../../css/pagination.css';
/**
 * 分页
 * 
 * @author wuzhi
 * 
 * @param defaultCurrent 当前页
 * @param total 总数据量
 * @param style 样式
 */
class Pagination extends Component{
    constructor(props) {
        super(props)  
        var {defaultCurrent,total} = props;
        if (total <= 0) {
            var pageTotal = 1;
        } else {
           // 计算总页数
            pageTotal = Math.ceil(total / 10); 
        }
        if (defaultCurrent <= 0) {
            defaultCurrent = 1;
        }
        this.state = {
            currentPage: defaultCurrent, //当前页码
            groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
            startPage: parseInt(defaultCurrent)-2>0 ? parseInt(defaultCurrent)-2 : parseInt(defaultCurrent), //分组开始页码
            totalPage:pageTotal //总页数
        }
 
    }
  
    createPage(pageCfg) {
        const {groupCount} = this.state;
        const {currentPage, totalPage,startPage} = pageCfg;
        // const {currentPage,groupCount, startPage,totalPage} = this.state;
        let pages = [];
        //上一页
        pages.push(<li className={currentPage === 1 ? "nomore" : "abc"} onClick={this.prePageHandeler.bind(this)} key={0}>上一页</li>)
 
        if (totalPage <= 10) {
            /*总页码小于等于10时，全部显示出来*/
            for (let i = 1; i <= totalPage; i++) {
                pages.push(<li key={i} onClick={this.pageClick.bind(this, i)} className={currentPage === i ? "activePage" : "abc"}>{i}</li>)
            }
        } else {
            /*总页码大于10时，部分显示*/
            //第一页
            pages.push(<li className={currentPage === 1 ? "activePage" : "abc"} key={1} onClick={this.pageClick.bind(this, 1)}>1</li>)
            let pageLength = 0;
            if (groupCount + startPage > totalPage) {
                pageLength = totalPage;
            } else {
                pageLength = groupCount + startPage;
 
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (currentPage >= groupCount) {
                pages.push(<li className="omission" key={-1}>···</li>)
            }
            //非第一页和最后一页显示
            for (let i = startPage; i < pageLength; i++) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(<li className={currentPage === i ? "activePage" : "abc"} key={i} onClick={this.pageClick.bind(this, i)}>{i}</li>)
                }
            }
            //后面省略号
            if (totalPage - startPage >= groupCount + 1) {
                pages.push(<li className="omission" key={-2}>···</li>)
            }
            //最后一页
            pages.push(<li className={currentPage === totalPage ? "activePage" : "abc"} key={totalPage} onClick={this.pageClick.bind(this, totalPage)}>{totalPage}</li>)
        }
        //下一页
        pages.push(<li className={currentPage === totalPage ? "nomore" : "abc"} onClick={this.nextPageHandeler.bind(this)} key={totalPage + 1}>下一页</li>)
        return pages;
    }
    //页码点击 currentPage当前页
    pageClick(currentPage) {
        const {groupCount} = this.state
        const {onChange} = this.props;
        //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
        if (currentPage >= groupCount) {
            this.setState({
                startPage: currentPage - 2
            })
        }
        if (currentPage < groupCount) {
            this.setState({
                startPage: 1
            })
        }
        //第一页时重新设置分组的起始页
        if (currentPage === 1) {
            this.setState({
                startPage: 1
            })
        }
        this.setState({
            currentPage
        })
        // 缓存当前页码
        sessionStorage.setItem(`currentPage${this.state.url}`, encodeURIComponent(currentPage));
        //将当前页码返回父组件
        onChange(currentPage)
    }
    //上一页事件
    prePageHandeler() {
        let {currentPage} = this.state
        if (--currentPage === 0) {
            return false;
        }
        this.pageClick(currentPage)
    }
 
    //下一页事件
    nextPageHandeler() {
        let {currentPage,totalPage} = this.state
        // const {totalPage} = this.props.pageConfig;
        if (++currentPage > totalPage) {
            return false;
        }
        this.pageClick(currentPage)
    }
    // 重新加载组件需要删除页数缓存
    UNSAFE_componentWillMount() {
        window.sessionStorage.removeItem(`currentPage${this.state.url}`);
    }
    render(){
        const { defaultCurrent,total, style } = this.props;
        const localCurrent = parseInt(sessionStorage.getItem(`currentPage${this.state.url}`)) || 1;
        if (total <= 0) {
            var pageTotal = 1;
        } else {
           // 计算总页数
            pageTotal = Math.ceil(total / 10); 
        }
        const pageCfg = {
            currentPage: localCurrent || defaultCurrent,
            startPage: localCurrent-2>0 ? localCurrent-2 : localCurrent, //分组开始页码
            totalPage:pageTotal //总页数
        }
        return(
            <div className="pagination" style={ style }>
                <ul style={ {display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'right',userSelect: 'none', listStyle: 'none'} }>
                    {this.createPage(pageCfg)}
                </ul>
            </div>
        )
    }
}

export default Pagination;