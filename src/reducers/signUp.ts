import { createReducer } from "@reduxjs/toolkit";
import { signUserIn, signUserInFailed, signUserInSucceeded } from "actions/auth";
import { changeEmail, changePassword } from "actions/signUp";

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
  builder.addCase(changeEmail, (state, action) => {
    state.email = action.payload;
  });
  builder.addCase(changePassword, (state, action) => {
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
