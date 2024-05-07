import React, { Component } from 'react';
import '../../css/pagination.css';
const selectStyle = {
    width: 80,
    height: 32,
    backgroundColor: '#FFFFFF',
    border: '1px solid #DCDCDC',
    fontSize: 16,
    color: '#616161',
    margin: '0px 20px',
    boxShadow: '1px 1px 3px 1px #8F9399'
}
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
            totalPage:pageTotal, //总页数
            pageSize: 10
        }
 
    }
  
    createPage(pageCfg) {
        const {groupCount} = this.state;
        const {currentPage, totalPage,startPage} = pageCfg;
        // const {currentPage,groupCount, startPage,totalPage} = this.state;
        var pages = [];
        //上一页
        pages.push(<li className={currentPage === 1 ? "nomore" : "abc"} onClick={this.prePageHandeler.bind(this)} key={0}>&lt;</li>)
 
        if (totalPage <= 10) {
            /*总页码小于等于10时，全部显示出来*/
            for (var i = 1; i <= totalPage; i++) {
                pages.push(<li key={i} onClick={this.pageClick.bind(this, i)} className={currentPage === i ? "activePage" : "abc"}>{i}</li>)
            }
        } else {
            /*总页码大于10时，部分显示*/
            //第一页
            pages.push(<li className={currentPage === 1 ? "activePage" : "abc"} key={1} onClick={this.pageClick.bind(this, 1)}>1</li>)
            var pageLength = 0;
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
            for (i = startPage; i < pageLength; i++) {
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
        pages.push(<li className={currentPage === totalPage ? "nomore" : "abc"} onClick={this.nextPageHandeler.bind(this, totalPage)} key={totalPage + 1}>&gt;</li>);
        var options = [{key:"10条/页", value:10},{key:"20条/页", value:20},{key:"50条/页", value:50}];
        pages.push(
            <select style={ selectStyle } onChange={ (event) => {
                const { total } = this.props; 
                // 计算总页数
                var pageTotal = Math.ceil(total / event.target.value); 
                pageTotal = parseInt(pageTotal);
                var pageSize = parseInt(event.target.value)
                this.setState({pageSize, totalPage: pageTotal, currentPage: 1});
                this.props.onChange(1, pageSize);
            }
                } key={3030}>
                        {options.map((item, key) => {
                            return (
                                <option key={key} value={item.value}>{item.key}</option>
                            );
                        })}
                    </select>
        )
        pages.push(<span key={5050} style={ {marginRight: 20} }>共{totalPage}页</span>)
        pages.push(
            <span style={ {marginRight: 10} } key={7777}>前往
                <input type='text' style={ {margin: '0 5px', width: 40, height: 28, color: '#050505', fontSize: 16, outline: 'none', boxShadow: '1px 1px 3px 1px #8F9399'} } onKeyDown={(e) => {
                    if (e.keyCode === 13 && Number(e.target.value)) {
                        // 回车触发
                        var value = parseInt(e.target.value);
                        if (value > totalPage) {
                            value = totalPage;
                        }
                        this.setState({currentPage: value});
                        this.props.onChange(value, this.state.pageSize);
                    }
                }} />页
            </span>
        )
        pages.push(<span key={6060}>共找到{this.props.total}条记录</span>)
        return pages;
    }
    //页码点击 currentPage当前页
    pageClick(currentPage) {
        const { groupCount, pageSize } = this.state;
        const currentPage2 = this.state.currentPage;
        if (currentPage2 === currentPage) {
            // 点击的是当前页 不执行
            return;
        }
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
        //将当前页码返回父组件
        onChange(currentPage, pageSize);
    }
    //上一页事件
    prePageHandeler() {
        var { currentPage } = this.state
        if (--currentPage === 0) {
            return false;
        }
        this.pageClick(currentPage)
    }
 
    //下一页事件
    nextPageHandeler(totalPage) {
        var { currentPage } = this.state
        // const {totalPage} = this.props.pageConfig;
        if (++currentPage > totalPage) {
            return false;
        }
        this.pageClick(currentPage)
    }
    // 重新加载组件需要删除页数缓存
    componentDidMount() {
        const {currentPage} = this.state;
        if (currentPage !== 1) {
            this.setState({currentPage: 1});
        }
    }
    componentDidUpdate(prevProps) {
        const {  currentPage } = this.state;
        const { defaultCurrent } = this.props;
        if (currentPage !== defaultCurrent) {
            // 数据页数发生变化进行更新
            this.setState({currentPage: defaultCurrent});
        }
    }
    render(){
        const { defaultCurrent,total, style } = this.props;
        const { pageSize  } = this.state;
        const localCurrent = defaultCurrent || 1;
        const s = pageSize || 10;
        var pageTotal = Math.ceil(total / s);
        if (total <= 0) {
            pageTotal = 1;
        }
        const pageCfg = {
            currentPage: defaultCurrent,
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