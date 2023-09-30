import { combineReducers } from "redux";
import authSlice from "./authSlice";
import testSlice from "./test";
import userInfo from "./getUserInfoSLice";
import refreshTokenSlice from "./refreshToken";
const rootReducer = combineReducers({
  auth: authSlice,
  test: testSlice,
  userInfo: userInfo,
  token: refreshTokenSlice,
});

export default rootReducer;
