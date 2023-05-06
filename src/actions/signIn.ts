import { createAction } from "@reduxjs/toolkit";

export const changeEmail = createAction<string>("SIGN_IN/CHANGE_EMAIL");

export const changePassword = createAction<string>("SIGN_IN/CHANGE_PASSWORD");
