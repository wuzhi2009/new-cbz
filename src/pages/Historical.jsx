import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from '../utils/withRouter';
import HistoricalTable from './components/HistoricalTable';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { getHistoricalList } from './api/Historical/HistoricalApi';
const searchIco = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAABzklEQVQ4jZ3US4hPYRgG8N/8R4oibNRsJBpiOwqZpiwkNooFsWEhSbKwwEKSS00kNi6lKLltWMjCLRGxsLCQexYWkktNI7lM6K331Ol0zvzNPHXqXL7vOc/7fs/7dPQs36kNWpiD2ZiCATzL62/d1jHD8E3CdqxHF37iOyaiE+9xDCfwrbyx1UC4FK+wAcdT6bhUOhY9OIco8ynmtyNdg2u4im7sw/NSqX/wBLswK0lvY3ET6TycwX5srJZVg89YhQu4gmkF6Xjcwgycxk3sqSFYhm0170P5JrzEqYL0B6Ym2Vw8zj5W0YuVDYqH8lCXRLWt/FM0fHr+ZHeTVdrgXvZ+RWGpOJhLGMQBvBsFqWxjX9mnq0dJVMbb6P1w5q9DrJ9ceT+QLSzQajJ/HYbS5F8r19bS2pi8TyNR2p8DUcWL0vMiPKqSbsbFVFLFYE5SE8KOC7CjWn547dAI1BfowJH0+P06pdfxIKfrfxET2JdKdXZ195b3vcl4O4pfeNhmECKxDpci8kYdaSCIPuJgTEdaJobhd2lNZO06nMfCvL9cfGw6/ZO4k2WdzVB+nVVMwMy8j0zdiw/lzcNZKkjWYkuGSWRnKPySAX63NhrxD60DaMh7x31CAAAAAElFTkSuQmCC";
const options = [{key: "已选条件", value:"-1"}];
class Historical extends Component {
    state = { con:"", total: 0, page:1, pageSize:10, data:[], wait: true } 
    componentDidUpdate(oldProps) {
        const { searchValue } = this.props
        if (searchValue && searchValue !== oldProps.searchValue) {
            var con = searchValue;
            if (searchValue === '空的里边是空的wuzhi') {
                con = "";
            }
            const { pageSize } = this.state;
            this.setState({wait: true});
            getHistoricalList(1, pageSize, con).then(res => {
                if (res.data.code === 200) {
                    this.setState({total: res.data.total, data: res.data.data, wait: false});
                }
            })
            this.setState({con, page:1});
        }
    }
    componentDidMount() {
        this.setState({wait: true});
        getHistoricalList(1, 10, "").then(res => {
            if (res.data.code === 200) {
                this.setState({data: res.data.data, page: 1, total: res.data.total, wait: false});
            }
        })  
        
    }
    render() { 
        const { navigate } = this.props.router;
        const { page, total, data, wait } = this.state;
        return (
            <>
            <div style={ {position: 'relative'} }>
                <div style={ {position: 'absolute', right: 210, top: 18} }><Search options={options} /></div>
                <div style={ {position: 'absolute', right: 30, cursor: 'pointer', top: 23, transform: 'translate(-50%)'} } onClick={() => {navigate('/choose/searchData')}} ><img alt='' src={searchIco} style= { {marginRight: 10} } />查询记录</div>
            </div>
                <div style={ {position: 'relative', top: 55, margin: '0 20px'} }>
                    <HistoricalTable data={data} wait={wait} />
                    <div style={ {marginTop: 15} }>
                        <Pagination defaultCurrent={page} total={total} onChange={(page, pageSize) => {
                            const { con } = this.state;
                            this.setState({wait: true});
                            getHistoricalList(con, page, pageSize).then(res => {
                                if (res.data.code === 200) {
                                    this.setState({total: res.data.total, data: res.data.data, wait: false});
                                }
                            })
                            this.setState({page, pageSize});
                        }} />
                    </div>
                </div>
            </>   
        );
    }
}
 
export default withRouter(connect(({search}) => {return search})(Historical));