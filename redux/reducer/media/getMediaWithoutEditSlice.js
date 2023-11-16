import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const getMediaWithoutEdit = createApiThunk(
  METHODS.GET,
  "/media/getMedia/$params"
);
const getMediaWithoutEditSlice = createAsyncSlice(
  "createMedia",
  getMediaWithoutEdit,
  initialState
);
export default getMediaWithoutEditSlice.reducer;
