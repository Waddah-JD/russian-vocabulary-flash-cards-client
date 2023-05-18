import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import learnReducer from "./learn";
import signInReducer from "./signIn";
import signUpReducer from "./signUp";

const reducers = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  auth: authReducer,
  learn: learnReducer,
});

export default reducers;
