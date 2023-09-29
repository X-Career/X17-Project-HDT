import { combineReducers } from "redux";
import authSlice from "./authSlice";
import testSlice from "./test";
const rootReducer = combineReducers({
  auth: authSlice,
  test: testSlice,
});

export default rootReducer;
