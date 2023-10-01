import { createAsyncSlice } from "../reduxToolkit";
import { initialState } from "../../global/initState";

const testSlice = createAsyncSlice("test", null, initialState, {
  increaseValue: (state) => {
    state.data += 1;
  },
  creaseValue: (state) => {
    state.data -= 1;
  },
});

export const { increaseValue, creaseValue } = testSlice.actions;
export default testSlice.reducer;
