import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { initialState } from "../../../global/initState";
import { METHODS } from "../../../global/index";
import { createAction } from "@reduxjs/toolkit";

export const updateImageCover = createApiThunk(
  METHODS.POST,
  "vacation/updateCover/$params",
  {
    "Content-Type": "multipart/form-data",
  }
);
const updateCoverImgSlice = createAsyncSlice(
  "updateImage",
  updateImageCover,
  initialState,
  {
    cleanUpdateImageCoverVa: (state) => {
      state.data = initialState.data;
    },
  }
);

export const cleanUpdateImageCoverVa = createAction(
  `updateImage/cleanUpdateImageCoverVa`
);
export default updateCoverImgSlice.reducer;
