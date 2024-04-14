const DasState = {search:{label:"", searchValue:""}, task1List:{data:[], wait:true}, task2List: {data:[], wait:true}, pageAndSize:{page:0, total:0}, status:{}}
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
        default:
            return DasState;
    }
}

export default reducer;