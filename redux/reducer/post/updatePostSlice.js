import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";
export const updatePost = createApiThunk(METHODS.PUT, "/post/update/$params");
const updatePostSlice = createAsyncSlice(
  "updatePost",
  updatePost,
  initialState,
  {
    cleanPostU: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanPostU = createAction(`updatePost/cleanPost`);

export default updatePostSlice.reducer;
