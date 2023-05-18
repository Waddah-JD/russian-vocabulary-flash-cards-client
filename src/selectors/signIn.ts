import { RootState } from "src/store";

export function selectSignInEmail(state: RootState): RootState["signIn"]["email"] {
  return state.signIn.email;
}

export function selectSignInPassword(state: RootState): RootState["signIn"]["password"] {
  return state.signIn.password;
}

export function selectSignInIsLoading(state: RootState): RootState["signIn"]["isLoading"] {
  return state.signIn.isLoading;
}
