import { createReducer } from "@reduxjs/toolkit";
import { signUserUp, signUserUpFailed, signUserUpSucceeded } from "actions/auth";
import { signUpFormChangeEmail, signUpFormChangePassword } from "actions/signUp";

export type SignUpState = {
  email: string;
  password: string;
  isLoading: boolean;
};

export const initialState: SignUpState = {
  email: "",
  password: "",
  isLoading: false,
};

const reducer = createReducer<SignUpState>(initialState, (builder) => {
  builder.addCase(signUpFormChangeEmail, (state, action) => {
    state.email = action.payload;
  });
  builder.addCase(signUpFormChangePassword, (state, action) => {
    state.password = action.payload;
  });
  builder.addCase(signUserUp, (state) => {
    state.isLoading = true;
  });
  builder.addCase(signUserUpSucceeded, (state) => {
    state.isLoading = false;
  });
  builder.addCase(signUserUpFailed, (state) => {
    state.isLoading = false;
  });
});

export default reducer;
