import { combineReducers } from "redux";
import testSlice from "./test";
import authRegisterSlice from "./authRegisterSlice";
import authLoginSlice from "./authLoginSlice";
import getInfoSlice from "./getInfoSlice";
import updateSlice from "./updateUserInfoSlice";
import updateImageSlice from "./updateImageSlice";
import refreshTokenSlice from "./refreshTokenSlice";
import vacationSlice from "./createVacationSlice";
import infoVacation from "./vacationDetail";
import updateVacationSlice from "./updateVacationSlice";
import infoMileStone from "./milestone/milestoneSlice";
import updateCoverImgSLice from "./milestone/updateCoverImgSLice";
const rootReducer = combineReducers({
  test: testSlice,
  register: authRegisterSlice,
  login: authLoginSlice,
  getInfo: getInfoSlice,
  update: updateSlice,
  updateImage: updateImageSlice,
  token: refreshTokenSlice,
  createVacation: vacationSlice,
  vacationDetail: infoVacation,
  updateVacation: updateVacationSlice,
  infoMileStone: infoMileStone,
  updateCoverImg: updateCoverImgSLice,
});

export default rootReducer;
