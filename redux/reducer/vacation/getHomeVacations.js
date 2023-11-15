import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";

export const getHomeVacations = createApiThunk(
  METHODS.GET,
  "/vacation/getVacations/$params"
);

const infoHomeVacations = createAsyncSlice(
  "infoHomeVacations",
  getHomeVacations,
  initialState
);

export default infoHomeVacations.reducer;
