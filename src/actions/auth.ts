import { createAction } from "@reduxjs/toolkit";
import { AuthenticateUserActionPayload, AuthUser } from "types/auth";

export const signUserIn = createAction("AUTH/SIGN_USER_IN", (payload: AuthenticateUserActionPayload) => {
  const { email, password } = payload;
  return { payload: { email, password } };
});

export const signUserInSucceeded = createAction("AUTH/SIGN_USER_IN_SUCCEEDED", (user: AuthUser) => {
  return { payload: user };
});

export const signUserInFailed = createAction("AUTH/SIGN_USER_IN_FAILED");

export const signUserUp = createAction("AUTH/SIGN_USER_UP", (payload: AuthenticateUserActionPayload) => {
  const { email, password } = payload;
  return { payload: { email, password } };
});

export const signUserUpSucceeded = createAction("AUTH/SIGN_USER_UP_SUCCEEDED", (user: AuthUser) => {
  return { payload: user };
});

export const signUserUpFailed = createAction("AUTH/SIGN_USER_UO_FAILED");

export const signUserOut = createAction("AUTH/SIGN_USER_OUT");

export const signUserOutSucceeded = createAction("AUTH/SIGN_USER_OUT_SUCCEEDED");

export const signUserOutFailed = createAction("AUTH/SIGN_USER_OUT_FAILED");

export const checkAuthState = createAction("AUTH/CHECK_AUTH_STATE");

export const checkAuthStateFailed = createAction("AUTH/CHECK_AUTH_STATE_FAILED");
