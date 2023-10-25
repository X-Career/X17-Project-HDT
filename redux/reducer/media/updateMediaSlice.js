import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const updateMedia = createApiThunk(METHODS.POST, "/media/updateMedia", {
  "Content-Type": "multipart/form-data",
});
const updateMediaSlice = createAsyncSlice(
  "createMedia",
  updateMedia,
  initialState
);
export default updateMediaSlice.reducer;
