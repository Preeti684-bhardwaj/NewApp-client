import { getNewsReducer } from "./Newsreducer";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getnewsdata : getNewsReducer
});

export default rootreducers;