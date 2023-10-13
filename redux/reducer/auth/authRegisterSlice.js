import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const register = createApiThunk(METHODS.POST, "/auth/register");
const authRegisterSlice = createAsyncSlice("authRegister", register, initialState);

export default authRegisterSlice.reducer;
