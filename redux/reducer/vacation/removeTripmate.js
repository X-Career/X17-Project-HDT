import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const removeTripmate = createApiThunk(
  METHODS.POST,
  "/vacation/removeTripmates/$params"
);
const removeTripmateSlice = createAsyncSlice(
  "updateVacation",
  removeTripmate,
  initialState
);
export default removeTripmateSlice.reducer;
