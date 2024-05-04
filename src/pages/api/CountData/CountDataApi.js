import { get } from '../../../utils/reqUtil';

/**
 * 获取高频错词排行
 * 
 * @returns 
 */
export function getHightHz() {
    return get("/sp/count/highHz");
}

/**
 * 获取错误城市排行
 * 
 * @returns 
 */
export function getErrCity() {
    return get("/sp/count/errCity");
}

/**
 * 获取错误单位排行
 * 
 * @param {*} mediaType 1网站 2自媒体
 */
export function getErrTop(mediaType) {
    return get(`/sp/count/errTop?mediaType=${mediaType}`);
}

/**
 * 获取检测数据
 * 
 * @param {*} deptName 
 * @param {*} mediaType 
 * @param {*} startDate 
 * @param {*} endDate 
 * @returns 
 */
export function list(deptName, mediaType, startDate, endDate) {
    return get(`/sp/count/list?deptName=${deptName}&pingTai=${mediaType}&startDate=${startDate}&endDate=${endDate}`);
}

/**
 * 获取每天检测数据
 * 
 * @param {*} date 
 * @param {*} dpName 
 * @returns 
 */
export function day(date, dpName) {
    return get(`/sp/count/day?deptName=${dpName}&date=${date}`);
}

export function getErroList() {
    return get(`/sp/count/erroList`);
}

export function getSeriousErr(page, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments) {
    return get(`/sp/count/seriousErr?page=${page}&pageSize=${pageSize}&deptName=${deptName}&siteName=${siteName}&errorPlatform=${errorPlatform}&errorDescription=${errorDescription}&amendments=${amendments}`);
}

export function getSevenDay(page, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments) {
    return get(`/sp/count/sevenDay?page=${page}&pageSize=${pageSize}&deptName=${deptName}&siteName=${siteName}&errorPlatform=${errorPlatform}&errorDescription=${errorDescription}&amendments=${amendments}`);
}

export function getWaitChange(page, pageSize, deptName, siteName, errorPlatform, errorDescription, amendments) {
    return get(`/sp/count/waitChange?page=${page}&pageSize=${pageSize}&deptName=${deptName}&siteName=${siteName}&errorPlatform=${errorPlatform}&errorDescription=${errorDescription}&amendments=${amendments}`);
}

const req = { getErrCity, getErrTop, getHightHz, list, day, getErroList, getSeriousErr, getSevenDay, getWaitChange };
export default req;