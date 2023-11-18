import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";
export const deletePost = createApiThunk(
  METHODS.DELETE,
  "/post/delete/$params"
);
const deletePostSlice = createAsyncSlice(
  "deletePost",
  deletePost,
  initialState,
  {
    cleanPostD: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanPostD = createAction(`deletePost/cleanPost`);

export default deletePostSlice.reducer;
