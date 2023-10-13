import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";
export const createVacation = createApiThunk(
  METHODS.POST,
  "/vacation/createVacation"
);
const vacationSlice = createAsyncSlice(
  "createVacation",
  createVacation,
  initialState
);
export default vacationSlice.reducer;
