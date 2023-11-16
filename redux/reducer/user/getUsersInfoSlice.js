import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const getUsersInfo = createApiThunk(
  METHODS.GET,
  "/user/usersInfo/$params"
);
const getUsersInfoSlice = createAsyncSlice(
  "getInfo",
  getUsersInfo,
  initialState
);
export default getUsersInfoSlice.reducer;
