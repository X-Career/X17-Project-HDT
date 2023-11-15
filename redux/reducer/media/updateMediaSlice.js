import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const updateMedia = createApiThunk(
  METHODS.PUT,
  "/media/updateMedia/$params"
);
const updateMediaSlice = createAsyncSlice(
  "updateMedia",
  updateMedia,
  initialState,
  {
    cleanUpdateMedia: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanUpdateMedia = createAction(`updateMedia/clean`);
export default updateMediaSlice.reducer;
