import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
import { createAction } from "@reduxjs/toolkit";
export const updateVacation = createApiThunk(
  METHODS.PUT,
  "/vacation/updateVacation/$params"
);
const updateVacationSlice = createAsyncSlice(
  "updateVacation",
  updateVacation,
  initialState,
  {
    cleanVacationU: (state) => {
      state.data = initialState.data;
    },
  }
);
export const cleanVacationU = createAction(`updateVacation/cleanVacationU`);

export default updateVacationSlice.reducer;
