import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const login = createApiThunk(METHODS.POST, "/auth/login");
const authLoginSlice = createAsyncSlice("authLogin", login, initialState, {
  clean: (state) => {
    state.data = initialState.data;
  },
});
export const clean = createAction(`authLogin/clean`);
export default authLoginSlice.reducer;
