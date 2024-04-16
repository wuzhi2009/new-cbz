import { get } from "../../../utils/reqUtil";

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

const req = { getChannelList, getDeptList }
export default req;