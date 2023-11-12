import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const updateUserInfo = createApiThunk(METHODS.PUT, "/user/updateInfo");
const updateSlice = createAsyncSlice("update", updateUserInfo, initialState, {
  clean: (state) => {
    state.data = initialState.data;
  },
});
export const clean = createAction(`update/clean`);
export default updateSlice.reducer;
