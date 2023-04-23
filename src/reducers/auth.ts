import { createReducer } from "@reduxjs/toolkit";
import { signUserInSucceeded } from "actions/signIn";

type AuthState = {
  id: string;
  username: string;
};

const initialState: AuthState = {
  id: "",
  username: "",
};

const reducer = createReducer<AuthState>(initialState, (builder) => {
  builder.addCase(signUserInSucceeded, (state, action) => {
    const { id, username } = action.payload;
    state.id = id;
    state.username = username;
  });
});

export default reducer;
