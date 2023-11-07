import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
export const deletePost = createApiThunk(
  METHODS.DELETE,
  "/post/delete/$params"
);
const deletePostSlice = createAsyncSlice(
  "deletePost",
  deletePost,
  initialState
);
export default deletePostSlice.reducer;
