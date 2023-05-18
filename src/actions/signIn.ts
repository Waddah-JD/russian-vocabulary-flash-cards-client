import { createAction } from "@reduxjs/toolkit";
import { SignInState } from "reducers/signIn";

export const signInFormChangeEmail = createAction<SignInState["email"]>("SIGN_IN_FORM/CHANGE_EMAIL");

export const signInFormChangePassword = createAction<SignInState["password"]>("SIGN_IN_FORM/CHANGE_PASSWORD");
