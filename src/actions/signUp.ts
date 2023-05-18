import { createAction } from "@reduxjs/toolkit";
import { SignUpState } from "reducers/signUp";

export const signUpFormChangeEmail = createAction<SignUpState["email"]>("SIGN_UP_FORM/CHANGE_EMAIL");

export const signUpFormChangePassword = createAction<SignUpState["password"]>("SIGN_UP_FORM/CHANGE_PASSWORD");
