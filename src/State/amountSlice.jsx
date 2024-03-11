// State/amountSlice.js
import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: 0,
  reducers: {
    deposit: (state, action) => state + action.payload,
    withdraw: (state, action) => state - action.payload,
  },
});

export const { deposit, withdraw } = amountSlice.actions;
export default amountSlice.reducer;
