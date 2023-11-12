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
import removeTripmateSlice from "./vacation/removeTripmate";
import addTripmateSlice from "./vacation/addTripmate";
import milestonePostsSlice from "./post/getPostSlice";
import createPostSlice from "./post/createPostSlice";
import deletePostSlice from "./post/deletePostSlice";
import updatePostSlice from "./post/updatePostSlice";
import commentSlice from "./comment/getComment";
import createCommentSLice from "./comment/createComment";
import createAlbumSlice from "./album/albumSlice";
import getAlbumSlice from "./album/getAlbumSlice";
import updateAlbumSlice from "./album/updateAlbumSlice";
import updateAlbumAvatarSlice from "./album/updateAlbumAvatarSlice";
import createMediaSlice from "./media/createMediaSlice";
import createMediaInsideMediaDetailsSlice from "./media/createMediaInsideMediaDetails";
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
  removeTripmate: removeTripmateSlice,
  addTripmate: addTripmateSlice,
  milestonePosts: milestonePostsSlice,
  createPostSlice: createPostSlice,
  deletePostSlice: deletePostSlice,
  updatePostSlice: updatePostSlice,
  commentSlice: commentSlice,
  createCommentSLice: createCommentSLice,
  createAlbum: createAlbumSlice,
  getAlbum: getAlbumSlice,
  updateAlbum: updateAlbumSlice,
  updateAlbumAvatar: updateAlbumAvatarSlice,
  createMedia: createMediaSlice,
  createMediaInsideMediaDetails: createMediaInsideMediaDetailsSlice,
  getMedia: getMediaSlice,
  updateMedia: updateMediaSlice,
});

export default rootReducer;
