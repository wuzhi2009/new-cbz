import { get } from "../../../utils/reqUtil";

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

const req = { getHistoricalList }
export default req;