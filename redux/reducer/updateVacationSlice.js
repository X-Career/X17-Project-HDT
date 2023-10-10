import { createApiThunk, createAsyncSlice } from "../reduxToolkit";
import { METHODS } from "../../global";
import { initialState } from "../../global/initState";

export const updateVacation = createApiThunk(
  METHODS.PUT,
  "/user/updateVacation/$params"
);
const updateVacationSlice = createAsyncSlice(
  "updateVacation",
  updateVacation,
  initialState
);
export default updateVacationSlice.reducer;
