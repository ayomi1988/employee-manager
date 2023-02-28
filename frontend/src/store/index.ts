import { configureStore } from "@reduxjs/toolkit";
import EmpSlice from "./EmpSlice";

export const store = configureStore({
  reducer: {
    employee: EmpSlice,
  },
});

export type AppDisptach = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
