import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { initialState } from "../../../global/initState";
import { METHODS } from "../../../global/index";
export const updateImageCover = createApiThunk(
  METHODS.POST,
  "vacation/updateCover/$params",
  {
    "Content-Type": "multipart/form-data",
  }
);
const updateCoverImgSlice = createAsyncSlice(
  "updateImage",
  updateImageCover,
  initialState
);
export default updateCoverImgSlice.reducer;
