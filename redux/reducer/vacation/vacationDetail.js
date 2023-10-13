import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const getVacation = createApiThunk(
  METHODS.GET,
  "/vacation/getVacation/$params"
);
const infoVacation = createAsyncSlice(
  "infoVacation",
  getVacation,
  initialState
);
export default infoVacation.reducer;
