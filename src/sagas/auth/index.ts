import { all } from "redux-saga/effects";

import observerSaga from "./observer";
import signInSaga from "./signIn";
import signOutSaga from "./signOut";

function* authSaga() {
  yield all([observerSaga(), signInSaga(), signOutSaga()]);
}

export default authSaga;
