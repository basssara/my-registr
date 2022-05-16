import { configureStore } from "@reduxjs/toolkit";
import useSlice from "./slice";

export const store = {
  reducer: {
    user: useSlice,
  },
};
