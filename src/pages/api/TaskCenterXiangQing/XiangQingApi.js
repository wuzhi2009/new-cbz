import { post, put } from "../../../utils/reqUtil";

/**
 * 获取详情表接口
 * @param {*} info 
 * 请求示例
 * {
	"errorType": "",
	"modifyState": "2",
	"page": 1,
	"pageSize": 10,
	"paiXu": "id",
	"searchType": 1,
	"searchWord": "22",
	"smId": 238
}
 * @returns 
 */
export function getXiangQingTable(info) {
    return post('/monitoringDetails/list', info);
}

/**
 * 重新检测接口
 * @param {*} mdIds mdId数组
 * @returns 
 */
export function chongXinJianCe(mdIds) {
    return post(`/monitoring/partialRetesting`, {mdIds});
}

/**
 * 无需检测接口
 * @param {*} mdIds mdId数组
 * @returns 
 */
export function not(mdIds) {
    return put(`/monitoringDetails/${mdIds}`);
}

const req = { getXiangQingTable, chongXinJianCe, not }
export default req;