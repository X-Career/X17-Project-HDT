import { combineReducers } from "redux";
import authSlice from "./authSlice";
import testSlice from "./test";
import getInfoSlice from "./getInfoSlice";
import updateSlice from "./updateUserInfoSlice";
import updateImageSlice from "./updateImageSlice";
const rootReducer = combineReducers({
  auth: authSlice,
  test: testSlice,
  getInfo: getInfoSlice,
  updateImage: updateImageSlice,
  update: updateSlice,
});

export default rootReducer;
