import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const register = createApiThunk(METHODS.POST, "/auth/register");
const authRegisterSlice = createAsyncSlice(
  "authRegister",
  register,
  initialState,
  {
    clean: (state) => {
      state.data = initialState.data;
    },
  }
);
export const clean = createAction(`authRegister/clean`);
export default authRegisterSlice.reducer;
