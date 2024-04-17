import { get, post } from "../../../utils/reqUtil";

/**
 * 获取历史操作表
 * 
 * @param {*} page 第几页 不传默认1
 * @param {*} pageSize 每页几条数据 不传默认10
 * @param {*} con 查询字段
 * @returns 
 */
export function getHistoricalList(page, pageSize, con) {
    return get(`/sp/monitoring/historicalList?con=${con}&page=${page}&pageSize=${pageSize}`);
}

/**
 * 插入查询
 * 
 * @param {*} info 
 * 事例
 * {
	"checkUnit": [
		"自治区人民政府办公厅"
	],
	"checkVendor": "KPY",
	"choseMsg": "【网站】自治区人民政府办公厅(区内时政),2024-04-17~2024-04-17",
	"endTime": "2024-04-17",
	"modifyState": "2",
	"platform": [
		"1"
	],
	"siteChannels": [
		{
			"channelDesc": "区内时政",
			"channelId": 98230,
			"channelName": "时政要闻",
			"parentChannelId": 0,
			"siteDesc": null,
			"siteId": null,
			"totalArticles": null,
			"wcmchannels": []
		}
	],
	"startTime": "2024-04-17"
}
 * @returns 
 */
export function setHistorical(info) {
    return post("/sp/monitoring/historical", info);
}

const req = { getHistoricalList, setHistorical }
export default req;