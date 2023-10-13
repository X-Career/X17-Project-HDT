import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const updateImage = createApiThunk(METHODS.POST, "/user/updateAvatar", {
  "Content-Type": "multipart/form-data",
});
const updateImageSlice = createAsyncSlice(
  "updateImage",
  updateImage,
  initialState
);
export default updateImageSlice.reducer;
