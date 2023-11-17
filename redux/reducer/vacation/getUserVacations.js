import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const getUserVacations = createApiThunk(
  METHODS.GET,
  "/vacation/getUserVacations/$params"
);

const infoUserVacations = createAsyncSlice(
  "infoUserVacations",
  getUserVacations,
  initialState,
  {
    clean: (state) => {
      state.data = initialState.data;
    },
  }
);

export const clean = createAction(`infoUserVacations/clean`);

export default infoUserVacations.reducer;
