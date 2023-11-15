import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const createVacation = createApiThunk(
  METHODS.POST,
  "/vacation/createVacation"
);
const vacationSlice = createAsyncSlice(
  "createVacation",
  createVacation,
  initialState,
  {
    clean: (state) => {
      state.data = initialState.data;
    },
  }
);

export const clean = createAction(`createVacation/clean`);

export default vacationSlice.reducer;
