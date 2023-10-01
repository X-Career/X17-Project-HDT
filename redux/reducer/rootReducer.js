import { combineReducers } from "redux";
import testSlice from "./test";
import authRegisterSlice from "./authRegisterSlice";
import authLoginSlice from "./authLoginSlice";
import getInfoSlice from "./getInfoSlice";
import updateSlice from "./updateUserInfoSlice";
import updateImageSlice from "./updateImageSlice";
import refreshTokenSlice from "./refreshTokenSlice";

const rootReducer = combineReducers({
  test: testSlice,
  register: authRegisterSlice,
  login: authLoginSlice,
  getInfo: getInfoSlice,
  update: updateSlice,
  updateImage: updateImageSlice,
  token: refreshTokenSlice,
});

export default rootReducer;
