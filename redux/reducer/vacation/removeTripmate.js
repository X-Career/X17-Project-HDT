import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";
export const removeTripmate = createApiThunk(
  METHODS.POST,
  "/vacation/removeTripmates/$params"
);
const removeTripmateSlice = createAsyncSlice(
  "removeTripmate",
  removeTripmate,
  initialState,
  {
    cleanTripmateR: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanTripmateR = createAction(`removeTripmate/cleanTripmateR`);

export default removeTripmateSlice.reducer;
