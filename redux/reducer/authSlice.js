import { createApiThunk, createAsyncSlice } from "../reduxToolkit";
import { METHODS } from "../../global";
import { initialState } from "../../global/initState";

export const login = createApiThunk(METHODS.POST, "/auth/login");
const authSlice = createAsyncSlice("auth", login, initialState);
export default authSlice.reducer;
