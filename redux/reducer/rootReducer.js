import { combineReducers } from "redux";
import authRegisterSlice from "./auth/authRegisterSlice";
import authLoginSlice from "./auth/authLoginSlice";
import getInfoSlice from "./user/getInfoSlice";
import updateSlice from "./user/updateUserInfoSlice";
import updateImageSlice from "./user/updateImageSlice";
import refreshTokenSlice from "./refreshTokenSlice";
import vacationSlice from "./vacation/createVacationSlice";
import infoVacation from "./vacation/vacationDetail";
import updateVacationSlice from "./vacation/updateVacationSlice";
import infoMileStone from "./milestone/milestoneSlice";
import updateCoverImgSLice from "./milestone/updateCoverImgSLice";
import createAlbumSlice from "./album/albumSlice";
import getAlbumSlice from "./album/getAlbumSlice";
import updateAlbumAvatarSlice from "./album/updateAlbumAvatarSlice";
import createMediaSlice from "./media/createMediaSlice";
import getMediaSlice from "./media/getMediaSlice";
import updateMediaSlice from "./media/updateMediaSlice";

const rootReducer = combineReducers({
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
  createAlbum: createAlbumSlice,
  getAlbum: getAlbumSlice,
  updateAlbumAvatar: updateAlbumAvatarSlice,
  createMedia: createMediaSlice,
  getMedia: getMediaSlice,
  updateMedia: updateMediaSlice,
});

export default rootReducer;
