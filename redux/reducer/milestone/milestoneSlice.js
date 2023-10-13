import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { initialState } from "../../../global/initState";
import { METHODS } from "../../../global/index";
export const getMilestones = createApiThunk(
  METHODS.GET,
  "/milestone/getMilestones/$params"
);
const infoMileStone = createAsyncSlice(
  "infoVacation",
  getMilestones,
  initialState
);
export default infoMileStone.reducer;
