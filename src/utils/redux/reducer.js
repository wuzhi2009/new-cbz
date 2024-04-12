const DasState = {search:{label:"", searchValue:""}, task1List:{data:[]}, task2List: {data:[]}, pageAndSize:{page:0, total:0}}
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
                    label: action.label, 
                    searchValue: action.searchValue
            }}
            return state;
        case "getTask1List":
            state = {
                ...DasState,
                task1List:{
                   data: action.data 
                } 
            }
            return state;
        case "getTask2List":
            state = {
                ...DasState,
                task2List:{
                    data: action.data 
                } 
            }
            return state;
        default:
            return DasState;
    }
}

export default reducer;