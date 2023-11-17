import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { initialState } from "../../../global/initState";
import { METHODS } from "../../../global/index";
import { createAction } from "@reduxjs/toolkit";
export const deleteComments = createApiThunk(
  METHODS.POST,
  "/comment/delete-comment/$params"
);
const deleteCommentSLice = createAsyncSlice(
  "deleteCommentSLice",
  deleteComments,
  initialState,
  {
    clean: (state) => {
      state.data = initialState.data;
    },
  }
);
export const clean = createAction(`deleteCommentSLice/clean`);
export default deleteCommentSLice.reducer;
