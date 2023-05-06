import { RootState } from "src/store";

export function selectSignInEmail(state: RootState) {
  return state.signIn.email;
}

export function selectSignInPassword(state: RootState) {
  return state.signIn.password;
}

export function selectSignInIsLoading(state: RootState) {
  return state.signIn.isLoading;
}
