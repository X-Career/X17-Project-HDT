import { createAsyncSlice } from "../reduxToolkit";

const initialState = {
  value: 0,
};

const testSlice = createAsyncSlice("test", null, initialState, {
  increaseValue: (state) => {
    state.value += 1;
  },
});

export const { increaseValue } = testSlice.actions;
export default testSlice.reducer;
