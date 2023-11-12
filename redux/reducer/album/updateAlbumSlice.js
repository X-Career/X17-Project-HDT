import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const updateAlbum = createApiThunk(
  METHODS.PUT,
  "/album/updateAlbum/$params"
);
const updateAlbumSlice = createAsyncSlice(
  "updateAlbum",
  updateAlbum,
  initialState,
  {
    cleanUpdateAlbum: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanUpdateAlbum = createAction(`updateAlbum/clean`);
export default updateAlbumSlice.reducer;
