import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const getProfileVacations = createApiThunk(
  METHODS.GET,
  "/vacation/getProfileVacations/$params"
);

const infoProfileVacations = createAsyncSlice(
  "infoProfileVacations",
  getProfileVacations,
  initialState,
  {
    clean: (state) => {
      state.data = initialState.data;
    },
  }
);

export const clean = createAction(`infoProfileVacations/clean`);

export default infoProfileVacations.reducer;
