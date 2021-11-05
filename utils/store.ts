import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@/data/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
