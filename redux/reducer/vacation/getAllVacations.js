import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const getAllVacations = createApiThunk(
  METHODS.GET,
  "/vacation/getVacations"
);
const infoAllVacations = createAsyncSlice(
  "infoAllVacations",
  getAllVacations,
  initialState
);
export default infoAllVacations.reducer;
