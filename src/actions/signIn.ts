import { createAction } from "@reduxjs/toolkit";
import { SignInState } from "reducers/signIn";

export const changeEmail = createAction<SignInState["email"]>("SIGN_IN/CHANGE_EMAIL");

export const changePassword = createAction<SignInState["password"]>("SIGN_IN/CHANGE_PASSWORD");
