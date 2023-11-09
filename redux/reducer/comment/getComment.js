import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { initialState } from "../../../global/initState";
import { METHODS } from "../../../global/index";
export const getComments = createApiThunk(
  METHODS.GET,
  "/comment/get-comment/$params"
);
const commentSLice = createAsyncSlice(
  "commentSLice",
  getComments,
  initialState
);
export default commentSLice.reducer;
