import { RootState } from "src/store";

export const selectSignInUsername = (state: RootState) => state.signIn.username;

export const selectSignInPassword = (state: RootState) => state.signIn.password;

export const selectSignInIsLoading = (state: RootState) =>
  state.signIn.isLoading;
