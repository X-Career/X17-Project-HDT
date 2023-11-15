import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const getAllVacations = createApiThunk(
  METHODS.GET,
  "/vacation/get-vacations"
);

const infoAllVacations = createAsyncSlice(
  "infoAllVacations",
  getAllVacations,
  initialState,
  {
    clean: (state) => {
      state.data = initialState.data;
    },
  }
);

export const clean = createAction(`infoAllVacations/clean`);

export default infoAllVacations.reducer;
