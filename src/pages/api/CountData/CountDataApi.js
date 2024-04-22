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

const req = { getErrCity, getErrTop, getHightHz };
export default req;