import { createAsyncThunk } from "@reduxjs/toolkit";
import restApi from "../axios/restApi";
import { createSlice } from "@reduxjs/toolkit";

export const createApiThunk = (methodName, actionName, headers) => {
  return createAsyncThunk(actionName, async (requestData) => {
    const response = await restApi(
      methodName,
      actionName,
      requestData,
      headers
    );
    return response;
  });
};
export const createAsyncSlice = (name, asyncThunk, initialState, reducer) => {
  return createSlice({
    name,
    initialState,
    reducers: reducer || {},
    ...(asyncThunk
      ? {
          extraReducers: (builder) => {
            builder
              .addCase(asyncThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(asyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
              })
              .addCase(asyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
              });
          },
        }
      : {}),
  });
};
