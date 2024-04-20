import { excelExportPost, post, put } from "../../../utils/reqUtil";

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
    return post('/sp/monitoringDetails/list', info);
}

/**
 * 重新检测接口
 * @param {*} mdIds mdId数组
 * @returns 
 */
export function chongXinJianCe(mdIds) {
    return post(`/sp/monitoring/partialRetesting`, {mdIds});
}

/**
 * 无需检测接口
 * @param {*} mdIds mdId数组
 * @returns 
 */
export function not(mdIds) {
    return put(`/sp/monitoringDetails/${mdIds}`);
}

export function excel(mdIds, smId) {
    return excelExportPost("/sp/monitoringDetails/Excel", {mdIds, smId});
}

const req = { getXiangQingTable, chongXinJianCe, not, excel }
export default req;