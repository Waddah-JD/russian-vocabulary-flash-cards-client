import { all } from "redux-saga/effects";

import signInSaga from "./signIn";

function* rootSaga() {
  yield all([signInSaga()]);
}

export default rootSaga;
