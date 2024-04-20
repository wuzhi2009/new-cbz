const DasState = {search:{label:"", searchValue:""},
    task1List:{data:[], wait:true}, task2List: {data:[], wait:true},
    pageAndSize:{page:0, total:0}, status:{},
    wortList:{data:[], wait:false, page: 1, pageSize: 10},
    whiteList:{data:[], wait:false, page: 1, pageSize: 10},
    wortItem:{form:{},
    delWort:{delId:""}}
};
const reducer = (state, action) => {
    switch (action.type) {
        case "search":
            if (action.searchValue === "") {
                action.searchValue = "空的里边是空的wuzhi";
            }
            // 下拉输入框
            state = {
                ...DasState,
                search:{
                    label: parseInt(action.label), 
                    searchValue: action.searchValue
            }}
            return state;
        case "getTask1List":
            state = {
                ...DasState,
                task1List:{
                   data: action.data,
                   wait: action.wait
                } 
            }
            return state;
        case "getTask2List":
            state = {
                ...DasState,
                task2List:{
                    data: action.data,
                    wait: action.wait
                } 
            }
            return state;
        case "status":
            // 检测历史状态选择
            state = {
                ...DasState,
                status:{
                    modifyState: action.modifyState
                }
            }
            return state;
        case "getWortList":
                // 获取词库列表
            state = {
                ...DasState,
                wortList: {
                    data: action.data,
                    wait: action.wait,
                    page: action.page,
                    pageSize: action.pageSize
                }
            }
            return state;
        case "getWhiteList":
                // 获取词库列表
            state = {
                ...DasState,
                whiteList: {
                    data: action.data,
                    wait: action.wait,
                    page: action.page,
                    pageSize: action.pageSize
                }
            }
            return state;
        case "wortItem":
        // 词库白名单修改回显
            state = {
                ...DasState,
                wortList:{wait: false},
                whiteList: {wait: false},
                wortItem: {
                    form: action.form
                }
            }
            return state;
        case "delWort":
            // 删除词库中的词
            state = {
                ...DasState,
                wortList:{wait: false},
                whiteList: {wait: false},
                delWort: {
                    delId:action.id
                }
            }
            return state;
        default:
            return DasState;
    }
}

export default reducer;