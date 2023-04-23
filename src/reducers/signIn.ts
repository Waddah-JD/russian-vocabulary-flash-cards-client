import { createReducer } from "@reduxjs/toolkit";
import { changePassword, changeUsername, signUserIn, signUserInFailed, signUserInSucceeded } from "actions/signIn";

type SignInState = {
  username: string;
  password: string;
  isLoading: boolean;
};

export const initialState: SignInState = {
  username: "",
  password: "",
  isLoading: false,
};

const reducer = createReducer<SignInState>(initialState, (builder) => {
  builder.addCase(changeUsername, (state, action) => {
    state.username = action.payload;
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
