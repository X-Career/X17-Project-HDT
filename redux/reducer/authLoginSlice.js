import { createApiThunk, createAsyncSlice } from "../reduxToolkit";
import { METHODS } from "../../global";
import { initialState } from "../../global/initState";

export const login = createApiThunk(METHODS.POST, "/auth/login");
const authLoginSlice = createAsyncSlice("authLogin", login, initialState);

export default authLoginSlice.reducer;
