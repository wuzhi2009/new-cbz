import { get, put } from '../../../utils/reqUtil'

/**
 * 获取检测完成表数据
 * 
 * @param {*} status 请求状态
 * @param {*} page 请求页数
 * @param {*} pageSize 每页数据量
 * @param {*} searchValue 搜索值
 */
export function getEinsList(status, page, pageSize, searchValue) {
    return get(`/sp/monitoring/list?status=${status}&pageNum=${page}&pageSize=${pageSize}&searchValue=${searchValue}`);
}

/**
 * 获取正在检测表数据
 * 
 * @param {*} status 请求状态
 * @param {*} page 请求页数
 * @param {*} pageSize 每页数据量
 * @param {*} searchValue 搜索值
 */
export function getZweiList(status, page, pageSize, searchValue) {
    return get(`/sp/monitoring/list?status=${status}&pageNum=${page}&pageSize=${pageSize}&searchValue=${searchValue}`);
}

/**
 * 停止现在正在检测的任务
 * 
 * @param {*} id 正在发起检测的任务
 * @returns 
 */
export function stop(id) {
    return put(`/sp/monitoring/stop/${id}`);
}
const req = { getEinsList, getZweiList, stop };
export default req;