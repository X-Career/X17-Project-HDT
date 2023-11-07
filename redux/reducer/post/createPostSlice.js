import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
export const createPost = createApiThunk(METHODS.POST, "/post/create/$params");
const createPostSlice = createAsyncSlice(
  "createPost",
  createPost,
  initialState
);
export default createPostSlice.reducer;
