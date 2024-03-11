// State/store.js
import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./amountSlice";

const store = configureStore({
  reducer: {
    amount: amountReducer,
  },
});

export default store;
