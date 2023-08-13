const initialState = {
    news: [],
  };
  
  export const getNewsReducer = (state = initialState, action) =>{
    switch(action.type){
        case "SUCCESS_GET_NEWS":
            return {news:action.payload}
        case "FAIL_GET_NEWS":
            return {error:action.payload}
        default : return state
    }
}

 