import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const createAlbum = createApiThunk(METHODS.POST, "/album/createAlbum", {
  "Content-Type": "multipart/form-data",
});
const createAlbumSlice = createAsyncSlice(
  "createAlbum",
  createAlbum,
  initialState,
  {
    clean: (state) => {
      state.data = initialState.data;
    },
  }
);

export const clean = createAction(`createAlbum/clean`);
export default createAlbumSlice.reducer;
