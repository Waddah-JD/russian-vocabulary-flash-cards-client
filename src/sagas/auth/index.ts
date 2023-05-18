import { all } from "redux-saga/effects";

import observerSaga from "./observer";
import signInSaga from "./signIn";
import signOutSaga from "./signOut";
import signUpSaga from "./signUp";

function* authSaga(): Generator {
  yield all([observerSaga(), signInSaga(), signUpSaga(), signOutSaga()]);
}

export default authSaga;
