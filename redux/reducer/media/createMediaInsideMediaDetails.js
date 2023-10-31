import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const createMediaInsideMediaDetails = createApiThunk(
  METHODS.POST,
  "/media/createMediaInsideMediaDetails/$params",
  {
    "Content-Type": "multipart/form-data",
  }
);
const createMediaInsideMediaDetailsSlice = createAsyncSlice(
  "createMedia",
  createMediaInsideMediaDetails,
  initialState
);
export default createMediaInsideMediaDetailsSlice.reducer;
