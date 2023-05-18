import { createReducer } from "@reduxjs/toolkit";
import { signUserIn, signUserInFailed, signUserInSucceeded } from "actions/auth";
import { signInFormChangeEmail, signInFormChangePassword } from "actions/signIn";

export type SignInState = {
  email: string;
  password: string;
  isLoading: boolean;
};

export const initialState: SignInState = {
  email: "",
  password: "",
  isLoading: false,
};

const reducer = createReducer<SignInState>(initialState, (builder) => {
  builder.addCase(signInFormChangeEmail, (state, action) => {
    state.email = action.payload;
  });
  builder.addCase(signInFormChangePassword, (state, action) => {
    state.password = action.payload;
  });
  builder.addCase(signUserIn, (state) => {
    state.isLoading = true;
  });
  builder.addCase(signUserInSucceeded, (state) => {
    state.isLoading = false;
  });
  builder.addCase(signUserInFailed, (state) => {
    state.isLoading = false;
  });
});

export default reducer;
