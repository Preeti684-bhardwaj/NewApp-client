const news = [];

export const getNewsReducer = (state={news},action)=>{
    switch(action.type){
        case "SUCCESS_GET_NEWS":
            return {news:action.payload}
        case "FAIL_GET_NEWS":
            return {error:action.payload}
        default : return state
    }
}

 