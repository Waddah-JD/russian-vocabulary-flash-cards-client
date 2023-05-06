import { RootState } from "src/store";

export const selectSignInEmail = (state: RootState) => state.signIn.email;

export const selectSignInPassword = (state: RootState) => state.signIn.password;

export const selectSignInIsLoading = (state: RootState) => state.signIn.isLoading;
