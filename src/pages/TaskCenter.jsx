import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Pagination from './components/Pagination';
import Search from './components/Search';
import TaskCenterChenk from './components/TaskCenterChenk';
const imgSrc = 'data:image/png;base64,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';
class TaskCenter extends Component {
    state = { page:1, total:1 } 
    getPage = (page) => {
        this.setState({page})
    }
    render() { 
        const options = [{key: '检测名称', value: '1'}];
        const {page, total} = this.state;
        return (
            <>
                <div className="Mitte">
                <div className="eins">
                    <TaskCenterChenk page={page} change={this.setState.bind(this)}/>
                </div>
                <div className="zwei">
                    <img src={imgSrc} alt=''></img>
                </div>
                <div className="drei"><Search options={options} /></div>
                </div>
                <div className="Boden">
                    <Outlet />
                    <Pagination defaultCurrent={page} total={total} onChange={(page) => {this.getPage(page)}} />
                </div>
                
            </>
        );
    }
}

 
export default TaskCenter;