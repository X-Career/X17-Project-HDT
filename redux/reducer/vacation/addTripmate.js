import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";
export const addTripmate = createApiThunk(
  METHODS.POST,
  "/vacation/addTripmates/$params"
);
const addTripmateSlice = createAsyncSlice(
  "addTripmate",
  addTripmate,
  initialState,
  {
    cleanTripmateA: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanTripmateA = createAction(`addTripmate/cleanTripmateA`);

export default addTripmateSlice.reducer;
