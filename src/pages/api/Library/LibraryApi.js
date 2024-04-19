import { get } from "../../../utils/reqUtil";

/**
 * 获取词库接口
 * 
 * @param {*} page 第几页
 * @param {*} pageSize 每页几条数据
 * @param {*} level 错误等级
 * @param {*} con 查询词汇
 * @returns 
 */
export function getWortList(page, pageSize, level, con) {
    return get(`/sp/wort/list?page=${page}&pageSize=${pageSize}&level=${level}&con=${con}`);
}

export function getWhiteList(page, pageSize, level, con) {
    return get(`/sp/wort/white/list?page=${page}&pageSize=${pageSize}&level=${level}&con=${con}`);
}

const req = { getWortList, getWhiteList };
export default req;