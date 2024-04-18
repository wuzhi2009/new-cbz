import { get, post } from "../../../utils/reqUtil";

/**
 * 获取栏目列表接口
 * 
 * @param {*} dpName 部门名称
 * @param {*} key 1 网站 2自媒体
 * @returns 
 */
export function getChannelList(dpName, key) {
    return get(`/sp/monitoring/getChannelByDpName?dpName=${dpName}&mediaType=${key}`);
}

/**
 * 获取部门列表接口
 * 
 * @returns 
 */
export function getDeptList() {
    return get("/sp/monitoring/getDeptList");
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
    return get("/system/user/getInfo");
}

/**
 * 发起检测
 * 
 * @param {*} info 检测参数
 * {
	"checkUnit": [
		"自治区人民政府办公厅"
	],
    "monitoringTitle": "我是检测标题",
	"checkVendor": "KPY",
	"choseMsg": "【网站】自治区人民政府办公厅(区内时政),2024-04-17~2024-04-17",
	"postEndTime": "2024-04-17",
	"modifyState": "2",
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
	"postStartTime": "2024-04-17"
}
 * @returns 
 */
export function add(info) {
    return post("/sp/monitoring/add", info);
}

const req = { getChannelList, getDeptList, add }
export default req;