import { createApiThunk, createAsyncSlice } from "../reduxToolkit";
import { METHODS } from "../../global";

export const login = createApiThunk(METHODS.POST, "/auth/login");

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const authSlice = createAsyncSlice("auth", login, initialState);
