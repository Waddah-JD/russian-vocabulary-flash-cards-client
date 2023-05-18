import { SignInState } from "reducers/signIn";
import { RootState } from "src/store";

export function selectSignInEmail(state: RootState): SignInState["email"] {
  return state.signIn.email;
}

export function selectSignInPassword(state: RootState): SignInState["password"] {
  return state.signIn.password;
}

export function selectSignInIsLoading(state: RootState): SignInState["isLoading"] {
  return state.signIn.isLoading;
}
