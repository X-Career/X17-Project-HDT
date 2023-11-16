import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const createReaction = createApiThunk(
  METHODS.POST,
  "/reaction/createReaction/$params"
);
const createReactionSlice = createAsyncSlice(
  "createReaction",
  createReaction,
  initialState
);
export default createReactionSlice.reducer;
