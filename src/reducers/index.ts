import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import signInReducer from "./signIn";

const reducers = combineReducers({ signIn: signInReducer, auth: authReducer });

export default reducers;
