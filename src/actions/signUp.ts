import { createAction } from "@reduxjs/toolkit";
import { SignUpState } from "reducers/signUp";

export const changeEmail = createAction<SignUpState["email"]>("SIGN_UP/CHANGE_EMAIL");

export const changePassword = createAction<SignUpState["password"]>("SIGN_UP/CHANGE_PASSWORD");
