import { excelExport, get, post, put } from "../../../utils/reqUtil";

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

/**
 * 获取白名单
 * 
 * @param {*} page 
 * @param {*} pageSize 
 * @param {*} level 
 * @param {*} con 
 * @returns 
 */
export function getWhiteList(page, pageSize, level, con) {
    return get(`/sp/wort/white/list?page=${page}&pageSize=${pageSize}&level=${level}&con=${con}`);
}

/**
 * 添加词库
 * 
 * @param {*} info 
 * @returns 
 */
export function addWort(info) {
    return post("/sp/wort/add", info);
}

/**
 * 添加白名单
 * 
 * @param {*} info 
 * @returns 
 */
export function addWhiteList(info) {
    return post("/sp/wort/white/add", info);
}

/**
 * 更新词库
 * 
 * @param {*} item 
 * @returns 
 */
export function updateWort(item) {
    return put("/sp/wort/change", item);
}

/**
 * 更新白名单
 * 
 * @param {*} item 
 * @returns 
 */
export function updateWhiteList(item) {
    return put("/sp/wort/white/change", item);
}

/**
 * 删除词
 * 
 * @param {*} id 
 * @returns 
 */
export function delWort(id) {
    return post(`/sp/wort/del/${id}`);
}

/**
 * 删除白名单
 * 
 * @param {*} id 
 * @returns 
 */
export function delWhiteList(id) {
    return post(`/sp/wort/white/del/${id}`);
}

/**
 * 导出词库
 * 
 * @returns 
 */
export function exportWort() {
    return excelExport("/sp/wort/Excel");
}

/**
 * 导出白名单
 * 
 * @returns 
 */
export function exportWhiteList() {
    return excelExport("/sp/wort/white/Excel");
}

/**
 * 词库模板导出
 * 
 * @returns 
 */
export function exportWortMod() {
        excelExport("/sp/wort/wortMod").then(res => {
            const blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' })
            const blobURL = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = blobURL;
            a.download = "词库模板.xlsx";
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.parentNode.removeChild(a);
            window.URL.revokeObjectURL(blobURL);
        })
    return null
}

/**
 * 白名单模板导出
 * 
 * @returns 
 */
export function exportWhiteListMod() {
    excelExport("/sp/wort/whiteMod").then(res => {
        const blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' })
        const blobURL = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = blobURL;
        a.download = "白名单模板.xlsx";
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.parentNode.removeChild(a);
        window.URL.revokeObjectURL(blobURL);
    })
    return null;
}

/**
 * 确认导入词库
 * 
 * @param {*} index 导入文件id数组 后端返回
 * @returns 
 */
export function exportWortOk(index) {
    return put(`/sp/wort/importWortYes/${index}`);
}

/**
 * 确认导入白名单
 * 
 * @param {*} index 导入文件id数组 后端返回
 * @returns 
 */
export function exportWhiteOk(index) {
    return put(`/sp/wort/importWhiteListYes/${index}`);
}

const req = { getWortList, getWhiteList, updateWort, updateWhiteList, delWort, delWhiteList,
    exportWort, exportWhiteList, exportWortMod, exportWhiteListMod, exportWortOk, exportWhiteOk};
export default req;