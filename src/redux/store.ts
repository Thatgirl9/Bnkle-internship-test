import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
// This Creates a Redux Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
