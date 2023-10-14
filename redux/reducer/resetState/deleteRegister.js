import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const deleteRegister = createApiThunk(METHODS.DELETE, "/auth/register");
const deleteRegisterSlice = createAsyncSlice(
  "authLogin",
  deleteRegister,
  initialState
);

export default deleteRegisterSlice.reducer;
