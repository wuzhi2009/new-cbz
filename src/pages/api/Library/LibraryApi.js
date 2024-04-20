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

export function addWort(info) {
    return post("/sp/wort/add", info);
}

export function addWhiteList(info) {
    return post("/sp/wort/white/add", info);
}

export function updateWort(item) {
    return put("/sp/wort/change", item);
}

export function updateWhiteList(item) {
    return put("/sp/wort/white/change", item);
}

export function delWort(id) {
    return post(`/sp/wort/del/${id}`);
}

export function delWhiteList(id) {
    return post(`/sp/wort/white/del/${id}`);
}

export function exportWort() {
    return excelExport("/sp/wort/Excel");
}

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

export function exportWortOk(index) {
    return put(`/sp/wort/importWortYes/${index}`);
}

export function exportWhiteOk(index) {
    return put(`/sp/wort/importWhiteListYes/${index}`);
}

const req = { getWortList, getWhiteList, updateWort, updateWhiteList, delWort, delWhiteList,
    exportWort, exportWhiteList, exportWortMod, exportWhiteListMod, exportWortOk, exportWhiteOk};
export default req;