import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action: PayloadAction<number>) => {
      const numberClickedByUser = action.payload;
      state.value += numberClickedByUser;
    },
  },
});

export const { decreament, increament, increamentByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
