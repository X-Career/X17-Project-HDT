import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const checkReaction = createApiThunk(
  METHODS.GET,
  "/reaction/checkReaction/$params"
);
const checkReactionSlice = createAsyncSlice(
  "checkReaction",
  checkReaction,
  initialState
);
export default checkReactionSlice.reducer;
