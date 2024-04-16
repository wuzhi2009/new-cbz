import { post } from "../../../utils/reqUtil";

/**
 * 
 * @param {*} json 
 * 
 * 请求参数实例
 * {
	"checkUnit": [
		"自治区人民政府办公厅",
		"自治区发展改革委"
	],
	"choseMsg": "【网站】自治区人民政府办公厅(国内时政、区内时政),【网站】自治区发展改革委(图片新闻),2024-04-12~2024-04-12",
	"endTime": "2024-04-12 23:59:59",
	"errorType": "",
	"modifyState": "",
	"pageNum": 1,
	"pageSize": 10,
	"platform": [
		"1",
		"1"
	],
	"searchType": 1,
	"searchWord": "",
	"siteChannels": [
		{
			"channelId": 29837,
			"channelName": "首页头条"
		},
		{
			"channelId": 98230,
			"channelName": "时政要闻"
		},
		{
			"channelId": 57164,
			"channelName": "图片新闻"
		}
	],
	"startTime": "2024-04-12 00:00:00"
}
 */
export function getSearchTable(json) {
   return post(`/sp/monitoringDetails/byChannelList`, json);
}
const api = { getSearchTable }
export default api;