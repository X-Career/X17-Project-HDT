import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const deleteLogin = createApiThunk(METHODS.DELETE, "/auth/login");
const deleteLoginSlice = createAsyncSlice(
  "authLogin",
  deleteLogin,
  initialState
);

export default deleteLoginSlice.reducer;
