import { SignUpState } from "reducers/signUp";
import { RootState } from "src/store";

export function selectSignUpEmail(state: RootState): SignUpState["email"] {
  return state.signUp.email;
}

export function selectSignUpPassword(state: RootState): SignUpState["password"] {
  return state.signUp.password;
}

export function selectSignUpIsLoading(state: RootState): SignUpState["isLoading"] {
  return state.signUp.isLoading;
}
