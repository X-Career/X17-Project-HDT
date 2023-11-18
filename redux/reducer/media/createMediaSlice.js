import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const createMedia = createApiThunk(
  METHODS.POST,
  "/media/createMedia/$params",
  {
    "Content-Type": "multipart/form-data",
  }
);
const createMediaSlice = createAsyncSlice(
  "createMedia",
  createMedia,
  initialState,
  {
    cleanCreateMedia: (state) => {
      state.data = initialState.data;
    },
  }
);

export const cleanCreateMedia = createAction(`createMedia/cleanCreateMedia`);
export default createMediaSlice.reducer;
