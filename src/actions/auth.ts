import { createAction } from "@reduxjs/toolkit";
import { AuthUser, SignUserInActionPayload } from "types/auth";

export const signUserIn = createAction("AUTH/SIGN_USER_IN", (payload: SignUserInActionPayload) => {
  const { email, password } = payload;
  return { payload: { email, password } };
});

export const signUserInSucceeded = createAction("AUTH/SIGN_USER_IN_SUCCEEDED", (user: AuthUser) => {
  return { payload: user };
});

export const signUserInFailed = createAction("AUTH/SIGN_USER_IN_FAILED");

export const signUserOut = createAction("AUTH/SIGN_USER_OUT");

export const signUserOutSucceeded = createAction("AUTH/SIGN_USER_OUT_SUCCEEDED");

export const signUserOutFailed = createAction("AUTH/SIGN_USER_OUT_FAILED");
