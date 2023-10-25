import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const createMedia = createApiThunk(METHODS.POST, "/media/createMedia", {
  "Content-Type": "multipart/form-data",
});
const createMediaSlice = createAsyncSlice(
  "createMedia",
  createMedia,
  initialState
);
export default createMediaSlice.reducer;
