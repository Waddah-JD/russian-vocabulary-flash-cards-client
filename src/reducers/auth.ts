import { createReducer } from "@reduxjs/toolkit";
import { checkAuthState, signUserInSucceeded, signUserOutSucceeded } from "actions/auth";
import { AuthUser } from "types/auth";

export type AuthState = AuthUser & { isLoading: boolean };

const initialState: AuthState = {
  uid: "",
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  isLoading: false,
};

const reducer = createReducer<AuthState>(initialState, (builder) => {
  builder.addCase(checkAuthState, (state) => {
    state.isLoading = true;
  });
  builder.addCase(signUserInSucceeded, (state, action) => {
    const { uid, displayName, email, phoneNumber, photoURL } = action.payload;
    state.uid = uid;
    state.displayName = displayName;
    state.email = email;
    state.phoneNumber = phoneNumber;
    state.photoURL = photoURL;
    state.isLoading = true;
  });
  builder.addCase(signUserOutSucceeded, (state) => {
    state.uid = "";
    state.displayName = null;
    state.email = null;
    state.phoneNumber = null;
    state.photoURL = null;
    state.isLoading = false;
  });
});

export default reducer;
