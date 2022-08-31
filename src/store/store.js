import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./sliceCart";
import sliceData from "./sliceData";

export const store = configureStore({
  reducer: {
    sliceCart,
    sliceData
  }
});