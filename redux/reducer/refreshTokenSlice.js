import { createApiThunk, createAsyncSlice } from "../reduxToolkit";
import { METHODS } from "../../global";
import { initialState } from "../../global/initState";

export const refreshTokenThunk = createApiThunk(
  METHODS.POST,
  "/auth/refresh-token"
);
const refreshTokenSlice = createAsyncSlice(
  "refreshToken",
  refreshTokenThunk,
  initialState
);
export default refreshTokenSlice.reducer;
