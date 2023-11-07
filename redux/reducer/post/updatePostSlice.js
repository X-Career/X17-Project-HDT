import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
export const updatePost = createApiThunk(METHODS.PUT, "/post/update/$params");
const updatePostSlice = createAsyncSlice(
  "updatePost",
  updatePost,
  initialState
);
export default updatePostSlice.reducer;
