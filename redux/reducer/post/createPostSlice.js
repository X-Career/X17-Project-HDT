import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { createAction } from "@reduxjs/toolkit";
import { initialState } from "../../../global/initState";
export const createPost = createApiThunk(METHODS.POST, "/post/create/$params");
const createPostSlice = createAsyncSlice(
  "createPost",
  createPost,
  initialState,
  {
    cleanPost: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanPost = createAction(`createPost/cleanPost`);
export default createPostSlice.reducer;
