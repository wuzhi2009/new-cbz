const DasState = {search:{label:"", searchValue:""}, task1List:{data:[]}, task2List: {data:[]}, pageAndSize:{page:0, total:0}}
const reducer = (state, action) => {
    switch (action.type) {
        case "search":
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
        case "pageAndSize":
            state = {
                ...DasState,
                pageAndSize:{
                    page: action.page,
                    total: action.total 
                } 
            }
                return state;
        default:
            return DasState;
    }
}

export default reducer;