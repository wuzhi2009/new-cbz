import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import OpenUndClose from './components/OpenUndClose';
import XiangQingSearch from './components/XiangQingSearch';
import XiaLaKuang from './components/XiaLaKuang';
import XiangQingTable from './components/XiangQingTable';
import Pagination from './components/Pagination';
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
const data = [
		{
			"id": 177515,
			"deptName": "百色市人民政府办公室",
			"siteName": "广西百色市人民政府门户网站",
			"mediaType": "1",
			"errorDescription": "业证书编号",
			"amendments": ["职业证书编号"],
			"errorType": "少字",
			"articleTitle": "（睿达培训学校）关于百色市本级2024年失业人员职业技能培训补贴发放情况的公示",
			"description": "单 序号 姓名 培训工种 身份证号码 学校名称 培训时间 结<span style=\"color: yellow;\">业证书编号</span> 职业培训补贴标准(元) 1 黄飞龙 45311288080",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/zdlyxxgk/qtzdxx/gsgg/t18175101.shtml",
			"postTime": "2024-03-25 09:05:00",
			"modifyState": 0,
			"channelId": 164756,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "公示公告",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=1&channelid=164756&viewid=4&DocId=18175101&ObjectId=18175101&RecId=18562762&DocType=20&siteid=11&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18562762"
		},
		{
			"id": 177495,
			"deptName": "百色市发展和改革委员会",
			"siteName": "广西百色市发展和改革委员会网站",
			"mediaType": "1",
			"errorDescription": "kV出线",
			"amendments": ["kV出现"],
			"errorType": "错字/别字",
			"articleTitle": "百发改能源〔2024〕21号   关于35千伏上岗变电站扩建工程核准的批复",
			"description": "容及规模 变电站工程 主变压器：本期新增1×10兆伏安；35<span style=\"color: yellow;\">kV出线</span>：本期新增1回；10<span style=\"color: yellow;\">kV出线</span>：本期新增4回；10kV并联电容",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/zdlyxxgk/zdjsxmpzhsslygk/xmtzpzjgxx/t18176147.shtml",
			"postTime": "2024-03-25 10:32:00",
			"modifyState": 0,
			"channelId": 60430,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "项目投资批准结果信息",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=5&channelid=60430&viewid=4&DocId=18176147&ObjectId=18176147&RecId=18564022&DocType=20&siteid=271&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18564022"
		},
		{
			"id": 177496,
			"deptName": "百色市发展和改革委员会",
			"siteName": "广西百色市发展和改革委员会网站",
			"mediaType": "1",
			"errorDescription": "广西新电力",
			"amendments": ["广西省电力"],
			"errorType": "错字/别字",
			"articleTitle": "百发改能源〔2024〕21号   关于35千伏上岗变电站扩建工程核准的批复",
			"description": "限责任公司完成了投资估算审核工作，项目动态投资762万元，由<span style=\"color: yellow;\">广西新电力</span>投资集团有限责任公司负责筹措，其中项目资本金为动态投资的20",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/zdlyxxgk/zdjsxmpzhsslygk/xmtzpzjgxx/t18176147.shtml",
			"postTime": "2024-03-25 10:32:00",
			"modifyState": 0,
			"channelId": 60430,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "项目投资批准结果信息",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=5&channelid=60430&viewid=4&DocId=18176147&ObjectId=18176147&RecId=18564022&DocType=20&siteid=271&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18564022"
		},
		{
			"id": 177497,
			"deptName": "百色市人民政府办公室",
			"siteName": "广西百色市人民政府门户网站",
			"mediaType": "1",
			"errorDescription": "合理体现",
			"amendments": ["为合理体现"],
			"errorType": "少字",
			"articleTitle": "百色市医疗保障局关于对百色市五届人大五次会议代表第BH037号建议答复的函（百医保函〔2024〕9号）分类：B",
			"description": "实施过程中可能出现的阻力和障碍，确保工作顺利开展和有效推进，<span style=\"color: yellow;\">合理体现</span>不同等级医疗机构之间医务人员的技术劳务价值和运营成本，市医保",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/zdlyxxgk/qtzdxx/jytajg/2022rdjy/t18176396.shtml",
			"postTime": "2024-03-25 10:30:00",
			"modifyState": 0,
			"channelId": 131984,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "人大建议",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=1&channelid=131984&viewid=4&DocId=18176396&ObjectId=18176396&RecId=18564171&DocType=20&siteid=11&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18564171"
		},
		{
			"id": 177492,
			"deptName": "百色市人民政府办公室",
			"siteName": "广西百色市人民政府门户网站",
			"mediaType": "1",
			"errorDescription": "部分",
			"amendments": [],
			"errorType": "多字",
			"articleTitle": "百色市国有资本投资发展中心2024年度部门预算",
			"description": ".95%，主要原因是：本年新增3人，相应的经费增加；新增单位<span style=\"color: yellow;\">部分</span>职业年金；新增各项专项业务费（监事会办公费等）；总支出175",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/jcxxgk/czyjs/bmys/t18177256.shtml",
			"postTime": "2024-03-25 11:35:00",
			"modifyState": 0,
			"channelId": 60488,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "部门预算",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=1&channelid=60488&viewid=4&DocId=18177256&ObjectId=18177256&RecId=18565076&DocType=20&siteid=11&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18565076"
		},
		{
			"id": 177493,
			"deptName": "百色市人民政府办公室",
			"siteName": "广西百色市人民政府门户网站",
			"mediaType": "1",
			"errorDescription": "部分",
			"amendments": [],
			"errorType": "多字",
			"articleTitle": "百色市国有资本投资发展中心2024年度部门预算",
			"description": ".95%，主要原因是：本年新增3人，相应的经费增加；新增单位<span style=\"color: yellow;\">部分</span>职业年金；新增各项专项业务费（监事会办公费等）。 二、部门收",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/jcxxgk/czyjs/bmys/t18177256.shtml",
			"postTime": "2024-03-25 11:35:00",
			"modifyState": 0,
			"channelId": 60488,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "部门预算",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=1&channelid=60488&viewid=4&DocId=18177256&ObjectId=18177256&RecId=18565076&DocType=20&siteid=11&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18565076"
		},
		{
			"id": 177459,
			"deptName": "百色市人民政府办公室",
			"siteName": "广西百色市人民政府门户网站",
			"mediaType": "1",
			"errorDescription": "坚定不移走中国特色社会主义工会发展道路",
			"amendments": ["坚定不移走中国特色社会主义妇女发展道路"],
			"errorType": "专用表述错误",
			"articleTitle": "工作职责",
			"description": "工会坚定不移地贯彻落实党全心全意依靠工人阶级的根本指导方针，<span style=\"color: yellow;\">坚定不移走中国特色社会主义工会发展道路</span>，贯彻执行上级工会确定的方针、任务和决议。 （二）依照法律和",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/jcxxgk/jgzn/qtjqtzz/bsszgh/gzzz48/t18177423.shtml",
			"postTime": "2024-03-25 11:55:00",
			"modifyState": 0,
			"channelId": 133885,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "工作职责",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=1&channelid=133885&viewid=4&DocId=18177423&ObjectId=18177423&RecId=18565248&DocType=20&siteid=11&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18565248"
		},
		{
			"id": 177460,
			"deptName": "百色市人民政府办公室",
			"siteName": "广西百色市人民政府门户网站",
			"mediaType": "1",
			"errorDescription": "工会界别委员",
			"amendments": ["工商联界别委员"],
			"errorType": "专用表述错误",
			"articleTitle": "工作职责",
			"description": "的重要情况和动态；负责与全市人大代表中职工、工会工作者和政协<span style=\"color: yellow;\">工会界别委员</span>的联络工作，负责与全市工会代表大会代表、全委会委员、常务委员",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/jcxxgk/jgzn/qtjqtzz/bsszgh/gzzz48/t18177423.shtml",
			"postTime": "2024-03-25 11:55:00",
			"modifyState": 0,
			"channelId": 133885,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "工作职责",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=1&channelid=133885&viewid=4&DocId=18177423&ObjectId=18177423&RecId=18565248&DocType=20&siteid=11&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18565248"
		},
		{
			"id": 177461,
			"deptName": "百色市人民政府办公室",
			"siteName": "广西百色市人民政府门户网站",
			"mediaType": "1",
			"errorDescription": "组织基层",
			"amendments": ["基层组织"],
			"errorType": "专用表述错误",
			"articleTitle": "工作职责",
			"description": "会新闻发布工作；指导全市工会新闻和职工文化体育工作。 （二）<span style=\"color: yellow;\">组织基层</span>部 办公地址：百色市右江区站前大道13号 联系电话：0776",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/jcxxgk/jgzn/qtjqtzz/bsszgh/gzzz48/t18177423.shtml",
			"postTime": "2024-03-25 11:55:00",
			"modifyState": null,
			"channelId": 133885,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "工作职责",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=1&channelid=133885&viewid=4&DocId=18177423&ObjectId=18177423&RecId=18565248&DocType=20&siteid=11&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18565248"
		},
		{
			"id": 177474,
			"deptName": "百色市人民政府办公室",
			"siteName": "广西百色市人民政府门户网站",
			"mediaType": "1",
			"errorDescription": "水费",
			"amendments": ["税费"],
			"errorType": "错字/别字",
			"articleTitle": "百色高级中学2024年度部门预算",
			"description": "主要原因：新增入编教师购买教学用品。 商品和服务支出（类）<span style=\"color: yellow;\">水费</span>（款）支出92.41万元，比上年减少78.82万元，下降46",
			"doctype": "正文",
			"postUrl": "http://www.baise.gov.cn/zwgk/jcxxgk/czyjs/bmys/t18177652.shtml",
			"postTime": "2024-03-25 11:31:00",
			"modifyState": 1,
			"channelId": 60488,
			"smId": 236,
			"delName": null,
			"createBy": "wuzhi",
			"channelName": "部门预算",
			"modifyTheUrl": "https://ht.dsjfzj.gxzf.gov.cn/govapp/#/govopendata?Modal=1&channelid=60488&viewid=4&DocId=18177652&ObjectId=18177652&RecId=18565492&DocType=20&siteid=11&docstatus=yifa&titleField=WCMMetaTableGovOpenData.DOCTITLE&host=https://ht.dsjfzj.gxzf.gov.cn/&metaview=/app/application/4/metaviewdata_addedit.html?2024-02-2910:41:25.878&dynamicword=true&currrecid=18565492"
		}
	];
class TaskCenterXiangQing extends Component {
    state = { smId:0, name:"", type:"", man:"", create:"", fanWei:"", label:1, searchValue:"", page:1, pageSize: 10, total:0, mdId:[], modifyState:"", errorType:"", paiXu:"",data:[] } 
    componentDidMount() {
        const { location } = this.props.router;
        const { state } = location;
        this.setState(state);
        console.log("向后端发送请求获取检测详情数据 请求参数：id" + state.smId);
		window.sessionStorage.removeItem("currentPageundefined");
		this.setState({data: data});
    }
    componentDidUpdate(oldProps) {
        // console.log('发生改变 发送请求 参数如下 :>> ');
		// console.log('this.state :>> ', this.state);
    }
	getPage = (page) => {
		// 获取当前页数
		console.log('发送请求当前页数 :>> ', page);
		// 发送请求
		this.setState({page});
	}
	// 复选框
	changeMdId = (mdIds) => {
		this.setState({mdId: mdIds})
	}
	// 状态下拉框
	changeZhuangTai = (value) => {
		this.setState({modifyState:value});
	}
	// 错误类型下拉框
	changeCuoWuType = (value) => {
		this.setState({errorType:value});
	}
	// 排序下拉框
	changePaiXu = (value) => {
		this.setState({paiXu:value});
	}
    render() { 
        const { navigate } = this.props.router;
        const nav = navigate;
        const { smId, name, type, man, create, fanWei, page, total, data } = this.state;
        if (smId === 0) {
            // 直接通过地址访问
            return (
                <>
                啥也没有
                </>
            );
        }
        var options = [{key: "文章片段", value: 1},{key: "站点名称", value: 2}]
        var options2 = [{key: "全部", value: "2"},{key: "未修改", value: "1"},{key: "已修改", value: "3"},{key: "无需修改", value: "null"}]
        var options3 = [{key: "默认排序", value: "id"},{key: "时间升序", value: "time"},{key: "时间降序", value: "time1"}]
        return (
            <>
                <div style={ {margin: '20px 21px', display: 'flex', flexDirection: 'column'} } className='xiangQing'>
                    <div style={ {display: 'flex', flexDirection: 'row'} }>
                        <p style={ {flex: 4} }>
                        <span style={ DasTypeStyle }><span style={ fontStyle }>{type}</span></span>
                        <span style={ DasTitleStyle }><span style={ fontStyle }>{name}</span></span>
                        </p>
                        <p style={ {flex: 4} }>
                        <span className='xiangQingText'>发起人：</span><span>{man}</span>
                        </p>
                        <p style={ {flex: 4} }>
                            <span className='xiangQingText'>发起时间：</span><span>{create}</span>
                        </p>
                    </div>
                    <div style={ {display: 'flex', flexDirection: 'row', marginTop: 10} }>
                        <p style={ {flex: 7} }>
                            <span className='xiangQingText'>检测范围：</span><span><OpenUndClose text={fanWei} /></span>
                        </p>
                        <p style={ {flex: 7} }>
                            <span className='xiangQingText'>检测时间范围：</span><span>空着-空着</span>
                        </p>
                        <div style={ {flex: 7} }>
                            <span style={ {position: 'absolute', right: '3%'} }>
                                <span className='YellowButton' onClick={() => {}} style={ {background: '#62D862', marginRight: 6} }><span>无需修改</span></span>
                                <span className='YellowButton' onClick={() => {}} style={ {background: '#B188E5', width: 130, marginRight: 6} }><span>部分重新检测</span></span>
                                <span className='YellowButton' onClick={() => {nav("/taskCenter/eins")}}><span>返 回</span></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div style={ {display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 20} }>
                    <div style={ {flex:3} }><XiaLaKuang title="状态" options={options2} change={this.changeZhuangTai.bind(this)} /></div>
                    <div style={ {flex:3} }><XiaLaKuang title="错误类型" options={options2} change={this.changeCuoWuType.bind(this)} /></div>
                    <div style={ {flex:3} }><XiaLaKuang title="排序" options={options3} change={this.changePaiXu.bind(this)} /></div>
                    <div style={ {flex:5} }><XiangQingSearch options={options} set={this.setState.bind(this)} /></div>
                </div>
                <div>
                    <XiangQingTable style={ {margin: '20px auto', borderSpacing: '0 0px'} } data={data} page={page} changeMdId={this.changeMdId.bind(this)} />
					<Pagination defaultCurrent={page} total={total} onChange={(page) => {this.getPage(page)}} style={ {marginTop: 6, paddingTop: 15} } />
                </div>
            </>
        );
    }
}
 
export default withRouter(TaskCenterXiangQing);