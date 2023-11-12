import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

const initialState = {
  milestonePosts: {},
  loading: false,
  error: null,
};

export const getMilestonePosts = createApiThunk(
  METHODS.GET,
  "/post/getPost/$params"
);

const milestonePostsSlice = createSlice({
  name: "milestonePosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMilestonePosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMilestonePosts.fulfilled, (state, action) => {
        state.loading = false;
        state.milestonePosts[action.meta.arg.payload.query.params] =
          action.payload;
      })
      .addCase(getMilestonePosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default milestonePostsSlice.reducer;
