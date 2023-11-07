import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { initialState } from "../../../global/initState";
import { METHODS } from "../../../global/index";
export const createComments = createApiThunk(
  METHODS.POST,
  "/comment/create-comment/$params"
);
const createCommentSLice = createAsyncSlice(
  "createCommentSLice",
  createComments,
  initialState
);
export default createCommentSLice.reducer;
