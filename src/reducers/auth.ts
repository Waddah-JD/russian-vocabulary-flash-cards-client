import { createReducer } from "@reduxjs/toolkit";
import { signUserInSucceeded, signUserOutSucceeded } from "actions/auth";
import { AuthUser } from "types/auth";

type AuthState = AuthUser;

const initialState: AuthState = {
  uid: "",
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
};

const reducer = createReducer<AuthState>(initialState, (builder) => {
  builder.addCase(signUserInSucceeded, (state, action) => {
    const { uid, displayName, email, phoneNumber, photoURL } = action.payload;
    state.uid = uid;
    state.displayName = displayName;
    state.email = email;
    state.phoneNumber = phoneNumber;
    state.photoURL = photoURL;
  });
  builder.addCase(signUserOutSucceeded, (state) => {
    state.uid = "";
    state.displayName = null;
    state.email = null;
    state.phoneNumber = null;
    state.photoURL = null;
  });
});

export default reducer;
