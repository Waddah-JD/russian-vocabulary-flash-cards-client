import { RootState } from "src/store";

export function selectSignUpEmail(state: RootState): RootState["signUp"]["email"] {
  return state.signUp.email;
}

export function selectSignUpPassword(state: RootState): RootState["signUp"]["password"] {
  return state.signUp.password;
}

export function selectSignUpIsLoading(state: RootState): RootState["signUp"]["isLoading"] {
  return state.signUp.isLoading;
}
