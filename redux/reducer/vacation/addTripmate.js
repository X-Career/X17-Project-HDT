import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const addTripmate = createApiThunk(
  METHODS.POST,
  "/vacation/addTripmates/$params"
);
const addTripmateSlice = createAsyncSlice(
  "updateVacation",
  addTripmate,
  initialState
);
export default addTripmateSlice.reducer;
