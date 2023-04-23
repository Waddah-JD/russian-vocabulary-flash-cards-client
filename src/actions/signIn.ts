import { createAction } from "@reduxjs/toolkit";
import { SignInResult } from "types/auth";

export const changeUsername = createAction<string>("SIGN_IN/CHANGE_USERNAME");

export const changePassword = createAction<string>("SIGN_IN/CHANGE_PASSWORD");

export const signUserIn = createAction("SIGN_IN/SIGN_USER_IN", (username: string, password: string) => {
  return { payload: { username, password } };
});

export const signUserInSucceeded = createAction("SIGN_IN/SIGN_USER_IN_SUCCEEDED", (user: SignInResult) => {
  const { id, username } = user;
  return { payload: { id, username } };
});

export const signUserInFailed = createAction("SIGN_IN/SIGN_USER_IN_FAILED");
