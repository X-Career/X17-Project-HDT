import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const updateAlbumAvatar = createApiThunk(
  METHODS.POST,
  "/album/updateAlbumAvatar/$params",
  {
    "Content-Type": "multipart/form-data",
  }
);
const updateAlbumAvatarSlice = createAsyncSlice(
  "updateAlbumAvatar",
  updateAlbumAvatar,
  initialState,
  {
    cleanUpdateAlbumAvatar: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanUpdateAlbumAvatar = createAction(`updateAlbumAvatar/clean`);
export default updateAlbumAvatarSlice.reducer;
