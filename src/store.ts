import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import signInSlice from "slices/signIn";

const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
