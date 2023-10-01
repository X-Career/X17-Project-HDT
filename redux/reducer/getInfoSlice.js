import { createApiThunk, createAsyncSlice } from "../reduxToolkit";
import { METHODS } from "../../global";
import { initialState } from "../../global/initState";

export const getInfo = createApiThunk(METHODS.GET, "/user/userInfo");
const getInfoSlice = createAsyncSlice("auth", getInfo, initialState);
export default getInfoSlice.reducer;
