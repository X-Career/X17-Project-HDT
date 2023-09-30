import { createApiThunk, createAsyncSlice } from "../reduxToolkit";
import { METHODS } from "../../global";
import { initialState } from "../../global/initState";

export const getUserInfo = createApiThunk(METHODS.GET, "/user/userInfo");
const userInfo = createAsyncSlice("userInfo", getUserInfo, initialState);
export default userInfo.reducer;
