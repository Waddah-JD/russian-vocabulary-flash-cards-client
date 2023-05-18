import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import signInReducer from "./signIn";
import signUpReducer from "./signUp";

const reducers = combineReducers({ signIn: signInReducer, signUp: signUpReducer, auth: authReducer });

export default reducers;
