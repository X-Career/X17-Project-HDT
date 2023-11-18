import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const createMediaInsideMediaDetails = createApiThunk(
  METHODS.POST,
  "/media/createMediaInsideMediaDetails/$params",
  {
    "Content-Type": "multipart/form-data",
  }
);
const createMediaInsideMediaDetailsSlice = createAsyncSlice(
  "createMediaInsideMediaDetails",
  createMediaInsideMediaDetails,
  initialState,
  {
    cleanCreateMediaInsideMediaDetails: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanCreateMediaInsideMediaDetails = createAction(
  `createMediaInsideMediaDetails/cleanCreateMediaInsideMediaDetails`
);
export default createMediaInsideMediaDetailsSlice.reducer;
