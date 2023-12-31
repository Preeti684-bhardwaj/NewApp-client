import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./component/redux/reducers/main";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
