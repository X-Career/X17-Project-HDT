import { createApiThunk, createAsyncSlice } from "../reduxToolkit";
import { METHODS } from "../../global";
import { initialState } from "../../global/initState";

export const updateUserInfo = createApiThunk(METHODS.PUT, "/user/updateInfo");
const updateSlice = createAsyncSlice("update", updateUserInfo, initialState);
export default updateSlice.reducer;
